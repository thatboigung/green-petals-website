import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

interface PricingTableProps {
  title: string;
  tiers: PricingTier[];
}

export function PricingTable({ title, tiers }: PricingTableProps) {
  return (
    <div className="py-12">
      <h3 className="text-2xl font-display font-bold text-white mb-8 pl-4 border-l-4 border-primary">
        {title}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`relative p-8 rounded-2xl border ${
              tier.recommended 
                ? "bg-zinc-900/80 border-primary shadow-lg shadow-primary/10" 
                : "bg-zinc-900/40 border-white/5 hover:border-white/10"
            }`}
          >
            {tier.recommended && (
              <div className="absolute -top-3 right-6 px-3 py-1 bg-primary text-black text-xs font-bold uppercase tracking-wider rounded-full">
                Popular
              </div>
            )}
            
            <div className="mb-6">
              <h4 className="text-lg font-medium text-white/90">{tier.name}</h4>
              <div className="mt-2 flex items-baseline">
                <span className="text-3xl font-bold text-white tracking-tight">{tier.price}</span>
                <span className="ml-1 text-sm text-white/50">/project</span>
              </div>
              <p className="mt-4 text-sm text-white/60">{tier.description}</p>
            </div>
            
            <div className="space-y-4 mb-8">
              {tier.features.map((feature, fIdx) => (
                <div key={fIdx} className="flex items-start">
                  <Check className="w-5 h-5 text-primary shrink-0 mr-3" />
                  <span className="text-sm text-white/70">{feature}</span>
                </div>
              ))}
            </div>
            
            <Link href="/contact">
              <button 
                className={`w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  tier.recommended
                    ? "bg-primary text-black hover:bg-white hover:shadow-lg hover:shadow-primary/20"
                    : "bg-white/5 text-white hover:bg-white/10 hover:text-primary"
                }`}
              >
                Choose Plan
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
