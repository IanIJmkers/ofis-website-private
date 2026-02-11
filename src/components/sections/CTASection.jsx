import SectionWrapper from "../layout/SectionWrapper";
import AnimatedSection from "../animation/AnimatedSection";
import Button from "../ui/Button";
import { siteMetadata } from "../../data/siteMetadata";

export default function CTASection({
  title = "Wilt u horen hoe ons 'andere geluid' klinkt?",
  subtitle = "Maak een afspraak met een van onze Private Office specialisten.",
}) {
  return (
    <SectionWrapper bg="navy">
      <AnimatedSection className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white mb-6">
          {title}
        </h2>
        <p className="text-lg text-navy-200 mb-10">{subtitle}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact" variant="primary" size="lg">
            Neem Contact Op
          </Button>
          <Button
            href={siteMetadata.linkedin}
            external
            variant="outline-light"
            size="lg"
          >
            Volg Ons op LinkedIn
          </Button>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
