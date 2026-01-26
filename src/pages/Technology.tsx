import { motion } from "framer-motion";
import { Server, Settings, Globe, Tv, Fingerprint, ArrowRight, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const technologies = [
  {
    icon: Server,
    title: "Ad Server",
    description: "Enterprise-grade ad serving infrastructure. Handle billions of requests with sub-10ms response times.",
    specs: [
      { label: "Latency", value: "<10ms" },
      { label: "Uptime", value: "99.99%" },
      { label: "Capacity", value: "1M+ QPS" },
    ],
    features: ["Decision Engine", "Creative Management", "Trafficking", "Forecasting"],
  },
  {
    icon: Settings,
    title: "AdOps Engine",
    description: "Automated ad operations platform. Streamline workflows, reduce errors, and scale your operations.",
    specs: [
      { label: "Automation", value: "90%" },
      { label: "Time Saved", value: "60%" },
      { label: "Error Rate", value: "<0.1%" },
    ],
    features: ["Campaign Automation", "Yield Rules", "Alerts & Monitoring", "Bulk Operations"],
  },
  {
    icon: Globe,
    title: "CDN Infrastructure",
    description: "Global content delivery network optimized for ad creatives. Fast, reliable delivery worldwide.",
    specs: [
      { label: "PoPs", value: "200+" },
      { label: "Countries", value: "150+" },
      { label: "Cache Hit", value: "99%" },
    ],
    features: ["Edge Caching", "Auto Optimization", "SSL/TLS", "Real-time Purge"],
  },
  {
    icon: Tv,
    title: "SSAI Architecture",
    description: "Server-side ad insertion for seamless video experiences. Buffer-free, ad-block resistant delivery.",
    specs: [
      { label: "Stitching", value: "<50ms" },
      { label: "Formats", value: "All Major" },
      { label: "Scale", value: "Unlimited" },
    ],
    features: ["Dynamic Stitching", "Session Management", "Manifest Manipulation", "Analytics"],
  },
  {
    icon: Fingerprint,
    title: "Identity & Measurement",
    description: "Privacy-first identity solutions and comprehensive measurement. Accurate attribution without cookies.",
    specs: [
      { label: "Match Rate", value: "85%+" },
      { label: "Privacy", value: "Compliant" },
      { label: "Attribution", value: "Multi-touch" },
    ],
    features: ["Universal ID", "Contextual Signals", "Attribution Modeling", "Incrementality"],
  },
];

const Technology = () => {
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
              Technology
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Built for
              <br />
              <span className="gradient-text">Scale & Speed</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Enterprise infrastructure powering the modern advertising ecosystem. 
              Engineered for performance, reliability, and global scale.
            </p>
            <Button size="xl" className="rounded-full group">
              Explore Technology
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </section>

        {/* Technology Cards */}
        <section className="container mx-auto px-6">
          <div className="space-y-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="magnetic-card p-8 md:p-10 group hover:border-accent/50 transition-all duration-300"
              >
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  {/* Left - Title & Description */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{ background: 'var(--gradient-brand)' }}
                      >
                        <tech.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">
                        {tech.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {tech.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tech.features.map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-foreground"
                        >
                          <Zap className="w-3 h-3 text-accent" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right - Specs */}
                  <div className="flex gap-6 lg:justify-end">
                    {tech.specs.map((spec) => (
                      <div key={spec.label} className="text-center">
                        <div className="text-2xl md:text-3xl font-extrabold gradient-text mb-1">
                          {spec.value}
                        </div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">
                          {spec.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-card p-12 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Ready to scale with confidence?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
              Our technology handles the complexity so you can focus on growth.
            </p>
            <Button size="xl" variant="secondary" className="rounded-full group">
              Talk to Engineering
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Technology;
