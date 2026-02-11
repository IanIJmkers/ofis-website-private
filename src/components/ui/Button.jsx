import { Link } from "react-router";
import { motion } from "motion/react";

const variants = {
  primary:
    "bg-gold-700 text-white hover:bg-gold-600 border border-gold-700 hover:border-gold-600",
  secondary:
    "bg-navy-900 text-white hover:bg-navy-800 border border-navy-900 hover:border-navy-800",
  outline:
    "bg-transparent text-navy-900 border border-navy-900 hover:bg-navy-900 hover:text-white",
  "outline-light":
    "bg-transparent text-white border border-white/30 hover:bg-white/10",
  ghost: "bg-transparent text-navy-900 hover:bg-navy-50 border border-transparent",
};

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-sm",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external,
  className = "",
  ...props
}) {
  const classes = `inline-flex items-center justify-center font-body font-semibold tracking-wider uppercase rounded-md transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.15 },
  };

  if (href && external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={href} className={classes} {...props}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button className={classes} {...motionProps} {...props}>
      {children}
    </motion.button>
  );
}
