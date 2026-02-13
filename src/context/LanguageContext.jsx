import { createContext, useContext, useState, useCallback } from "react";
import nl from "../locales/nl";
import en from "../locales/en";

const translations = { nl, en };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      return localStorage.getItem("orchestra-private-lang") || "nl";
    } catch {
      return "nl";
    }
  });

  const setLanguage = useCallback((lang) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("orchestra-private-lang", lang);
    } catch {}
  }, []);

  const t = useCallback(
    (section, key) => {
      const sectionData = translations[language]?.[section];
      if (!sectionData) return key;
      return sectionData[key] ?? key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}
