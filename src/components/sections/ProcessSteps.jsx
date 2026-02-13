import { motion } from "motion/react";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import StaggerChildren, { staggerItem } from "../animation/StaggerChildren";
import { useLanguage } from "../../context/LanguageContext";
import { getProcessSteps } from "../../data/processSteps";

export default function ProcessSteps() {
  const { language, t } = useLanguage();
  const steps = getProcessSteps(language);

  return (
    <SectionWrapper bg="navy" className="overflow-hidden">
      <SectionHeading
        eyebrow={t("home", "processEyebrow")}
        title={t("home", "processTitle")}
        subtitle={t("home", "processSubtitle")}
        light
      />

      {/* Desktop horizontal timeline */}
      <StaggerChildren className="hidden lg:block mt-20">
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-6 left-0 right-0 h-px bg-gold-700/30" />

          <div className="grid grid-cols-5 gap-6">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={staggerItem}
                className="relative"
              >
                {/* Step circle */}
                <div className="relative z-10 w-12 h-12 rounded-full border-2 border-gold-700 bg-navy-900 flex items-center justify-center mb-6">
                  <span className="text-sm font-semibold text-gold-400">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-heading text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-navy-300 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </StaggerChildren>

      {/* Mobile vertical timeline */}
      <StaggerChildren className="lg:hidden mt-12 space-y-8">
        {steps.map((step) => (
          <motion.div
            key={step.number}
            variants={staggerItem}
            className="flex gap-5"
          >
            <div className="shrink-0">
              <div className="w-10 h-10 rounded-full border-2 border-gold-700 bg-navy-900 flex items-center justify-center">
                <span className="text-xs font-semibold text-gold-400">
                  {step.number}
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-heading text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-navy-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </StaggerChildren>
    </SectionWrapper>
  );
}
