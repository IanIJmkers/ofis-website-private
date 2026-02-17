import { Outlet, useLocation, useMatches } from "react-router";
import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CookieConsent from "../components/ui/CookieConsent";

const BASE_TITLE = "Orchestra Charity Office";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function DocumentTitle() {
  const matches = useMatches();
  const { language, t } = useLanguage();
  const match = [...matches].reverse().find((m) => m.handle?.titleKey);

  useEffect(() => {
    const title = match?.handle?.titleKey
      ? t("titles", match.handle.titleKey)
      : null;
    document.title = title ? `${title} | ${BASE_TITLE}` : BASE_TITLE;
  }, [match, language, t]);

  return null;
}

export default function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <DocumentTitle />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}
