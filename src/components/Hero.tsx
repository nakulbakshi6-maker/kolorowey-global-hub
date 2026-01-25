import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        {/* Floating gradient shapes - More dynamic */}
        <motion.div 
          className="float-shape w-[700px] h-[700px] -top-60 -right-60"
          animate={{ 
            y: [0, 40, 0],
            x: [0, 20, 0],
            rotate: [0, 8, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="float-shape-cyan w-[600px] h-[600px] -bottom-60 -left-60"
          animate={{ 
            y: [0, -40, 0],
            x: [0, -20, 0],
            rotate: [0, -8, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="float-shape w-[300px] h-[300px] top-1/2 left-1/3 opacity-30"
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, 360],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-44 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text content */}
          <div>
            {/* Tagline Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8"
            >
              <span className="tagline-badge shimmer">
                <Sparkles className="w-4 h-4" />
                AdTech Unfragmented
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                The unified
              </motion.span>
              <br />
              <motion.span 
                className="gradient-text"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                infrastructure
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                for AdTech
              </motion.span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Connect publishers, advertisers, and platforms through a single 
              enterprise-grade infrastructure. <span className="text-accent font-semibold">Beyond the walled gardens.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div 
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button size="lg" className="h-14 px-8 rounded-full font-semibold text-base group pulse-glow shimmer">
                Start Building
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
              </Button>
              <Button variant="ghost" size="lg" className="h-14 px-6 rounded-full font-semibold text-base group hover:bg-accent/10">
                <Play className="w-5 h-5 mr-2 fill-current text-accent" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div 
              className="mt-12 flex items-center gap-6 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>Enterprise Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>GDPR Compliant</span>
              </div>
            </motion.div>
          </div>

          {/* Right - Stats cards */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "50B+", label: "Daily Impressions", delay: 0, accent: false },
                { value: "180+", label: "Countries Connected", delay: 0.1, accent: true },
                { value: "99.9%", label: "Uptime Guaranteed", delay: 0.2, accent: true },
                { value: "<10ms", label: "Average Latency", delay: 0.3, accent: false },
              ].map((stat) => (
                <motion.div 
                  key={stat.label}
                  className="elevated-card-hover p-6 md:p-8 group cursor-pointer"
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + stat.delay }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`stat-number mb-2 ${stat.accent ? 'gradient-text-cyan' : ''}`}>{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Decorative floating elements */}
            <motion.div 
              className="absolute -top-10 -right-10 w-24 h-24 rounded-2xl border border-primary/20"
              style={{ background: 'linear-gradient(135deg, hsl(320 85% 55% / 0.1), transparent)' }}
              animate={{ rotate: [0, 15, 0], y: [0, -15, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full border border-accent/20"
              style={{ background: 'linear-gradient(135deg, hsl(185 85% 45% / 0.1), transparent)' }}
              animate={{ rotate: [0, -15, 0], y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
