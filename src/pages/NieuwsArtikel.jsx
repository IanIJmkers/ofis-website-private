import { useState, useEffect, useRef, useMemo, Fragment } from "react";
import { useParams, Link } from "react-router";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import PageTransition from "../components/animation/PageTransition";
import AnimatedSection from "../components/animation/AnimatedSection";
import StaggerChildren from "../components/animation/StaggerChildren";
import SectionWrapper from "../components/layout/SectionWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import ArticleCard, { categoryColors } from "../components/ui/ArticleCard";
import CTASection from "../components/sections/CTASection";
import {
  fetchPostBySlug,
  fetchRelatedPosts,
  fetchRecentPosts,
  estimateReadingTime,
  processContent,
} from "../lib/blog";
import { useLanguage } from "../context/LanguageContext";

function extractHeadings(html) {
  if (!html) return [];
  const regex = /<h([23])[^>]*id="([^"]*)"[^>]*>(.*?)<\/h[23]>/gi;
  const headings = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    headings.push({
      level: parseInt(match[1]),
      id: match[2],
      text: match[3].replace(/<[^>]*>/g, ""),
    });
  }
  if (headings.length === 0) {
    const fallbackRegex = /<h([23])[^>]*>(.*?)<\/h[23]>/gi;
    let fallbackMatch;
    while ((fallbackMatch = fallbackRegex.exec(html)) !== null) {
      const text = fallbackMatch[2].replace(/<[^>]*>/g, "");
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .slice(0, 60);
      headings.push({
        level: parseInt(fallbackMatch[1]),
        id,
        text,
      });
    }
  }
  return headings;
}

function addIdsToHeadings(html) {
  if (!html) return html;
  return html.replace(/<h([23])([^>]*)>(.*?)<\/h([23])>/gi, (match, level, attrs, content, closeLevel) => {
    if (attrs.includes('id="')) return match;
    const text = content.replace(/<[^>]*>/g, "");
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .slice(0, 60);
    return `<h${level}${attrs} id="${id}">${content}</h${closeLevel}>`;
  });
}

function splitContentBySections(html) {
  if (!html) return { intro: "", sections: [] };

  const parts = html.split(/(?=<h2[\s>])/i);
  const intro = parts[0]?.trim() || "";

  const sections = parts.slice(1).map((sectionHtml, index) => {
    const headingMatch = sectionHtml.match(/<h2[^>]*id="([^"]*)"[^>]*>(.*?)<\/h2>/i);
    const id = headingMatch?.[1] || `section-${index + 1}`;
    const title = headingMatch?.[2]?.replace(/<[^>]*>/g, "") || "";

    return {
      number: String(index + 1).padStart(2, "0"),
      id,
      title,
      fullHtml: sectionHtml,
    };
  });

  return { intro, sections };
}

const proseClasses = `prose prose-lg max-w-none text-warm-gray-600 leading-relaxed
  prose-headings:font-heading prose-headings:text-navy-900 prose-headings:scroll-mt-24
  prose-h2:text-2xl prose-h2:mt-0 prose-h2:mb-5 prose-h2:pb-3 prose-h2:border-b prose-h2:border-warm-gray-100
  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
  prose-p:mb-6 prose-p:leading-[1.8]
  prose-a:text-gold-700 prose-a:no-underline hover:prose-a:text-gold-600
  prose-strong:text-navy-800 prose-strong:font-semibold
  prose-ul:my-6 prose-li:my-1.5
  prose-ol:my-6
  prose-blockquote:border-l-3 prose-blockquote:border-gold-400 prose-blockquote:bg-cream prose-blockquote:rounded-r-lg prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:text-navy-700 prose-blockquote:not-italic prose-blockquote:font-heading prose-blockquote:text-lg
  prose-img:rounded-xl prose-img:shadow-card prose-img:my-8
  prose-hr:border-warm-gray-200 prose-hr:my-10`;

function ArticleSkeleton() {
  return (
    <div className="animate-pulse max-w-4xl mx-auto">
      <div className="flex items-center gap-2 mb-8">
        <div className="h-3 w-12 bg-warm-gray-200 rounded" />
        <div className="h-3 w-3 bg-warm-gray-200 rounded" />
        <div className="h-3 w-16 bg-warm-gray-200 rounded" />
      </div>
      <div className="flex items-center gap-3 mb-6">
        <div className="h-5 w-20 bg-warm-gray-200 rounded-full" />
        <div className="h-3 w-28 bg-warm-gray-200 rounded" />
        <div className="h-3 w-20 bg-warm-gray-200 rounded" />
      </div>
      <div className="h-12 w-3/4 bg-warm-gray-300 rounded mb-3" />
      <div className="h-12 w-1/2 bg-warm-gray-300 rounded mb-6" />
      <div className="h-0.75 w-10 bg-warm-gray-200 mb-8" />
      <div className="h-5 w-full bg-warm-gray-100 rounded mb-2" />
      <div className="h-5 w-5/6 bg-warm-gray-100 rounded mb-8" />
      <div className="aspect-video bg-warm-gray-200 rounded-lg" />
    </div>
  );
}

export default function NieuwsArtikel() {
  const { language, t } = useLanguage();
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [recentArticles, setRecentArticles] = useState([]);
  const [copied, setCopied] = useState(false);
  const [activeHeading, setActiveHeading] = useState("");
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const articleRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: articleRef,
    offset: ["start start", "end end"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const dateLocale = language === "en" ? "en-GB" : "nl-NL";

  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString(dateLocale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  useEffect(() => {
    setLoading(true);
    setRelatedArticles([]);
    setRecentArticles([]);
    fetchPostBySlug(slug).then((data) => {
      setPost(data);
      setLoading(false);

      if (data) {
        Promise.all([
          fetchRelatedPosts(data.category, slug, 3),
          fetchRecentPosts(slug, 3),
        ]).then(([related, recent]) => {
          setRelatedArticles(related);
          const relatedSlugs = new Set(related.map((r) => r.slug));
          setRecentArticles(recent.filter((r) => !relatedSlugs.has(r.slug)));
        });
      }
    });
  }, [slug]);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Orchestra Private`;
    }
  }, [post]);

  // Intersection observer for active heading in TOC
  useEffect(() => {
    if (!post) return;
    const headingElements = articleRef.current?.querySelectorAll("h2[id], h3[id]");
    if (!headingElements?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    headingElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [post]);

  // Back to top visibility
  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const readingTime = post ? estimateReadingTime(post.content) : 0;
  const processedContent = useMemo(() => (post ? addIdsToHeadings(processContent(post.content)) : ""), [post]);
  const headings = useMemo(() => extractHeadings(processedContent), [processedContent]);
  const { intro, sections } = useMemo(() => splitContentBySections(processedContent), [processedContent]);

  function handleCopyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  // Not found state
  if (!loading && !post) {
    return (
      <PageTransition>
        <section className="relative bg-navy-900 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-navy-950 via-navy-900 to-navy-800" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-20 text-center">
            <h1 className="text-3xl sm:text-4xl font-heading text-white mb-4">
              {t("news", "articleNotFound")}
            </h1>
            <p className="text-navy-200 mb-8">
              {t("news", "articleNotFoundDesc")}
            </p>
            <Link
              to="/nieuws-opinie"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
              {t("news", "backToNews")}
            </Link>
          </div>
        </section>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      {/* Reading Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gold-700 origin-left z-50"
      />

      {/* Article Header */}
      <section className="bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-32 pb-8">
          {loading ? (
            <ArticleSkeleton />
          ) : (
            <>
              {/* Breadcrumbs */}
              <motion.nav
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-2 text-xs font-body text-warm-gray-400 mb-8"
              >
                <Link to="/" className="hover:text-navy-700 transition-colors">
                  Home
                </Link>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link to="/nieuws-opinie" className="hover:text-navy-700 transition-colors">
                  {t("news", "heroTitle")}
                </Link>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-warm-gray-600 truncate max-w-50">
                  {post.title}
                </span>
              </motion.nav>

              {/* Meta row */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap items-center gap-3 mb-5"
              >
                <span
                  className={`text-[10px] font-body font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full ${
                    categoryColors[post.category] || "bg-warm-gray-200 text-warm-gray-700"
                  }`}
                >
                  {post.category}
                </span>
                <span className="text-warm-gray-300">|</span>
                <time className="text-sm font-body text-warm-gray-500">
                  {formatDate(post.published_at)}
                </time>
                <span className="text-warm-gray-300">|</span>
                <span className="text-sm font-body text-warm-gray-500">
                  {readingTime} {t("news", "readingTime")}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-3xl sm:text-4xl lg:text-5xl font-heading text-navy-900 leading-[1.15] mb-5"
              >
                {post.title}
              </motion.h1>

              {/* Gold divider */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="h-0.75 w-10 bg-gold-700 origin-left mb-6"
              />

              {/* Excerpt as intro highlight */}
              {post.excerpt && (
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-lg text-warm-gray-500 leading-relaxed font-body"
                >
                  {post.excerpt}
                </motion.p>
              )}
            </>
          )}
        </div>
      </section>

      {/* Article Content Area */}
      {!loading && post && (
        <>
          {/* Featured Image */}
          {post.featured_image && (
            <section className="bg-white">
              <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-12">
                <motion.img
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  src={post.featured_image}
                  alt={post.title}
                  className="w-full rounded-xl shadow-card object-cover max-h-130"
                />
              </div>
            </section>
          )}

          {/* Key Takeaway Box */}
          {post.excerpt && (
            <section className="bg-white">
              <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-10">
                <AnimatedSection>
                  <div className="border-l-4 border-gold-700 bg-cream rounded-r-lg p-6 lg:p-8">
                    <div className="flex items-start gap-4">
                      <svg className="w-6 h-6 text-gold-700 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                      </svg>
                      <div>
                        <p className="text-xs font-body font-semibold tracking-wider uppercase text-gold-700 mb-2">
                          {t("news", "keyTakeaway")}
                        </p>
                        <p className="text-base lg:text-lg text-navy-800 leading-relaxed font-body">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </section>
          )}

          {/* Mobile/Tablet TOC */}
          {headings.length >= 3 && (
            <div className="xl:hidden sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-warm-gray-100">
              <div className="max-w-4xl mx-auto px-6">
                <button
                  onClick={() => setMobileTocOpen(!mobileTocOpen)}
                  className="flex items-center justify-between w-full py-3.5"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <svg className="w-4 h-4 text-gold-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <span className="text-sm font-body font-semibold text-navy-900">
                      {t("news", "tableOfContents")}
                    </span>
                    {activeHeading && (
                      <span className="text-sm text-warm-gray-400 truncate max-w-40">
                        — {headings.find((h) => h.id === activeHeading)?.text}
                      </span>
                    )}
                  </div>
                  <motion.svg
                    animate={{ rotate: mobileTocOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-4 h-4 text-warm-gray-400 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {mobileTocOpen && (
                    <motion.nav
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <ul className="pb-4 space-y-1.5 border-l border-warm-gray-200 ml-2">
                        {headings.map((h) => (
                          <li key={h.id}>
                            <a
                              href={`#${h.id}`}
                              onClick={() => setMobileTocOpen(false)}
                              className={`block text-sm leading-snug py-1 transition-colors duration-200 ${
                                h.level === 3 ? "pl-6" : "pl-4"
                              } ${
                                activeHeading === h.id
                                  ? "text-gold-700 font-semibold border-l-2 border-gold-700 -ml-px"
                                  : "text-warm-gray-400 hover:text-navy-700"
                              }`}
                            >
                              {h.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </motion.nav>
                  )}
                </AnimatePresence>
              </div>
            </div>
          )}

          {/* Article Body with optional TOC sidebar */}
          <section ref={articleRef} className="bg-white py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="flex gap-16">
                {/* Sticky TOC Sidebar — desktop only */}
                {headings.length >= 3 && (
                  <aside className="hidden xl:block w-56 shrink-0">
                    <nav className="sticky top-24">
                      <p className="text-[10px] font-body font-semibold tracking-wider uppercase text-warm-gray-400 mb-4">
                        {t("news", "tableOfContents")}
                      </p>
                      <ul className="space-y-2 border-l border-warm-gray-200">
                        {headings.map((h) => (
                          <li key={h.id}>
                            <a
                              href={`#${h.id}`}
                              className={`block text-sm leading-snug transition-colors duration-200 ${
                                h.level === 3 ? "pl-6" : "pl-4"
                              } ${
                                activeHeading === h.id
                                  ? "text-gold-700 font-semibold border-l-2 border-gold-700 -ml-px"
                                  : "text-warm-gray-400 hover:text-navy-700"
                              }`}
                            >
                              {h.text}
                            </a>
                          </li>
                        ))}
                      </ul>

                      {/* Share buttons in sidebar */}
                      <div className="mt-8 pt-6 border-t border-warm-gray-200">
                        <p className="text-[10px] font-body font-semibold tracking-wider uppercase text-warm-gray-400 mb-3">
                          {t("news", "shareArticle")}
                        </p>
                        <div className="flex items-center gap-2">
                          <a
                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full bg-navy-50 flex items-center justify-center text-navy-600 hover:bg-navy-900 hover:text-white transition-colors"
                            aria-label={t("news", "shareLinkedIn")}
                          >
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          </a>
                          <a
                            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full bg-navy-50 flex items-center justify-center text-navy-600 hover:bg-navy-900 hover:text-white transition-colors"
                            aria-label={t("news", "shareX")}
                          >
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                          </a>
                          <button
                            onClick={handleCopyLink}
                            className="relative w-8 h-8 rounded-full bg-navy-50 flex items-center justify-center text-navy-600 hover:bg-navy-900 hover:text-white transition-colors"
                            aria-label={t("news", "copyLink")}
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                            {copied && (
                              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-navy-900 text-white px-2 py-1 rounded whitespace-nowrap">
                                {t("news", "copied")}
                              </span>
                            )}
                          </button>
                        </div>
                      </div>
                    </nav>
                  </aside>
                )}

                {/* Article Content — Section Cards */}
                <div className="min-w-0 grow max-w-3xl mx-auto">
                  {/* Intro (content before first h2) */}
                  {intro && sections.length > 0 && (
                    <AnimatedSection>
                      <div
                        className={proseClasses}
                        dangerouslySetInnerHTML={{ __html: intro }}
                      />
                    </AnimatedSection>
                  )}

                  {/* Section Cards */}
                  {sections.length > 0 ? (
                    <div className={`space-y-6 ${intro ? "mt-10" : ""}`}>
                      {sections.map((section, i) => (
                        <Fragment key={section.id}>
                          {/* Gold dot separator */}
                          {i > 0 && (
                            <div className="flex justify-center py-2">
                              <div className="flex items-center gap-1.5">
                                <div className="w-1 h-1 rounded-full bg-gold-700/30" />
                                <div className="w-1.5 h-1.5 rounded-full bg-gold-700/50" />
                                <div className="w-1 h-1 rounded-full bg-gold-700/30" />
                              </div>
                            </div>
                          )}

                          <AnimatedSection delay={i * 0.05}>
                            <div
                              className={`relative rounded-xl p-6 sm:p-8 lg:p-10 border-l-4 border-gold-700/20 hover:border-gold-700 transition-colors duration-300 ${
                                i % 2 === 0 ? "bg-white shadow-card" : "bg-warm-gray-50"
                              }`}
                            >
                              {/* Watermark section number */}
                              <span className="absolute top-4 right-6 text-7xl font-heading text-navy-900/4 select-none pointer-events-none leading-none">
                                {section.number}
                              </span>

                              {/* Section content */}
                              <div
                                className={proseClasses}
                                dangerouslySetInnerHTML={{ __html: section.fullHtml }}
                              />
                            </div>
                          </AnimatedSection>
                        </Fragment>
                      ))}
                    </div>
                  ) : (
                    <AnimatedSection>
                      <div
                        className={proseClasses}
                        dangerouslySetInnerHTML={{ __html: processedContent }}
                      />
                    </AnimatedSection>
                  )}

                  {/* Share & Back — below article */}
                  <div className="border-t border-warm-gray-200 mt-12 pt-8 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-body font-semibold tracking-wider uppercase text-warm-gray-400">
                        {t("news", "shareArticle")}
                      </span>
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-navy-50 flex items-center justify-center text-navy-600 hover:bg-navy-900 hover:text-white transition-colors"
                        aria-label={t("news", "shareLinkedIn")}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                      <a
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-navy-50 flex items-center justify-center text-navy-600 hover:bg-navy-900 hover:text-white transition-colors"
                        aria-label={t("news", "shareX")}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                      <button
                        onClick={handleCopyLink}
                        className="relative w-9 h-9 rounded-full bg-navy-50 flex items-center justify-center text-navy-600 hover:bg-navy-900 hover:text-white transition-colors"
                        aria-label={t("news", "copyLink")}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                        {copied && (
                          <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-navy-900 text-white px-2 py-1 rounded whitespace-nowrap">
                            {t("news", "copied")}
                          </span>
                        )}
                      </button>
                    </div>

                    <Link
                      to="/nieuws-opinie"
                      className="inline-flex items-center gap-2 text-sm font-body font-semibold text-gold-700 hover:text-gold-600 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                      </svg>
                      {t("news", "backToNews")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <SectionWrapper bg="cream" size="lg">
              <SectionHeading
                eyebrow={t("news", "relatedEyebrow")}
                title={t("news", "relatedTitle")}
                subtitle={t("news", "relatedSubtitle")}
                align="center"
              />
              <StaggerChildren className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedArticles.map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    formatDate={formatDate}
                  />
                ))}
              </StaggerChildren>
            </SectionWrapper>
          )}

          {/* Recent Articles */}
          {recentArticles.length > 0 && (
            <SectionWrapper bg="white" size="lg">
              <SectionHeading
                eyebrow={t("news", "recentEyebrow")}
                title={t("news", "recentTitle")}
                subtitle={t("news", "recentSubtitle")}
                align="center"
              />
              <StaggerChildren className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recentArticles.map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    formatDate={formatDate}
                  />
                ))}
              </StaggerChildren>
            </SectionWrapper>
          )}
        </>
      )}

      <CTASection />

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gold-700 text-white shadow-card-hover flex items-center justify-center hover:bg-gold-600 transition-colors z-40"
            aria-label={t("news", "backToTop")}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
