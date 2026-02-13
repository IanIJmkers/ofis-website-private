import { supabase } from "./supabase";
import { marked } from "marked";

marked.setOptions({
  gfm: true,
  breaks: true,
});

/**
 * Detects if content is Markdown (vs already-HTML) and converts accordingly.
 * Handles: # headings, [interne link: X] placeholders, H3: prefix syntax.
 */
export function processContent(content) {
  if (!content) return "";

  // If it already contains HTML block elements, assume it's HTML
  if (/<(?:p|h[1-6]|div|ul|ol|table|blockquote)\b/i.test(content)) {
    return content;
  }

  let processed = content;

  // Convert "H3: Title" to "### Title"
  processed = processed.replace(/^H3:\s*(.+)$/gm, "### $1");

  // Convert [interne link: X] to a styled placeholder link
  processed = processed.replace(
    /\[interne link:\s*(.+?)\]/gi,
    (_, label) => {
      const slug = label
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");
      return `[${label} →](/nieuws-opinie#${slug})`;
    }
  );

  // Remove the top-level # title (it's already shown as the page title)
  processed = processed.replace(/^#\s+.+\n*/m, "");

  return marked.parse(processed);
}

export async function fetchPublishedPosts() {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("blog_posts_private")
    .select("id, title, slug, excerpt, featured_image, category, published_at")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Error fetching blog posts:", error.message);
    return [];
  }

  return data;
}

export async function fetchPostBySlug(slug) {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("blog_posts_private")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (error) {
    console.error("Error fetching blog post:", error.message);
    return null;
  }

  return data;
}

export async function fetchRelatedPosts(category, excludeSlug, limit = 3) {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("blog_posts_private")
    .select("id, title, slug, excerpt, featured_image, category, published_at")
    .eq("status", "published")
    .eq("category", category)
    .neq("slug", excludeSlug)
    .order("published_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Error fetching related posts:", error.message);
    return [];
  }

  return data;
}

export async function fetchRecentPosts(excludeSlug, limit = 3) {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("blog_posts_private")
    .select("id, title, slug, excerpt, featured_image, category, published_at")
    .eq("status", "published")
    .neq("slug", excludeSlug)
    .order("published_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Error fetching recent posts:", error.message);
    return [];
  }

  return data;
}

export function extractCategories(posts) {
  return [...new Set(posts.map((p) => p.category).filter(Boolean))].sort();
}

export function estimateReadingTime(htmlContent) {
  if (!htmlContent) return 0;
  const text = htmlContent.replace(/<[^>]*>/g, "");
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}
