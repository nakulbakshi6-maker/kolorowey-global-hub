import { Layers, Globe, Zap, Shield, BarChart3, Workflow } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Layers,
    title: "Unified Stack",
    description: "One platform connecting DSPs, SSPs, ad exchanges, and data partners seamlessly.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Access inventory across 180+ countries with localized optimization.",
  },
  {
    icon: Zap,
    title: "Real-Time Bidding",
    description: "Sub-10ms latency infrastructure processing 50B+ daily requests.",
  },
  {
    icon: Shield,
    title: "Privacy-First",
    description: "GDPR, CCPA compliance with cookieless identity solutions built-in.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Cross-platform attribution and predictive insights powered by ML.",
  },
  {
    icon: Workflow,
    title: "Open APIs",
    description: "200+ pre-built integrations with full API access for custom workflows.",
  },
];

const Features = () => {
  return (
    <section id="platform" className="relative py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="pro-badge mb-4">Platform</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Everything you need to
            <br />
            <span className="gradient-text">scale advertising</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Enterprise-grade infrastructure built for the modern programmatic ecosystem.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="pro-card-hover p-8"
            >
              <div className="feature-icon mb-5">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
