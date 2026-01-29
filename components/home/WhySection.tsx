import { Button } from "@/components/ui/button";
import { Zap, Users, Globe, TrendingUp } from "lucide-react";

export const WhySection = () => {
  return (
    <section className="py-24 px-4 bg-card relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              AI is everywhere.<br />
              <span className="text-primary">But not everyone's using it well.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              This event brings together the people who are — and who aren't just talking, 
              <span className="text-foreground font-semibold"> they're doing.</span>
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <StatCard icon={<Users className="w-6 h-6" />} number="300+" label="Speakers" />
              <StatCard icon={<Globe className="w-6 h-6" />} number="20+" label="Countries" />
              <StatCard icon={<TrendingUp className="w-6 h-6" />} number="10K+" label="Attendees" />
              <StatCard icon={<Zap className="w-6 h-6" />} number="100%" label="Free Access" />
            </div>

            <Button size="lg" className="bg-gradient-mango hover-glow font-bold">
              Save My Spot – It's Free
            </Button>
          </div>

          {/* Right content - Feature cards */}
          <div className="space-y-4">
            <FeatureCard 
              emoji="📖" 
              title="Real stories" 
              description="Not hypotheticals. Actual case studies from real companies."
            />
            <FeatureCard 
              emoji="🛠️" 
              title="Real tools" 
              description="Toolkits and cheat sheets you can use immediately."
            />
            <FeatureCard 
              emoji="💥" 
              title="Real impact" 
              description="Measurable results, not marketing fluff."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ icon, number, label }: { icon: React.ReactNode; number: string; label: string }) => (
  <div className="p-4 rounded-xl border-gradient card-gradient hover-lift">
    <div className="text-primary mb-2">{icon}</div>
    <div className="text-3xl font-black text-primary">{number}</div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </div>
);

const FeatureCard = ({ emoji, title, description }: { emoji: string; title: string; description: string }) => (
  <div className="flex gap-4 p-6 rounded-xl border-gradient card-gradient hover-lift group">
    <span className="text-4xl group-hover:scale-110 transition-transform">{emoji}</span>
    <div>
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);
