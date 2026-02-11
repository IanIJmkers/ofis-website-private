import { motion } from "motion/react";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import StaggerChildren, { staggerItem } from "../animation/StaggerChildren";
import { pillars } from "../../data/pillars";
import { Link } from "react-router";

const icons = {
  governance: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  ),
  "wealth-management": (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  orchestration: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
    </svg>
  ),
};

export default function PillarsCards() {
  return (
    <SectionWrapper bg="white">
      <SectionHeading
        eyebrow="Drie Pijlers"
        title="Uw Private Office op drie pijlers"
        subtitle="Governance, vermogensbeheer en orkestratie — drie onderling verbonden pijlers die uw vermogen beheerst houden."
      />

      <StaggerChildren className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {pillars.map((pillar) => (
          <motion.div key={pillar.id} variants={staggerItem}>
            <Link
              to="/uw-private-office"
              className="group block h-full"
            >
              <div className="bg-white border border-warm-gray-100 border-t-4 border-t-gold-700 rounded-lg p-8 lg:p-10 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="text-gold-700 mb-6">
                  {icons[pillar.icon]}
                </div>
                <h3 className="text-2xl font-heading text-navy-900 mb-4 group-hover:text-gold-700 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-warm-gray-500 leading-relaxed grow">
                  {pillar.shortDescription}
                </p>
                <div className="mt-6 pt-5 border-t border-warm-gray-100">
                  <span className="text-sm font-semibold text-navy-900 tracking-wider uppercase group-hover:text-gold-700 transition-colors">
                    Meer informatie &rarr;
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </StaggerChildren>
    </SectionWrapper>
  );
}
