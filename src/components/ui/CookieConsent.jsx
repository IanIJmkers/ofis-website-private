import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../../context/LanguageContext";

const STORAGE_KEY = "orchestra-cookie-consent";

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
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6"
        >
          <div className="max-w-5xl mx-auto bg-navy-900 rounded-xl shadow-2xl border border-navy-800 p-6 sm:p-8">
            <h3 className="text-lg font-heading text-white mb-2">
              {t("cookieConsent", "title")}
            </h3>
            <p className="text-sm text-navy-300 leading-relaxed mb-6">
              {t("cookieConsent", "description")}{" "}
              <button
                onClick={() =>
                  window.open(
                    "/docs/privacy-cookieverklaring.pdf",
                    "_blank"
                  )
                }
                className="text-gold-400 hover:text-gold-300 underline transition-colors cursor-pointer"
              >
                {t("cookieConsent", "privacyLink")}
              </button>
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => handleConsent("all")}
                className="px-6 py-3 text-xs font-semibold tracking-wider uppercase bg-gold-700 text-white rounded-md hover:bg-gold-600 transition-colors duration-200 cursor-pointer"
              >
                {t("cookieConsent", "acceptAll")}
              </button>
              <button
                onClick={() => handleConsent("necessary")}
                className="px-6 py-3 text-xs font-semibold tracking-wider uppercase bg-transparent text-white border border-white/30 rounded-md hover:bg-white/10 transition-colors duration-200 cursor-pointer"
              >
                {t("cookieConsent", "acceptNecessary")}
              </button>
              <button
                onClick={() => handleConsent("rejected")}
                className="px-6 py-3 text-xs font-semibold tracking-wider uppercase text-navy-400 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                {t("cookieConsent", "reject")}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
