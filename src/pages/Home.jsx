import PageTransition from "../components/animation/PageTransition";
import HeroSection from "../components/sections/HeroSection";
import StatsBar from "../components/sections/StatsBar";
import ValueProps from "../components/sections/ValueProps";
import PillarsCards from "../components/sections/PillarsCards";
import ProcessSteps from "../components/sections/ProcessSteps";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import TrustBadges from "../components/sections/TrustBadges";
import MobileAppShowcase from "../components/sections/MobileAppShowcase";
import CTASection from "../components/sections/CTASection";

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <StatsBar />
      <ValueProps />
      <PillarsCards />
      <ProcessSteps />
      <TestimonialsSection />
      <TrustBadges />
      <MobileAppShowcase />
      <CTASection />
    </PageTransition>
  );
}
