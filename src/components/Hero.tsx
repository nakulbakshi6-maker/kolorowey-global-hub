import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Megaphone, Play } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Gradient orbs */}
      <motion.div className="absolute inset-0 overflow-hidden" style={{ y }}>
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px]"
          style={{
            background: 'radial-gradient(ellipse at center, hsl(192 80% 50% / 0.15) 0%, transparent 50%)',
          }}
        />
        <div 
          className="absolute top-1/2 left-0 w-[600px] h-[600px]"
          style={{
            background: 'radial-gradient(circle, hsl(320 85% 55% / 0.1) 0%, transparent 50%)',
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-[800px] h-[800px]"
          style={{
            background: 'radial-gradient(circle, hsl(185 85% 45% / 0.1) 0%, transparent 50%)',
          }}
        />
      </motion.div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Main content */}
      <motion.div 
        className="relative z-10 container mx-auto px-6 text-center max-w-5xl"
        style={{ opacity }}
      >
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex justify-center"
        >
          <span className="premium-badge">
            The Future of Programmatic Advertising
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="text-foreground">AdTech</span>
          <br />
          <span className="gradient-text">Unfragmented</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Beyond the Walled Gardens
        </motion.p>

        {/* Description */}
        <motion.p 
          className="text-base md:text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          The unified programmatic platform connecting premium publishers and advertisers 
          across all channels with transparent, privacy-first infrastructure.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.div 
            whileHover={{ scale: 1.03 }} 
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              size="lg" 
              className="h-14 px-8 rounded-full font-semibold text-base group shadow-lg glow-teal"
            >
              <Building2 className="w-5 h-5 mr-2" />
              For Publishers
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.03 }} 
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              size="lg" 
              variant="outline"
              className="h-14 px-8 rounded-full font-semibold text-base group border-border hover:border-primary/50 hover:bg-primary/5"
            >
              <Megaphone className="w-5 h-5 mr-2" />
              For Advertisers
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Watch demo link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8"
        >
          <button className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Play className="w-4 h-4 text-primary" />
            </span>
            Watch Platform Demo
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="mt-24 pt-12 border-t border-border/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {[
              { value: "50B+", label: "Daily Impressions" },
              { value: "180+", label: "Countries" },
              { value: "200+", label: "Integrations" },
              { value: "99.9%", label: "Uptime SLA" },
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div 
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;