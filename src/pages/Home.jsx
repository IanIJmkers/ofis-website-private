import PageTransition from "../components/animation/PageTransition";
import HeroSection from "../components/sections/HeroSection";
import CategorySection from "../components/sections/CategorySection";
import InvestmentPhilosophySection from "../components/sections/InvestmentPhilosophySection";
import EssenceSection from "../components/sections/EssenceSection";
import FeeLogicSection from "../components/sections/FeeLogicSection";
import FrictionAcknowledgementSection from "../components/sections/FrictionAcknowledgementSection";
import TrustBadges from "../components/sections/TrustBadges";
import CTASection from "../components/sections/CTASection";

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <CategorySection />
      <InvestmentPhilosophySection />
      <EssenceSection />
      <FeeLogicSection variant="home" bg="white" />
      <FrictionAcknowledgementSection />
      <TrustBadges />
      <CTASection />
    </PageTransition>
  );
}
