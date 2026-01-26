import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Cursor glow effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Generate stars only once
  const stars = useMemo(() => 
    [...Array(80)].map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: 1 + Math.random() * 2,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
    })), []
  );

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-32 md:pt-40 pb-20">
      
      {/* === CURSOR GLOW EFFECT === */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full pointer-events-none z-0"
        style={{
          x: smoothMouseX,
          y: smoothMouseY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, hsl(320 85% 55% / 0.15) 0%, hsl(280 70% 55% / 0.08) 40%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* === SUBTLE BACKGROUND ANIMATIONS === */}
      <motion.div className="absolute inset-0 overflow-hidden" style={{ y }}>
        
        {/* Starfield */}
        {stars.map((star, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
            }}
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Subtle aurora effect */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, hsl(320 85% 55% / 0.08) 30%, hsl(185 85% 45% / 0.1) 50%, hsl(280 70% 55% / 0.06) 70%, transparent 100%)',
          }}
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Large slow rotating conic gradient */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] rounded-full opacity-15 blur-3xl"
          style={{ background: 'conic-gradient(from 0deg, hsl(320 85% 55%), hsl(280 70% 55%), hsl(185 85% 45%), hsl(45 90% 50%), hsl(320 85% 55%))' }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />

        {/* Gentle pulsing center glow */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, hsl(320 85% 55% / 0.2) 0%, transparent 60%)' }}
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating orbs - slower and more subtle */}
        {[
          { x: '20%', y: '20%', size: 300, color: 'hsl(320 85% 55%)', duration: 40 },
          { x: '80%', y: '30%', size: 250, color: 'hsl(185 85% 45%)', duration: 50 },
          { x: '70%', y: '70%', size: 200, color: 'hsl(280 70% 55%)', duration: 45 },
          { x: '30%', y: '75%', size: 280, color: 'hsl(45 90% 55%)', duration: 35 },
        ].map((orb, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              left: orb.x,
              top: orb.y,
              width: orb.size,
              height: orb.size,
              background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
              opacity: 0.1,
            }}
            animate={{
              x: [0, i % 2 === 0 ? 60 : -60, 0],
              y: [0, i % 2 === 0 ? -40 : 40, 0],
              scale: [1, 1.1, 1],
              opacity: [0.08, 0.15, 0.08],
            }}
            transition={{ duration: orb.duration, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        {/* Subtle animated concentric rings */}
        {[250, 450, 650].map((size, i) => (
          <motion.div
            key={`ring-${size}`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: size,
              height: size,
              border: `1px solid hsla(320, 85%, 55%, ${0.06 - i * 0.015})`,
            }}
            animate={{ 
              rotate: i % 2 === 0 ? 360 : -360,
              scale: [1, 1.02, 1],
            }}
            transition={{ 
              rotate: { duration: 80 + i * 30, repeat: Infinity, ease: "linear" },
              scale: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }
            }}
          />
        ))}

        {/* Gentle floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{ 
              background: ['hsl(320 85% 60%)', 'hsl(185 85% 50%)', 'hsl(280 70% 60%)'][i % 3],
              width: 2 + (i % 3),
              height: 2 + (i % 3),
              left: `${(i * 6.5) % 100}%`,
              top: `${(i * 8) % 100}%`,
            }}
            animate={{
              y: [0, -30 - (i % 3) * 10, 0],
              x: [0, i % 2 === 0 ? 15 : -15, 0],
              opacity: [0.15, 0.4, 0.15],
              scale: [1, 1.3, 1],
            }}
            transition={{ 
              duration: 10 + (i % 5) * 3, 
              repeat: Infinity, 
              delay: i * 0.4,
              ease: "easeInOut" 
            }}
          />
        ))}

        {/* Subtle mesh grid */}
        <motion.div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(320 85% 55%) 1px, transparent 1px),
              linear-gradient(90deg, hsl(320 85% 55%) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
          animate={{ 
            backgroundPosition: ['0px 0px', '80px 80px'],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />

        {/* Slow pulse circles */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`pulse-${i}`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: 100,
              height: 100,
              border: '1px solid hsl(320 85% 55% / 0.3)',
            }}
            animate={{
              scale: [1, 5, 5],
              opacity: [0.3, 0, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 4,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Radial vignette */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, hsl(var(--background) / 0.4) 50%, hsl(var(--background)) 80%)',
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
