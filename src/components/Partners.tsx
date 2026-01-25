import { motion } from "framer-motion";

const partnerLogos = [
  { name: "DSP Partner", code: "DSP" },
  { name: "Exchange One", code: "EX1" },
  { name: "Data Provider", code: "DAT" },
  { name: "Media Group", code: "MG0" },
  { name: "Tech Alliance", code: "TEC" },
  { name: "Global Media", code: "GLB" },
  { name: "AdNet Pro", code: "ANP" },
  { name: "Reach Max", code: "RMX" },
];

const stats = [
  { value: "500+", label: "PARTNERS" },
  { value: "$12B+", label: "AD_SPEND" },
  { value: "15+", label: "YEARS" },
  { value: "24/7", label: "SUPPORT" },
];

const Partners = () => {
  return (
    <section id="partners" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 terminal-grid opacity-20" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="terminal-badge mb-6">
            <span className="text-accent">$</span> NETWORK_STATUS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4">
            POWERING_THE
            <br />
            <span className="neon-text">GLOBAL_ECOSYSTEM</span>
          </h2>
        </motion.div>

        {/* Partner Marquee */}
        <div className="relative mb-20 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          <motion.div 
            className="flex gap-4"
            animate={{ x: [0, -800] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 terminal-card w-28 h-20 flex items-center justify-center group hover:border-primary/50 transition-colors"
              >
                <span className="text-lg font-mono font-bold text-muted-foreground group-hover:text-primary transition-colors">
                  [{partner.code}]
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="terminal-card p-8 md:p-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="code-number text-4xl md:text-5xl font-mono font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground font-mono tracking-wider">
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
