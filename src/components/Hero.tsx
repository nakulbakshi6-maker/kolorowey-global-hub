import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import heroMesh from "@/assets/hero-mesh.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0">
        {/* Warm cream base */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
        
        {/* Subtle mesh overlay */}
        <div className="absolute inset-0 mesh-bg opacity-60" />
        
        {/* Hero image - subtle and editorial */}
        <div className="absolute inset-0">
          <img
            src={heroMesh}
            alt=""
            className="w-full h-full object-cover opacity-20 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        </div>

        {/* Premium dot pattern */}
        <div className="absolute inset-0 dot-pattern opacity-40" />
        
        {/* Morphing gradient orbs */}
        <motion.div 
          className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-primary/15 to-accent/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            borderRadius: ["60% 40% 30% 70%/60% 30% 70% 40%", "30% 60% 70% 40%/50% 60% 30% 60%", "60% 40% 30% 70%/60% 30% 70% 40%"]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-gradient-to-tr from-accent/10 to-primary/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content - Asymmetric Editorial Layout */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content - Main Message */}
          <div className="lg:col-span-7">
            {/* Premium Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="premium-badge mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Global AdTech Infrastructure
              </span>
            </motion.div>

            {/* Headline - Editorial Typography */}
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight mb-8 text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="text-foreground">AdTech</span>
              <br />
              <span className="gradient-text italic">Unfragmented</span>
            </motion.h1>

            {/* Subline - Elegant */}
            <motion.p 
              className="text-2xl md:text-3xl text-muted-foreground font-light mb-6 font-serif italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Beyond the Walled Gardens
            </motion.p>

            {/* Description */}
            <motion.p 
              className="text-lg text-muted-foreground/80 max-w-xl mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Kolorowey unifies the fragmented advertising ecosystem. Connect publishers, 
              advertisers, and platforms through a single, powerful infrastructure.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button variant="hero" size="xl" className="group">
                Start Integration
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="hero-outline" size="xl" className="group">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Stats in Editorial Cards */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Decorative line */}
              <div className="absolute -left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block" />
              
              <div className="grid grid-cols-2 gap-4 stagger-children">
                {[
                  { value: "50B+", label: "Daily Impressions", accent: "primary" },
                  { value: "180+", label: "Countries", accent: "accent" },
                  { value: "99.9%", label: "Uptime SLA", accent: "primary" },
                  { value: "<10ms", label: "Avg Latency", accent: "accent" },
                ].map((stat, index) => (
                  <div 
                    key={stat.label} 
                    className="glass-card p-6 group hover:border-primary/30 transition-all duration-500"
                  >
                    <div className="editorial-number text-4xl md:text-5xl mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium tracking-wide uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />

      {/* Decorative corner elements */}
      <div className="absolute top-32 right-12 w-24 h-24 border border-primary/20 rounded-full hidden xl:block" />
      <div className="absolute bottom-32 left-12 w-16 h-16 border border-accent/20 rounded-full hidden xl:block" />
    </section>
  );
};

export default Hero;
