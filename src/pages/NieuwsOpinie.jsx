import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import PageTransition from "../components/animation/PageTransition";
import StaggerChildren from "../components/animation/StaggerChildren";
import AnimatedSection from "../components/animation/AnimatedSection";
import SectionWrapper from "../components/layout/SectionWrapper";
import ArticleCard, { categoryColors } from "../components/ui/ArticleCard";
import CTASection from "../components/sections/CTASection";
import { fetchPublishedPosts, extractCategories } from "../lib/blog";
import { useLanguage } from "../context/LanguageContext";

function SkeletonFeatured() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-lg shadow-card overflow-hidden animate-pulse">
      <div className="aspect-16/10 lg:aspect-auto lg:min-h-100 bg-warm-gray-200" />
      <div className="p-8 lg:p-12 flex flex-col justify-center">
        <div className="h-5 w-20 bg-warm-gray-200 rounded-full mb-4" />
        <div className="h-3 w-32 bg-warm-gray-200 rounded mb-6" />
        <div className="h-8 w-3/4 bg-warm-gray-200 rounded mb-2" />
        <div className="h-8 w-1/2 bg-warm-gray-200 rounded mb-6" />
        <div className="space-y-2 mb-6">
          <div className="h-4 w-full bg-warm-gray-100 rounded" />
          <div className="h-4 w-full bg-warm-gray-100 rounded" />
          <div className="h-4 w-2/3 bg-warm-gray-100 rounded" />
        </div>
        <div className="h-4 w-24 bg-warm-gray-200 rounded" />
      </div>
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="bg-white rounded-lg shadow-card overflow-hidden flex flex-col animate-pulse">
      <div className="aspect-16/10 bg-warm-gray-200" />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-3 w-24 bg-warm-gray-200 rounded" />
          <div className="h-5 w-16 bg-warm-gray-200 rounded-full" />
        </div>
        <div className="h-5 w-3/4 bg-warm-gray-200 rounded mb-2" />
        <div className="h-5 w-1/2 bg-warm-gray-200 rounded mb-3" />
        <div className="space-y-2 mb-4 flex-1">
          <div className="h-3 w-full bg-warm-gray-100 rounded" />
          <div className="h-3 w-full bg-warm-gray-100 rounded" />
          <div className="h-3 w-2/3 bg-warm-gray-100 rounded" />
        </div>
        <div className="h-3 w-20 bg-warm-gray-200 rounded mt-auto" />
      </div>
    </div>
  );
}

export default function NieuwsOpinie() {
  const { language, t } = useLanguage();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    fetchPublishedPosts().then((data) => {
      setArticles(data);
      setLoading(false);
    });
  }, []);

  const dateLocale = language === "en" ? "en-GB" : "nl-NL";

  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString(dateLocale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  const featuredArticle = articles[0] || null;
  const remainingArticles = articles.slice(1);
  const categories = extractCategories(articles);
  const filteredArticles =
    activeCategory === "all"
      ? remainingArticles
      : remainingArticles.filter((a) => a.category === activeCategory);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full border border-white/20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block text-xs font-body font-semibold tracking-[0.25em] uppercase text-gold-400 mb-4"
          >
            {t("news", "heroEyebrow")}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading text-white leading-[1.1] mb-4"
          >
            {t("news", "heroTitle")}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="h-0.75 w-10 bg-gold-700 origin-left"
          />
        </div>
      </section>

      {/* Featured Article */}
      <SectionWrapper bg="cream" size="md">
        {loading ? (
          <SkeletonFeatured />
        ) : featuredArticle ? (
          <AnimatedSection>
            <Link
              to={`/nieuws-opinie/${featuredArticle.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-lg shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden"
            >
              {featuredArticle.featured_image ? (
                <div className="aspect-16/10 lg:aspect-auto lg:min-h-100 overflow-hidden">
                  <img
                    src={featuredArticle.featured_image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="hidden lg:block bg-linear-to-br from-navy-900 to-navy-800" />
              )}

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="inline-block self-start text-[10px] font-body font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-gold-100 text-gold-800 mb-4">
                  {t("news", "featured")}
                </span>

                <div className="flex items-center gap-3 mb-4">
                  <time className="text-xs font-body text-warm-gray-400 tracking-wide">
                    {formatDate(featuredArticle.published_at)}
                  </time>
                  <span
                    className={`text-[10px] font-body font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full ${
                      categoryColors[featuredArticle.category] ||
                      "bg-warm-gray-200 text-warm-gray-700"
                    }`}
                  >
                    {featuredArticle.category}
                  </span>
                </div>

                <h2 className="text-2xl lg:text-3xl font-heading text-navy-900 leading-snug mb-4 group-hover:text-gold-700 transition-colors duration-200">
                  {featuredArticle.title}
                </h2>

                <p className="text-sm text-warm-gray-500 leading-relaxed mb-6 line-clamp-3">
                  {featuredArticle.excerpt}
                </p>

                <span className="inline-flex items-center gap-2 text-xs font-body font-semibold tracking-wider uppercase text-gold-700 group-hover:text-gold-600 transition-colors">
                  {t("news", "readMore")}
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          </AnimatedSection>
        ) : null}

        {/* Category Filter Pills */}
        {!loading && categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-12">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-xs font-body font-semibold tracking-wider uppercase transition-colors duration-200 ${
                activeCategory === "all"
                  ? "bg-navy-900 text-white"
                  : "bg-white text-warm-gray-500 border border-warm-gray-200 hover:border-navy-300 hover:text-navy-700"
              }`}
            >
              {t("news", "allCategories")}
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-body font-semibold tracking-wider uppercase transition-colors duration-200 ${
                  activeCategory === cat
                    ? "bg-navy-900 text-white"
                    : "bg-white text-warm-gray-500 border border-warm-gray-200 hover:border-navy-300 hover:text-navy-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </SectionWrapper>

      {/* Articles Grid */}
      <SectionWrapper bg="cream" size="md" className="pt-0!">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-warm-gray-400 text-lg">
              {t("news", "noArticles")}
            </p>
          </div>
        ) : filteredArticles.length === 0 && activeCategory !== "all" ? (
          <div className="text-center py-16">
            <p className="text-warm-gray-400 text-lg">
              {t("news", "noCategory")}
            </p>
          </div>
        ) : filteredArticles.length > 0 ? (
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                formatDate={formatDate}
              />
            ))}
          </StaggerChildren>
        ) : null}
      </SectionWrapper>

      <CTASection />
    </PageTransition>
  );
}
