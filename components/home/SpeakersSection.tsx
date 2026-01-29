import { Button } from "@/components/ui/button";
import { Mic, ArrowRight } from "lucide-react";

const speakers = [
  {
    name: "Isaac T Cohen",
    role: "Data Economist & AI Builder",
    emoji: "📊",
  },
  {
    name: "Dr. Mark Williams",
    role: "Professor of Cognitive Neuroscience",
    emoji: "🧠",
  },
  {
    name: "Anthony Drury",
    role: "Where enterprise meets execution",
    emoji: "🚀",
  },
];

export const SpeakersSection = () => {
  return (
    <section className="py-24 px-4 bg-card relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
            Featured Speakers
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            The smartest people <span className="text-primary">you haven't met yet.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Featuring a global lineup of scientists, CEOs, teachers, artists, and everyday innovators.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {speakers.map((speaker, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl border-gradient card-gradient hover-lift group text-center"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-mango flex items-center justify-center text-5xl group-hover:scale-110 transition-transform">
                {speaker.emoji}
              </div>
              <h3 className="text-xl font-bold mb-2">{speaker.name}</h3>
              <p className="text-muted-foreground text-sm">{speaker.role}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            …and <span className="text-primary font-bold">300+ more</span> people with insights you can steal immediately.
          </p>
          <p className="text-lg font-medium mb-8">
            Every talk is practical, to-the-point, and completely buzzword-free.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-mango hover-glow font-bold">
              Yes, I Want In
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 font-bold group">
              <Mic className="w-5 h-5 mr-2" />
              Become a Speaker
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
