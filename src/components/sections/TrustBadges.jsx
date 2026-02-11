import SectionWrapper from "../layout/SectionWrapper";
import AnimatedSection from "../animation/AnimatedSection";
import { regulators } from "../../data/regulators";

export default function TrustBadges() {
  return (
    <SectionWrapper bg="white" size="md">
      <AnimatedSection className="text-center">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-warm-gray-400 mb-8">
          Gereguleerd en onder toezicht van
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
          {regulators.map((reg) => (
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
