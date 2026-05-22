import { motion } from "motion/react";
import SectionWrapper from "../layout/SectionWrapper";
import AnimatedSection from "../animation/AnimatedSection";
import StaggerChildren, { staggerItem } from "../animation/StaggerChildren";
import { useLanguage } from "../../i18n/LanguageContext";

const pillarIcons = {
  governance: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21" />
    </svg>
  ),
  wealthManagement: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
  orchestration: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
    </svg>
  ),
};

export default function PillarsSection() {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: pillarIcons.wealthManagement,
      titleKey: "privateOffice.pillar2Title",
      itemsKey: "privateOffice.pillar2Items",
    },
    {
      icon: pillarIcons.governance,
      titleKey: "privateOffice.pillar1Title",
      itemsKey: "privateOffice.pillar1Items",
    },
    {
      icon: pillarIcons.orchestration,
      titleKey: "privateOffice.pillar3Title",
      itemsKey: "privateOffice.pillar3Items",
    },
  ];

  return (
    <SectionWrapper bg="white" size="lg">
      <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-700">
          {t("privateOffice.eyebrow")}
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-heading text-navy-900">
          {t("privateOffice.title")}
        </h2>
        <div className="mt-4 h-0.75 w-10 mx-auto bg-gold-700" />
        <p className="mt-6 text-lg text-warm-gray-500 leading-relaxed">
          {t("privateOffice.intro")}
        </p>
      </AnimatedSection>

      <AnimatedSection className="max-w-2xl mx-auto mb-16 text-left" delay={0.1}>
        <h3 className="text-xl lg:text-2xl font-heading text-navy-900 mb-4">
          {t("privateOffice.sequenceTitle")}
        </h3>
        <p className="text-warm-gray-600 leading-relaxed">
          {t("privateOffice.sequenceBody")}
        </p>
      </AnimatedSection>

      <StaggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {pillars.map((pillar) => (
          <motion.div
            key={pillar.titleKey}
            variants={staggerItem}
            className="bg-cream border border-warm-gray-100 rounded-lg p-8 lg:p-10 shadow-card hover:shadow-card-hover transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-navy-50 flex items-center justify-center text-navy-700 mb-6">
              {pillar.icon}
            </div>
            <h3 className="text-xl lg:text-2xl font-heading text-navy-900 mb-6">
              {t(pillar.titleKey)}
            </h3>
            <ul className="space-y-3">
              {t(pillar.itemsKey).map((item, i) => (
                <li key={i} className="flex gap-3 text-warm-gray-500 leading-relaxed">
                  <svg
                    className="w-5 h-5 shrink-0 text-gold-700 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </StaggerChildren>

      {/* Smooth transition section */}
      <AnimatedSection className="mt-16 text-center max-w-2xl mx-auto" delay={0.2}>
        <div className="bg-navy-900 rounded-lg p-8 lg:p-12">
          <h3 className="text-2xl font-heading text-white mb-4">
            {t("privateOffice.transitionTitle")}
          </h3>
          <p className="text-navy-200 leading-relaxed">
            {t("privateOffice.transition")}
          </p>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
