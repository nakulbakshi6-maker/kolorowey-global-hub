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
    <section id="partners" className="relative py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="pro-badge mb-4">Trusted Worldwide</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Powering the global
            <br />
            <span className="gradient-text">advertising ecosystem</span>
          </h2>
        </motion.div>

        {/* Partner Logos Marquee */}
        <div className="relative mb-20 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          
          <motion.div 
            className="flex gap-12 items-center"
            animate={{ x: [0, -600] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((partner, index) => (
              <div
                key={`${partner}-${index}`}
                className="flex-shrink-0 px-8 py-4"
              >
                <span className="text-2xl font-bold text-muted-foreground/40 hover:text-muted-foreground transition-colors">
                  {partner}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div 
          className="pro-card p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="stat-value mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
