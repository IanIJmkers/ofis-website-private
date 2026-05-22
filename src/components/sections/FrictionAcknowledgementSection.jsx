import SectionWrapper from "../layout/SectionWrapper";
import AnimatedSection from "../animation/AnimatedSection";
import { useLanguage } from "../../context/LanguageContext";

export default function FrictionAcknowledgementSection() {
  const { t } = useLanguage();

  return (
    <SectionWrapper bg="navy" size="md">
      <div className="max-w-2xl mx-auto">
        <AnimatedSection>
          <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-400">
            {t("home", "frictionEyebrow")}
          </span>
          <h3 className="mt-3 text-2xl sm:text-3xl font-heading text-white leading-snug">
            {t("home", "frictionTitle")}
          </h3>
          <div className="mt-4 h-0.5 w-10 bg-gold-400" />
          <p className="mt-8 text-lg text-navy-200 leading-relaxed">
            {t("home", "frictionBody")}
          </p>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
