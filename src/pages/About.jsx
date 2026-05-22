import { motion } from "motion/react";
import PageTransition from "../components/animation/PageTransition";
import AnimatedSection from "../components/animation/AnimatedSection";
import SectionWrapper from "../components/layout/SectionWrapper";
import TrustBadges from "../components/sections/TrustBadges";
import CTASection from "../components/sections/CTASection";
import { useLanguage } from "../i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full border border-white/20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block text-xs font-body font-semibold tracking-[0.25em] uppercase text-gold-400 mb-4"
          >
            {t("about.eyebrow")}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading text-white leading-[1.1] mb-6"
          >
            {t("about.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg text-navy-200 leading-relaxed max-w-2xl"
          >
            {t("about.intro")}
          </motion.p>
        </div>
      </section>

      {/* Team */}
      <SectionWrapper bg="cream" size="lg">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-heading text-navy-900 mb-4">
              {t("about.teamTitle")}
            </h2>
            <div className="h-0.75 w-10 bg-gold-700 mb-8" />
            <p className="text-lg text-warm-gray-600 leading-relaxed">
              {t("about.teamDescription")}
            </p>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Methodology */}
      <SectionWrapper bg="white" size="lg">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-heading text-navy-900 mb-4">
              {t("about.methodologyTitle")}
            </h2>
            <div className="h-0.75 w-10 bg-gold-700 mb-8" />
            <p className="text-lg text-warm-gray-600 leading-relaxed">
              {t("about.methodologyDescription")}
            </p>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Platform */}
      <SectionWrapper bg="cream" size="lg">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-heading text-navy-900 mb-4">
              {t("about.platformTitle")}
            </h2>
            <div className="h-0.75 w-10 bg-gold-700 mb-8" />
            <p className="text-lg text-warm-gray-600 leading-relaxed">
              {t("about.platformDescription")}
            </p>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Regulation */}
      <SectionWrapper bg="white" size="md">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-heading text-navy-900 mb-4">
              {t("about.regulatoryTitle")}
            </h2>
            <div className="h-0.75 w-10 bg-gold-700 mb-8" />
            <p className="text-lg text-warm-gray-600 leading-relaxed">
              {t("about.regulatoryDescription")}
            </p>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      <TrustBadges />
      <CTASection />
    </PageTransition>
  );
}
