import { HeroSection } from "@/components/home/HeroSection";
import { WhySection } from "@/components/home/WhySection";
import { WhatYouGetSection } from "@/components/home/WhatYouGetSection";
import { SpeakersSection } from "@/components/home/SpeakersSection";
import { FormatSection } from "@/components/home/FormatSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { AgendaSection } from "@/components/home/AgendaSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { Footer } from "@/components/home/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <WhySection />
      <WhatYouGetSection />
      <SpeakersSection />
      <FormatSection />
      <TestimonialsSection />
      <IndustriesSection />
      <AgendaSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
