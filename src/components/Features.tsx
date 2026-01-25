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
    <section id="platform" className="relative py-28 md:py-36 bg-secondary/40 overflow-hidden">
      {/* Decorative line */}
      <motion.div 
        className="absolute top-0 left-1/2 w-px h-24 bg-gradient-to-b from-transparent to-border"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <span className="pill-badge mb-6 inline-block">Platform</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Built for the modern
            <br />
            <span className="gradient-text">programmatic ecosystem</span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="elevated-card-hover p-8 group cursor-pointer"
            >
              <motion.div 
                className="icon-wrap mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <feature.icon className="w-5 h-5 text-foreground" />
              </motion.div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                {feature.description}
              </p>
              <motion.a 
                href="#" 
                className="inline-flex items-center text-sm font-semibold text-foreground opacity-0 group-hover:opacity-100 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                Learn more
                <ArrowRight className="w-4 h-4 ml-1" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
