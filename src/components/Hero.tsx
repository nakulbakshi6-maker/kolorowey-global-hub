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
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Animated gradient orbs with parallax */}
      <motion.div className="absolute inset-0 overflow-hidden" style={{ y }}>
        <motion.div 
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full opacity-20 blur-3xl"
          style={{ background: 'linear-gradient(135deg, hsl(320 85% 55%), hsl(280 70% 55%))' }}
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full opacity-15 blur-2xl"
          style={{ background: 'linear-gradient(135deg, hsl(185 85% 45%), hsl(200 80% 50%))' }}
          animate={{ 
            scale: [1.1, 1, 1.1],
            rotate: [0, -90, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{ 
              background: i % 2 === 0 ? 'hsl(320 85% 55%)' : 'hsl(185 85% 45%)',
              left: `${20 + i * 15}%`,
              top: `${30 + (i * 10)}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 10, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{ 
              duration: 4 + i, 
              repeat: Infinity, 
              delay: i * 0.5,
              ease: "easeInOut" 
            }}
          />
        ))}
        {/* Animated grid pattern */}
        <motion.div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(230 45% 22%) 1px, transparent 1px),
              linear-gradient(90deg, hsl(230 45% 22%) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
          animate={{ 
            backgroundPosition: ['0px 0px', '80px 80px'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <motion.div 
        className="relative z-10 container mx-auto px-6 pt-40 pb-24"
        style={{ opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Text content */}
          <div>
            {/* Badge with shimmer and bounce */}
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
              className="mb-8"
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

            {/* Massive headline with stagger and character animation */}
            <div className="mb-8 space-y-2">
              {["The unified", "infrastructure", "for AdTech"].map((text, index) => (
                <div key={text} className="overflow-hidden">
                  <motion.h1 
                    className={`text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight ${
                      index === 1 ? 'gradient-text' : ''
                    }`}
                    initial={{ y: 100, opacity: 0, rotateX: -40 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
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

            {/* Subheadline with word reveal */}
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Connect publishers, advertisers, and platforms through a single 
              enterprise-grade infrastructure. 
              <motion.span 
                className="text-accent font-semibold inline-block"
                animate={{ 
                  textShadow: [
                    '0 0 0px hsl(320 85% 55% / 0)',
                    '0 0 20px hsl(320 85% 55% / 0.5)',
                    '0 0 0px hsl(320 85% 55% / 0)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Beyond the walled gardens.
              </motion.span>
            </motion.p>

            {/* CTAs with enhanced micro-interactions */}
            <motion.div 
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="h-14 px-8 rounded-full font-bold text-base group hover-glow relative overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-accent to-highlight opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
          </div>

          {/* Right column - Balloon Animation */}
          <motion.div 
            className="relative hidden lg:flex items-center justify-center h-[520px] w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Balloons */}
            {[
              { x: '15%', color: 'from-pink-400 to-pink-500', size: 80, delay: 0, duration: 4 },
              { x: '35%', color: 'from-purple-400 to-purple-500', size: 70, delay: 0.5, duration: 4.5 },
              { x: '55%', color: 'from-cyan-400 to-cyan-500', size: 90, delay: 0.2, duration: 3.8 },
              { x: '75%', color: 'from-accent to-pink-500', size: 75, delay: 0.8, duration: 4.2 },
              { x: '25%', color: 'from-blue-400 to-blue-500', size: 65, delay: 1, duration: 5 },
              { x: '65%', color: 'from-violet-400 to-violet-500', size: 85, delay: 0.3, duration: 3.5 },
              { x: '45%', color: 'from-rose-400 to-rose-500', size: 72, delay: 0.7, duration: 4.8 },
              { x: '85%', color: 'from-teal-400 to-teal-500', size: 68, delay: 1.2, duration: 4.3 },
            ].map((balloon, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{ left: balloon.x, bottom: '10%' }}
                animate={{ 
                  y: [0, -20, 0],
                  x: [0, i % 2 === 0 ? 10 : -10, 0],
                  rotate: [0, i % 2 === 0 ? 5 : -5, 0],
                }}
                transition={{ 
                  duration: balloon.duration, 
                  repeat: Infinity, 
                  delay: balloon.delay,
                  ease: "easeInOut"
                }}
              >
                {/* Balloon body */}
                <motion.div 
                  className={`bg-gradient-to-b ${balloon.color} rounded-full relative`}
                  style={{ 
                    width: balloon.size, 
                    height: balloon.size * 1.2,
                    boxShadow: `inset -${balloon.size/5}px -${balloon.size/5}px ${balloon.size/3}px rgba(0,0,0,0.1), inset ${balloon.size/8}px ${balloon.size/8}px ${balloon.size/4}px rgba(255,255,255,0.3)`,
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  {/* Highlight */}
                  <div 
                    className="absolute bg-white/40 rounded-full"
                    style={{ 
                      width: balloon.size * 0.25, 
                      height: balloon.size * 0.35,
                      top: balloon.size * 0.15,
                      left: balloon.size * 0.2,
                    }}
                  />
                  {/* Balloon knot */}
                  <div 
                    className={`absolute left-1/2 -translate-x-1/2 bg-gradient-to-b ${balloon.color}`}
                    style={{
                      width: balloon.size * 0.15,
                      height: balloon.size * 0.12,
                      bottom: -balloon.size * 0.06,
                      clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)',
                    }}
                  />
                </motion.div>
                
                {/* String */}
                <motion.div 
                  className="absolute left-1/2 -translate-x-1/2"
                  style={{ 
                    top: balloon.size * 1.2,
                    width: 2,
                    height: 80 + (i * 10),
                    background: 'linear-gradient(to bottom, rgba(100,100,100,0.6), rgba(100,100,100,0.2))',
                  }}
                  animate={{ 
                    rotate: [0, 3, -3, 0],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: balloon.delay,
                  }}
                />
              </motion.div>
            ))}

            {/* Floating sparkles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: ['hsl(320 85% 65%)', 'hsl(185 85% 55%)', 'hsl(280 70% 60%)', 'hsl(45 90% 60%)'][i % 4],
                  left: `${10 + (i * 7)}%`,
                  top: `${20 + (i % 5) * 15}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{ 
                  duration: 3 + (i % 3), 
                  repeat: Infinity, 
                  delay: i * 0.3,
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
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
