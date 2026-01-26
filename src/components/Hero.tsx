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
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-32 md:pt-40 pb-20">
      
      {/* === BACKGROUND ANIMATIONS === */}
      <motion.div className="absolute inset-0 overflow-hidden" style={{ y }}>
        
        {/* Animated gradient mesh */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full opacity-40 blur-3xl"
          style={{ background: 'conic-gradient(from 0deg, hsl(320 85% 55%), hsl(280 70% 55%), hsl(185 85% 45%), hsl(320 85% 55%))' }}
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        {/* Floating gradient orbs */}
        <motion.div 
          className="absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full opacity-25 blur-3xl"
          style={{ background: 'radial-gradient(circle, hsl(185 85% 50%) 0%, transparent 70%)' }}
          animate={{ 
            x: [0, 80, 0],
            y: [0, -60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div 
          className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, hsl(280 70% 60%) 0%, transparent 70%)' }}
          animate={{ 
            x: [0, -60, 0],
            y: [0, 50, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{ 
              background: ['hsl(320 85% 60%)', 'hsl(185 85% 50%)', 'hsl(280 70% 60%)', 'hsl(45 90% 60%)'][i % 4],
              width: 4 + (i % 4) * 2,
              height: 4 + (i % 4) * 2,
              left: `${5 + (i * 4.5)}%`,
              top: `${10 + (i % 8) * 10}%`,
              opacity: 0.4,
            }}
            animate={{
              y: [0, -50 - (i % 5) * 10, 0],
              x: [0, i % 2 === 0 ? 20 : -20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{ 
              duration: 5 + (i % 5) * 2, 
              repeat: Infinity, 
              delay: i * 0.3,
              ease: "easeInOut" 
            }}
          />
        ))}

        {/* Animated rings */}
        {[300, 500, 700].map((size, i) => (
          <motion.div
            key={size}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
            style={{
              width: size,
              height: size,
              borderColor: `hsla(320, 85%, 55%, ${0.1 - i * 0.02})`,
            }}
            animate={{ 
              rotate: i % 2 === 0 ? 360 : -360,
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              rotate: { duration: 30 + i * 10, repeat: Infinity, ease: "linear" },
              scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        ))}

        {/* Grid pattern */}
        <motion.div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
          animate={{ 
            backgroundPosition: ['0px 0px', '80px 80px'],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        {/* Radial vignette */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, hsl(var(--background)) 75%)',
          }}
        />
      </motion.div>

      {/* === MAIN CONTENT === */}
      <motion.div 
        className="relative z-10 container mx-auto px-6 text-center max-w-5xl"
        style={{ opacity }}
      >
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 150 }}
          className="mb-10 md:mb-12 flex justify-center"
        >
          <motion.span 
            className="shimmer-badge"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            animate={{ 
              boxShadow: [
                '0 0 20px hsl(320 85% 55% / 0.2)',
                '0 0 40px hsl(320 85% 55% / 0.4)',
                '0 0 20px hsl(320 85% 55% / 0.2)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
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
        <div className="mb-10 md:mb-14 space-y-2 md:space-y-3">
          {["The unified", "infrastructure", "for AdTech"].map((text, index) => (
            <div key={text} className="overflow-hidden">
              <motion.h1 
                className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1] tracking-tight ${
                  index === 1 ? 'gradient-text' : ''
                }`}
                initial={{ y: 120, opacity: 0, rotateX: -20 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{ 
                  duration: 1, 
                  delay: 0.2 + index * 0.15,
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
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 md:mb-16 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Connect publishers, advertisers, and platforms through a single 
          enterprise-grade infrastructure.{" "}
          <motion.span 
            className="text-accent font-semibold inline-block"
            animate={{ 
              textShadow: [
                '0 0 0px hsl(320 85% 55% / 0)',
                '0 0 30px hsl(320 85% 55% / 0.5)',
                '0 0 0px hsl(320 85% 55% / 0)',
              ],
              y: [0, -2, 0],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            Beyond the walled gardens.
          </motion.span>
        </motion.p>

        {/* CTAs */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-5 mb-20 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.div 
            whileHover={{ scale: 1.05, y: -2 }} 
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Button size="lg" className="h-14 px-10 rounded-full font-bold text-base group hover-glow relative overflow-hidden shadow-lg shadow-accent/20">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-accent to-[hsl(280,70%,55%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="relative z-10 flex items-center">
                Start Building
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </span>
            </Button>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05, y: -2 }} 
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="h-14 px-10 rounded-full font-bold text-base border-2 group hover:border-accent hover:text-accent transition-all duration-300 shadow-lg"
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
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
          className="flex flex-wrap items-center justify-center gap-10 md:gap-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
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
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.2 + i * 0.12, type: "spring", stiffness: 150 }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <motion.div 
                className="text-3xl md:text-4xl font-bold gradient-text"
                animate={{ 
                  opacity: [0.85, 1, 0.85],
                  textShadow: [
                    '0 0 0px hsl(320 85% 55% / 0)',
                    '0 0 15px hsl(320 85% 55% / 0.3)',
                    '0 0 0px hsl(320 85% 55% / 0)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.6 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-muted-foreground mt-2 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div 
          className="w-7 h-12 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-3"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <motion.div 
            className="w-2 h-2 rounded-full bg-accent"
            animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
