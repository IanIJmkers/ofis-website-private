import SectionWrapper from "../layout/SectionWrapper";
import AnimatedSection from "../animation/AnimatedSection";
import { useLanguage } from "../../i18n/LanguageContext";

export default function FrictionAcknowledgementSection() {
  const { t } = useLanguage();

  return (
    <SectionWrapper bg="navy" size="md">
      <div className="max-w-2xl mx-auto">
        <AnimatedSection>
          <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-400">
            {t("home.friction.eyebrow")}
          </span>
          <h3 className="mt-3 text-2xl sm:text-3xl font-heading text-white leading-snug">
            {t("home.friction.title")}
          </h3>
          <div className="mt-4 h-0.75 w-10 bg-gold-400" />
          <p className="mt-8 text-lg text-navy-200 leading-relaxed">
            {t("home.friction.body")}
          </p>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
