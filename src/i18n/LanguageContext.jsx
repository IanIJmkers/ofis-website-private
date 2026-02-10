import { createContext, useContext, useMemo } from "react";
import { useLocation, useNavigate } from "react-router";
import nl from "./translations/nl";
import en from "./translations/en";

const translations = { nl, en };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  const lang = location.pathname.startsWith("/en") ? "en" : "nl";

  const t = useMemo(() => {
    const strings = translations[lang];
    return (key) => {
      const keys = key.split(".");
      let value = strings;
      for (const k of keys) {
        value = value?.[k];
      }
      return value ?? key;
    };
  }, [lang]);

  const switchLanguage = (newLang) => {
    const currentPath = location.pathname;

    if (newLang === "en" && lang === "nl") {
      // Map Dutch paths to English
      const pathMap = {
        "/": "/en",
        "/uw-private-office": "/en/your-private-office",
        "/over-ons": "/en/about",
        "/nieuws": "/en/news",
        "/contact": "/en/contact",
      };
      navigate(pathMap[currentPath] || "/en");
    } else if (newLang === "nl" && lang === "en") {
      // Map English paths to Dutch
      const pathMap = {
        "/en": "/",
        "/en/your-private-office": "/uw-private-office",
        "/en/about": "/over-ons",
        "/en/news": "/nieuws",
        "/en/contact": "/contact",
      };
      navigate(pathMap[currentPath] || "/");
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, t, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
