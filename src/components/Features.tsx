import { Layers, Globe, Zap, Shield, BarChart3, Workflow, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Layers,
    title: "Unified Stack",
    description: "One platform connecting DSPs, SSPs, exchanges, and data partners seamlessly.",
    accent: true,
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Access inventory across 180+ countries with localized optimization.",
    accent: false,
  },
  {
    icon: Zap,
    title: "Real-Time Bidding",
    description: "Sub-10ms latency infrastructure handling 50B+ daily requests.",
    accent: false,
  },
  {
    icon: Shield,
    title: "Privacy-First",
    description: "GDPR, CCPA compliance with cookieless identity solutions built-in.",
    accent: true,
  },
  {
    icon: BarChart3,
    title: "ML Analytics",
    description: "Cross-platform attribution and predictive insights at scale.",
    accent: false,
  },
  {
    icon: Workflow,
    title: "Open APIs",
    description: "200+ integrations with full API access for custom workflows.",
    accent: true,
  },
];

const Features = () => {
  return (
    <section id="platform" className="relative py-24 md:py-32 bg-secondary/30 overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20"
        style={{ background: 'linear-gradient(135deg, hsl(320 85% 55% / 0.2), transparent)' }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="pill-badge mb-6 inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Platform
          </motion.span>
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
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`elevated-card-hover p-8 group cursor-pointer ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <motion.div 
                className={`${feature.accent ? 'icon-wrap-accent' : 'icon-wrap'} mb-6`}
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <feature.icon className={`w-6 h-6 ${feature.accent ? 'text-accent' : 'text-primary'}`} />
              </motion.div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:gradient-text transition-all">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {feature.description}
              </p>
              <motion.a 
                href="#" 
                className="inline-flex items-center text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all"
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
