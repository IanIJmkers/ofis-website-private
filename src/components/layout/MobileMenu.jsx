import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { navigation } from "../../data/navigation";
import { siteMetadata } from "../../data/siteMetadata";

export default function MobileMenu({ open, onClose }) {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (path) => {
    setExpanded(expanded === path ? null : path);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-navy-950/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-navy-900 z-50 overflow-y-auto"
          >
            {/* Close button */}
            <div className="flex items-center justify-between p-6">
              <span className="text-xl font-heading text-white">
                {siteMetadata.companyName}
              </span>
              <button
                onClick={onClose}
                className="p-2 text-white/70 hover:text-white"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation */}
            <nav className="px-6 pb-8">
              {navigation.map((item) => (
                <div key={item.path} className="border-b border-navy-800">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleExpand(item.path)}
                        className="w-full flex items-center justify-between py-4 text-white/90 hover:text-white text-lg font-medium"
                      >
                        {item.label}
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            expanded === item.path ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {expanded === item.path && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="pb-3 pl-4 space-y-1">
                              <Link
                                to={item.path}
                                onClick={onClose}
                                className="block py-2 text-gold-400 text-sm font-medium"
                              >
                                Overview
                              </Link>
                              {item.children.map((child) => (
                                <Link
                                  key={child.path}
                                  to={child.path}
                                  onClick={onClose}
                                  className="block py-2 text-navy-200 hover:text-white text-sm"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className="block py-4 text-white/90 hover:text-white text-lg font-medium"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* My Orchestra CTA */}
              <div className="mt-8">
                <a
                  href={siteMetadata.myOrchestra}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 bg-gold-700 text-white text-sm font-semibold tracking-wider uppercase rounded-md hover:bg-gold-600 transition-colors"
                >
                  My Orchestra
                </a>
              </div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
