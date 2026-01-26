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

          {/* Right column - Network node visualization */}
          <motion.div 
            className="relative hidden lg:flex items-center justify-center h-[500px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <svg className="w-full h-full" viewBox="0 0 400 400">
              {/* Connection lines */}
              {[
                { x1: 200, y1: 200, x2: 100, y2: 80 },
                { x1: 200, y1: 200, x2: 320, y2: 100 },
                { x1: 200, y1: 200, x2: 80, y2: 280 },
                { x1: 200, y1: 200, x2: 340, y2: 260 },
                { x1: 200, y1: 200, x2: 200, y2: 50 },
                { x1: 200, y1: 200, x2: 200, y2: 350 },
                { x1: 100, y1: 80, x2: 200, y2: 50 },
                { x1: 320, y1: 100, x2: 200, y2: 50 },
                { x1: 80, y1: 280, x2: 200, y2: 350 },
                { x1: 340, y1: 260, x2: 200, y2: 350 },
              ].map((line, i) => (
                <motion.line
                  key={i}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
                />
              ))}

              {/* Animated pulse along lines */}
              {[0, 1, 2, 3].map((i) => (
                <motion.circle
                  key={`pulse-${i}`}
                  r="3"
                  fill="hsl(320 85% 55%)"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    cx: [200, [100, 320, 80, 340][i]],
                    cy: [200, [80, 100, 280, 260][i]],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.5,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
              ))}

              {/* Center node */}
              <motion.circle
                cx="200"
                cy="200"
                r="24"
                fill="url(#centerGradient)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
              <motion.circle
                cx="200"
                cy="200"
                r="32"
                fill="none"
                stroke="hsl(320 85% 55%)"
                strokeWidth="1"
                strokeOpacity="0.3"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Outer nodes */}
              {[
                { cx: 100, cy: 80, label: "DSP" },
                { cx: 320, cy: 100, label: "SSP" },
                { cx: 80, cy: 280, label: "DMP" },
                { cx: 340, cy: 260, label: "CDP" },
                { cx: 200, cy: 50, label: "Exchange" },
                { cx: 200, cy: 350, label: "Publisher" },
              ].map((node, i) => (
                <motion.g key={node.label}>
                  <motion.circle
                    cx={node.cx}
                    cy={node.cy}
                    r="16"
                    fill="hsl(var(--card))"
                    stroke="hsl(var(--border))"
                    strokeWidth="1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                  />
                  <motion.circle
                    cx={node.cx}
                    cy={node.cy}
                    r="6"
                    fill="url(#nodeGradient)"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
                  />
                  <motion.text
                    x={node.cx}
                    y={node.cy + 32}
                    textAnchor="middle"
                    fill="hsl(var(--muted-foreground))"
                    fontSize="10"
                    fontWeight="500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1.2 + i * 0.1 }}
                  >
                    {node.label}
                  </motion.text>
                </motion.g>
              ))}

              {/* Gradients */}
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(320 85% 55%)" />
                  <stop offset="100%" stopColor="hsl(185 85% 45%)" />
                </linearGradient>
                <radialGradient id="centerGradient">
                  <stop offset="0%" stopColor="hsl(320 85% 55%)" />
                  <stop offset="100%" stopColor="hsl(280 70% 55%)" />
                </radialGradient>
                <radialGradient id="nodeGradient">
                  <stop offset="0%" stopColor="hsl(185 85% 45%)" />
                  <stop offset="100%" stopColor="hsl(200 80% 50%)" />
                </radialGradient>
              </defs>
            </svg>
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
