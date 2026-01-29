import { Button } from "@/components/ui/button";

const industries = [
  { emoji: "🧑‍🏫", title: "Educators & Professors", desc: "Smarter classrooms, better tools, more caffeine" },
  { emoji: "🔬", title: "Scientists & Researchers", desc: "New breakthroughs + fewer dead ends" },
  { emoji: "💼", title: "Business Leaders", desc: "Real strategies. Not another AI hype deck." },
  { emoji: "🎨", title: "Artists & Creators", desc: "From concept to masterpiece — faster" },
  { emoji: "🏛️", title: "Policy Makers", desc: "Regulation that's actually informed" },
  { emoji: "🧠", title: "Everyday Innovators", desc: "Real-life use cases from people doing the work" },
];

export const IndustriesSection = () => {
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
            Who's It For
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Built for <span className="text-primary">Every Industry</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            If you work, this event is for you. You don't have to "speak AI." We'll translate.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border-gradient card-gradient hover-lift group text-center"
            >
              <span className="text-5xl block mb-4 group-hover:scale-125 transition-transform">
                {industry.emoji}
              </span>
              <h3 className="text-lg font-bold mb-2">{industry.title}</h3>
              <p className="text-sm text-muted-foreground">{industry.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-mango hover-glow font-bold text-lg px-8 py-6">
            Sign Up – It's Free
          </Button>
        </div>
      </div>
    </section>
  );
};
