import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I have just received an extraordinarily thorough market analysis of my business LinkedIn profile that has blown me away.",
    author: "Deborah Spring Laurel",
    role: "Training & Curriculum Designer",
  },
  {
    quote: "I finally understood how AI fits into my work. And it wasn't boring!",
    author: "Tayo O.",
    role: "High School Teacher",
  },
  {
    quote: "A great instructional presentation of genuine value to First Nations students introducing the world's oldest storytelling culture with the latest life changing Gen AI technology.",
    author: "Gareth Benson",
    role: "IP & Commercial Lawyer",
  },
  {
    quote: "This wasn't a webinar. It was a revelation.",
    author: "Probably someone smarter than you",
    role: "😉",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 px-4 bg-card relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-hotpink/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            What People Are <span className="text-primary">Saying</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl border-gradient card-gradient hover-lift relative group"
            >
              <Quote className="absolute top-6 left-6 w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
              <p className="text-lg mb-6 pt-8 italic text-foreground/90">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-mango flex items-center justify-center text-lg font-bold">
                  {testimonial.author[0]}
                </div>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl font-medium">
            Join <span className="text-primary font-bold">10,000+</span> attendees from around the world.
          </p>
        </div>
      </div>
    </section>
  );
};
