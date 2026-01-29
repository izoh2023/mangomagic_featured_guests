import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const benefits = [
  { emoji: "📊", text: "Real-world case studies" },
  { emoji: "🎙️", text: "Industry-specific interviews" },
  { emoji: "📦", text: "Toolkits and cheat sheets" },
  { emoji: "🎓", text: "Sessions for beginners and experts" },
  { emoji: "🔄", text: "Instant replays (for when life happens)" },
];

export const WhatYouGetSection = () => {
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
          What's Included
        </span>
        <h2 className="text-4xl md:text-5xl font-black mb-4">
          No jargon. No fluff. <span className="text-primary">Just the good stuff.</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          This is your shortcut to using AI confidently, not just admiring it from a distance.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-5 rounded-xl border-gradient card-gradient hover-lift text-left group"
            >
              <span className="text-3xl group-hover:scale-125 transition-transform">{benefit.emoji}</span>
              <span className="font-medium">{benefit.text}</span>
            </div>
          ))}
          <div className="flex items-center gap-4 p-5 rounded-xl bg-primary/10 border border-primary/30 text-left group hover-lift">
            <Check className="w-8 h-8 text-primary" />
            <span className="font-bold text-primary">100% Free Access</span>
          </div>
        </div>

        <Button size="lg" className="bg-gradient-mango hover-glow font-bold text-lg px-8 py-6">
          Register for MangoMagic Live
        </Button>
      </div>
    </section>
  );
};
