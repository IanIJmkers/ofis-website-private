import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { navigationNl, navigationEn } from "../../data/navigation";
import { siteMetadata } from "../../data/siteMetadata";
import { useLanguage } from "../../i18n/LanguageContext";

export default function MobileMenu({ open, onClose }) {
  const { lang, t, switchLanguage } = useLanguage();
  const navigation = lang === "en" ? navigationEn : navigationNl;

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
                  <Link
                    to={item.path}
                    onClick={onClose}
                    className="block py-4 text-white/90 hover:text-white text-lg font-medium"
                  >
                    {t(item.labelKey)}
                  </Link>
                </div>
              ))}

              {/* Language switcher */}
              <div className="mt-6 flex items-center gap-3">
                <button
                  onClick={() => {
                    switchLanguage("nl");
                    onClose();
                  }}
                  className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                    lang === "nl"
                      ? "bg-white/10 text-white"
                      : "text-white/50 hover:text-white/80"
                  }`}
                >
                  Nederlands
                </button>
                <button
                  onClick={() => {
                    switchLanguage("en");
                    onClose();
                  }}
                  className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                    lang === "en"
                      ? "bg-white/10 text-white"
                      : "text-white/50 hover:text-white/80"
                  }`}
                >
                  English
                </button>
              </div>

              {/* My Orchestra CTA */}
              <div className="mt-6">
                <a
                  href={siteMetadata.myOrchestra}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 bg-gold-700 text-white text-sm font-semibold tracking-wider uppercase rounded-md hover:bg-gold-600 transition-colors"
                >
                  {t("nav.myOrchestra")}
                </a>
              </div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
