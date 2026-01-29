import { Button } from "@/components/ui/button";

const agenda = [
  { emoji: "🎤", title: "Opening Keynote", desc: "Where AI Is Going — and Why You Should Care" },
  { emoji: "🎓", title: "Panel: AI in Education", desc: "What's Working Today" },
  { emoji: "🏥", title: "Case Study", desc: "How Hospitals Are Saving Lives with AI" },
  { emoji: "🎬", title: "Demo: Creative Tools", desc: "You've Never Heard Of (But Should)" },
  { emoji: "🛠️", title: "Workshop", desc: "How to Start Using AI Now – Without Losing Your Job" },
  { emoji: "🧭", title: "Live AMA", desc: "Direct answers from the experts" },
];

export const AgendaSection = () => {
  return (
    <section className="py-24 px-4 bg-card relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent -translate-y-1/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
            Schedule
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Agenda <span className="text-primary">Highlights</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {agenda.map((item, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border-gradient card-gradient hover-lift group"
            >
              <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform">
                {item.emoji}
              </span>
              <h3 className="text-lg font-bold mb-2 text-primary">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Every session comes with downloadable takeaways + replay access.
          </p>
          <Button size="lg" className="bg-gradient-mango hover-glow font-bold text-lg px-8 py-6">
            Count Me In
          </Button>
        </div>
      </div>
    </section>
  );
};
