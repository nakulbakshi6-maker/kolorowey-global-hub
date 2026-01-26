import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const partnerLogos = [
  "Google", "Amazon", "Meta", "Microsoft", "Adobe", "Salesforce", "Oracle", "IBM"
];

// Animated counter hook
const useCounter = (end: number, duration: number = 2) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const motionValue = useMotionValue(0);
          const controls = animate(motionValue, end, {
            duration,
            ease: "easeOut",
            onUpdate: (latest) => setCount(Math.floor(latest)),
          });
          return () => controls.stop();
        }
      },
      { threshold: 0.5 }
    );

    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref: nodeRef };
};

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
            Partnerships
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Trusted by the
            <br />
            <motion.span 
              className="gradient-text inline-block"
              animate={{ 
                scale: [1, 1.02, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              world's best teams
            </motion.span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From startups to Fortune 500 companies, we power advertising for brands that matter.
          </p>
        </motion.div>

        {/* Partner Logos - Interactive Grid with stagger */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/50 rounded-3xl overflow-hidden mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {partnerLogos.map((partner, index) => (
            <motion.div
              key={partner}
              className="bg-card p-10 md:p-14 flex items-center justify-center group cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Animated gradient sweep */}
              <motion.div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, transparent, hsl(320 85% 55% / 0.1), transparent)',
                }}
                animate={{
                  backgroundPosition: ['200% 200%', '-200% -200%'],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.span 
                className="relative z-10 text-xl md:text-2xl font-bold text-muted-foreground group-hover:text-accent transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 2 }}
              >
                {partner}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>

        {/* Big Stats Row with animated counters */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { value: "500", suffix: "+", label: "Enterprise Partners", link: true },
            { value: "$12", suffix: "B+", label: "Annual Ad Spend" },
            { value: "15", suffix: "+", label: "Years Experience" },
            { value: "24/7", suffix: "", label: "Global Support", link: true },
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
                  whileHover={{ 
                    textShadow: '0 0 40px hsl(320 85% 55% / 0.5)'
                  }}
                >
                  {stat.value}{stat.suffix}
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
