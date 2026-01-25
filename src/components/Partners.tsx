import { motion } from "framer-motion";

const partnerLogos = [
  "Google", "Amazon", "Meta", "Microsoft", "Adobe", "Salesforce", "Oracle", "IBM"
];

const stats = [
  { value: "500+", label: "Enterprise Partners" },
  { value: "$12B+", label: "Annual Ad Spend" },
  { value: "15+", label: "Years Experience" },
  { value: "24/7", label: "Global Support" },
];

const Partners = () => {
  return (
    <section id="partners" className="relative py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="pill-badge mb-6">Partnerships</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Trusted by the
            <br />
            <span className="gradient-text">world's best teams</span>
          </h2>
        </motion.div>

        {/* Partner Logos Marquee */}
        <div className="relative mb-20 overflow-hidden py-8">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary/30 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary/30 to-transparent z-10" />
          
          <motion.div 
            className="flex gap-16 items-center"
            animate={{ x: [0, -600] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((partner, index) => (
              <div
                key={`${partner}-${index}`}
                className="flex-shrink-0"
              >
                <span className="text-2xl font-bold text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors cursor-default">
                  {partner}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div 
          className="elevated-card p-10 md:p-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="stat-number mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
