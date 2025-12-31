"use client";

import MarketingHeader from "./components/MarketingHeader";
import MarketingFooter from "./components/MarketingFooter";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import FeaturesSection from "./components/FeaturesSection";
import AudienceSection from "./components/AudienceSection";
import ClaritySection from "./components/ClaritySection";
import CTASection from "./components/CTASection";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-bg-deep">
      <MarketingHeader />

      <main>
        <HeroSection />
        <ProblemSection />
        <FeaturesSection />
        <AudienceSection />
        <ClaritySection />
        <CTASection />
      </main>

      <MarketingFooter />
    </div>
  );
}
