import PageTransition from "../components/animation/PageTransition";
import HeroSection from "../components/sections/HeroSection";
import EssenceSection from "../components/sections/EssenceSection";
import TrustBadges from "../components/sections/TrustBadges";
import CTASection from "../components/sections/CTASection";

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <EssenceSection />
      <TrustBadges />
      <CTASection />
    </PageTransition>
  );
}
