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
    <section id="partners" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-accent" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold text-primary uppercase tracking-[0.3em] mb-4">
            Trusted Worldwide
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-accent-foreground mb-6">
            Powering the Global
            <br />
            <span className="text-primary italic">Ad Ecosystem</span>
          </h2>
        </motion.div>

        {/* Partner Logos Marquee */}
        <div className="relative mb-24 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-accent to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-accent to-transparent z-10" />
          
          <motion.div 
            className="flex gap-6"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 group flex items-center justify-center w-36 h-20 border border-accent-foreground/10 hover:border-primary/50 transition-colors duration-300"
              >
                <span className="text-2xl font-serif italic text-accent-foreground/40 group-hover:text-primary transition-colors">
                  {partner.initials}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-accent-foreground/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="bg-accent p-10 md:p-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-serif italic text-primary mb-3">
                {stat.value}
              </div>
              <div className="text-xs text-accent-foreground/60 font-semibold uppercase tracking-wider">
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
