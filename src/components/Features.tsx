import { Layers, Globe, Zap, Shield, BarChart3, Workflow, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Layers,
    title: "Unified Stack",
    description: "One platform connecting DSPs, SSPs, exchanges, and data partners seamlessly.",
    number: "01",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Access inventory across 180+ countries with localized optimization.",
    number: "02",
  },
  {
    icon: Zap,
    title: "Real-Time Bidding",
    description: "Sub-10ms latency infrastructure handling 50B+ daily requests.",
    number: "03",
  },
  {
    icon: Shield,
    title: "Privacy-First",
    description: "GDPR, CCPA compliance with cookieless identity solutions built-in.",
    number: "04",
  },
  {
    icon: BarChart3,
    title: "ML Analytics",
    description: "Cross-platform attribution and predictive insights at scale.",
    number: "05",
  },
  {
    icon: Workflow,
    title: "Open APIs",
    description: "200+ integrations with full API access for custom workflows.",
    number: "06",
  },
];

const Features = () => {
  return (
    <section id="platform" className="relative py-32 bg-secondary overflow-hidden">
      {/* Background accent */}
      <motion.div 
        className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full opacity-10"
        style={{ background: 'var(--gradient-brand)' }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="outline-badge mb-6 inline-block">Platform</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Built for the modern
              <br />
              <span className="gradient-text">programmatic ecosystem</span>
            </h2>
          </motion.div>
        </div>

        {/* Features Grid with hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-border/50 rounded-3xl overflow-hidden">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-card p-8 md:p-10 group cursor-pointer relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <motion.div 
                    className="icon-box"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <feature.icon className="w-6 h-6" />
                  </motion.div>
                  <span className="text-sm font-mono text-muted-foreground group-hover:text-accent transition-colors duration-300">
                    {feature.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {feature.description}
                </p>
                <motion.a 
                  href="#" 
                  className="inline-flex items-center text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
