import { Layers, Globe, Zap, Shield, BarChart3, Workflow, ArrowRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: Layers,
    title: "Unified Stack",
    description: "One platform connecting DSPs, SSPs, exchanges, and data partners seamlessly.",
    number: "01",
    color: "from-accent to-pink-400",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Access inventory across 180+ countries with localized optimization.",
    number: "02",
    color: "from-highlight to-cyan-400",
  },
  {
    icon: Zap,
    title: "Real-Time Bidding",
    description: "Sub-10ms latency infrastructure handling 50B+ daily requests.",
    number: "03",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Shield,
    title: "Privacy-First",
    description: "GDPR, CCPA compliance with cookieless identity solutions built-in.",
    number: "04",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: BarChart3,
    title: "ML Analytics",
    description: "Cross-platform attribution and predictive insights at scale.",
    number: "05",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Workflow,
    title: "Open APIs",
    description: "200+ integrations with full API access for custom workflows.",
    number: "06",
    color: "from-blue-400 to-indigo-500",
  },
];

// Magnetic card component
const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        rotateX, 
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="bg-card p-8 md:p-10 group cursor-pointer relative overflow-hidden"
    >
      {/* Animated gradient border on hover */}
      <motion.div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, transparent 40%, hsl(320 85% 55% / 0.1) 50%, transparent 60%)`,
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
      />
      
      <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>
        <div className="flex items-start justify-between mb-6">
          <motion.div 
            className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${feature.color}`}
            whileHover={{ scale: 1.15, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <feature.icon className="w-6 h-6 text-white" />
          </motion.div>
          <motion.span 
            className="text-sm font-mono text-muted-foreground group-hover:text-accent transition-colors duration-300"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
          >
            {feature.number}
          </motion.span>
        </div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
          {feature.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          {feature.description}
        </p>
        <motion.a 
          href="#" 
          className="inline-flex items-center text-sm font-semibold text-accent opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
          whileHover={{ x: 5 }}
        >
          Learn more
          <ArrowRight className="w-4 h-4 ml-1" />
        </motion.a>
      </div>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section id="platform" className="relative py-32 bg-secondary overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full opacity-10 blur-2xl"
        style={{ background: 'var(--gradient-brand)' }}
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 left-0 w-[300px] h-[300px] rounded-full opacity-10 blur-2xl"
        style={{ background: 'var(--gradient-cyan)' }}
        animate={{ 
          scale: [1.2, 1, 1.2],
          y: [0, -20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
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
            <motion.span 
              className="outline-badge mb-6 inline-block"
              whileHover={{ scale: 1.05 }}
            >
              Platform
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Built for the modern
              <br />
              <motion.span 
                className="gradient-text inline-block"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: '200% auto' }}
              >
                programmatic ecosystem
              </motion.span>
            </h2>
          </motion.div>
          
          {/* Animated counter */}
          <motion.div 
            className="flex gap-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-right">
              <motion.div 
                className="text-4xl font-extrabold gradient-text"
                whileHover={{ scale: 1.05 }}
              >
                6
              </motion.div>
              <div className="text-sm text-muted-foreground">Core Features</div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid with 3D hover effects */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/50 rounded-3xl overflow-hidden"
          style={{ perspective: '1000px' }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
