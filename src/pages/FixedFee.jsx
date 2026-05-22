import { motion } from "motion/react";
import PageTransition from "../components/animation/PageTransition";
import AnimatedSection from "../components/animation/AnimatedSection";
import SectionWrapper from "../components/layout/SectionWrapper";
import FeeLogicSection from "../components/sections/FeeLogicSection";
import CTASection from "../components/sections/CTASection";
import { useLanguage } from "../i18n/LanguageContext";

export default function FixedFee() {
  const { t } = useLanguage();

  const faqs = [
    {
      questionKey: "fixedFee.faq1Question",
      answerKey: "fixedFee.faq1Answer",
    },
    {
      questionKey: "fixedFee.faq2Question",
      answerKey: "fixedFee.faq2Answer",
    },
    {
      questionKey: "fixedFee.faq3Question",
      answerKey: "fixedFee.faq3Answer",
    },
    {
      questionKey: "fixedFee.faq4Question",
      answerKey: "fixedFee.faq4Answer",
    },
    {
      questionKey: "fixedFee.faq5Question",
      answerKey: "fixedFee.faq5Answer",
    },
    {
      questionKey: "fixedFee.faq6Question",
      answerKey: "fixedFee.faq6Answer",
    },
  ];

  const rows = [
    {
      tier: t("fixedFee.arithmeticRow1Tier"),
      value: t("fixedFee.arithmeticRow1Value"),
      delta: t("fixedFee.arithmeticRow1Delta"),
      highlight: true,
    },
    {
      tier: t("fixedFee.arithmeticRow2Tier"),
      value: t("fixedFee.arithmeticRow2Value"),
      delta: t("fixedFee.arithmeticRow2Delta"),
    },
    {
      tier: t("fixedFee.arithmeticRow3Tier"),
      value: t("fixedFee.arithmeticRow3Value"),
      delta: t("fixedFee.arithmeticRow3Delta"),
    },
    {
      tier: t("fixedFee.arithmeticRow4Tier"),
      value: t("fixedFee.arithmeticRow4Value"),
      delta: t("fixedFee.arithmeticRow4Delta"),
    },
  ];

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
            {t("fixedFee.eyebrow")}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading text-white leading-[1.1] mb-6"
          >
            {t("fixedFee.heroTitle")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg text-navy-200 leading-relaxed max-w-2xl"
          >
            {t("fixedFee.heroSubtitle")}
          </motion.p>
        </div>
      </section>

      {/* Fee logic argument (reused) */}
      <FeeLogicSection variant="full" bg="cream" />

      {/* Arithmetic block */}
      <SectionWrapper bg="white" size="lg">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-heading text-navy-900 mb-4">
              {t("fixedFee.arithmeticTitle")}
            </h2>
            <div className="h-0.75 w-10 bg-gold-700 mb-8" />
            <p className="text-lg text-warm-gray-600 leading-relaxed mb-10">
              {t("fixedFee.arithmeticIntro")}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-warm-gray-200">
                    <th className="py-4 pr-6 text-xs font-body font-semibold tracking-wider uppercase text-warm-gray-500">
                      {t("fixedFee.arithmeticCol1")}
                    </th>
                    <th className="py-4 px-6 text-xs font-body font-semibold tracking-wider uppercase text-warm-gray-500">
                      {t("fixedFee.arithmeticCol2")}
                    </th>
                    <th className="py-4 pl-6 text-xs font-body font-semibold tracking-wider uppercase text-warm-gray-500 text-right">
                      {t("fixedFee.arithmeticCol3")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b border-warm-gray-100 ${
                        row.highlight ? "bg-cream/60" : ""
                      }`}
                    >
                      <td
                        className={`py-5 pr-6 text-base ${
                          row.highlight
                            ? "font-heading text-navy-900"
                            : "text-warm-gray-700"
                        }`}
                      >
                        {row.tier}
                      </td>
                      <td
                        className={`py-5 px-6 text-base ${
                          row.highlight
                            ? "font-heading text-navy-900"
                            : "text-warm-gray-700"
                        }`}
                      >
                        {row.value}
                      </td>
                      <td
                        className={`py-5 pl-6 text-base text-right ${
                          row.highlight
                            ? "text-gold-700 font-semibold"
                            : "text-warm-gray-500"
                        }`}
                      >
                        {row.delta}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-8 text-sm text-warm-gray-400 italic leading-relaxed">
              {t("fixedFee.arithmeticFootnote")}
            </p>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* FAQ block */}
      <SectionWrapper bg="cream" size="lg">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-heading text-navy-900 mb-4">
              {t("fixedFee.faqTitle")}
            </h2>
            <div className="h-0.75 w-10 bg-gold-700 mb-10" />
          </AnimatedSection>

          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={0.05 * i}>
                <details className="group border-b border-warm-gray-200 pb-6">
                  <summary className="cursor-pointer list-none flex justify-between items-start gap-4">
                    <h3 className="text-lg lg:text-xl font-heading text-navy-900 leading-snug">
                      {t(faq.questionKey)}
                    </h3>
                    <span className="shrink-0 mt-1 text-gold-700 transition-transform duration-200 group-open:rotate-45">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-warm-gray-600 leading-relaxed">
                    {t(faq.answerKey)}
                  </p>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <CTASection />
    </PageTransition>
  );
}
