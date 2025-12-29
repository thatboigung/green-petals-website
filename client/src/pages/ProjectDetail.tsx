import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useParams, Link } from "wouter";
import { ArrowLeft, ExternalLink, Calendar, Tag, CheckCircle2 } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Chanza Group Profile",
    category: "Branding",
    description: "A creative branding agency website showcasing bold brand strategies and design excellence.",
    fullDescription: "Chanza Group needed a digital presence that matched their creative prowess. We developed a highly visual, fast-loading portfolio site that effectively communicates their strategic branding services to a global audience.",
    results: [
      "200% increase in lead generation",
      "Average session duration increased to 4 minutes",
      "Successfully launched across 3 continents"
    ],
    challenge: "Their existing brand didn't translate well to a digital environment, and they lacked a central hub to showcase their diverse portfolio.",
    solution: "We built a custom React-based platform with fluid animations and a mobile-first approach, ensuring their work looks stunning on any device.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    date: "August 2023",
    client: "Chanza Group",
    services: ["Brand Strategy", "UI/UX", "Web Development"]
  },
  {
    id: 2,
    title: "Konak",
    category: "Marketing",
    description: "Digital marketing platform helping businesses build strong brand identity and grow online.",
    fullDescription: "Konak is a comprehensive platform designed to bridge the gap between small businesses and high-level marketing strategies. We built the entire web experience to be intuitive and conversion-focused.",
    results: [
      "50+ businesses onboarded in the first month",
      "95% positive user feedback on interface",
      "Significant improvement in brand consistency for clients"
    ],
    challenge: "Small business owners often find marketing tools overwhelming and complex, leading to low adoption rates.",
    solution: "We focused on a clean, minimal design with guided workflows that simplify complex marketing tasks into actionable steps.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80",
    date: "October 2023",
    client: "Konak Marketing",
    services: ["Marketing Strategy", "Content Management", "React Development"]
  },
  {
    id: 3,
    title: "Witterverse",
    category: "Mobile App",
    description: "Anonymous storytelling platform with real-time interactions for authentic social engagement.",
    fullDescription: "Witterverse is a social confessions app that prioritizes user privacy and authentic connection. It features real-time chat, anonymous profiles, and interest-based communities.",
    results: [
      "10,000+ active users within first week",
      "Zero downtime during viral traffic spikes",
      "Average daily active time of 45 minutes per user"
    ],
    challenge: "Scaling a real-time social platform while maintaining strict anonymity and high performance was a major technical hurdle.",
    solution: "We utilized Supabase for real-time data sync and implemented a robust moderation system using automated sentiment analysis.",
    image: "https://images.unsplash.com/photo-1460925895917-adf4e565db34?w=800&q=80",
    date: "December 2023",
    client: "Witterverse Inc.",
    services: ["React Native", "Supabase", "Real-time Architecture"]
  }
];

export default function ProjectDetail() {
  const params = useParams();
  const projectId = parseInt(params.id || "0");
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl font-display font-bold text-white mb-4">Project Not Found</h1>
          <Link href="/portfolio">
            <button className="text-primary hover:text-white transition-colors flex items-center gap-2 mx-auto">
              <ArrowLeft className="w-4 h-4" /> Back to Portfolio
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-zinc-950/50">
        <div className="container mx-auto px-6">
          <Link href="/portfolio">
            <button className="flex items-center gap-2 text-primary hover:text-white transition-colors mb-8 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/20 text-primary uppercase tracking-widest mb-6 inline-block">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                {project.title}
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                {project.description}
              </p>
              
              <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-8">
                <div>
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-xs uppercase font-bold tracking-widest">Date</span>
                  </div>
                  <p className="text-white font-medium">{project.date}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <Tag className="w-4 h-4" />
                    <span className="text-xs uppercase font-bold tracking-widest">Client</span>
                  </div>
                  <p className="text-white font-medium">{project.client}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-video rounded-2xl overflow-hidden border border-white/10"
            >
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-primary" /> The Challenge
                </h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-primary" /> Our Solution
                </h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  {project.fullDescription}
                  <br /><br />
                  {project.solution}
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div className="p-8 rounded-2xl bg-zinc-900 border border-white/5">
                <h3 className="text-xl font-bold text-white mb-6">Measurable Results</h3>
                <ul className="space-y-4">
                  {project.results.map((result, idx) => (
                    <li key={idx} className="flex gap-3 text-white/80">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs uppercase font-bold tracking-widest text-primary mb-4">Services Provided</h3>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service, idx) => (
                    <span key={idx} className="px-4 py-2 rounded-full bg-white/5 text-white/60 text-sm border border-white/10">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-black relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-display font-black mb-6">Ready for Similar Results?</h2>
          <p className="text-black/70 text-lg mb-10 max-w-xl mx-auto">
            Let's build a strategy that works for your brand and drives tangible growth.
          </p>
          <Link href="/contact">
            <button className="px-10 py-4 bg-black text-white font-bold rounded-full hover:scale-105 transition-transform shadow-2xl">
              Start Your Journey
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
