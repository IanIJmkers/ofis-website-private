import { motion } from "motion/react";
import PageTransition from "../components/animation/PageTransition";
import PillarsSection from "../components/sections/PillarsSection";
import TrustBadges from "../components/sections/TrustBadges";
import CTASection from "../components/sections/CTASection";
import { useLanguage } from "../i18n/LanguageContext";

export default function PrivateOffice() {
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
            {t("privateOffice.eyebrow")}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading text-white leading-[1.1] mb-6"
          >
            {t("privateOffice.title")}
          </motion.h1>
        </div>
      </section>

      <PillarsSection />
      <TrustBadges />
      <CTASection />
    </PageTransition>
  );
}
