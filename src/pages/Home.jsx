import PageTransition from "../components/animation/PageTransition";
import HeroSection from "../components/sections/HeroSection";
import CategorySection from "../components/sections/CategorySection";
import StatsBar from "../components/sections/StatsBar";
import InvestmentPhilosophySection from "../components/sections/InvestmentPhilosophySection";
import ValueProps from "../components/sections/ValueProps";
import FeeLogicSection from "../components/sections/FeeLogicSection";
import FrictionAcknowledgementSection from "../components/sections/FrictionAcknowledgementSection";
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
      <CategorySection />
      <StatsBar />
      <InvestmentPhilosophySection />
      <ValueProps />
      <FeeLogicSection />
      <FrictionAcknowledgementSection />
      <PillarsCards />
      <ProcessSteps />
      <TestimonialsSection />
      <TrustBadges />
      <MobileAppShowcase />
      <CTASection />
    </PageTransition>
  );
}
