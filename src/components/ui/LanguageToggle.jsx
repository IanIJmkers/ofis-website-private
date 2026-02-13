import { useLanguage } from "../../context/LanguageContext";

export default function LanguageToggle({ transparent = false }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center rounded-md overflow-hidden border border-current/20 text-sm">
      <button
        onClick={() => setLanguage("nl")}
        className={`px-2.5 py-1 font-semibold tracking-wide transition-colors duration-200 ${
          language === "nl"
            ? transparent
              ? "bg-white text-navy-900"
              : "bg-navy-900 text-white"
            : transparent
              ? "text-white/70 hover:text-white"
              : "text-warm-gray-400 hover:text-navy-900"
        }`}
      >
        NL
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-2.5 py-1 font-semibold tracking-wide transition-colors duration-200 ${
          language === "en"
            ? transparent
              ? "bg-white text-navy-900"
              : "bg-navy-900 text-white"
            : transparent
              ? "text-white/70 hover:text-white"
              : "text-warm-gray-400 hover:text-navy-900"
        }`}
      >
        EN
      </button>
    </div>
  );
}
