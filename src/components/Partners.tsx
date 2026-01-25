import { motion } from "framer-motion";

const partnerLogos = [
  { name: "DSP Partner", initials: "DSP" },
  { name: "Exchange One", initials: "EX1" },
  { name: "Data Provider", initials: "DAT" },
  { name: "Media Group", initials: "MG" },
  { name: "Tech Alliance", initials: "TEC" },
  { name: "Global Media", initials: "GLB" },
  { name: "AdNet Pro", initials: "ANP" },
  { name: "Reach Max", initials: "RMX" },
];

const stats = [
  { value: "500+", label: "Enterprise Partners" },
  { value: "$12B+", label: "Annual Ad Spend" },
  { value: "15+", label: "Years in AdTech" },
  { value: "24/7", label: "Global Support" },
];

const Partners = () => {
  return (
    <section id="partnerships" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Trusted Worldwide
          </p>
          <h2 className="text-5xl md:text-6xl text-foreground mb-6">
            Powering the Global
            <br />
            <span className="gradient-text italic">Ad Ecosystem</span>
          </h2>
        </motion.div>

        {/* Infinite Marquee Partner Logos */}
        <div className="relative mb-24 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          <motion.div 
            className="flex gap-8"
            animate={{ x: [0, -1200] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 group flex items-center justify-center w-40 h-24 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-serif italic text-muted-foreground group-hover:text-foreground transition-colors">
                    {partner.initials}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats - Elegant Grid */}
        <motion.div 
          className="glass-card p-10 md:p-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {index > 0 && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-border hidden md:block" />
                )}
                <div className="editorial-number text-5xl md:text-6xl mb-3">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                  {stat.label}
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
