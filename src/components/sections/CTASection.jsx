import SectionWrapper from "../layout/SectionWrapper";
import AnimatedSection from "../animation/AnimatedSection";
import Button from "../ui/Button";
import { useLanguage } from "../../i18n/LanguageContext";

export default function CTASection({ title, subtitle }) {
  const { lang, t } = useLanguage();
  const contactPath = lang === "en" ? "/en/contact" : "/contact";

  return (
    <SectionWrapper bg="navy">
      <AnimatedSection className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white mb-6">
          {title || t("contact.ctaTitle")}
        </h2>
        <p className="text-lg text-navy-200 mb-10">
          {subtitle || t("contact.ctaSubtitle")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href={contactPath} variant="primary" size="lg">
            {t("hero.cta2")}
          </Button>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
