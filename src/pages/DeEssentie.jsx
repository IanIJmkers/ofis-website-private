import { motion } from "motion/react";
import PageTransition from "../components/animation/PageTransition";
import AnimatedSection from "../components/animation/AnimatedSection";
import SectionWrapper from "../components/layout/SectionWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import CTASection from "../components/sections/CTASection";

export default function DeEssentie() {
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
            De Essentie
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading text-white leading-[1.1] mb-6"
          >
            Beheerste controle over uw gehele vermogen
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg text-navy-200 leading-relaxed max-w-2xl"
          >
            Vermogensbeheer omvat veel meer dan beleggen alleen. Orchestra
            Private biedt u een persoonlijk kantoor voor elk aspect van uw
            vermogen, uw familie en uw ambities.
          </motion.p>
        </div>
      </section>

      {/* Core philosophy */}
      <SectionWrapper bg="cream" size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <AnimatedSection direction="left">
            <SectionHeading
              eyebrow="Onze Visie"
              title="Beheerst, niet alleen beheerd"
              align="left"
            />
            <div className="space-y-6 text-warm-gray-600 leading-relaxed">
              <p>
                Er is een wezenlijk verschil tussen beheerd vermogen en beheerst
                vermogen. Bij Orchestra Private gaat het om dat laatste: volledige
                controle over uw vermogen, uw familie, uw ambities maar ook uw
                gemoedsrust.
              </p>
              <p>
                Wij zijn geen traditionele vermogensbeheerder die stopt bij het
                beheren van uw beleggingsportefeuille. Orchestra Private
                orchestreert actief alle onderdelen van uw vermogen — vandaag en
                in de toekomst.
              </p>
              <p>
                Zie het als een waakvlam onder uw vermogen: altijd aanwezig,
                altijd waakzaam, zodat al uw belangen beschermd en beheerd
                worden.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.15}>
            <div className="bg-white rounded-lg shadow-card p-8 lg:p-10">
              <div className="h-0.75 w-10 bg-gold-700 mb-6" />
              <h3 className="text-2xl font-heading text-navy-900 mb-6">
                Vast jaarlijks tarief
              </h3>
              <p className="text-warm-gray-600 leading-relaxed mb-6">
                Wij hanteren een vast jaarlijks tarief. Geen uurtarieven, geen
                percentages over uw vermogen, geen verborgen kosten. Dit elimineert
                ieder financieel belangenconflict in onze adviesrelatie.
              </p>
              <p className="text-warm-gray-600 leading-relaxed mb-8">
                U weet vooraf precies wat u betaalt. Transparant, eerlijk en
                zonder verrassingen.
              </p>
              <div className="pt-6 border-t border-warm-gray-100">
                <Button href="/contact" variant="primary" size="md">
                  Vraag een Gesprek Aan
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Quote section */}
      <SectionWrapper bg="white">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <div className="h-0.75 w-16 bg-gold-700 mx-auto mb-8" />
          <blockquote className="text-2xl sm:text-3xl font-heading text-navy-900 leading-snug mb-6">
            &ldquo;Wij nodigen u uit om te verkennen of onze dienstverlening past
            bij uw situatie. Dat geldt ook voor wie een second opinion zoekt over
            bestaand vermogensbeheer.&rdquo;
          </blockquote>
          <p className="text-warm-gray-500 font-semibold">
            Roderik Bolle
          </p>
          <p className="text-sm text-warm-gray-400">Managing Director</p>
        </AnimatedSection>
      </SectionWrapper>

      {/* Exploration process */}
      <SectionWrapper bg="cream">
        <SectionHeading
          eyebrow="Het Proces"
          title="Verkenning & herkenning"
          subtitle="Onze samenwerking begint met een open verkenning. Wij nemen de tijd om uw situatie te begrijpen en samen te bepalen of er een klik is."
          align="center"
        />
        <AnimatedSection className="mt-12 max-w-2xl mx-auto">
          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="shrink-0 w-10 h-10 rounded-full bg-gold-700 text-white flex items-center justify-center text-sm font-semibold">
                1
              </div>
              <div>
                <h3 className="text-lg font-heading text-navy-900 mb-2">
                  Kennismaking
                </h3>
                <p className="text-warm-gray-500 leading-relaxed">
                  Een open gesprek zonder verplichtingen. Wij luisteren naar uw
                  situatie, uw wensen en uw zorgen.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="shrink-0 w-10 h-10 rounded-full bg-gold-700 text-white flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <div>
                <h3 className="text-lg font-heading text-navy-900 mb-2">
                  Verkenning
                </h3>
                <p className="text-warm-gray-500 leading-relaxed">
                  Wij brengen uw volledige vermogenssituatie in kaart en
                  identificeren waar Orchestra waarde kan toevoegen.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="shrink-0 w-10 h-10 rounded-full bg-gold-700 text-white flex items-center justify-center text-sm font-semibold">
                3
              </div>
              <div>
                <h3 className="text-lg font-heading text-navy-900 mb-2">
                  Voorstel
                </h3>
                <p className="text-warm-gray-500 leading-relaxed">
                  U ontvangt een helder voorstel met een vast jaarlijks tarief.
                  Geen verrassingen, geen verplichtingen.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </SectionWrapper>

      <CTASection
        title="Wilt u verkennen of Orchestra bij u past?"
        subtitle="Neem vrijblijvend contact op voor een persoonlijk gesprek."
      />
    </PageTransition>
  );
}
