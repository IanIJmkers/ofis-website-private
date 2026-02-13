import SectionWrapper from "../layout/SectionWrapper";
import AnimatedSection from "../animation/AnimatedSection";
import { useLanguage } from "../../context/LanguageContext";
import { getRegulators } from "../../data/regulators";

export default function TrustBadges() {
  const { language, t } = useLanguage();
  const regs = getRegulators(language);

  return (
    <SectionWrapper bg="white" size="md">
      <AnimatedSection className="text-center">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-warm-gray-400 mb-8">
          {t("home", "trustBadgesLabel")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
          {regs.map((reg) => (
            <div
              key={reg.abbreviation}
              className="group cursor-default"
              title={reg.name}
            >
              <div className="text-lg font-heading text-warm-gray-300 group-hover:text-navy-900 transition-colors duration-300">
                {reg.abbreviation}
              </div>
              <div className="text-[10px] text-warm-gray-300 group-hover:text-warm-gray-500 transition-colors duration-300 mt-1 max-w-[120px] mx-auto leading-tight">
                {reg.description}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
