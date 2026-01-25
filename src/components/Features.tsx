import { Layers, Globe, Zap, Shield, BarChart3, Workflow } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Layers,
    title: "Unified Stack",
    description:
      "One platform connecting DSPs, SSPs, ad exchanges, and data partners. No more fragmented integrations.",
    number: "01",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Access inventory across 180+ countries with localized optimization and compliance built-in.",
    number: "02",
  },
  {
    icon: Zap,
    title: "Real-Time Bidding",
    description:
      "Sub-10ms latency RTB infrastructure processing 50+ billion requests daily at scale.",
    number: "03",
  },
  {
    icon: Shield,
    title: "Privacy-First",
    description:
      "GDPR, CCPA, and global privacy compliance with cookieless identity solutions.",
    number: "04",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Cross-platform attribution, real-time reporting, and predictive insights powered by ML.",
    number: "05",
  },
  {
    icon: Workflow,
    title: "Open Ecosystem",
    description:
      "API-first architecture with 200+ pre-built integrations and custom workflow automation.",
    number: "06",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
} as const;

const Features = () => {
  return (
    <section id="platform" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
      <div className="absolute inset-0 swiss-grid opacity-40" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="editorial-badge mb-6">
              Platform
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1]">
              Infrastructure
              <br />
              <span className="gradient-text italic">Built for Scale</span>
            </h2>
          </motion.div>
          <motion.div 
            className="flex items-end"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Enterprise-grade advertising technology that unifies your entire
              programmatic ecosystem with precision.
            </p>
          </motion.div>
        </div>

        {/* Precision line */}
        <motion.div 
          className="precision-line mb-16"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="bg-card p-10 group hover:bg-secondary/30 transition-colors duration-500 relative"
            >
              {/* Number */}
              <span className="absolute top-8 right-8 text-5xl font-serif italic text-border group-hover:text-primary/20 transition-colors duration-500">
                {feature.number}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-sm bg-accent flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-accent-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-serif text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
