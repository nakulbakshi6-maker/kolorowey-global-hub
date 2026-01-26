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

          {/* Right column - AdTech Ecosystem Visualization */}
          <motion.div 
            className="relative hidden lg:flex items-center justify-center h-[520px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Ambient glow */}
            <motion.div 
              className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-20"
              style={{ background: 'radial-gradient(circle, hsl(320 85% 55%), hsl(185 85% 45%), transparent 60%)' }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            />

            {/* Central Hub - Kolorowey */}
            <motion.div 
              className="absolute z-20 w-24 h-24 rounded-2xl bg-gradient-to-br from-accent to-[hsl(280,70%,50%)] flex items-center justify-center shadow-[0_0_40px_rgba(236,72,153,0.4)]"
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <span className="text-3xl font-bold text-white">K</span>
            </motion.div>

            {/* Ecosystem Nodes */}
            {[
              { label: "Publishers", icon: "📰", x: -140, y: -80, color: "from-blue-500 to-blue-600" },
              { label: "SSP", icon: "🔗", x: 140, y: -80, color: "from-purple-500 to-purple-600" },
              { label: "DSP", icon: "🎯", x: 140, y: 80, color: "from-cyan-500 to-cyan-600" },
              { label: "Advertisers", icon: "📢", x: -140, y: 80, color: "from-pink-500 to-pink-600" },
            ].map((node, i) => (
              <motion.div
                key={node.label}
                className="absolute z-10"
                style={{ left: `calc(50% + ${node.x}px)`, top: `calc(50% + ${node.y}px)`, transform: 'translate(-50%, -50%)' }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
              >
                <motion.div 
                  className={`w-20 h-20 rounded-xl bg-gradient-to-br ${node.color} flex flex-col items-center justify-center shadow-lg border border-white/10`}
                  whileHover={{ scale: 1.1 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                >
                  <span className="text-2xl mb-1">{node.icon}</span>
                  <span className="text-[9px] font-semibold text-white/90">{node.label}</span>
                </motion.div>
              </motion.div>
            ))}

            {/* Connection lines with flowing data */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
              <defs>
                <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(320 85% 55%)" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="hsl(320 85% 55%)" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="hsl(320 85% 55%)" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(185 85% 45%)" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="hsl(185 85% 45%)" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="hsl(185 85% 45%)" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              {/* Connection paths */}
              {[
                { from: { x: 110, y: 180 }, to: { x: 200, y: 260 } },
                { from: { x: 290, y: 180 }, to: { x: 200, y: 260 } },
                { from: { x: 200, y: 260 }, to: { x: 290, y: 340 } },
                { from: { x: 200, y: 260 }, to: { x: 110, y: 340 } },
              ].map((line, i) => (
                <motion.line
                  key={i}
                  x1={line.from.x}
                  y1={line.from.y}
                  x2={line.to.x}
                  y2={line.to.y}
                  stroke={`url(#lineGradient${(i % 2) + 1})`}
                  strokeWidth="2"
                  strokeDasharray="8 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
                />
              ))}
            </svg>

            {/* Flowing data packets */}
            {[
              { startX: -140, startY: -80, endX: 0, endY: 0, delay: 0, color: "bg-blue-400" },
              { startX: 140, startY: -80, endX: 0, endY: 0, delay: 0.5, color: "bg-purple-400" },
              { startX: 0, startY: 0, endX: 140, endY: 80, delay: 1, color: "bg-cyan-400" },
              { startX: 0, startY: 0, endX: -140, endY: 80, delay: 1.5, color: "bg-pink-400" },
            ].map((packet, i) => (
              <motion.div
                key={i}
                className={`absolute z-30 w-3 h-3 rounded-full ${packet.color} shadow-lg`}
                style={{ left: '50%', top: '50%' }}
                animate={{
                  x: [packet.startX, 0, packet.endX],
                  y: [packet.startY, 0, packet.endY],
                  opacity: [0, 1, 1, 0],
                  scale: [0.5, 1, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: packet.delay,
                  times: [0, 0.4, 0.6, 1],
                }}
              />
            ))}

            {/* Real-time bid indicator */}
            <motion.div 
              className="absolute top-4 right-4 bg-[#0d1020]/90 backdrop-blur-sm rounded-lg px-4 py-3 border border-[#2a3555]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
            >
              <div className="text-[10px] text-muted-foreground mb-1">LIVE BIDS</div>
              <div className="flex items-center gap-2">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-green-400"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
                <motion.span 
                  className="text-lg font-bold gradient-text font-mono"
                  animate={{ opacity: [1, 0.8, 1] }}
                  transition={{ duration: 0.3, repeat: Infinity }}
                >
                  1,247,892
                </motion.span>
              </div>
            </motion.div>

            {/* Latency indicator */}
            <motion.div 
              className="absolute bottom-4 right-4 bg-[#0d1020]/90 backdrop-blur-sm rounded-lg px-4 py-3 border border-[#2a3555]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
            >
              <div className="text-[10px] text-muted-foreground mb-1">AVG LATENCY</div>
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-bold text-cyan-400 font-mono">8</span>
                <span className="text-xs text-muted-foreground">ms</span>
              </div>
            </motion.div>

            {/* Fill rate indicator */}
            <motion.div 
              className="absolute top-4 left-4 bg-[#0d1020]/90 backdrop-blur-sm rounded-lg px-4 py-3 border border-[#2a3555]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3 }}
            >
              <div className="text-[10px] text-muted-foreground mb-1">FILL RATE</div>
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-bold text-green-400 font-mono">94.7</span>
                <span className="text-xs text-muted-foreground">%</span>
              </div>
            </motion.div>

            {/* Revenue indicator */}
            <motion.div 
              className="absolute bottom-4 left-4 bg-[#0d1020]/90 backdrop-blur-sm rounded-lg px-4 py-3 border border-[#2a3555]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 }}
            >
              <div className="text-[10px] text-muted-foreground mb-1">REVENUE/HR</div>
              <div className="flex items-baseline gap-1">
                <span className="text-xs text-muted-foreground">$</span>
                <motion.span 
                  className="text-lg font-bold text-accent font-mono"
                  animate={{ opacity: [1, 0.9, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  42,891
                </motion.span>
              </div>
            </motion.div>

            {/* Floating labels */}
            <motion.div 
              className="absolute top-1/2 -translate-y-1/2 left-0 text-[10px] font-medium text-muted-foreground"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ← Supply
            </motion.div>
            <motion.div 
              className="absolute top-1/2 -translate-y-1/2 right-0 text-[10px] font-medium text-muted-foreground"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              Demand →
            </motion.div>
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
