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
    <section className="py-24 md:py-32 section-darker relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(192 80% 50% / 0.2) 0%, transparent 60%)' }}
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
            Technology
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Core <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Enterprise-grade infrastructure engineered for performance, reliability, and security.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              className="glass-card p-8 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="icon-box-outline mb-6 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                <tech.icon className="w-6 h-6 text-primary" />
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