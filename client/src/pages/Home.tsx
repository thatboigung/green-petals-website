import { useState } from "react";
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
  ShoppingCart
} from "lucide-react";
import { Card } from "@/components/ui/card";
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
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { insertInquirySchema, type InsertInquiry, type Product, type Testimonial } from "@shared/schema";
import { useSubmitInquiry } from "@/hooks/use-contact";
import { api } from "@shared/routes";

export default function Home() {
  const mutation = useSubmitInquiry();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const { data: products = [] } = useQuery<Product[]>({
    queryKey: [api.products.list.path],
    queryFn: async () => {
      const res = await fetch(api.products.list.path);
      return res.json();
    },
  });

  const { data: testimonials = [] } = useQuery<Testimonial[]>({
    queryKey: [api.testimonials.list.path],
    queryFn: async () => {
      const res = await fetch(api.testimonials.list.path);
      return res.json();
    },
  });

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

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
                  src="https://images.unsplash.com/photo-1581094794329-cd1361ddee25?q=80&w=2127&auto=format&fit=crop" 
                  alt="Engineer working"
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

      {/* STORE SECTION */}
      <section id="store" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Product Store</span>
            <h2 className="text-4xl font-bold mt-3 mb-4">Premium Equipment & Supplies</h2>
            <p className="text-muted-foreground text-lg">
              Browse our selection of high-quality solar panels, inverters, and electrical equipment.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {["all", "solar_panel", "inverter", "electrical"].map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat)}
                className={selectedCategory === cat ? "bg-primary hover:bg-primary/90" : ""}
              >
                {cat === "all" ? "All Products" : cat === "solar_panel" ? "Solar Panels" : cat === "inverter" ? "Inverters" : "Electrical"}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="bg-muted h-48 flex items-center justify-center">
                    <ShoppingCart className="w-12 h-12 text-muted-foreground/50" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-secondary mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">${(product.price / 100).toFixed(2)}</span>
                      <Button size="sm" variant="default">Add to Cart</Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Client Reviews</span>
            <h2 className="text-4xl font-bold mt-3 mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg">
              Real experiences from our satisfied customers across homes and industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="p-8 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 flex-grow text-lg leading-relaxed">"{testimonial.content}"</p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-secondary">{testimonial.author}</p>
                    {testimonial.position && <p className="text-sm text-muted-foreground">{testimonial.position}</p>}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290354!2d-74.00601!3d40.71282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a27e5ecc8f9%3A0xf81cef2b1eb66c94!2s123%20Industrial%20Ave%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1234567890"
                allowFullScreen=""
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
                    <p className="text-muted-foreground">123 Industrial Ave, Tech District</p>
                    <p className="text-muted-foreground">New York, NY 10001, USA</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-1">Phone</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-1">Email</h4>
                    <p className="text-muted-foreground">contact@greenpetals.com</p>
                    <p className="text-muted-foreground">support@greenpetals.com</p>
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
                        <p className="text-white/60">+1 (555) 123-4567</p>
                        <p className="text-white/60">+1 (555) 987-6543</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-lg">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Email</h4>
                        <p className="text-white/60">contact@greenpetals.com</p>
                        <p className="text-white/60">support@greenpetals.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-lg">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Location</h4>
                        <p className="text-white/60">123 Industrial Ave, Tech District</p>
                        <p className="text-white/60">New York, NY 10001</p>
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
                              <Input placeholder="+1 (555) 000-0000" className="h-12 bg-muted/30" {...field} />
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

      <Footer />
    </div>
  );
}
