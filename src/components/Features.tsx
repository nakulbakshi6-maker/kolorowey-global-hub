import { Layers, Globe, Zap, Shield, BarChart3, Workflow, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Layers,
    title: "Unified Stack",
    description: "One platform connecting DSPs, SSPs, exchanges, and data partners seamlessly.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Access inventory across 180+ countries with localized optimization.",
  },
  {
    icon: Zap,
    title: "Real-Time Bidding",
    description: "Sub-10ms latency infrastructure handling 50B+ daily requests.",
  },
  {
    icon: Shield,
    title: "Privacy-First",
    description: "GDPR, CCPA compliance with cookieless identity solutions built-in.",
  },
  {
    icon: BarChart3,
    title: "ML Analytics",
    description: "Cross-platform attribution and predictive insights at scale.",
  },
  {
    icon: Workflow,
    title: "Open APIs",
    description: "200+ integrations with full API access for custom workflows.",
  },
];

const Features = () => {
  return (
    <section id="platform" className="relative py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="pill-badge mb-6">Platform</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Built for the modern
            <br />
            <span className="gradient-text">programmatic ecosystem</span>
          </h2>
        </motion.div>

        {/* Features Grid - Bento style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`elevated-card-hover p-8 group ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="icon-wrap mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {feature.description}
              </p>
              <a href="#" className="inline-flex items-center text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
