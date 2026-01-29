import { Button } from "@/components/ui/button";
import { Calendar, Monitor, Clock, MapPin } from "lucide-react";

const features = [
  { icon: <Calendar className="w-6 h-6" />, text: "First of Every Month", highlight: "Global Livestream" },
  { icon: <Monitor className="w-6 h-6" />, text: "100% online", highlight: null },
  { icon: <Clock className="w-6 h-6" />, text: "Come for one session or binge them all", highlight: null },
  { icon: <MapPin className="w-6 h-6" />, text: "Watch from anywhere", highlight: "(yes, even pants-free)" },
];

export const FormatSection = () => {
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Accent gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Just One Day. <span className="text-primary">Unlimited Insight.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            It's not another webinar. It's a global snapshot of how AI is changing real work, in real time.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border-gradient card-gradient hover-lift text-center group"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {feature.icon}
              </div>
              <p className="font-medium">
                {feature.text}
                {feature.highlight && (
                  <span className="block text-sm text-primary mt-1">{feature.highlight}</span>
                )}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-mango hover-glow font-bold text-lg px-8 py-6">
            Secure Your Free Access
          </Button>
        </div>
      </div>
    </section>
  );
};
