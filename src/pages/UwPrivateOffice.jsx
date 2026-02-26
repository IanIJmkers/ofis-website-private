import { Fragment } from "react";
import { motion } from "motion/react";
import PageTransition from "../components/animation/PageTransition";
import AnimatedSection from "../components/animation/AnimatedSection";
import SectionWrapper from "../components/layout/SectionWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import StaggerChildren, {
  staggerItem,
} from "../components/animation/StaggerChildren";
import Button from "../components/ui/Button";
import CTASection from "../components/sections/CTASection";
import { getPillars } from "../data/pillars";
import { useLanguage } from "../context/LanguageContext";
import impactChart from "../assets/images/impact.jpg";

const pillarIcons = {
  governance: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
      />
    </svg>
  ),
  "wealth-management": (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    </svg>
  ),
  orchestration: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
      />
    </svg>
  ),
};

export default function UwPrivateOffice() {
  const { language, t } = useLanguage();
  const pillars = getPillars(language);

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
            {t("uwPrivateOffice", "heroEyebrow")}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading text-white leading-[1.1] mb-6"
          >
            {t("uwPrivateOffice", "heroTitle")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg text-navy-200 leading-relaxed max-w-2xl"
          >
            {t("uwPrivateOffice", "heroDescription")}
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <SectionWrapper bg="cream" size="lg">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <SectionHeading
            eyebrow={t("uwPrivateOffice", "pillarsEyebrow")}
            title={t("uwPrivateOffice", "pillarsTitle")}
            subtitle={t("uwPrivateOffice", "pillarsSubtitle")}
            align="center"
          />
        </AnimatedSection>
      </SectionWrapper>

      {/* Pillar detail sections */}
      {pillars.map((pillar, index) => (
        <Fragment key={pillar.id}>
          <SectionWrapper
            bg={index % 2 === 0 ? "white" : "cream"}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <AnimatedSection
                direction={index % 2 === 0 ? "left" : "right"}
                className={index % 2 !== 0 ? "lg:order-2" : ""}
              >
                <div className="text-gold-700 mb-4">
                  {pillarIcons[pillar.icon]}
                </div>
                <h2 className="text-3xl sm:text-4xl font-heading text-navy-900 mb-4">
                  {pillar.title}
                </h2>
                <div className="h-0.75 w-10 bg-gold-700 mb-6" />
                <p className="text-warm-gray-600 leading-relaxed text-lg">
                  {pillar.fullDescription}
                </p>
              </AnimatedSection>

              <AnimatedSection
                direction={index % 2 === 0 ? "right" : "left"}
                delay={0.15}
                className={index % 2 !== 0 ? "lg:order-1" : ""}
              >
                <StaggerChildren className="space-y-4">
                  {pillar.features.map((feature) => (
                    <motion.div
                      key={feature.title}
                      variants={staggerItem}
                      className="bg-white rounded-lg shadow-card p-6"
                    >
                      <h3 className="text-lg font-heading text-navy-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-warm-gray-500 leading-relaxed">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </StaggerChildren>
              </AnimatedSection>
            </div>
          </SectionWrapper>

          {pillar.id === "vermogensbeheer" && (
            <SectionWrapper bg="cream" size="sm">
              <AnimatedSection className="max-w-4xl mx-auto">
                <img
                  src={impactChart}
                  alt="Impactkosten grafiek 1967 – 2026"
                  className="w-full h-auto rounded-xl shadow-card"
                />
              </AnimatedSection>
            </SectionWrapper>
          )}
        </Fragment>
      ))}

      {/* Smooth transition */}
      <SectionWrapper bg="navy">
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading text-white mb-6">
            {t("uwPrivateOffice", "transitionTitle")}
          </h2>
          <div className="h-0.75 w-16 bg-gold-700 mx-auto mb-6" />
          <p className="text-lg text-navy-200 leading-relaxed mb-10">
            {t("uwPrivateOffice", "transitionDesc")}
          </p>
          <Button href="/contact" variant="primary" size="lg">
            {t("uwPrivateOffice", "transitionButton")}
          </Button>
        </AnimatedSection>
      </SectionWrapper>

      <CTASection
        title={t("uwPrivateOffice", "ctaTitle")}
        subtitle={t("uwPrivateOffice", "ctaSubtitle")}
      />
    </PageTransition>
  );
}
