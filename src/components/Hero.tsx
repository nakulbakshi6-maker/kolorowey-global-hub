import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        {/* Swiss Grid */}
        <div className="absolute inset-0 swiss-grid opacity-50" />
        
        {/* Accent shapes */}
        <motion.div 
          className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left - Main Content */}
          <div className="lg:col-span-7 lg:pt-12">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <span className="editorial-badge">
                Global AdTech Infrastructure
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight mb-8">
                <span className="text-foreground">Unified</span>
                <br />
                <span className="text-foreground">Advertising</span>
                <br />
                <span className="gradient-text italic font-normal">Infrastructure</span>
              </h1>
            </motion.div>

            {/* Subline */}
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Kolorowey connects publishers, advertisers, and platforms through 
              a single, enterprise-grade infrastructure. Beyond the walled gardens.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button 
                className="h-14 px-8 bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm font-medium text-base group"
              >
                Start Integration
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                className="h-14 px-8 border-foreground/20 hover:border-foreground/40 hover:bg-transparent rounded-sm font-medium text-base"
              >
                View Platform
              </Button>
            </motion.div>
          </div>

          {/* Right - Stats */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Vertical label */}
            <div className="hidden lg:flex items-start gap-8 mb-8">
              <span className="vertical-text text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Key Metrics
              </span>
              <div className="precision-line flex-1 mt-6" />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-px bg-border">
              {[
                { value: "50B+", label: "Daily Impressions", suffix: "processed" },
                { value: "180+", label: "Countries", suffix: "connected" },
                { value: "99.9%", label: "Uptime SLA", suffix: "guaranteed" },
                { value: "<10ms", label: "Latency", suffix: "average" },
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="bg-card p-8 group hover:bg-secondary/50 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <div className="luxury-number text-4xl md:text-5xl mb-3">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.suffix}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom link */}
            <motion.a
              href="#platform"
              className="flex items-center gap-2 mt-6 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Explore our technology
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="container mx-auto px-6">
          <motion.div 
            className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
