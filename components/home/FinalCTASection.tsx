import { Button } from "@/components/ui/button";
import { Eye, Rocket } from "lucide-react";

export const FinalCTASection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-hero relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-hotpink/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            You've Got <span className="text-primary">Two Options</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
            <div className="p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
              <Eye className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg text-muted-foreground">
                Watch the future unfold from the sidelines
              </p>
            </div>
            <div className="p-8 rounded-2xl border-2 border-primary bg-primary/10 backdrop-blur-sm glow-mango">
              <Rocket className="w-12 h-12 mx-auto mb-4 text-primary" />
              <p className="text-lg font-bold">
                Or be part of it on the first of the month
              </p>
            </div>
          </div>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            This is the event you'll wish you'd attended. So just... attend it.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 text-muted-foreground">
            <span className="px-4 py-2 rounded-full bg-card/50 border border-border/30">✓ No jargon</span>
            <span className="px-4 py-2 rounded-full bg-card/50 border border-border/30">✓ No fluff</span>
            <span className="px-4 py-2 rounded-full bg-card/50 border border-border/30">✓ No pitch decks</span>
          </div>

          <p className="text-lg mb-2 font-medium">
            Just hundreds of smart people sharing what actually works
          </p>
          <p className="text-2xl font-bold text-primary mb-8">
            MangoMagic Live — First of Every Month
          </p>

          <h3 className="text-3xl md:text-4xl font-black mb-8">
            One Day. All the Insight. <span className="text-primary">None of the BS.</span>
          </h3>

          <Button 
            size="lg" 
            className="bg-gradient-mango hover-glow font-bold text-xl px-12 py-8 animate-pulse-glow"
          >
            🚀 Save My Spot Now
          </Button>
        </div>
      </div>
    </section>
  );
};
