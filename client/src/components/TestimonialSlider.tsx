import * as React from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Aisha Bello",
    role: "Founder, BrightWave",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&q=80",
    text: "GFG helped us refine our brand and boosted our conversions. Professional, creative, and fast.",
  },
  {
    name: "Daniel Kim",
    role: "CMO, NovaTech",
    photo: "https://images.unsplash.com/photo-1545996124-1b6d7f9a2b54?w=96&q=80",
    text: "A talented team that turned our vague ideas into a clear visual identity.",
  },
  {
    name: "Sofia Martinez",
    role: "Product Lead, Lumen",
    photo: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=96&q=80",
    text: "Excellent communication and design sense. Our launch went smoothly thanks to them.",
  },
];

export function TestimonialSlider() {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    const id = setInterval(() => {
      api?.scrollNext();
    }, 4500);

    return () => clearInterval(id);
  }, [api]);

  React.useEffect(() => {
    if (!api) return;

    const update = () => setIndex(api.selectedScrollSnap());
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h3 className="text-primary font-bold tracking-widest text-sm uppercase mb-2">Testimonials</h3>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">What Our Clients Say</h2>
        </div>

        <Carousel setApi={(a) => setApi(a)} className="relative">
          <CarouselContent className="items-stretch">
            {testimonials.map((t, i) => (
              <CarouselItem key={i}>
                <div className="p-8 rounded-2xl bg-zinc-900 border border-white/5 shadow-lg h-full flex flex-col justify-between">
                  <p className="text-white/80 text-lg mb-6">“{t.text}”</p>
                  <div className="flex items-center gap-4">
                    <img src={t.photo} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <div className="text-white font-bold">{t.name}</div>
                      <div className="text-white/60 text-sm">{t.role}</div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => api?.scrollTo(i)}
                className={
                  "w-3 h-3 rounded-full transition-all " +
                  (i === index ? "bg-primary scale-125" : "bg-white/30")
                }
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default TestimonialSlider;
