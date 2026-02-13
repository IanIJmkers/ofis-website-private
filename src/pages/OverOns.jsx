import { motion } from "motion/react";
import PageTransition from "../components/animation/PageTransition";
import AnimatedSection from "../components/animation/AnimatedSection";
import SectionWrapper from "../components/layout/SectionWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import StaggerChildren, {
  staggerItem,
} from "../components/animation/StaggerChildren";
import CTASection from "../components/sections/CTASection";
import { getTeam } from "../data/team";
import { getRegulators } from "../data/regulators";
import { useLanguage } from "../context/LanguageContext";

export default function OverOns() {
  const { language, t } = useLanguage();
  const team = getTeam(language);
  const regulators = getRegulators(language);

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
            {t("overOns", "heroEyebrow")}
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
            {t("overOns", "heroTitle")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg text-navy-200 leading-relaxed max-w-2xl"
          >
            {t("overOns", "heroDescription")}
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <SectionWrapper bg="cream" size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <AnimatedSection direction="left">
            <SectionHeading
              eyebrow={t("overOns", "storyEyebrow")}
              title={t("overOns", "storyTitle")}
              align="left"
            />
            <div className="space-y-6 text-warm-gray-600 leading-relaxed">
              <p>{t("overOns", "storyP1")}</p>
              <p>{t("overOns", "storyP2")}</p>
              <p>{t("overOns", "storyP3")}</p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.15}>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-card p-8">
                <h3 className="text-lg font-heading text-navy-900 mb-4">
                  {t("overOns", "philosophyTitle")}
                </h3>
                <div className="h-0.75 w-10 bg-gold-700 mb-6" />
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="shrink-0 w-1 bg-gold-700 rounded-full" />
                    <p className="text-warm-gray-600 italic">
                      {t("overOns", "philosophy1")}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="shrink-0 w-1 bg-gold-700 rounded-full" />
                    <p className="text-warm-gray-600 italic">
                      {t("overOns", "philosophy2")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-navy-900 rounded-lg p-8">
                <div className="text-gold-400 text-5xl font-heading mb-2">
                  25+
                </div>
                <p className="text-white font-heading text-lg mb-2">
                  {t("overOns", "specialistsLabel")}
                </p>
                <p className="text-navy-300 text-sm leading-relaxed">
                  {t("overOns", "specialistsDesc")}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Regulators */}
      <SectionWrapper bg="white">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
          <SectionHeading
            eyebrow={t("overOns", "regulatorsEyebrow")}
            title={t("overOns", "regulatorsTitle")}
            subtitle={t("overOns", "regulatorsSubtitle")}
            align="center"
          />
        </AnimatedSection>
        <AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {regulators.map((reg) => (
              <div
                key={reg.abbreviation}
                className="bg-cream rounded-lg p-6 text-center"
              >
                <div className="text-2xl font-heading text-navy-900 mb-2">
                  {reg.abbreviation}
                </div>
                <p className="text-xs text-warm-gray-500">{reg.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper bg="cream">
        <SectionHeading
          eyebrow={t("overOns", "teamEyebrow")}
          title={t("overOns", "teamTitle")}
          subtitle={t("overOns", "teamSubtitle")}
          align="center"
        />

        <StaggerChildren className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={staggerItem}
              className="bg-white border border-warm-gray-100 rounded-lg p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 text-center group"
            >
              {/* Photo or initials fallback */}
              {member.photo ? (
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto ring-2 ring-warm-gray-100 group-hover:ring-gold-700 transition-all duration-300">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-32 h-32 rounded-full bg-navy-900 flex items-center justify-center mx-auto group-hover:bg-navy-800 transition-colors duration-300">
                  <span className="text-3xl font-heading text-gold-400">
                    {member.name
                      .split(" ")
                      .filter((_, i, arr) => i === 0 || i === arr.length - 1)
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()}
                  </span>
                </div>
              )}

              {/* Name & Role */}
              <h3 className="mt-6 text-xl font-heading text-navy-900">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-body font-semibold text-gold-700 uppercase tracking-wider">
                {member.role}
              </p>

              {/* Divider */}
              {(member.email || member.phone || member.linkedin) && (
                <div className="mt-6 h-px bg-warm-gray-100" />
              )}

              {/* Contact Info */}
              {(member.email || member.phone || member.linkedin) && (
                <div className="mt-6 space-y-3">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center justify-center gap-2 text-sm text-warm-gray-500 hover:text-navy-900 transition-colors"
                    >
                      <svg
                        className="w-4 h-4 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                      <span className="truncate">{member.email}</span>
                    </a>
                  )}
                  {member.phone && (
                    <a
                      href={`tel:${member.phone.replace(/\s/g, "")}`}
                      className="flex items-center justify-center gap-2 text-sm text-warm-gray-500 hover:text-navy-900 transition-colors"
                    >
                      <svg
                        className="w-4 h-4 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                      <span>{member.phone}</span>
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-sm text-warm-gray-500 hover:text-navy-900 transition-colors"
                    >
                      <svg
                        className="w-4 h-4 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <span>LinkedIn</span>
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </StaggerChildren>
      </SectionWrapper>

      <CTASection />
    </PageTransition>
  );
}
