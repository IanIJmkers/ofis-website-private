import { Outlet, useLocation, useMatches } from "react-router";
import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const BASE_TITLE = "Orchestra Private";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function DocumentTitle() {
  const matches = useMatches();
  const { t } = useLanguage();
  const match = [...matches].reverse().find((m) => m.handle?.titleKey);

  useEffect(() => {
    const titleKey = match?.handle?.titleKey;
    const title = titleKey ? t("titles", titleKey) : null;
    document.title = title ? `${title} | ${BASE_TITLE}` : BASE_TITLE;
  }, [match, t]);

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
    </>
  );
}
