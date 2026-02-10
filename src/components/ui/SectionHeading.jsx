import AnimatedSection from "../animation/AnimatedSection";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className = "",
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <AnimatedSection className={`max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && (
        <span
          className={`text-xs font-body font-semibold tracking-[0.2em] uppercase ${
            light ? "text-gold-400" : "text-gold-700"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-heading ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-4 h-0.75 w-10 ${
          align === "center" ? "mx-auto" : ""
        } bg-gold-700`}
      />
      {subtitle && (
        <p
          className={`mt-6 text-lg leading-relaxed ${
            light ? "text-navy-200" : "text-warm-gray-500"
          }`}
        >
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
