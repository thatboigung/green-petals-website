import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "The Power of Personal Branding in 2024",
    excerpt: "Discover why personal branding is essential for entrepreneurs and professionals in building authority and attracting opportunities.",
    content: "In today's digital landscape, personal branding has become more critical than ever. Whether you're a freelancer, startup founder, or corporate professional, building a strong personal brand can open doors to new opportunities, partnerships, and growth. Learn the key strategies to establish your unique value proposition and stand out in your industry.",
    author: "Tapuwa P Mapfumo",
    date: "December 15, 2024",
    category: "Branding",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "5 Marketing Strategies That Drive Real Results",
    excerpt: "Learn the proven marketing strategies that help businesses increase their reach, engagement, and conversion rates.",
    content: "Effective marketing is about understanding your audience and delivering the right message at the right time. From content marketing to social media strategy, SEO optimization to email campaigns, we break down five essential strategies that consistently deliver measurable results for businesses of all sizes.",
    author: "GFG Studios",
    date: "December 10, 2024",
    category: "Marketing",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "How to Create a Brand Identity That Resonates",
    excerpt: "A comprehensive guide to building a memorable brand identity that connects emotionally with your target audience.",
    content: "Your brand identity is the visual and verbal representation of your business. From logo design and color psychology to typography and brand voice, every element plays a role in creating a cohesive brand experience. Learn how to craft a brand identity that not only looks great but also resonates deeply with your target market.",
    author: "Design Team",
    date: "December 5, 2024",
    category: "Branding",
    readTime: "7 min read"
  },
  {
    id: 4,
    title: "Social Media Marketing: Beyond Likes and Followers",
    excerpt: "Explore advanced social media strategies that go beyond vanity metrics to drive real business growth.",
    content: "In the age of social media, it's easy to get caught up in chasing followers and likes. However, true social media marketing success is about building engaged communities and driving meaningful interactions that lead to conversions. Discover strategies for authentic engagement, content optimization, and community building that actually work.",
    author: "GFG Studios",
    date: "November 28, 2024",
    category: "Marketing",
    readTime: "6 min read"
  },
  {
    id: 5,
    title: "The Role of Visual Design in Brand Success",
    excerpt: "Understand how professional visual design elevates your brand perception and influences customer decisions.",
    content: "Visual design is one of the most powerful tools in your branding arsenal. From website design and packaging to social media graphics and advertisements, compelling visual design can significantly impact how your brand is perceived. Learn the principles of effective design and how to leverage them for maximum impact.",
    author: "Design Team",
    date: "November 20, 2024",
    category: "Branding",
    readTime: "5 min read"
  },
  {
    id: 6,
    title: "SEO in 2024: What You Need to Know",
    excerpt: "Stay updated on the latest SEO trends and best practices to improve your online visibility.",
    content: "Search engine optimization continues to evolve. In 2024, success requires a focus on user experience, content quality, technical SEO, and E-E-A-T (Experience, Expertise, Authority, Trust). Learn the current best practices that can help your website rank higher and attract more qualified traffic.",
    author: "GFG Studios",
    date: "November 15, 2024",
    category: "Marketing",
    readTime: "8 min read"
  },
  {
    id: 7,
    title: "Building an Emotional Connection with Your Audience",
    excerpt: "Discover how to create marketing campaigns that touch the heart and inspire action from your audience.",
    content: "The most successful brands aren't just selling products or services—they're selling emotions and experiences. Learn how to tap into your audience's emotions, tell compelling brand stories, and create marketing campaigns that inspire loyalty and advocacy. Emotional branding is the key to long-term customer relationships.",
    author: "Marketing Team",
    date: "November 10, 2024",
    category: "Marketing",
    readTime: "6 min read"
  },
  {
    id: 8,
    title: "Logo Design Mistakes to Avoid",
    excerpt: "Learn the common logo design pitfalls that can harm your brand and how to create a logo that stands the test of time.",
    content: "Your logo is often the first impression customers have of your brand. A poorly designed logo can undermine your brand credibility, while a well-crafted logo can become iconic. Explore the most common logo design mistakes—from overly complicated designs to poor font choices—and learn how to create a logo that truly represents your brand.",
    author: "Design Team",
    date: "November 5, 2024",
    category: "Branding",
    readTime: "5 min read"
  },
  {
    id: 9,
    title: "Content Marketing: Creating Value for Your Audience",
    excerpt: "Master the art of content marketing by creating valuable, relevant content that attracts and retains customers.",
    content: "Content is king in modern marketing. Whether through blog posts, videos, podcasts, or infographics, creating high-quality content that educates, entertains, or inspires your audience is crucial. Learn how to develop a content strategy that establishes authority, builds trust, and drives conversions.",
    author: "GFG Studios",
    date: "October 30, 2024",
    category: "Marketing",
    readTime: "7 min read"
  },
  {
    id: 10,
    title: "How to Rebrand Your Business Successfully",
    excerpt: "A step-by-step guide to rebranding your business without losing your existing customer base.",
    content: "Rebranding can be a game-changer for your business, but it's also a significant undertaking. Whether you're modernizing your image, pivoting your market, or recovering from reputation issues, a successful rebrand requires careful planning and strategic execution. Learn the process of rebranding from research and design to launch and communication.",
    author: "Branding Expert",
    date: "October 25, 2024",
    category: "Branding",
    readTime: "8 min read"
  },
  {
    id: 11,
    title: "Email Marketing: Still One of the Most Effective Channels",
    excerpt: "Discover why email marketing remains one of the highest ROI channels and how to optimize your email strategy.",
    content: "Despite the rise of social media, email marketing continues to deliver impressive results. With proper segmentation, personalization, and automation, email can drive engagement, nurture leads, and generate revenue. Learn best practices for building effective email campaigns that your subscribers will love.",
    author: "Marketing Team",
    date: "October 20, 2024",
    category: "Marketing",
    readTime: "6 min read"
  },
  {
    id: 12,
    title: "The Psychology Behind Effective Brand Messaging",
    excerpt: "Understand the psychological principles that make brand messages compelling and persuasive.",
    content: "Great brand messaging isn't just about clever copywriting—it's rooted in psychology. From scarcity and urgency to social proof and reciprocity, understanding psychological principles can help you craft messages that resonate more deeply with your audience. Learn how to leverage these principles ethically in your marketing.",
    author: "Marketing Team",
    date: "October 15, 2024",
    category: "Marketing",
    readTime: "7 min read"
  }
];

export default function Blogs() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-background via-zinc-900 to-background overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-20 left-5 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Insights & Inspiration
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Stay updated with the latest trends, strategies, and insights in branding, marketing, and digital business growth.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex justify-center gap-3 flex-wrap">
            {['All', 'Branding', 'Marketing'].map((cat) => (
              <button
                key={cat}
                className="px-6 py-2 rounded-full border border-white/20 text-white hover:bg-primary/20 hover:border-primary transition-all"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-primary/50 overflow-hidden transition-all duration-300 hover:bg-zinc-900/80"
            >
              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full text-sm font-bold bg-primary/20 text-primary">
                  {blog.category}
                </span>
              </div>

              <div className="p-8 flex flex-col h-full">
                <div className="flex-1">
                  <h2 className="text-xl font-display font-bold text-white mb-4 line-clamp-2 group-hover:text-primary transition-colors">
                    {blog.title}
                  </h2>
                  <p className="text-white/60 text-sm mb-6 line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>

                {/* Meta Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-xs text-white/40">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{blog.date}</span>
                    </div>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-white/50">
                    <User className="w-3 h-3" />
                    <span>{blog.author}</span>
                  </div>

                  <Link href={`/blog/${blog.id}`} className="block">
                    <button className="w-full py-3 mt-4 rounded-lg bg-primary/10 text-primary font-bold hover:bg-primary hover:text-black transition-all flex items-center justify-center gap-2 group/btn">
                      Read Article
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-multiply" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-black text-black mb-6">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-black/80 text-lg max-w-2xl mx-auto mb-8">
            Let's apply these insights to your business and create something amazing together.
          </p>
          <Link href="/contact">
            <button className="px-10 py-4 bg-black text-white font-bold rounded-full hover:scale-105 transition-transform">
              Start Your Project
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
