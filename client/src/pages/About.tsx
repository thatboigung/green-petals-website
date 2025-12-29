import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Code, Terminal, Coffee } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-6 container mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
        >
          About <span className="text-primary">GFG Studios</span>
        </motion.h1>
        <div className="w-24 h-1 bg-primary rounded-full mb-12" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Who We Are</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              GFG Studios is a premier digital marketing and creative agency. We don't just design; 
              we craft experiences. Our mission is to bridge the gap between ambitious brands and their 
              audiences through strategic storytelling, cutting-edge design, and innovative technology.
            </p>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-white/70 leading-relaxed">
              To be the leading creative force that transforms businesses into memorable brands, 
              setting new standards in the digital landscape of Zimbabwe and beyond.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
             {/* creative team meeting */}
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
              alt="Team Collaboration" 
              className="rounded-2xl border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-primary rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-white/5 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Developer Profile */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-900/50 rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 bg-primary/5 rounded-full blur-3xl" />
              
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-primary/20 overflow-hidden shrink-0">
                  {/* developer portrait */}
                  <img 
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80" 
                    alt="Tapuwa P Mapfumo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="text-center md:text-left">
                  <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">Meet the Developer</span>
                  <h2 className="text-3xl font-display font-bold text-white mb-2">Tapuwa P Mapfumo</h2>
                  <p className="text-white/50 mb-6 font-mono text-sm">React Native • Web Development • UI/UX</p>
                  
                  <p className="text-white/70 leading-relaxed mb-8">
                    "I believe in code that is as beautiful as the design it brings to life. 
                    Specializing in creating seamless, high-performance applications that solve real-world problems."
                  </p>
                  
                  <div className="flex justify-center md:justify-start gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-black/50 rounded-lg text-white/80 text-sm border border-white/5">
                      <Code size={16} className="text-primary" /> React
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-black/50 rounded-lg text-white/80 text-sm border border-white/5">
                      <Terminal size={16} className="text-primary" /> TypeScript
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-black/50 rounded-lg text-white/80 text-sm border border-white/5">
                      <Coffee size={16} className="text-primary" /> Caffeine
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
