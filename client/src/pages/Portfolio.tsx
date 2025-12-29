import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ExternalLink, Code, Terminal, Palette, Zap, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Chanza Group Profile",
      description: "A creative branding agency website showcasing bold brand strategies and design excellence.",
      link: "https://chanzagroup.netlify.app/",
      technologies: ["HTML", "CSS", "Graphics Design", "Brand Strategy", "UI/UX"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      category: "Branding"
    },
    {
      id: 2,
      title: "Konak",
      description: "Digital marketing platform helping businesses build strong brand identity and grow online.",
      link: "https://konak.netlify.app/",
      technologies: ["React", "Marketing", "Content Management", "Social Media", "Strategy"],
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80",
      category: "Marketing"
    },
    {
      id: 3,
      title: "Witterverse - Social Confessions App",
      description: "Anonymous storytelling platform with real-time interactions for authentic social engagement.",
      link: "#",
      technologies: ["React Native", "Supabase", "Authentication", "Real-time", "UI/UX"],
      image: "https://images.unsplash.com/photo-1460925895917-adf4e565db34?w=800&q=80",
      category: "Mobile App"
    },
    {
      title: "Smart Academic Management System",
      description: "Digital system for managing exams with QR-based verification and attendance tracking.",
      link: "#",
      technologies: ["Kotlin", "Firebase", "QR Technology", "Database", "Security"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      category: "Enterprise"
    },
    {
      title: "Rhythm Tiles - AI Music Game",
      description: "AI-powered rhythm game that generates gameplay from user-selected music with dynamic difficulty.",
      link: "#",
      technologies: ["React Native", "AI", "Music Processing", "Game Dev", "Animation"],
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
      category: "Entertainment"
    },
    {
      title: "AI Voice Recorder for Musicians",
      description: "Smart tool that records humming and generates structured song ideas with melody analysis.",
      link: "#",
      technologies: ["Python", "AI/ML", "Audio Processing", "Music Theory", "Songwriting"],
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&q=80",
      category: "AI/Music"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "React Native", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend", items: ["Laravel", "PHP", "Firebase", "Supabase", "REST APIs"] },
    { category: "Mobile", items: ["React Native", "Kotlin", "Expo", "Performance Optimization", "Cross-platform"] },
    { category: "AI/ML", items: ["AI Integration", "Music Processing", "Data Analysis", "Automation", "Optimization"] }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">Portfolio</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            Tapuwa P Mapfumo
          </h1>
          <p className="text-white/60 text-xl leading-relaxed mb-8">
            Founder & Lead Developer at GFG Studios. Transforming ideas into powerful digital solutions through cutting-edge technology and innovative design.
          </p>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto" />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-zinc-950/50 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-white mb-8">About Me</h2>
              <div className="space-y-6 text-white/70 leading-relaxed">
                <p>
                  Over the years, I've worn many hats—developer, entrepreneur, creator, and dreamer. My journey began with an unshakable curiosity about how technology could solve real-world problems and enhance creativity.
                </p>
                <p>
                  As a professional React Native programmer, I've had the privilege of building intuitive, scalable apps that provide real value to users. Whether it's creating seamless mobile experiences with Expo and Supabase or experimenting with innovative app ideas like AI-powered music players and interactive games, I've always sought to push the boundaries of what's possible.
                </p>
                <p>
                  But it's not just about code. It's about solving meaningful problems. From brainstorming platforms that replace traditional systems to designing chatbot-powered services, I've embraced the challenge of blending technology with human needs.
                </p>
                <p>
                  My goal remains the same: to create something that resonates. Whether working on drone designs, rhythm-based games, or new platforms, every project is an opportunity to innovate and make a real impact.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-display font-bold text-white mb-4">Skills & Expertise</h2>
            <p className="text-white/60">Comprehensive technical capabilities across multiple domains</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-zinc-900 border border-white/5 hover:border-primary/30 transition-colors"
              >
                <h3 className="text-primary font-bold text-lg mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, i) => (
                    <li key={i} className="text-white/70 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-zinc-950/50 border-y border-white/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-display font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-white/60">A selection of recent work showcasing innovation and technical excellence</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/10"
              >
                <Link href={project.id ? `/project/${project.id}` : "#"}>
                  <div className="cursor-pointer">
                    <div className="aspect-video overflow-hidden relative">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="p-3 bg-primary rounded-full text-black hover:scale-110 transition-transform">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                        <span className="text-primary text-xs font-bold uppercase bg-primary/10 px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      
                      <p className="text-white/60 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="text-xs text-white/50 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-display font-bold text-white mb-4">How I Work</h2>
            <p className="text-white/60">A systematic approach to turning vision into reality</p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { step: "01", title: "Discovery & Consultation", desc: "Understanding your vision, goals, and technical requirements" },
              { step: "02", title: "Planning & Strategy", desc: "Architecting solutions, designing wireframes, selecting optimal tech stack" },
              { step: "03", title: "Design & Prototyping", desc: "Creating user-friendly designs and interactive prototypes" },
              { step: "04", title: "Development", desc: "Building with precision using cutting-edge tools and best practices" },
              { step: "05", title: "Testing & QA", desc: "Rigorous testing to ensure performance, security, and reliability" },
              { step: "06", title: "Launch & Support", desc: "Deployment, optimization, and ongoing maintenance support" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-6 p-6 rounded-2xl bg-zinc-900 border border-white/5 hover:border-primary/30 transition-colors"
              >
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-display font-bold text-xl shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
