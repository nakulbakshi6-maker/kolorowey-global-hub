import { motion, useScroll, useTransform } from "framer-motion";
import { BookOpen, FileText, Code, HelpCircle, ArrowRight, Sparkles, ExternalLink, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRef } from "react";

const resources = [
  {
    icon: BookOpen,
    title: "Blog",
    description: "Industry insights, product updates, and thought leadership from the Kolorowey team.",
    cta: "Read Articles",
    items: [
      "The Future of Programmatic Advertising",
      "CTV Advertising Best Practices",
      "Privacy-First Identity Solutions",
      "Maximizing Video Ad Revenue",
    ],
    gradient: "from-accent to-pink-400",
  },
  {
    icon: FileText,
    title: "Case Studies",
    description: "Real results from real clients. See how publishers and advertisers succeed with Kolorowey.",
    cta: "View Case Studies",
    items: [
      "Publisher increases revenue by 45%",
      "Brand achieves 3.2x ROAS",
      "Agency scales to 100+ clients",
      "CTV campaign drives 2M views",
    ],
    gradient: "from-highlight to-cyan-400",
  },
  {
    icon: Code,
    title: "Documentation",
    description: "Technical guides, API references, and integration tutorials for developers.",
    cta: "Browse Docs",
    href: "/technology",
    items: [
      "Getting Started Guide",
      "API Reference",
      "SDK Integration",
      "Webhook Events",
    ],
    gradient: "from-violet-500 to-accent",
  },
  {
    icon: HelpCircle,
    title: "FAQs",
    description: "Answers to common questions about our platform, pricing, and support.",
    cta: "View FAQs",
    items: [
      "How does pricing work?",
      "What ad formats are supported?",
      "How do I get started?",
      "What integrations are available?",
    ],
    gradient: "from-emerald-500 to-teal-400",
  },
];

const Resources = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ 
                x: [0, 50, 0],
                y: [0, -30, 0],
              }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="absolute top-1/3 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ 
                x: [0, -40, 0],
                y: [0, 40, 0],
              }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-highlight/10 rounded-full blur-3xl"
            />
          </div>
          
          <motion.div 
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="container mx-auto px-6 relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.span 
                className="shimmer-badge mb-6 inline-block"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles className="w-3 h-3" />
                Resources
              </motion.span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
                Learn &
                <br />
                <span className="gradient-text">Grow</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                Everything you need to succeed with Kolorowey. From documentation to 
                case studies, we've got you covered.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button size="xl" className="rounded-full group">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1.5 h-1.5 bg-accent rounded-full mt-2"
              />
            </div>
          </motion.div>
        </section>

        {/* Resources Grid */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Explore Our <span className="gradient-text">Resources</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive guides, case studies, and documentation to help you get the most out of Kolorowey
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="magnetic-card p-8 group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${resource.gradient}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <resource.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">
                        {resource.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {resource.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {resource.items.map((item, itemIndex) => (
                      <motion.a
                        key={item}
                        href="#"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + itemIndex * 0.05 }}
                        whileHover={{ x: 5, backgroundColor: 'hsl(var(--secondary))' }}
                        className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 transition-colors group/item"
                      >
                        <span className="text-sm font-medium">{item}</span>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover/item:text-accent transition-colors" />
                      </motion.a>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full rounded-full group/btn"
                    onClick={() => resource.href && (window.location.href = resource.href)}
                  >
                    {resource.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Quick Access</span>
              <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
                Popular <span className="gradient-text">Topics</span>
              </h2>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "For Publishers", href: "/publishers", desc: "Monetization solutions" },
                { title: "For Advertisers", href: "/advertisers", desc: "Campaign management" },
                { title: "Technology", href: "/technology", desc: "Platform capabilities" },
                { title: "Environments", href: "/environment", desc: "Ad formats & channels" },
              ].map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = item.href;
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="magnetic-card p-6 text-center group cursor-pointer"
                >
                  <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                  <ArrowRight className="w-5 h-5 mx-auto mt-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="gradient-card p-12 md:p-20 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <Zap className="w-12 h-12 text-white/80 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                  Stay in the loop
                </h2>
                <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
                  Subscribe to our newsletter for the latest industry insights and product updates.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
                  />
                  <Button size="lg" variant="secondary" className="rounded-full">
                    Subscribe
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;