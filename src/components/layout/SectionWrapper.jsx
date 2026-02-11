const bgColors = {
  white: "bg-white",
  cream: "bg-cream",
  navy: "bg-navy-900",
};

const paddings = {
  sm: "py-12 lg:py-16",
  md: "py-16 lg:py-24",
  lg: "py-20 lg:py-32",
};

export default function SectionWrapper({
  children,
  bg = "white",
  size = "lg",
  className = "",
  id,
}) {
  return (
    <section id={id} className={`${bgColors[bg]} ${paddings[size]} ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
    </section>
  );
}
