import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle background shapes */}
      <div className="absolute inset-0 bg-background">
        <motion.div 
          className="float-shape w-[800px] h-[800px] -top-80 -right-80"
          animate={{ 
            y: [0, 50, 0],
            x: [0, 30, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="float-shape w-[600px] h-[600px] -bottom-80 -left-80 opacity-20"
          animate={{ 
            y: [0, -40, 0],
            x: [0, -20, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Decorative lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-44 pb-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left - Text content */}
          <div>
            {/* Tagline Badge - elegant dark */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="mb-10"
            >
              <span className="tagline-badge">
                AdTech Unfragmented
              </span>
            </motion.div>

            {/* Headline - refined animation */}
            <div className="overflow-hidden mb-8">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
              >
                The unified
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight gradient-text"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
              >
                infrastructure
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
              >
                for AdTech
              </motion.h1>
            </div>

            {/* Subheadline */}
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Connect publishers, advertisers, and platforms through a single 
              enterprise-grade infrastructure. Beyond the walled gardens.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button size="lg" className="h-14 px-8 rounded-full font-semibold text-base group">
                Start Building
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-6 rounded-full font-semibold text-base group border-foreground/20 hover:bg-foreground hover:text-background">
                <Play className="w-4 h-4 mr-2" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              className="mt-14 flex items-center gap-8 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-green-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span>Enterprise Ready</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <span>GDPR Compliant</span>
              <div className="h-4 w-px bg-border" />
              <span>SOC 2 Certified</span>
            </motion.div>
          </div>

          {/* Right - Stats cards */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: "50B+", label: "Daily Impressions", accent: true },
                { value: "180+", label: "Countries" },
                { value: "99.9%", label: "Uptime SLA" },
                { value: "<10ms", label: "Latency", accent: true },
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="elevated-card-hover p-7 md:p-8 group cursor-pointer"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: 0.6 + index * 0.1,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={stat.accent ? 'stat-number-accent mb-2' : 'stat-number mb-2'}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-8 -right-8 w-20 h-20 rounded-2xl border border-border"
              animate={{ rotate: [0, 90, 0], y: [0, -10, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute -bottom-6 -left-6 w-14 h-14 rounded-full border border-border"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
