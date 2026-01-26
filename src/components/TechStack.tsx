import { motion } from "framer-motion";
import { Server, Cpu, Database, Shield, Zap, Globe } from "lucide-react";

const technologies = [
  {
    icon: Cpu,
    title: "Real-Time Bidding Engine",
    description: "Purpose-built RTB infrastructure processing millions of bid requests per second."
  },
  {
    icon: Database,
    title: "Data Management Platform",
    description: "First-party data activation with privacy-compliant audience segmentation."
  },
  {
    icon: Shield,
    title: "Fraud Detection",
    description: "Multi-layer fraud prevention with ML-powered anomaly detection."
  },
  {
    icon: Zap,
    title: "Identity Solutions",
    description: "Cookieless identity graph connecting users across devices and channels."
  },
  {
    icon: Server,
    title: "Edge Computing",
    description: "Globally distributed edge nodes for sub-10ms response times."
  },
  {
    icon: Globe,
    title: "Supply Path Optimization",
    description: "Intelligent routing for maximum efficiency and transparency."
  },
];

const TechStack = () => {
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
            Built for Scale
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Core Technology Stack
          </h2>
          <p className="text-lg text-muted-foreground">
            Enterprise-grade infrastructure engineered for performance, reliability, and security.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              className="p-8 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6 group-hover:from-accent/30 group-hover:to-accent/10 transition-all">
                <tech.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{tech.title}</h3>
              <p className="text-muted-foreground">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
