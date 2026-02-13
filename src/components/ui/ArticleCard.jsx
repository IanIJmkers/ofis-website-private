import { Link } from "react-router";
import { motion } from "motion/react";
import { staggerItem } from "../animation/StaggerChildren";

export const categoryColors = {
  Regelgeving: "bg-navy-100 text-navy-800",
  Vermogensbeheer: "bg-gold-100 text-gold-800",
  Governance: "bg-navy-100 text-navy-700",
  Sector: "bg-warm-gray-200 text-warm-gray-700",
  Opinie: "bg-gold-100 text-gold-800",
};

export default function ArticleCard({ article, formatDate }) {
  return (
    <motion.article
      variants={staggerItem}
      className="group bg-white rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col"
    >
      {article.featured_image ? (
        <Link to={`/nieuws-opinie/${article.slug}`} className="block">
          <div className="aspect-16/10 overflow-hidden">
            <img
              src={article.featured_image}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </Link>
      ) : (
        <div className="h-1 bg-linear-to-r from-navy-900 to-gold-700" />
      )}

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <time className="text-xs font-body text-warm-gray-400 tracking-wide">
            {formatDate(article.published_at)}
          </time>
          <span
            className={`text-[10px] font-body font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full ${
              categoryColors[article.category] ||
              "bg-warm-gray-200 text-warm-gray-700"
            }`}
          >
            {article.category}
          </span>
        </div>

        <h3 className="text-lg lg:text-xl font-heading text-navy-900 leading-snug mb-3 group-hover:text-gold-700 transition-colors duration-200">
          <Link to={`/nieuws-opinie/${article.slug}`}>{article.title}</Link>
        </h3>

        <p className="text-sm text-warm-gray-500 leading-relaxed mb-4 flex-1 line-clamp-3">
          {article.excerpt}
        </p>

        <Link
          to={`/nieuws-opinie/${article.slug}`}
          className="inline-flex items-center gap-2 text-xs font-body font-semibold tracking-wider uppercase text-gold-700 hover:text-gold-600 transition-colors mt-auto"
        >
          Lees meer
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
        </Link>
      </div>
    </motion.article>
  );
}
