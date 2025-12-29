import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  delay?: number;
}

export function ServiceCard({ icon: Icon, title, description, items, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-primary/50 transition-colors duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-zinc-800 to-black border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        
        <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-white/60 text-sm mb-6 leading-relaxed">
          {description}
        </p>
        
        <ul className="space-y-2">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center text-sm text-white/50">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
