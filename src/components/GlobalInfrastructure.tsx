import { motion } from "framer-motion";
import { Activity, Zap, Globe, Server } from "lucide-react";

const stats = [
  { icon: Activity, value: "50B+", label: "Daily Requests" },
  { icon: Zap, value: "<10ms", label: "Avg Latency" },
  { icon: Globe, value: "180+", label: "Countries" },
  { icon: Server, value: "99.99%", label: "Uptime" },
];

const GlobalInfrastructure = () => {
  return (
    <section className="py-24 md:py-32 section-dark relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="premium-badge mb-6 inline-block">
              Global Scale
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Infrastructure <span className="gradient-text">Built for Scale</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our globally distributed infrastructure ensures sub-10ms response times 
              and 99.99% uptime, processing billions of requests daily across 180+ countries.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass-card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <stat.icon className="w-6 h-6 text-primary mb-3" />
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Abstract Globe Visualization */}
          <motion.div
            className="relative h-[500px] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Globe rings */}
            <div className="relative w-80 h-80">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border border-primary/20"
                  style={{
                    transform: `rotateX(60deg) rotateZ(${i * 30}deg)`,
                  }}
                  animate={{ rotateZ: [i * 30, i * 30 + 360] }}
                  transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
                />
              ))}
              
              {/* Center glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="w-40 h-40 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, hsl(192 80% 50% / 0.3) 0%, transparent 70%)',
                  }}
                />
              </div>

              {/* Data points */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-primary"
                  style={{
                    left: `${50 + 45 * Math.cos((i * 30 * Math.PI) / 180)}%`,
                    top: `${50 + 45 * Math.sin((i * 30 * Math.PI) / 180)}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                />
              ))}

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
                {[...Array(6)].map((_, i) => (
                  <motion.line
                    key={i}
                    x1="160"
                    y1="160"
                    x2={160 + 120 * Math.cos((i * 60 * Math.PI) / 180)}
                    y2={160 + 120 * Math.sin((i * 60 * Math.PI) / 180)}
                    stroke="hsl(192 80% 50%)"
                    strokeWidth="1"
                    strokeOpacity="0.2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 0] }}
                    transition={{
                      duration: 3,
                      delay: i * 0.5,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalInfrastructure;