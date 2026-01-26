import { motion } from "framer-motion";
import { BookOpen, FileText, Code, HelpCircle, ArrowRight, Sparkles, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-20">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Learn &
              <br />
              <span className="gradient-text">Grow</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Everything you need to succeed with Kolorowey. From documentation to 
              case studies, we've got you covered.
            </p>
          </motion.div>
        </section>

        {/* Resources Grid */}
        <section className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="magnetic-card p-8 group hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${resource.gradient}`}
                  >
                    <resource.icon className="w-7 h-7 text-white" />
                  </div>
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
                  {resource.items.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group/item"
                    >
                      <span className="text-sm font-medium">{item}</span>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover/item:text-accent transition-colors" />
                    </a>
                  ))}
                </div>

                <Button variant="outline" className="w-full rounded-full group/btn">
                  {resource.cta}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="container mx-auto px-6 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-card p-12 md:p-16 text-center"
          >
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
                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
              />
              <Button size="lg" variant="secondary" className="rounded-full">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
