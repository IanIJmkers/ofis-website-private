import { Link } from "react-router";

export default function Card({
  icon,
  title,
  description,
  href,
  ctaText = "Meer informatie",
  accentTop = false,
  className = "",
  children,
}) {
  const content = (
    <div
      className={`bg-white border border-warm-gray-100 rounded-lg p-8 lg:p-10 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full flex flex-col ${
        accentTop ? "border-t-4 border-t-gold-700" : ""
      } ${className}`}
    >
      {icon && <div className="mb-6 text-gold-700">{icon}</div>}
      {title && (
        <h3 className="text-xl lg:text-2xl font-heading text-navy-900 mb-4">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-warm-gray-500 leading-relaxed grow">
          {description}
        </p>
      )}
      {children}
      {href && (
        <div className="mt-6 pt-4 border-t border-warm-gray-100">
          <span className="text-sm font-semibold text-navy-900 tracking-wider uppercase group-hover:text-gold-700 transition-colors">
            {ctaText} &rarr;
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link to={href} className="group block h-full">
        {content}
      </Link>
    );
  }

  return content;
}
