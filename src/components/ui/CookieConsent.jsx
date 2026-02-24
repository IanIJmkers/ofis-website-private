import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../../context/LanguageContext";

const STORAGE_KEY = "orchestra-cookie-consent";

function CookieIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gold-400"
    >
      <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
      <circle cx="8.5" cy="8.5" r="1" fill="currentColor" />
      <circle cx="10.5" cy="15.5" r="1" fill="currentColor" />
      <circle cx="15.5" cy="12.5" r="1" fill="currentColor" />
    </svg>
  );
}

export default function CookieConsent() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem(STORAGE_KEY);
      if (!consent) {
        const timer = setTimeout(() => setVisible(true), 800);
        return () => clearTimeout(timer);
      }
    } catch {
      // localStorage unavailable
    }
  }, []);

  const handleConsent = (value) => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // localStorage unavailable
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6"
        >
          <div className="max-w-4xl mx-auto bg-navy-900/95 backdrop-blur-md rounded-2xl shadow-[0_-4px_40px_rgba(0,0,0,0.3)] border border-navy-700/50 relative overflow-hidden">
            {/* Pulsing gold glow bar */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent"
              animate={{ opacity: [0.3, 1, 0.3], scaleX: [0.5, 1, 0.5] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="p-6 sm:p-8">
              {/* Header with icon */}
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gold-700/15 flex items-center justify-center">
                  <CookieIcon />
                </div>
                <h3 className="text-base sm:text-lg font-heading text-white">
                  {t("cookieConsent", "title")}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-navy-300 leading-relaxed mb-6 pl-12">
                {t("cookieConsent", "description")}{" "}
                <button
                  onClick={() =>
                    window.open(
                      "/docs/privacy-cookieverklaring.pdf",
                      "_blank"
                    )
                  }
                  className="text-gold-400 hover:text-gold-300 underline underline-offset-2 transition-colors cursor-pointer"
                >
                  {t("cookieConsent", "privacyLink")}
                </button>
              </p>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pl-0 sm:pl-12">
                <button
                  onClick={() => handleConsent("all")}
                  className="px-6 py-2.5 text-xs font-semibold tracking-wider uppercase bg-gold-700 text-white rounded-lg hover:bg-gold-600 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
                >
                  {t("cookieConsent", "acceptAll")}
                </button>
                <button
                  onClick={() => handleConsent("necessary")}
                  className="px-6 py-2.5 text-xs font-semibold tracking-wider uppercase bg-white/5 text-white border border-white/20 rounded-lg hover:bg-white/10 hover:border-white/30 transition-all duration-200 cursor-pointer"
                >
                  {t("cookieConsent", "acceptNecessary")}
                </button>
                <button
                  onClick={() => handleConsent("rejected")}
                  className="px-4 py-2.5 text-xs font-semibold tracking-wider uppercase text-navy-400 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {t("cookieConsent", "reject")}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
