import { motion } from "motion/react";
import SectionWrapper from "../layout/SectionWrapper";
import AnimatedSection from "../animation/AnimatedSection";
import StaggerChildren, { staggerItem } from "../animation/StaggerChildren";
import { useLanguage } from "../../i18n/LanguageContext";

export default function InvestmentPhilosophySection() {
  const { t } = useLanguage();

  const principles = [
    {
      number: "01",
      titleKey: "home.philosophy.principle1Title",
      bodyKey: "home.philosophy.principle1Body",
    },
    {
      number: "02",
      titleKey: "home.philosophy.principle2Title",
      bodyKey: "home.philosophy.principle2Body",
    },
    {
      number: "03",
      titleKey: "home.philosophy.principle3Title",
      bodyKey: "home.philosophy.principle3Body",
    },
  ];

  return (
    <SectionWrapper bg="white" size="lg" id="philosophy">
      <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-700">
          {t("home.philosophy.eyebrow")}
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-heading text-navy-900">
          {t("home.philosophy.title")}
        </h2>
        <div className="mt-4 h-0.75 w-10 mx-auto bg-gold-700" />
        <p className="mt-6 text-lg text-warm-gray-600 leading-relaxed">
          {t("home.philosophy.intro")}
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
              {t(principle.titleKey)}
            </h3>
            <p className="text-warm-gray-600 leading-relaxed">
              {t(principle.bodyKey)}
            </p>
          </motion.div>
        ))}
      </StaggerChildren>
    </SectionWrapper>
  );
}
