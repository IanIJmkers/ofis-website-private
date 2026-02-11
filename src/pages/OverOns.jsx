import { motion } from "motion/react";
import PageTransition from "../components/animation/PageTransition";
import AnimatedSection from "../components/animation/AnimatedSection";
import SectionWrapper from "../components/layout/SectionWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import StaggerChildren, {
  staggerItem,
} from "../components/animation/StaggerChildren";
import CTASection from "../components/sections/CTASection";
import { team } from "../data/team";

export default function OverOns() {
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
            Over Ons
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
            Een ander geluid
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg text-navy-200 leading-relaxed max-w-2xl"
          >
            Orchestra Private werd eind 2012 opgericht met de intentie om een
            ander geluid te laten horen in vermogensbeheer.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <SectionWrapper bg="cream" size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <AnimatedSection direction="left">
            <SectionHeading
              eyebrow="Ons Verhaal"
              title="Meer dan beleggen alleen"
              align="left"
            />
            <div className="space-y-6 text-warm-gray-600 leading-relaxed">
              <p>
                Vermogensbeheer omvat veel meer dan de beurs alleen. Het verschil
                tussen beheerd vermogen en beheerst vermogen is wezenlijk. Orchestra
                Private biedt persoonlijke begeleiding bij onverwachte
                levensgebeurtenissen, maar ook lange termijn planning.
              </p>
              <p>
                Wij helpen bij het oprichten van familiefondsen, de overdracht van
                familievermogen en bieden via ons platform Mijn Orchestra
                geïntegreerd overzicht, controle en transparantie over uw bezit.
              </p>
              <p>
                Vandaag de dag werken meer dan 25 specialisten bij Orchestra,
                waaronder portfoliomanagers, registeraccountants, administratieve
                controllers en toegewijde vertrouwde adviseurs.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.15}>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-card p-8">
                <h3 className="text-lg font-heading text-navy-900 mb-4">
                  Onze Filosofie
                </h3>
                <div className="h-0.75 w-10 bg-gold-700 mb-6" />
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="shrink-0 w-1 bg-gold-700 rounded-full" />
                    <p className="text-warm-gray-600 italic">
                      Servicegericht, maar niet serviel
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="shrink-0 w-1 bg-gold-700 rounded-full" />
                    <p className="text-warm-gray-600 italic">
                      Prudent, maar ook proactief
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-navy-900 rounded-lg p-8">
                <div className="text-gold-400 text-5xl font-heading mb-2">
                  25+
                </div>
                <p className="text-white font-heading text-lg mb-2">
                  Specialisten
                </p>
                <p className="text-navy-300 text-sm leading-relaxed">
                  Portfoliomanagers, registeraccountants, administratieve
                  controllers en vertrouwde adviseurs.
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
            eyebrow="Toezicht"
            title="Onder toezicht van vijf instanties"
            subtitle="Orchestra opereert onder toezicht van de relevante toezichthouders, wat uw vermogen de bescherming biedt die het verdient."
            align="center"
          />
        </AnimatedSection>
        <AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                abbr: "DNB",
                name: "De Nederlandsche Bank",
                desc: "Prudentieel toezicht",
              },
              {
                abbr: "AFM",
                name: "Autoriteit Financiële Markten",
                desc: "Gedragstoezicht",
              },
              {
                abbr: "AP",
                name: "Autoriteit Persoonsgegevens",
                desc: "Privacy & databescherming",
              },
              {
                abbr: "DSI",
                name: "Dutch Securities Institute",
                desc: "Professionele standaarden",
              },
              {
                abbr: "KiFid",
                name: "Klachteninstituut Financiële Dienstverlening",
                desc: "Klachtenbehandeling",
              },
            ].map((reg) => (
              <div
                key={reg.abbr}
                className="bg-cream rounded-lg p-6 text-center"
              >
                <div className="text-2xl font-heading text-navy-900 mb-2">
                  {reg.abbr}
                </div>
                <p className="text-xs text-warm-gray-500">{reg.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper bg="cream">
        <SectionHeading
          eyebrow="Ons Team"
          title="De mensen achter Orchestra"
          subtitle="Een team van ervaren specialisten dat zich inzet voor het beheerst houden van uw vermogen."
          align="center"
        />

        <StaggerChildren className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={staggerItem}
              className="bg-white rounded-lg shadow-card p-6 text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-navy-100 flex items-center justify-center mb-4">
                <span className="text-xl font-heading text-navy-700">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </span>
              </div>
              <h3 className="text-lg font-heading text-navy-900 mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-gold-700 font-medium mb-4">
                {member.role}
              </p>
              <div className="space-y-1 text-xs text-warm-gray-500">
                <p>
                  <a
                    href={`mailto:${member.email}`}
                    className="hover:text-gold-700 transition-colors"
                  >
                    {member.email}
                  </a>
                </p>
                <p>
                  <a
                    href={`tel:${member.phone.replace(/\s/g, "")}`}
                    className="hover:text-gold-700 transition-colors"
                  >
                    {member.phone}
                  </a>
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </SectionWrapper>

      <CTASection />
    </PageTransition>
  );
}
