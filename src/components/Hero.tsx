import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        {/* Floating gradient shapes */}
        <motion.div 
          className="float-shape w-[600px] h-[600px] -top-40 -right-40"
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="float-shape w-[500px] h-[500px] -bottom-40 -left-40 opacity-40"
          style={{ background: 'var(--gradient-warm)' }}
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-40 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text content */}
          <div>
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <span className="pill-badge">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Programmatic Advertising Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              The unified
              <br />
              <span className="gradient-text">infrastructure</span>
              <br />
              for AdTech
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Connect publishers, advertisers, and platforms through a single 
              enterprise-grade infrastructure. Beyond the walled gardens.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size="lg" className="h-14 px-8 rounded-full font-semibold text-base group">
                Start Building
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="ghost" size="lg" className="h-14 px-6 rounded-full font-semibold text-base group">
                <Play className="w-5 h-5 mr-2 fill-current" />
                Watch Demo
              </Button>
            </motion.div>
          </div>

          {/* Right - Stats cards */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "50B+", label: "Daily Impressions", delay: 0 },
                { value: "180+", label: "Countries Connected", delay: 0.1 },
                { value: "99.9%", label: "Uptime Guaranteed", delay: 0.2 },
                { value: "<10ms", label: "Average Latency", delay: 0.3 },
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="elevated-card p-6 md:p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + stat.delay }}
                >
                  <div className="stat-number mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Decorative floating element */}
            <motion.div 
              className="absolute -top-8 -right-8 w-20 h-20 rounded-2xl bg-accent/10 border border-accent/20"
              animate={{ rotate: [0, 10, 0], y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
