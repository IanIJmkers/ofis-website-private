import { motion } from "motion/react";
import SectionWrapper from "../layout/SectionWrapper";
import AnimatedSection from "../animation/AnimatedSection";
import StaggerChildren, { staggerItem } from "../animation/StaggerChildren";
import { useLanguage } from "../../context/LanguageContext";

const principles = [
  { number: "01", titleKey: "philosophyPrinciple1Title", bodyKey: "philosophyPrinciple1Body" },
  { number: "02", titleKey: "philosophyPrinciple2Title", bodyKey: "philosophyPrinciple2Body" },
  { number: "03", titleKey: "philosophyPrinciple3Title", bodyKey: "philosophyPrinciple3Body" },
];

export default function InvestmentPhilosophySection() {
  const { t } = useLanguage();

  return (
    <SectionWrapper bg="white" size="lg" id="philosophy">
      <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-700">
          {t("home", "philosophyEyebrow")}
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-heading text-navy-900">
          {t("home", "philosophyTitle")}
        </h2>
        <div className="mt-4 h-0.5 w-10 mx-auto bg-gold-700" />
        <p className="mt-6 text-lg text-warm-gray-600 leading-relaxed">
          {t("home", "philosophyIntro")}
        </p>
      </AnimatedSection>

      <StaggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {principles.map((principle) => (
          <motion.div
            key={principle.number}
            variants={staggerItem}
            className="border-l-2 border-gold-700 pl-6"
          >
            <span className="text-sm font-body font-semibold tracking-wider text-gold-700">
              {principle.number}
            </span>
            <h3 className="mt-3 text-xl lg:text-2xl font-heading text-navy-900 mb-4 leading-snug">
              {t("home", principle.titleKey)}
            </h3>
            <p className="text-warm-gray-600 leading-relaxed">
              {t("home", principle.bodyKey)}
            </p>
          </motion.div>
        ))}
      </StaggerChildren>
    </SectionWrapper>
  );
}
