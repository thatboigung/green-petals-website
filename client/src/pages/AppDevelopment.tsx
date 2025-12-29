import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Zap, Cloud, Lock, Gauge, Users } from "lucide-react";
import { Link } from "wouter";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export default function AppDevelopment() {
  const services = [
    { icon: Smartphone, title: "iOS & Android Apps", desc: "Native apps for maximum performance." },
    { icon: Cloud, title: "Cross-Platform Development", desc: "One codebase for iOS, Android, and Web." },
    { icon: Zap, title: "High Performance", desc: "Optimized for speed and smooth user experience." },
    { icon: Lock, title: "Secure Architecture", desc: "Enterprise-level security and data protection." },
    { icon: Gauge, title: "Real-time Features", desc: "Live updates and instant synchronization." },
    { icon: Users, title: "User Analytics", desc: "Built-in tracking and user behavior insights." }
  ];

  const expertise = [
    "React Native",
    "Flutter",
    "Kotlin",
    "Swift",
    "Firebase",
    "Backend Integration",
    "Payment Processing",
    "Push Notifications"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">Your Revenue Engine</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            Apps Your Customers Can't Live Without
          </h1>
          <p className="text-white/60 text-xl leading-relaxed mb-8 max-w-2xl">
            Get an app that becomes essential to your customers. Recurring revenue. Loyal users locked in. Market dominance. Turn your business into an indispensable service they depend on daily.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <button className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-white transition-colors flex items-center gap-2 group">
                Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/portfolio">
              <button className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-colors">
                See Our Apps
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-zinc-950/50 border-y border-white/5">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display font-bold text-white mb-16">What We Create</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-2xl bg-zinc-900 border border-white/5 hover:border-primary/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-white/60">{service.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display font-bold text-white mb-16">Our Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            {expertise.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-4 rounded-xl bg-zinc-900 border border-white/5 text-center"
              >
                <p className="text-white font-medium">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-zinc-950/50 border-y border-white/5">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display font-bold text-white mb-16 text-center">Ready to Launch Your App?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-white font-bold mb-2">WhatsApp / Phone</h3>
              <a href="https://wa.me/+263788513666" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors">
                +263 78 851 3666
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-white font-bold mb-2">Email</h3>
              <a href="mailto:info@gfgstudios.com" className="text-primary hover:text-white transition-colors">
                info@gfgstudios.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-white font-bold mb-2">Social Media</h3>
              <div className="flex justify-center gap-3">
                <a href="https://wa.me/+263788513666" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors">
                  <FaWhatsapp size={20} />
                </a>
                <a href="#" className="text-primary hover:text-white transition-colors">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-primary hover:text-white transition-colors">
                  <FaFacebook size={20} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-multiply" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-black text-black mb-8">Let's Build Your Next App</h2>
          <p className="text-black/80 text-lg max-w-2xl mx-auto mb-10">
            From concept to launch, we'll guide you through every step of app development.
          </p>
          <Link href="/contact">
            <button className="px-10 py-5 bg-black text-white font-bold rounded-full hover:scale-105 transition-transform">
              Start Development
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
