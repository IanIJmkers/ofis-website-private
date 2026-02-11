import { motion } from "motion/react";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import StaggerChildren, { staggerItem } from "../animation/StaggerChildren";
import { testimonials } from "../../data/testimonials";

export default function TestimonialsSection() {
  return (
    <SectionWrapper bg="cream">
      <SectionHeading
        eyebrow="Onze Klanten"
        title="Vertrouwd door onze cliënten"
        subtitle="Lees wat onze klanten zeggen over de samenwerking met Orchestra."
      />

      <StaggerChildren className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={staggerItem}
            className="bg-white rounded-lg p-8 lg:p-10 border border-warm-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300"
          >
            {/* Quote mark */}
            <span className="block text-5xl font-heading text-gold-700/30 leading-none mb-4">
              &ldquo;
            </span>

            <blockquote className="text-navy-900 font-heading text-lg italic leading-relaxed mb-6">
              {testimonial.quote}
            </blockquote>

            <div className="h-px bg-gold-700/20 mb-4" />

            <div>
              <div className="text-sm font-semibold text-navy-900">
                {testimonial.name}
              </div>
              <div className="text-sm text-warm-gray-400">
                {testimonial.organization}
              </div>
            </div>
          </motion.div>
        ))}
      </StaggerChildren>
    </SectionWrapper>
  );
}
