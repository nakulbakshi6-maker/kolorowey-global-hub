import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Abstract geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient circle */}
        <motion.div 
          className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full opacity-[0.07]"
          style={{ background: 'var(--gradient-brand)' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(220 30% 10%) 1px, transparent 1px),
              linear-gradient(90deg, hsl(220 30% 10%) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-40 pb-24">
        <div className="max-w-5xl">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="modern-badge">
              AdTech Unfragmented
            </span>
          </motion.div>

          {/* Massive headline */}
          <div className="mb-8">
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.95] tracking-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              The unified
            </motion.h1>
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.95] tracking-tight gradient-text"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              infrastructure
            </motion.h1>
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.95] tracking-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              for AdTech
            </motion.h1>
          </div>

          {/* Subheadline */}
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Connect publishers, advertisers, and platforms through a single 
            enterprise-grade infrastructure. Beyond the walled gardens.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            className="flex flex-wrap items-center gap-4 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button size="lg" className="h-14 px-8 rounded-full font-bold text-base group">
              Start Building
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-8 rounded-full font-bold text-base border-2 hover:bg-foreground hover:text-background">
              <Play className="w-4 h-4 mr-2" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats row */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            {[
              { value: "50B+", label: "Daily Impressions" },
              { value: "180+", label: "Countries" },
              { value: "99.9%", label: "Uptime SLA" },
              { value: "<10ms", label: "Latency" },
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="border-l-2 border-foreground/10 pl-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <div className={`text-4xl md:text-5xl font-extrabold tracking-tight mb-1 ${index % 2 === 0 ? 'gradient-text' : ''}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
