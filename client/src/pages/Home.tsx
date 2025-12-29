import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, TrendingUp, Award, Palette, BarChart3, Camera, Code2, Globe, Layout, Calendar, Server, ShieldCheck, Settings } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import TestimonialSlider from "@/components/TestimonialSlider";

export default function Home() {
  const [location] = useLocation();

  useEffect(() => {
    if (location.includes('#')) {
      const id = location.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location]);

  // Console typewriter messages (fast)
  useEffect(() => {
    const messages = [
      "Make customers care about what your product does for them.",
      "Clarity sells. Confusion kills deals.",
      "We turn attention into revenue — fast.",
      "Free hosting, security, maintenance & domain on select plans.",
      "Let’s build something that actually moves the needle."
    ];

    const typeSpeed = 18; // ms per character (fast)
    let cancelled = false;

    async function typeMessage(msg: string) {
      console.clear();
      let line = "";
      for (let i = 0; i < msg.length; i++) {
        if (cancelled) return;
        line += msg[i];
        // Overwrite console by clearing and logging current
        console.clear();
        console.log(line);
        // small pause per character
        await new Promise((r) => setTimeout(r, typeSpeed));
      }
    }

    (async () => {
      for (const m of messages) {
        if (cancelled) break;
        await typeMessage(m);
        // keep message briefly
        await new Promise((r) => setTimeout(r, 600));
      }
      // final message stays
    })();

    return () => { cancelled = true; };
  }, []);

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0">
          {/* Background Image with Dark Wash */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] scale-110 hover:scale-100"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/50 to-black/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-black/90" />
          
          {/* Animated Geometric Shapes */}
          <div className="absolute top-10 right-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-20 left-5 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
          
          {/* Noise Texture */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        </div>

        <div className="container relative z-10 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex justify-center space-x-4 md:space-x-12"
          >
            {['GFG', 'Studios', ''].map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.2, duration: 0.8, type: "spring" }}
                className="text-[2rem] md:text-[8rem] font-display font-black leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-white/80 to-white/20 drop-shadow-2xl"
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-2xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight"
          >
           Unleash Creativity <span className="text-primary"> & Elevate Your Brand</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-white/60 text-sm md:text-lg max-w-3xl mx-auto mb-12"
          >
            We focus on measurable outcomes: more customers, higher conversions, and predictable growth. We deliver value that your customers notice — and pay for.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact">
              <button className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-white transition-colors flex items-center gap-2 group shadow-lg shadow-primary/25">
                Start Your Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/portfolio">
              <button className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm">
                View Our Work
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-zinc-950/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">What You'll Get</h2>
            <p className="text-white/60">Real results that impact your bottom line and accelerate your growth. We build things that actually move the needle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-zinc-900 border border-white/5 hover:border-primary/30 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Unforgettable Recognition</h3>
              <p className="text-white/60 text-sm">Your brand becomes memorable. Customers immediately recognize and trust you over competitors. You command premium pricing and loyalty.</p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-900 border border-white/5 hover:border-primary/30 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Consistent Growth</h3>
              <p className="text-white/60 text-sm">More leads. Higher conversion rates. Stronger customer loyalty. Your business grows predictably while your competition stays stagnant.</p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-900 border border-white/5 hover:border-primary/30 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Faster Results</h3>
              <p className="text-white/60 text-sm">Stop wasting time and money on ineffective marketing. Get visible. Get noticed. Get customers. Achieve your goals in months, not years.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Packages */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-primary font-bold tracking-widest text-sm uppercase mb-2">Included</h3>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Free With Every Project</h2>
            <p className="text-white/60">Hosting, security, maintenance, and domain — included on select plans so you can launch without extra friction.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-zinc-900 border border-white/5 text-center">
              <div className="mx-auto w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary"><Server className="w-5 h-5" /></div>
              <h4 className="text-white font-bold">Free Hosting</h4>
              <p className="text-white/60 text-sm">Fast, secure hosting for your site or app.</p>
            </div>
            <div className="p-6 rounded-xl bg-zinc-900 border border-white/5 text-center">
              <div className="mx-auto w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary"><ShieldCheck className="w-5 h-5" /></div>
              <h4 className="text-white font-bold">Security</h4>
              <p className="text-white/60 text-sm">Managed security updates and vulnerability checks.</p>
            </div>
            <div className="p-6 rounded-xl bg-zinc-900 border border-white/5 text-center">
              <div className="mx-auto w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary"><Settings className="w-5 h-5" /></div>
              <h4 className="text-white font-bold">Maintenance</h4>
              <p className="text-white/60 text-sm">Ongoing maintenance and small updates included.</p>
            </div>
            <div className="p-6 rounded-xl bg-zinc-900 border border-white/5 text-center">
              <div className="mx-auto w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary"><Globe className="w-5 h-5" /></div>
              <h4 className="text-white font-bold">Domain</h4>
              <p className="text-white/60 text-sm">Domain registration or transfer support on launch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">Your Solutions</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white">How We Help You Win</h2>
            </div>
            <Link href="/pricing">
              <button className="hidden md:flex items-center gap-2 text-white hover:text-primary transition-colors pb-2 border-b border-white/20 hover:border-primary">
                View Pricing <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/service/branding">
              <ServiceCard 
                icon={Palette}
                title="Brand Identity That Sells"
                description="Your brand becomes instantly recognizable and trusted. Customers choose you over competitors."
                items={["Premium Positioning", "Loyal Customer Base", "Higher Profit Margins"]}
                delay={0}
              />
            </Link>
            <Link href="/service/marketing">
              <ServiceCard 
                icon={BarChart3}
                title="Marketing That Converts"
                description="Consistent flow of qualified leads that turn into paying customers and repeat business."
                items={["More Revenue", "Lower Ad Costs", "Growing Customer Base"]}
                delay={0.1}
              />
            </Link>
            <Link href="/service/media">
              <ServiceCard 
                icon={Layout}
                title="Visuals That Capture Attention"
                description="Your message cuts through the noise and stays in people's minds. They remember you."
                items={["Stand Out Online", "Boost Engagement", "Build Authority"]}
                delay={0.2}
              />
            </Link>
            <Link href="/service/media">
              <ServiceCard 
                icon={Camera}
                title="Content That Builds Trust"
                description="Your story becomes compelling. People feel connected to your brand and want to do business with you."
                items={["Stronger Connections", "More Shares & Referrals", "Social Proof"]}
                delay={0.3}
              />
            </Link>
            <Link href="/service/web-development">
              <ServiceCard 
                icon={Code2}
                title="Websites That Work"
                description="Your site doesn't just look beautiful—it converts visitors into customers while you sleep."
                items={["24/7 Sales Machine", "Zero Friction", "Fast Decisions"]}
                delay={0.4}
              />
            </Link>
            <Link href="/service/app-development">
              <ServiceCard 
                icon={Globe}
                title="Apps That Scale"
                description="Your app becomes indispensable to your customers. Recurring revenue. Loyal users. Growth on demand."
                items={["Recurring Revenue", "Customer Lock-In", "Market Dominance"]}
                delay={0.5}
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Our Portfolio</h2>
            <p className="text-white/60 max-w-2xl mx-auto">A selection of our recent work across branding, photography, and digital design.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Using Unsplash images as placeholders for missing assets */}
            {/* tech workspace dark setup */}
            <Link href="/portfolio">
              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" 
                  alt="Workspace Design" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Office Branding</h4>
                    <p className="text-primary text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Interior & Identity</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* neon abstract shapes */}
            <Link href="/portfolio">
              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80" 
                  alt="Cyberpunk Art" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Digital Art</h4>
                    <p className="text-primary text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">3D & Motion</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* modern camera lens */}
            <Link href="/portfolio">
              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80" 
                  alt="Photography" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Product Shoot</h4>
                    <p className="text-primary text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Photography</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* minimalist web interface */}
            <Link href="/portfolio">
              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80" 
                  alt="Web Interface" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">E-Commerce UI</h4>
                    <p className="text-primary text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Web Design</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* brand guidelines book */}
            <Link href="/portfolio">
              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80" 
                  alt="Brand Identity" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Corporate Identity</h4>
                    <p className="text-primary text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Branding</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* creative meeting */}
            <Link href="/portfolio">
              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80" 
                  alt="Strategy" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Growth Strategy</h4>
                    <p className="text-primary text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Marketing</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">Visionary Behind</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Tapuwa P Mapfumo</h2>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                Founder & Lead Developer of GFG Studios. A passionate developer and entrepreneur transforming ideas into powerful digital solutions. Specialized in React Native, Kotlin, and AI-driven applications, pushing the boundaries of technology to create meaningful innovations.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Expert Developer</h3>
                    <p className="text-white/60">React Native, Web Development, Laravel & PHP</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Innovation Leader</h3>
                    <p className="text-white/60">Building AI-powered apps and scalable digital solutions</p>
                  </div>
                </div>
              </div>

              <Link href="/portfolio">
                <button className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-white transition-colors flex items-center gap-2 group">
                  View Full Portfolio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-white/10">
                <img 
                  src="https://gfgmedia.netlify.app/imgs/Screenshot%202025-02-04%20042117.png" 
                  alt="Tapuwa P Mapfumo" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div>
                    <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Founder & CTO</p>
                    <p className="text-white text-xl font-display font-bold">Tapuwa P Mapfumo</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Blogs Section */}
      <section className="py-24 bg-zinc-950/50 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">Free Knowledge</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Proven Strategies to Win</h2>
            <p className="text-white/60 max-w-2xl mx-auto">Learn the exact strategies that help businesses grow faster, attract better customers, and dominate their market.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "The Power of Personal Branding in 2024",
                excerpt: "Discover why personal branding is essential for entrepreneurs and professionals in building authority.",
                category: "Branding",
                date: "Dec 15, 2024"
              },
              {
                title: "5 Marketing Strategies That Drive Real Results",
                excerpt: "Learn the proven marketing strategies that help businesses increase their reach and engagement.",
                category: "Marketing",
                date: "Dec 10, 2024"
              },
              {
                title: "How to Create a Brand Identity That Resonates",
                excerpt: "A comprehensive guide to building a memorable brand identity that connects with your audience.",
                category: "Branding",
                date: "Dec 5, 2024"
              }
            ].map((blog, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-primary/50 p-8 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/20 text-primary">
                    {blog.category}
                  </span>
                  <span className="text-xs text-white/40 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {blog.date}
                  </span>
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>
                <p className="text-white/60 text-sm mb-6 line-clamp-2">
                  {blog.excerpt}
                </p>
                <Link href="/blogs">
                  <button className="text-primary font-bold text-sm hover:gap-2 flex items-center gap-1 transition-all group/btn">
                    Read More <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/blogs">
              <button className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-colors flex items-center gap-2 mx-auto group">
                View All Articles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-multiply" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-black text-black mb-8">Ready to Dominate Your Market?</h2>
          <p className="text-black/80 text-xl max-w-2xl mx-auto mb-10 font-medium">
            Stop competing on price. Start winning on value. Get the strategic advantage your competitors don't have.
          </p>
          <Link href="/contact">
            <button className="px-10 py-5 bg-black text-white font-bold rounded-full hover:scale-105 transition-transform shadow-2xl">
              Book Your Strategy Call
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
