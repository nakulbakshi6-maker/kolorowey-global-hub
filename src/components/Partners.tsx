import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Layers, Shield, Zap, BarChart3, Users, Server, Radio } from "lucide-react";

const platformHighlights = [
  { icon: Globe, label: "150+ Countries", description: "Global reach across every major market" },
  { icon: Layers, label: "Omnichannel", description: "Web, App, CTV, DOOH, Audio & Gaming" },
  { icon: Shield, label: "Brand Safe", description: "Enterprise-grade fraud prevention" },
  { icon: Zap, label: "Sub-10ms", description: "Ultra-low latency bid responses" },
  { icon: Server, label: "99.99% Uptime", description: "Carrier-grade infrastructure reliability" },
  { icon: Radio, label: "Real-Time", description: "Live campaign optimization & reporting" },
  { icon: BarChart3, label: "AI-Powered", description: "Machine learning yield optimization" },
  { icon: Users, label: "Dedicated Support", description: "24/7 expert account management" },
];

const Partners = () => {
  return (
    <section id="partners" className="relative py-32 bg-secondary overflow-hidden">
      {/* Floating gradient orbs */}
      <motion.div 
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'var(--gradient-brand)' }}
        animate={{ 
          scale: [1, 1.2, 1], 
          rotate: [0, 90, 0],
          x: [0, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div 
        className="absolute top-20 -left-20 w-[300px] h-[300px] rounded-full opacity-15 blur-2xl"
        style={{ background: 'var(--gradient-cyan)' }}
        animate={{ 
          scale: [1.1, 1, 1.1], 
          y: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="outline-badge mb-6 inline-block"
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            Why Kolorowey
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Built for
            <br />
            <motion.span 
              className="gradient-text inline-block"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Scale & Performance
            </motion.span>
          </h2>
          <p className="text-lg text-muted-foreground">
            An enterprise-grade advertising platform engineered to deliver results across every channel, format, and market.
          </p>
        </motion.div>

        {/* Platform Highlights Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/50 rounded-3xl overflow-hidden mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {platformHighlights.map((item, index) => (
            <motion.div
              key={item.label}
              className="bg-card p-8 md:p-10 flex flex-col items-center justify-center text-center group cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ scale: 1.03 }}
            >
              <motion.div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, transparent, hsl(320 85% 55% / 0.1), transparent)',
                }}
              />
              <div className="relative z-10">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center bg-gradient-to-br from-highlight/20 to-accent/20 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-highlight" />
                </div>
                <span className="block text-lg font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                  {item.label}
                </span>
                <span className="text-sm text-muted-foreground">
                  {item.description}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Big Stats Row */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { value: "500+", label: "Enterprise Partners", link: true },
            { value: "$12B+", label: "Annual Ad Spend" },
            { value: "15+", label: "Years Experience" },
            { value: "24/7", label: "Global Support", link: true },
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="flex items-start gap-2 mb-2">
                <motion.span 
                  className="big-number"
                  whileHover={{ textShadow: '0 0 40px hsl(320 85% 55% / 0.5)' }}
                >
                  {stat.value}
                </motion.span>
                {stat.link && (
                  <motion.div
                    initial={{ opacity: 0, x: -5, y: 5 }}
                    whileHover={{ opacity: 1, x: 0, y: 0 }}
                    className="opacity-0 group-hover:opacity-100"
                  >
                    <ArrowUpRight className="w-6 h-6 text-accent" />
                  </motion.div>
                )}
              </div>
              <div className="text-muted-foreground font-medium group-hover:text-accent transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
