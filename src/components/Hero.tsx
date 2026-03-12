import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Globe, Clock, TrendingUp, Calendar } from "lucide-react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

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

  // Animated counter hook
  const useAnimatedCounter = (end: number, duration: number = 2000, delay: number = 0) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });
    
    useEffect(() => {
      if (!isInView) return;
      
      const timeout = setTimeout(() => {
        let startTime: number;
        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(easeOut * end));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }, delay);
      
      return () => clearTimeout(timeout);
    }, [isInView, end, duration, delay]);
    
    return { count, ref };
  };

  const requestsCounter = useAnimatedCounter(1200000, 2000, 1200);
  const latencyCounter = useAnimatedCounter(10, 1500, 1400);
  const uptimeCounter = useAnimatedCounter(999, 1800, 1600);
  const countriesCounter = useAnimatedCounter(50, 1200, 1800);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-32 md:pt-40 pb-20">
      
      {/* === CURSOR GLOW EFFECT === */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none z-10"
        style={{
          x: smoothMouseX,
          y: smoothMouseY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, hsl(320 85% 55% / 0.12) 0%, hsl(280 70% 55% / 0.06) 50%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* === ELEGANT BACKGROUND ANIMATIONS === */}
      <motion.div className="absolute inset-0 overflow-hidden" style={{ y }}>
        
        {/* Large soft gradient blobs */}
        <motion.div 
          className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full opacity-40"
          style={{
            background: 'radial-gradient(circle, hsl(320 85% 85% / 0.6) 0%, hsl(320 85% 90% / 0.3) 40%, transparent 70%)',
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute -top-1/4 -right-1/4 w-[700px] h-[700px] rounded-full opacity-35"
          style={{
            background: 'radial-gradient(circle, hsl(185 85% 85% / 0.5) 0%, hsl(185 85% 90% / 0.2) 40%, transparent 70%)',
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute -bottom-1/4 left-1/3 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, hsl(280 70% 85% / 0.5) 0%, hsl(280 70% 90% / 0.2) 40%, transparent 70%)',
          }}
          animate={{
            x: [0, 60, 0],
            y: [0, -60, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating geometric shapes */}
        {[
          { x: '10%', y: '20%', size: 80, delay: 0, duration: 15 },
          { x: '85%', y: '15%', size: 60, delay: 2, duration: 18 },
          { x: '75%', y: '70%', size: 100, delay: 4, duration: 20 },
          { x: '15%', y: '75%', size: 70, delay: 1, duration: 16 },
          { x: '50%', y: '10%', size: 50, delay: 3, duration: 14 },
        ].map((shape, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute rounded-full"
            style={{
              left: shape.x,
              top: shape.y,
              width: shape.size,
              height: shape.size,
              border: '1px solid hsl(320 85% 75% / 0.3)',
              background: 'linear-gradient(135deg, hsl(320 85% 95% / 0.3) 0%, transparent 50%)',
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, i % 2 === 0 ? 20 : -20, 0],
              rotate: [0, 180, 360],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ 
              duration: shape.duration, 
              repeat: Infinity, 
              delay: shape.delay,
              ease: "easeInOut" 
            }}
          />
        ))}

        {/* Subtle horizontal light beams */}
        <motion.div 
          className="absolute top-1/3 left-0 w-full h-px opacity-20"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, hsl(320 85% 70% / 0.5) 20%, hsl(185 85% 70% / 0.5) 50%, hsl(280 70% 70% / 0.5) 80%, transparent 100%)',
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scaleX: [0.8, 1, 0.8],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute top-2/3 left-0 w-full h-px opacity-15"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, hsl(185 85% 70% / 0.4) 30%, hsl(320 85% 70% / 0.4) 70%, transparent 100%)',
          }}
          animate={{
            opacity: [0.05, 0.2, 0.05],
            scaleX: [0.9, 1, 0.9],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Gentle center glow */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full"
          style={{ 
            background: 'radial-gradient(ellipse, hsl(320 85% 92% / 0.4) 0%, transparent 60%)',
          }}
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Decorative corner accents */}
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32"
          animate={{ opacity: [0.3, 0.6, 0.3], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-accent/30 to-transparent" />
          <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-accent/30 to-transparent" />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-20 right-20 w-32 h-32"
          animate={{ opacity: [0.3, 0.6, 0.3], rotate: [0, -90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        >
          <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-secondary/30 to-transparent" />
          <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-secondary/30 to-transparent" />
        </motion.div>

        {/* Soft vignette */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, hsl(var(--background) / 0.3) 70%, hsl(var(--background) / 0.6) 100%)',
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
          <span className="shimmer-badge">
            AdTech Unfragmented
          </span>
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
          <span className="text-accent font-semibold">
            Beyond the walled gardens.
          </span>
        </motion.p>

        {/* CTA */}
        <motion.div 
          className="flex justify-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.div 
            whileHover={{ scale: 1.05, y: -3 }} 
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Button 
              size="lg" 
              className="h-14 px-10 rounded-full font-semibold text-base group relative overflow-hidden shadow-xl shadow-primary/25 bg-primary hover:bg-primary/90"
              onClick={() => window.location.href = '/contact'}
            >
              <Calendar className="w-5 h-5 mr-3" />
              Book a Demo
              <motion.span
                className="ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats row with animated counters */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          {[
            { 
              counter: requestsCounter, 
              format: (n: number) => n >= 1000000 ? `${(n / 1000000).toFixed(1)}M+` : `${(n / 1000).toFixed(0)}K+`,
              label: "Requests/sec",
              icon: TrendingUp,
              color: "hsl(320 85% 55%)"
            },
            { 
              counter: latencyCounter, 
              format: (n: number) => `<${n}ms`,
              label: "Latency",
              icon: Zap,
              color: "hsl(185 85% 45%)"
            },
            { 
              counter: uptimeCounter, 
              format: (n: number) => `${(n / 10).toFixed(1)}%`,
              label: "Uptime",
              icon: Clock,
              color: "hsl(280 70% 55%)"
            },
            { 
              counter: countriesCounter, 
              format: (n: number) => `${n}+`,
              label: "Countries",
              icon: Globe,
              color: "hsl(45 90% 50%)"
            },
          ].map((stat, i) => (
            <motion.div 
              key={stat.label}
              ref={stat.counter.ref}
              className="text-center relative group"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.2 + i * 0.12, type: "spring", stiffness: 150 }}
              whileHover={{ scale: 1.1, y: -8 }}
            >
              {/* Animated icon */}
              <motion.div
                className="mx-auto mb-3 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ 
                  background: `linear-gradient(135deg, ${stat.color}20, ${stat.color}10)`,
                  border: `1px solid ${stat.color}30`
                }}
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
              >
                <stat.icon 
                  className="w-5 h-5" 
                  style={{ color: stat.color }}
                />
              </motion.div>
              
              {/* Animated counter value */}
              <motion.div 
                className="text-3xl md:text-4xl font-bold gradient-text tabular-nums"
                animate={{ 
                  textShadow: [
                    '0 0 0px hsl(320 85% 55% / 0)',
                    '0 0 20px hsl(320 85% 55% / 0.3)',
                    '0 0 0px hsl(320 85% 55% / 0)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.6 }}
              >
                {stat.format(stat.counter.count)}
              </motion.div>
              
              {/* Label with underline animation */}
              <div className="text-sm text-muted-foreground mt-2 font-medium relative">
                {stat.label}
                <motion.div 
                  className="absolute -bottom-1 left-1/2 h-0.5 rounded-full"
                  style={{ background: stat.color }}
                  initial={{ width: 0, x: '-50%' }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle, ${stat.color}15 0%, transparent 70%)`,
                  filter: 'blur(20px)',
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Orbiting dots */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={`orbit-${i}`}
              className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2"
              animate={{ rotate: 360 }}
              transition={{ duration: 30 + i * 10, repeat: Infinity, ease: "linear" }}
            >
              <motion.div
                className="absolute w-2 h-2 rounded-full"
                style={{
                  top: '0%',
                  left: '50%',
                  background: ['hsl(320 85% 55%)', 'hsl(185 85% 45%)', 'hsl(280 70% 55%)'][i],
                  boxShadow: `0 0 10px ${['hsl(320 85% 55% / 0.5)', 'hsl(185 85% 45% / 0.5)', 'hsl(280 70% 55% / 0.5)'][i]}`
                }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              />
            </motion.div>
          ))}
        </div>
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
