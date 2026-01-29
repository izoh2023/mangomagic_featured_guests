import { Button } from "@/components/ui/button";
import { Calendar, Globe, Sparkles, ChevronDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-hero overflow-hidden px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-hotpink/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm animate-fade-in">
          <Calendar className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">First of Every Month — Online & Free</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="text-gradient-mango glow-text">MangoMagic</span>
          <span className="text-foreground">Live</span>
        </h1>

        {/* Subheadline */}
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          One Global AI Event. <span className="text-primary">Hundreds of Minds.</span> Zero Excuses.
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Discover how 300+ innovators, scientists, educators, and creators are actually using AI 
          to transform the world — from classrooms and boardrooms to hospitals and film studios.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8 mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="font-bold">300+ speakers</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-electric" />
            <span className="font-bold">20+ countries</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🧠</span>
            <span className="font-bold">Real impact</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <Button 
            size="lg" 
            className="bg-gradient-mango hover-glow text-lg px-8 py-6 font-bold animate-pulse-glow"
          >
            🎟️ Claim Your Free Pass
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/50 hover:bg-primary/10 text-lg px-8 py-6 font-bold"
          >
            Watch Past Events
          </Button>
        </div>

        {/* Trust line */}
        <p className="mt-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.6s" }}>
          Sign up today. Your future self (and probably your boss) will thank you.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <ChevronDown className="w-8 h-8 text-primary/50" />
      </div>
    </section>
  );
};
