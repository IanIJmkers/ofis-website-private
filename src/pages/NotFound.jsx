import PageTransition from "../components/animation/PageTransition";
import Button from "../components/ui/Button";
import { useLanguage } from "../i18n/LanguageContext";

export default function NotFound() {
  const { lang, t } = useLanguage();
  const homePath = lang === "en" ? "/en" : "/";

  return (
    <PageTransition>
      <section className="min-h-[80vh] flex items-center justify-center bg-cream">
        <div className="text-center px-6">
          <span className="text-8xl font-heading text-navy-900">404</span>
          <h1 className="mt-4 text-3xl font-heading text-navy-900">
            {t("notFound.title")}
          </h1>
          <p className="mt-4 text-lg text-warm-gray-500 max-w-md mx-auto">
            {t("notFound.subtitle")}
          </p>
          <div className="mt-8">
            <Button href={homePath} variant="primary" size="lg">
              {t("notFound.cta")}
            </Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
