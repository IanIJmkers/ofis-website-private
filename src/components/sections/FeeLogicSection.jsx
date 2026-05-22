import { Link } from "react-router";
import { motion } from "motion/react";
import SectionWrapper from "../layout/SectionWrapper";
import AnimatedSection from "../animation/AnimatedSection";
import StaggerChildren, { staggerItem } from "../animation/StaggerChildren";
import { useLanguage } from "../../i18n/LanguageContext";

export default function FeeLogicSection({ variant = "home", bg = "white" }) {
  const { lang, t } = useLanguage();
  const fixedFeePath = lang === "en" ? "/en/fixed-fee" : "/vaste-vergoeding";

  return (
    <SectionWrapper bg={bg} size="lg">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-700">
            {t("home.feeLogic.eyebrow")}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-heading text-navy-900">
            {t("home.feeLogic.title")}
          </h2>
          <div className="mt-4 h-0.75 w-10 bg-gold-700" />
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="mt-8 text-lg text-warm-gray-600 leading-relaxed">
            {t("home.feeLogic.intro")}
          </p>
          <p className="mt-8 text-lg font-heading text-navy-900 leading-snug">
            {t("home.feeLogic.subhead")}
          </p>
        </AnimatedSection>

        <StaggerChildren className="mt-10 space-y-4">
          {["analogy1", "analogy2", "analogy3"].map((key) => (
            <motion.div
              key={key}
              variants={staggerItem}
              className="flex gap-4 items-start"
            >
              <span className="shrink-0 mt-1 w-1 h-6 bg-gold-700" />
              <p className="text-lg text-warm-gray-700 leading-relaxed">
                {t(`home.feeLogic.${key}`)}
              </p>
            </motion.div>
          ))}
        </StaggerChildren>

        <AnimatedSection delay={0.2}>
          <p className="mt-12 text-lg text-warm-gray-600 leading-relaxed italic">
            {t("home.feeLogic.synthesis")}
          </p>

          {variant === "home" && (
            <div className="mt-10">
              <Link
                to={fixedFeePath}
                className="inline-flex items-center gap-2 text-sm font-body font-semibold tracking-wider uppercase text-gold-700 hover:text-gold-800 transition-colors"
              >
                {t("home.feeLogic.readMore")}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          )}
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
