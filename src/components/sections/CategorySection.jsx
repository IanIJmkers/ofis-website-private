import SectionWrapper from "../layout/SectionWrapper";
import AnimatedSection from "../animation/AnimatedSection";
import { useLanguage } from "../../context/LanguageContext";

export default function CategorySection() {
  const { t } = useLanguage();

  return (
    <SectionWrapper bg="cream" size="lg">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-700">
            {t("home", "categoryEyebrow")}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-heading text-navy-900">
            {t("home", "categoryTitle")}
          </h2>
          <div className="mt-4 h-0.5 w-10 bg-gold-700" />
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="mt-8 text-lg text-warm-gray-600 leading-relaxed">
            {t("home", "categoryBody1")}
          </p>
          <p className="mt-6 text-lg text-warm-gray-600 leading-relaxed">
            {t("home", "categoryBody2")}
          </p>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
