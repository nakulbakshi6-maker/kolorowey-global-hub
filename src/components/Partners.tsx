import { motion } from "framer-motion";
import { Globe, Layers, Shield, Zap, BarChart3, Users, Server, Radio, Target, TrendingUp, Lock, Cpu } from "lucide-react";

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

const keyMetrics = [
  { icon: Target, value: "50B+", label: "Daily Impressions", description: "Massive scale across all channels with precision targeting capabilities" },
  { icon: TrendingUp, value: "2.5B+", label: "Daily Reach", description: "Connect with audiences worldwide through our extensive network" },
  { icon: Lock, value: "100%", label: "Privacy Compliant", description: "GDPR, CCPA, and global privacy regulation ready out of the box" },
  { icon: Cpu, value: "<10ms", label: "Response Time", description: "Industry-leading latency for real-time bidding and ad delivery" },
];

const Partners = () => {
  return (
    <section id="partners" className="relative py-32 bg-secondary overflow-hidden">
      {/* Floating gradient orbs */}
      <motion.div 
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'var(--gradient-brand)' }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], x: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div 
        className="absolute top-20 -left-20 w-[300px] h-[300px] rounded-full opacity-15 blur-2xl"
        style={{ background: 'var(--gradient-cyan)' }}
        animate={{ scale: [1.1, 1, 1.1], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
        style={{ background: 'var(--gradient-brand)' }}
        animate={{ scale: [1, 1.15, 1], rotate: [0, -60, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
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
            Overview
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Platform at a
            <br />
            <motion.span 
              className="gradient-text inline-block"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Glance
            </motion.span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            An enterprise-grade advertising platform engineered to deliver results across every channel, format, and market.
          </p>
        </motion.div>

        {/* Platform Highlights Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/50 rounded-3xl overflow-hidden mb-24"
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

        {/* Key Metrics Section */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Numbers That <span className="gradient-text">Speak</span>
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Real performance metrics that power thousands of campaigns daily.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 h-full relative overflow-hidden group-hover:border-accent/30 transition-colors duration-300">
                  <motion.div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(180deg, hsl(320 85% 55% / 0.05), transparent)',
                    }}
                  />
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-highlight/20 to-accent/20 mb-5">
                      <metric.icon className="w-5 h-5 text-highlight" />
                    </div>
                    <div className="text-3xl md:text-4xl font-extrabold gradient-text mb-2">
                      {metric.value}
                    </div>
                    <div className="text-foreground font-semibold mb-2">
                      {metric.label}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {metric.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
