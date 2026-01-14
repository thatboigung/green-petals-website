import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { 
  Sun, 
  Zap, 
  Shield, 
  Wrench, 
  CheckCircle2, 
  ArrowRight, 
  Phone,
  Mail,
  MapPin,
  Star,
  ShoppingCart,
  Instagram,
  Facebook,
  X
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Link } from "wouter";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { insertInquirySchema, type InsertInquiry, type Product, type Testimonial } from "@shared/schema";
import { useSubmitInquiry } from "@/hooks/use-contact";
import { api } from "@shared/routes";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

function Home() {
  const mutation = useSubmitInquiry();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen]);

  const { data: products = [] } = useQuery<Product[]>({
    queryKey: [api.products.list.path],
  });

  const { data: testimonials = [] } = useQuery<Testimonial[]>({
    queryKey: [api.testimonials.list.path],
  });

  // Map testimonials to provided names and link to project images
  type TestimonialWithProject = Testimonial & { project?: string };
  const testimonialNames = ["Mr Banda", "Mr Mapfumo", "Mama Mai Chichi", "Mai Beauty", "Mr Zimunya"];
  const testimonialProjects = ["Prjct2.jpeg", "Prjct5.jpeg", "Prjct1.jpeg", "Prjct4.jpeg", "Prjct8.jpeg"];

  const enhancedTestimonials = (testimonials && testimonials.length
    ? (testimonials as TestimonialWithProject[]).slice(0, 5).map((t, i) => ({
        ...t,
        author: testimonialNames[i] ?? t.author,
        project: testimonialProjects[i],
      }))
    : testimonialNames.map((name, i) => ({
        id: i + 100,
        createdAt: null,
        author: name,
        position: null,
        content: "Excellent workmanship and timely delivery.",
        rating: 5,
        project: testimonialProjects[i],
      }))) as TestimonialWithProject[];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const suppliers = [
    { name: "Sako", logo: "/logos/sako.webp" },
    { name: "Gainstar", logo: "/logos/gainstar.svg" },
    { name: "Must", logo: "/logos/must.jpg" },
    { name: "Hz", logo: "/logos/hzsolar.svg" },
    { name: "Srne", logo: "/logos/srne.webp" },
    { name: "Deye", logo: "/logos/deye.jpg" },
    { name: "Sumry", logo: "/logos/sumry.webp" },
    { name: "Polaris", logo: "/logos/polaris.svg" },
    { name: "Sunsynk", logo: "/logos/sunsynk.avif" },
    { name: "JA", logo: "/logos/ja-solar.png" },
    { name: "Jinko", logo: "/logos/jinko.png" },
    { name: "Canadian", logo: "/logos/canadian-solar.png" },
    { name: "Sunpro", logo: "/logos/sunpro.jpg" },
  ];

  // Provide a guaranteed fallback as an inline SVG data URL so logos always render even if external sources fail
  const logoFallback = (name: string) => {
    const bg = "#f8fafc"; // light neutral background
    const color = "#111827"; // dark text
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='160'><rect width='100%' height='100%' fill='${bg}'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Inter, Arial, sans-serif' font-size='28' fill='${color}'>${name}</text></svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  };

  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(data: InsertInquiry) {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Unsplash: Solar panels / Engineering */}
          <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
            alt="Solar Panels and Engineering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-90" />
        </div>


        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary-foreground text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Leading Engineering Solutions
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-display">
                Powering Your Future,<br />
                <span className="text-primary-foreground">Securing Your Present</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
                Green Petals Engineering delivers exceptional solar installations, electrical maintenance, and advanced security systems for homes and industries.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white font-semibold h-14 px-8 rounded-full text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 hover:bg-white/20 text-white border-white/20 h-14 px-8 rounded-full text-base backdrop-blur-sm transition-all"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Services
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-0.5 h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Unsplash: Engineer working */}
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop" 
                  alt="Engineer working on solar panels"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-2xl shadow-xl hidden md:block max-w-xs">
                <p className="font-bold text-3xl mb-1">10+</p>
                <p className="text-sm opacity-90">Years of delivering excellence in engineering and maintenance.</p>
              </div>
            </motion.div>

            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-sm">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 leading-tight">
                Engineered for <br/>
                <span className="text-primary">Excellence & Reliability</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                At Green Petals Engineering, we combine technical expertise with eco-friendly innovation. Our mission is to provide sustainable energy solutions and robust security infrastructure that stands the test of time.
              </p>
              <div className="space-y-4">
                {[
                  "Certified Professional Engineers",
                  "24/7 Support & Maintenance",
                  "Eco-friendly Sustainable Solutions",
                  "Advanced Diagnostics Equipment"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-primary/10 p-1 rounded-full">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Our Expertise</span>
            <h2 className="text-4xl font-bold mt-3 mb-4">Comprehensive Services</h2>
            <p className="text-muted-foreground text-lg">
              From renewable energy to home automation, we cover all your engineering needs with precision and care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              icon={Sun}
              title="Solar Systems"
              description="Harness the power of the sun with our custom sizing and installation services for maximum efficiency."
              features={["System Sizing", "Panel Installation", "Inverter Setup", "Battery Backup"]}
              delay={0}
            />
            <ServiceCard 
              icon={Zap}
              title="Electrical"
              description="Complete electrical solutions including boards, distribution, diagnostics, and maintenance."
              features={["Distribution Boards", "Industrial Machinery", "Home Wiring", "Diagnostics"]}
              delay={0.1}
            />
            <ServiceCard 
              icon={Shield}
              title="Security Systems"
              description="Advanced security integration to protect your property with the latest technology."
              features={["CCTV & Alarms", "Motion Sensors", "Electric Fences", "Automated Gates"]}
              delay={0.2}
            />
            <ServiceCard 
              icon={Wrench}
              title="General Works"
              description="Professional general maintenance services to keep your facilities in top condition."
              features={["Plumbing", "Skimming", "Painting", "Tiling"]}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Projects</span>
            <h2 className="text-4xl font-bold mt-3 mb-4">Recent Works Across Harare</h2>
            <p className="text-muted-foreground text-lg">
              A selection of our installations and repairs — solar installations, gate motor systems, electrical fence installation, solar flood lights, solar pumps, telecoms and general repairs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "Prjct1.jpeg", caption: "Mandara — Electric fence installation" },
              { src: "Prjct2.jpeg", caption: "Manresa Park — Project" },
              { src: "Prjct3.jpeg", caption: "Manresa Park — Project" },
              { src: "Prjct4.jpeg", caption: "Dema — Solar-powered floodlights" },
              { src: "Prjct5.jpeg", caption: "Sally Mugabe Heights — Solar installation" },
              { src: "Prjct6.jpeg", caption: "Sally Mugabe Heights — Project" },
              { src: "Prjct7.jpeg", caption: "Manresa Park — Repairs" },
              { src: "Prjct8.jpeg", caption: "Harare — Electrical repairs" },
            ].map((p, i) => (
              <motion.div key={p.src} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div
                  className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer group"
                  onClick={() => { setActiveImage(`/projects/${p.src}`); setLightboxOpen(true); }}
                >
                  <img
                    src={`/projects/${p.src}`}
                    alt={p.caption}
                    className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    role="button"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4">
                    <p className="text-white font-semibold text-sm">{p.caption}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 space-y-6">
            <p className="text-center text-muted-foreground">And many more projects — view our work on social media:</p>

            <div className="flex items-center justify-center gap-4">
              <a href="https://www.instagram.com/green_petals_engineering?igsh=MzRpamQ5a242N2Ns" target="_blank" rel="noreferrer" aria-label="Instagram" className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-white/5 hover:bg-white/10 transition-transform transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary">
                <Instagram className="w-5 h-5 text-primary" />
              </a>

              <a href="https://www.facebook.com/share/1GfdkWzPAq/" target="_blank" rel="noreferrer" aria-label="Facebook" className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-white/5 hover:bg-white/10 transition-transform transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary">
                <Facebook className="w-5 h-5 text-primary" />
              </a>

              <a href="https://www.tiktok.com/@green.petals.engi?_t=ZM-8wNAdYON6JC&_r=1" target="_blank" rel="noreferrer" aria-label="TikTok" className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-white/5 hover:bg-white/10 transition-transform transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary">
                {/* Inline TikTok SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current text-primary" aria-hidden="true">
                  <path d="M16.5 3h2.2V8.1c-.5.2-1 .3-1.5.3-.7 0-1.4-.2-1.9-.5v5.8c0 2.3-1.9 4.2-4.2 4.2-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2c.2 0 .5 0 .7.1V7.7c-.3-.1-.7-.2-1.1-.2-2.1 0-3.8 1.7-3.8 3.8s1.7 3.8 3.8 3.8 3.8-1.7 3.8-3.8V4.5h-1.2V3z" />
                </svg>
              </a>
            </div>

            <div className="flex justify-center">
              <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Request a Quote</Button>
            </div>
          </div>
        </div>
      </section>

      {/* STORE SECTION - FIXED */}
      <section id="store" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Main Suppliers</span>
            <h2 className="text-4xl font-bold mt-3 mb-4">Trusted Brands We Supply</h2>
            <p className="text-muted-foreground text-lg">
              Green Petals Engineering supplies high-quality solar panels, inverters, batteries and system accessories from leading manufacturers — backed by professional installation and after-sales support.
            </p>
          </div>

        

          {/* Marquee Animation - Optional but fixed */}
          <div className="mt-12">
            <p className="text-center text-muted-foreground mb-6">Featured Partners</p>
            <div className="relative overflow-hidden py-6">
              <style>{`
                @keyframes scroll {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                .animate-scroll {
                  animation: scroll 30s linear infinite;
                }
                .animate-scroll:hover {
                  animation-play-state: paused;
                }
              `}</style>
              
              <div className="flex animate-scroll space-x-8">
                {[...suppliers, ...suppliers].map((s, idx) => (
                  <a
                    key={`${s.name}-${idx}`}
                    href={`https://www.google.com/search?q=${encodeURIComponent(s.name)}+solar+inverter`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 flex-shrink-0 w-40 h-28"
                    aria-label={`${s.name} products`}
                  >
                    <img
                      src={s.logo}
                      alt={`${s.name} logo`}
                      className="h-12 w-auto object-contain"
                      onError={(e) => { 
                        const target = e.target as HTMLImageElement; 
                        target.src = logoFallback(s.name); 
                        target.onerror = null; 
                      }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Looking for specific brands or equipment? Contact us for product catalogs and pricing.
            </p>
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-primary/90"
            >
              Request Product Info
              <ShoppingCart className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Client Reviews</span>
            <h2 className="text-4xl font-bold mt-3 mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg">
              Real experiences from our satisfied customers across homes and industries.
            </p>
          </div>

          <Carousel>
            <CarouselContent className="items-stretch">
              {enhancedTestimonials.map((testimonial) => {
                const initials = testimonial.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase();

                return (
                  <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2">
                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                      <Card className="p-8 h-full flex flex-col">
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                          ))}
                        </div>
                        <p className="text-muted-foreground mb-6 flex-grow text-lg leading-relaxed">"{testimonial.content}"</p>
                        <div className="border-t pt-4 flex items-center gap-3">
                          <Avatar className="w-10 h-10">
                            <AvatarFallback className="bg-primary/20 text-primary font-bold">{initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-bold text-secondary">{testimonial.author}</p>
                            {testimonial.position && <p className="text-sm text-muted-foreground">{testimonial.position}</p>}
                            {testimonial.project && (
                              <p className="mt-1 text-sm">
                                <button
                                  className="text-primary underline"
                                  onClick={() => {
                                    setActiveImage(`/projects/${testimonial.project}`);
                                    setLightboxOpen(true);
                                  }}
                                >
                                  View project
                                </button>
                              </p>
                            )}
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            {/* Arrows moved below the carousel and centered */}
            <div className="flex items-center justify-center gap-4 mt-20">
              <CarouselPrevious className="static h-10 w-10" />
              <CarouselNext className="static h-10 w-10" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section id="location" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Find Us</span>
            <h2 className="text-4xl font-bold mt-3 mb-4">Our Location</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl h-96"
            >
           <iframe
  width="100%"
  height="100%"
  frameBorder="0"
  src="https://www.google.com/maps?q=414+Acacia+Road,+Manresa+Park,+Harare,+Zimbabwe&output=embed"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

            </motion.div>

            {/* Location Info */}
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Green Petals Engineering</h3>
                <p className="text-muted-foreground text-lg mb-6">
                  Located in the heart of the tech district, we serve customers throughout the region with cutting-edge engineering solutions.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-1">Address</h4>
                    <p className="text-muted-foreground">414 Acacia road, Manresa Park, Harare, Zimbabwe</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-1">Phone</h4>
                    <p className="text-muted-foreground">+263784932948</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-1">Email</h4>
                    <p className="text-muted-foreground">jshayamunda@yahoo.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <Instagram className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-1">Instagram</h4>
                    <p className="text-muted-foreground"><a href="https://www.instagram.com/green_petals_engineering" target="_blank" rel="noreferrer" className="underline">green_petals_engineering</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <Facebook className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-1">Facebook</h4>
                    <p className="text-muted-foreground"><a href="https://www.facebook.com/greenpetalsengineering" target="_blank" rel="noreferrer" className="underline">green petals engineering</a></p>
                  </div>
                </div>
              </div>

              <Button 
                size="lg"
                className="w-fit bg-primary hover:bg-primary/90 text-white font-semibold h-12 px-8 rounded-full"
              >
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-secondary rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2">
              
              {/* Contact Info Side */}
              <div className="p-10 md:p-16 text-white bg-secondary relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                  <p className="text-white/70 mb-10 text-lg">
                    Ready to start your project? Contact us for a free quote or consultation. Our team is ready to assist you.
                  </p>

                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-lg">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Phone</h4>
                        <p className="text-muted-foreground"> +263 78 493 2948</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-lg">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Email</h4>
                        <p className="text-white/60">jshayamunda@yahoo.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-lg">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Location</h4>
                          <p className="text-muted-foreground">414 Acacia road, Manresa Park,Harare, Zimbabwe</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Side */}
              <div className="bg-white p-10 md:p-16">
                <h3 className="text-2xl font-bold text-secondary mb-6">Send us a Message</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" className="h-12 bg-muted/30" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+263 00 000 0000" className="h-12 bg-muted/30" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" className="h-12 bg-muted/30" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Interested In</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 bg-muted/30">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Solar Systems">Solar Systems</SelectItem>
                              <SelectItem value="Electrical">Electrical Services</SelectItem>
                              <SelectItem value="Security">Security Systems</SelectItem>
                              <SelectItem value="Plumbing">Plumbing & General</SelectItem>
                              <SelectItem value="Other">Other Inquiry</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your project requirements..." 
                              className="min-h-[120px] bg-muted/30 resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full h-12 text-base font-semibold"
                      disabled={mutation.isPending}
                    >
                      {mutation.isPending ? "Sending Inquiry..." : "Submit Inquiry"}
                    </Button>
                  </form>
                </Form>
              </div>

            </div>
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setLightboxOpen(false)}>
          <button
            className="absolute top-6 right-6 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full z-10"
            onClick={(e) => { e.stopPropagation(); setLightboxOpen(false); }}
            aria-label="Close image preview"
          >
            <X className="w-5 h-5" />
          </button>
          <img src={activeImage ?? ""} alt="Preview" className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Home;