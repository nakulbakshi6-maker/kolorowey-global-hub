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
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background" />
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header - Editorial Style */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="premium-badge mb-6">
              Platform Capabilities
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.05]">
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
            <p className="text-xl text-muted-foreground max-w-md leading-relaxed">
              Enterprise-grade advertising technology that unifies your entire
              programmatic ecosystem with precision and elegance.
            </p>
          </motion.div>
        </div>

        {/* Features Grid - Unique Asymmetric Layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className={`glass-card-hover p-8 group relative ${
                index === 0 ? 'lg:col-span-2 lg:row-span-1' : ''
              }`}
            >
              {/* Editorial Number */}
              <span className="absolute top-6 right-6 text-6xl font-serif italic text-muted-foreground/10 group-hover:text-primary/10 transition-colors duration-500">
                {feature.number}
              </span>

              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-serif text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
