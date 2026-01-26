import { motion } from "framer-motion";
import { Layers, Zap, Shield, BarChart3, Globe, Lock } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Unified Stack",
    description: "One platform connecting supply and demand across all channels and formats."
  },
  {
    icon: Zap,
    title: "Real-Time Decisioning",
    description: "Sub-10ms bid responses powered by globally distributed infrastructure."
  },
  {
    icon: Shield,
    title: "Privacy-First",
    description: "Built for a cookieless future with advanced identity solutions."
  },
  {
    icon: BarChart3,
    title: "Full Transparency",
    description: "Complete visibility into every transaction across the supply chain."
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "180+ countries with localized optimization and compliance."
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "SOC 2 Type II certified with end-to-end encryption."
  }
];

const UnifiedPlatform = () => {
  return (
    <section className="py-24 md:py-32 section-darker relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30"
        style={{ background: 'radial-gradient(circle, hsl(192 80% 50% / 0.1) 0%, transparent 60%)' }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="premium-badge mb-6 inline-block">
            Platform Overview
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            The Unified <span className="gradient-text">AdTech Platform</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Kolorowey bridges the gap between publishers and advertisers with a single, 
            transparent infrastructure built for the modern programmatic ecosystem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="glass-card p-8 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="icon-box mb-6">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnifiedPlatform;