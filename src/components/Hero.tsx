import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Megaphone } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-32 md:pt-40 pb-24">
      
      {/* Subtle background gradient */}
      <motion.div className="absolute inset-0 overflow-hidden" style={{ y }}>
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] opacity-30"
          style={{
            background: 'radial-gradient(ellipse at center top, hsl(320 85% 85% / 0.5) 0%, transparent 60%)',
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-20"
          style={{
            background: 'radial-gradient(circle, hsl(185 85% 85% / 0.5) 0%, transparent 60%)',
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-20"
          style={{
            background: 'radial-gradient(circle, hsl(280 70% 85% / 0.5) 0%, transparent 60%)',
          }}
        />
      </motion.div>

      {/* Main content */}
      <motion.div 
        className="relative z-10 container mx-auto px-6 text-center max-w-4xl"
        style={{ opacity }}
      >
        {/* Tagline badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex justify-center"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium tracking-wide">
            The Future of Programmatic
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6"
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
          className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Beyond the Walled Gardens
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
              className="h-14 px-8 rounded-full font-semibold text-base group bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
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
              className="h-14 px-8 rounded-full font-semibold text-base group border-2 hover:bg-secondary"
            >
              <Megaphone className="w-5 h-5 mr-2" />
              For Advertisers
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          className="mt-20 pt-12 border-t border-border/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <p className="text-sm text-muted-foreground mb-6 uppercase tracking-widest font-medium">
            Trusted by leading publishers & advertisers worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {[
              { value: "50B+", label: "Daily Impressions" },
              { value: "180+", label: "Countries" },
              { value: "200+", label: "Integrations" },
              { value: "99.9%", label: "Uptime" },
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
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
            className="w-1.5 h-1.5 rounded-full bg-accent"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
