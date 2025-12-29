import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PricingTable } from "@/components/PricingTable";
import { motion } from "framer-motion";

export default function Pricing() {
  const webDevTiers = [
    {
      name: "Basic",
      price: "$50",
      description: "Perfect for personal blogs or portfolios.",
      features: ["Single Page Website", "Responsive Design", "Basic SEO", "1 Month Support"],
    },
    {
      name: "Standard",
      price: "$100",
      description: "Great for small businesses and startups.",
      features: ["5 Page Website", "CMS Integration", "Contact Forms", "Social Media Links", "3 Months Support"],
      recommended: true,
    },
    {
      name: "Pro",
      price: "$300+",
      description: "Full-scale custom solutions for enterprises.",
      features: ["Custom Web Application", "E-commerce Functionality", "Database Integration", "Advanced Animations", "6 Months Support"],
    },
  ];

  const brandingTiers = [
    {
      name: "Basic",
      price: "$20",
      description: "Essential brand elements.",
      features: ["Logo Design", "Color Palette", "Typography Selection"],
    },
    {
      name: "Standard",
      price: "$50",
      description: "Complete identity package.",
      features: ["Logo Variations", "Social Media Kit", "Business Cards", "Letterhead Design"],
      recommended: true,
    },
    {
      name: "Pro",
      price: "$100",
      description: "Comprehensive brand strategy.",
      features: ["Full Brand Guidelines", "Marketing Collateral", "3D Mockups", "Unlimited Revisions"],
    },
  ];

  const marketingTiers = [
    {
      name: "Basic",
      price: "$150",
      description: "Start your growth journey.",
      features: ["Social Media Management", "3 Posts/Week", "Monthly Report"],
    },
    {
      name: "Standard",
      price: "$250",
      description: "Accelerate your presence.",
      features: ["Social Media & Ads", "5 Posts/Week", "Content Creation", "Bi-weekly Reports"],
      recommended: true,
    },
    {
      name: "Pro",
      price: "$350",
      description: "Dominant market position.",
      features: ["Full Digital Strategy", "Daily Content", "Paid Ad Management", "SEO Optimization", "Weekly Strategy Calls"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-16 px-6 container mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
        >
          Simple, Transparent <span className="text-primary">Pricing</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-lg max-w-2xl mx-auto"
        >
          Choose the package that fits your needs. No hidden fees, just quality results.
        </motion.p>
      </div>

      <div className="container mx-auto px-6 pb-24 space-y-12">
        <PricingTable title="Web Development" tiers={webDevTiers} />
        <PricingTable title="Branding & Identity" tiers={brandingTiers} />
        <PricingTable title="Digital Marketing" tiers={marketingTiers} />
      </div>

      <Footer />
    </div>
  );
}
