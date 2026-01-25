import { Layers, Globe, Zap, Shield, BarChart3, Workflow } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Layers,
    title: "UNIFIED_STACK",
    description: "One platform connecting DSPs, SSPs, ad exchanges, and data partners.",
    code: "0x01",
  },
  {
    icon: Globe,
    title: "GLOBAL_REACH",
    description: "Access inventory across 180+ countries with localized optimization.",
    code: "0x02",
  },
  {
    icon: Zap,
    title: "REALTIME_RTB",
    description: "Sub-10ms latency RTB infrastructure processing 50B+ daily requests.",
    code: "0x03",
  },
  {
    icon: Shield,
    title: "PRIVACY_FIRST",
    description: "GDPR, CCPA compliance with cookieless identity solutions.",
    code: "0x04",
  },
  {
    icon: BarChart3,
    title: "ML_ANALYTICS",
    description: "Cross-platform attribution and predictive insights powered by ML.",
    code: "0x05",
  },
  {
    icon: Workflow,
    title: "OPEN_ECOSYSTEM",
    description: "API-first architecture with 200+ pre-built integrations.",
    code: "0x06",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Features = () => {
  return (
    <section id="platform" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 terminal-grid opacity-30" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="terminal-badge mb-6">
            <span className="text-accent">$</span> PLATFORM_MODULES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4">
            INFRASTRUCTURE
            <br />
            <span className="neon-text">BUILT_FOR_SCALE</span>
          </h2>
          <p className="text-muted-foreground max-w-xl font-mono text-sm">
            <span className="text-primary">&gt;</span> Enterprise-grade advertising technology stack
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="terminal-card-hover p-6 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">
                  {feature.code}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-base font-mono font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Bottom accent */}
              <div className="mt-6 h-px bg-border group-hover:bg-primary/50 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
