import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const stats = [
  { value: "50B+", label: "Daily Bid Requests" },
  { value: "<10ms", label: "Average Latency" },
  { value: "180+", label: "Countries Served" },
  { value: "99.99%", label: "Platform Uptime" },
  { value: "15+", label: "Global Data Centers" },
  { value: "200+", label: "Direct Integrations" },
];

const regions = [
  "North America",
  "Europe",
  "Asia Pacific",
  "Latin America",
  "Middle East",
  "Africa",
];

const GlobalInfrastructure = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              Global Reach
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Infrastructure at Scale
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our globally distributed infrastructure ensures low-latency performance 
              and high availability across every region.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.slice(0, 4).map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="p-4 rounded-xl bg-secondary"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {regions.map((region) => (
                <span 
                  key={region}
                  className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium"
                >
                  {region}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-highlight/10 p-1">
              <div className="h-full w-full rounded-3xl bg-card border border-border flex items-center justify-center relative overflow-hidden">
                {/* Abstract globe visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-64 h-64 rounded-full border border-accent/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute w-48 h-48 rounded-full border border-highlight/20"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute w-32 h-32 rounded-full border border-accent/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                <Globe className="w-20 h-20 text-accent relative z-10" />
                
                {/* Glowing dots representing data centers */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-accent"
                    style={{
                      top: `${30 + Math.sin(i * 0.8) * 25}%`,
                      left: `${30 + Math.cos(i * 0.8) * 25}%`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.25,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalInfrastructure;
