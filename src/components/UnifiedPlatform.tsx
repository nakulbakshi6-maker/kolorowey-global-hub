import { motion } from "framer-motion";
import { Layers, Zap, Shield, BarChart3 } from "lucide-react";

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
  }
];

const UnifiedPlatform = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-4">
            Platform Overview
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            The Unified AdTech Platform
          </h2>
          <p className="text-lg text-muted-foreground">
            Kolorowey bridges the gap between publishers and advertisers with a single, 
            transparent infrastructure built for the modern programmatic ecosystem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-colors group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnifiedPlatform;
