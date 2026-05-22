import SectionWrapper from "../layout/SectionWrapper";
import AnimatedSection from "../animation/AnimatedSection";
import { useLanguage } from "../../i18n/LanguageContext";

export default function EssenceSection() {
  const { t } = useLanguage();

  return (
    <SectionWrapper bg="cream" size="lg">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-700">
            {t("essence.eyebrow")}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-heading text-navy-900">
            {t("essence.title")}
          </h2>
          <div className="mt-4 h-0.75 w-10 bg-gold-700" />
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="mt-8 text-lg text-warm-gray-600 leading-relaxed">
            {t("essence.intro")}
          </p>
          <p className="mt-6 text-lg text-warm-gray-600 leading-relaxed">
            {t("essence.body1")}
          </p>
          <p className="mt-6 text-lg text-warm-gray-600 leading-relaxed">
            {t("essence.body3")}
          </p>
        </AnimatedSection>

        {/* Signature */}
        <AnimatedSection delay={0.3} className="mt-12">
          <div className="border-l-4 border-gold-700 pl-6 py-2">
            <p className="text-warm-gray-500 italic mb-2">
              {t("essence.signature")}
            </p>
            <p className="text-lg font-heading text-navy-900">
              {t("essence.signatureName")}
            </p>
            <p className="text-sm text-gold-700 font-semibold tracking-wide">
              {t("essence.signatureRole")}
            </p>
          </div>
          <p className="mt-8 text-sm text-warm-gray-400 italic leading-relaxed">
            {t("essence.ps")}
          </p>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
