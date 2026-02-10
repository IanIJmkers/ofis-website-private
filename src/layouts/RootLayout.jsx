import { Outlet, useLocation, useMatches } from "react-router";
import { useEffect } from "react";
import { LanguageProvider } from "../i18n/LanguageContext";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const BASE_TITLE = "Orchestra Private Office";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function DocumentTitle() {
  const matches = useMatches();
  const match = [...matches].reverse().find((m) => m.handle?.title);

  useEffect(() => {
    document.title = match?.handle?.title
      ? `${match.handle.title} | ${BASE_TITLE}`
      : BASE_TITLE;
  }, [match]);

  return null;
}

export default function RootLayout() {
  return (
    <LanguageProvider>
      <ScrollToTop />
      <DocumentTitle />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
