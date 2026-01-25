import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        {/* Terminal Grid */}
        <div className="absolute inset-0 terminal-grid opacity-60" />
        
        {/* Scanline overlay */}
        <div className="absolute inset-0 data-stream opacity-50" />
        
        {/* Neon glow orbs */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, hsl(180 100% 50% / 0.1) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, hsl(320 100% 60% / 0.08) 0%, transparent 70%)' }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Vertical scan line */}
        <motion.div 
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          animate={{ top: ['0%', '100%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-5xl">
          {/* Terminal-style badge */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="terminal-badge">
              <Zap className="w-3 h-3" />
              <span className="animate-flicker">SYSTEM_STATUS: ONLINE</span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight mb-6 font-display">
              <span className="text-foreground">ADTECH</span>
              <br />
              <span className="neon-text">UNFRAGMENTED</span>
              <span className="cursor-blink text-primary"></span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4 font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-primary">&gt;</span> Beyond the walled gardens
          </motion.p>

          <motion.p 
            className="text-base text-muted-foreground/70 max-w-xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Kolorowey unifies the fragmented advertising ecosystem. Connect publishers, 
            advertisers, and platforms through a single infrastructure.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            className="flex flex-wrap items-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button 
              className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-sm tracking-wider group"
            >
              INITIALIZE_
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              className="h-12 px-8 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary font-mono text-sm tracking-wider"
            >
              VIEW_DOCS
            </Button>
          </motion.div>

          {/* Stats - Terminal Style */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/50 max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { value: "50B+", label: "DAILY_REQUESTS" },
              { value: "180+", label: "REGIONS" },
              { value: "99.9%", label: "UPTIME" },
              { value: "<10ms", label: "LATENCY" },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="terminal-card p-6 group"
              >
                <div className="code-number text-3xl md:text-4xl font-mono font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground font-mono tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom neon line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse-neon" />
    </section>
  );
};

export default Hero;
