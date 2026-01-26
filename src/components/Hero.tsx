import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-32 md:pt-40">
      {/* Animated mesh gradient background */}
      <motion.div className="absolute inset-0 overflow-hidden" style={{ y }}>
        {/* Primary gradient blob */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(circle, hsl(320 85% 55%) 0%, hsl(280 70% 55%) 40%, transparent 70%)' }}
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Secondary accent blob */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, hsl(185 85% 45%) 0%, hsl(200 80% 50%) 50%, transparent 70%)' }}
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Tertiary warm blob */}
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, hsl(280 70% 60%) 0%, hsl(320 85% 50%) 50%, transparent 70%)' }}
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{ 
              background: `radial-gradient(circle, ${
                ['hsl(320 85% 60%)', 'hsl(185 85% 50%)', 'hsl(280 70% 60%)', 'hsl(45 90% 55%)'][i % 4]
              } 0%, transparent 70%)`,
              width: 100 + (i * 30),
              height: 100 + (i * 30),
              left: `${10 + (i * 12)}%`,
              top: `${15 + (i % 4) * 20}%`,
              opacity: 0.15,
              filter: 'blur(40px)',
            }}
            animate={{
              y: [0, -40 - (i * 5), 0],
              x: [0, i % 2 === 0 ? 30 : -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 8 + i * 2, 
              repeat: Infinity, 
              delay: i * 0.5,
              ease: "easeInOut" 
            }}
          />
        ))}

        {/* Subtle grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Radial vignette */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, hsl(var(--background)) 80%)',
          }}
        />
      </motion.div>

      {/* Main content - Centered */}
      <motion.div 
        className="relative z-10 container mx-auto px-6 text-center max-w-4xl"
        style={{ opacity }}
      >
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
          className="mb-8 flex justify-center"
        >
          <motion.span 
            className="shimmer-badge"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span
              animate={{ rotate: [0, 15, 0, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.span>
            AdTech Unfragmented
          </motion.span>
        </motion.div>

        {/* Headline */}
        <div className="mb-8 space-y-1">
          {["The unified", "infrastructure", "for AdTech"].map((text, index) => (
            <div key={text} className="overflow-hidden">
              <motion.h1 
                className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.95] tracking-tight ${
                  index === 1 ? 'gradient-text' : ''
                }`}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.1 + index * 0.12,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                {text}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Subheadline */}
        <motion.p 
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Connect publishers, advertisers, and platforms through a single 
          enterprise-grade infrastructure.{" "}
          <motion.span 
            className="text-accent font-semibold"
            animate={{ 
              textShadow: [
                '0 0 0px hsl(320 85% 55% / 0)',
                '0 0 20px hsl(320 85% 55% / 0.4)',
                '0 0 0px hsl(320 85% 55% / 0)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Beyond the walled gardens.
          </motion.span>
        </motion.p>

        {/* CTAs */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Button size="lg" className="h-14 px-8 rounded-full font-bold text-base group hover-glow relative overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-accent to-[hsl(280,70%,55%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="relative z-10 flex items-center">
                Start Building
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </span>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-14 px-8 rounded-full font-bold text-base border-2 group hover:border-accent hover:text-accent transition-all duration-300"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Play className="w-4 h-4 mr-2 fill-current" />
              </motion.span>
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats row */}
        <motion.div 
          className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            { value: "1.2M+", label: "Requests/sec" },
            { value: "<10ms", label: "Latency" },
            { value: "99.9%", label: "Uptime" },
            { value: "50+", label: "Countries" },
          ].map((stat, i) => (
            <motion.div 
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.1 }}
            >
              <motion.div 
                className="text-2xl md:text-3xl font-bold gradient-text"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div 
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
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
