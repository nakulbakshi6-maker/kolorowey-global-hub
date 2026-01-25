import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const partnerLogos = [
  "Google", "Amazon", "Meta", "Microsoft", "Adobe", "Salesforce", "Oracle", "IBM"
];

const Partners = () => {
  return (
    <section id="partners" className="relative py-32 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="outline-badge mb-6 inline-block">Partnerships</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Trusted by the
            <br />
            <span className="gradient-text">world's best teams</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From startups to Fortune 500 companies, we power advertising for brands that matter.
          </p>
        </motion.div>

        {/* Partner Logos - Grid style */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {partnerLogos.map((partner, index) => (
            <motion.div
              key={partner}
              className="bg-card p-10 md:p-14 flex items-center justify-center group cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <span className="text-xl md:text-2xl font-bold text-muted-foreground group-hover:text-primary-foreground transition-colors">
                {partner}
              </span>
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
              className={`${stat.link ? 'group cursor-pointer' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className="flex items-start gap-2 mb-2">
                <span className={`big-number ${index % 2 === 1 ? 'big-number-gradient' : ''}`}>
                  {stat.value}
                </span>
                {stat.link && (
                  <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-foreground group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                )}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
