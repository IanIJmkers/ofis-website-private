import { useState } from "react";
import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { navigationNl, navigationEn } from "../../data/navigation";
import { siteMetadata } from "../../data/siteMetadata";
import { useLanguage } from "../../i18n/LanguageContext";
import useScrollDirection from "../../hooks/useScrollDirection";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollDirection, scrollY } = useScrollDirection();
  const location = useLocation();
  const { lang, t, switchLanguage } = useLanguage();

  const navigation = lang === "en" ? navigationEn : navigationNl;
  const homePath = lang === "en" ? "/en" : "/";

  const isScrolled = scrollY > 20;
  const isHidden = scrollDirection === "down" && scrollY > 200;

  const isHomePage =
    location.pathname === "/" || location.pathname === "/en";
  const useTransparent = isHomePage && !isScrolled;

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          useTransparent
            ? "bg-transparent"
            : "bg-white/95 backdrop-blur-md shadow-nav"
        }`}
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={homePath} className="flex items-center gap-3">
              <span
                className={`text-2xl font-heading ${
                  useTransparent ? "text-white" : "text-navy-900"
                }`}
              >
                {siteMetadata.companyName}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 relative group ${
                    useTransparent
                      ? "text-white/90 hover:text-white"
                      : "text-warm-gray-600 hover:text-navy-900"
                  } ${
                    location.pathname === item.path
                      ? useTransparent
                        ? "text-white"
                        : "text-navy-900"
                      : ""
                  }`}
                >
                  {t(item.labelKey)}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gold-700 transition-transform duration-200 origin-left ${
                      location.pathname === item.path
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Right side: Language switcher + My Orchestra */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language switcher */}
              <div className="flex items-center gap-1 text-sm">
                <button
                  onClick={() => switchLanguage("nl")}
                  className={`px-2 py-1 rounded transition-colors duration-200 ${
                    lang === "nl"
                      ? useTransparent
                        ? "text-white font-semibold"
                        : "text-navy-900 font-semibold"
                      : useTransparent
                        ? "text-white/50 hover:text-white/80"
                        : "text-warm-gray-400 hover:text-warm-gray-600"
                  }`}
                >
                  NL
                </button>
                <span
                  className={
                    useTransparent ? "text-white/30" : "text-warm-gray-300"
                  }
                >
                  |
                </span>
                <button
                  onClick={() => switchLanguage("en")}
                  className={`px-2 py-1 rounded transition-colors duration-200 ${
                    lang === "en"
                      ? useTransparent
                        ? "text-white font-semibold"
                        : "text-navy-900 font-semibold"
                      : useTransparent
                        ? "text-white/50 hover:text-white/80"
                        : "text-warm-gray-400 hover:text-warm-gray-600"
                  }`}
                >
                  EN
                </button>
              </div>

              <a
                href={siteMetadata.myOrchestra}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase bg-gold-700 text-white rounded-md hover:bg-gold-600 transition-colors duration-200"
              >
                {t("nav.myOrchestra")}
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <svg
                className={`w-6 h-6 ${
                  useTransparent ? "text-white" : "text-navy-900"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
