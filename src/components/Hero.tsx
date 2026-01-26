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

          {/* Right column - Enhanced Network Visualization */}
          <motion.div 
            className="relative hidden lg:flex items-center justify-center h-[520px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Background glow */}
            <motion.div 
              className="absolute inset-0 rounded-full opacity-30 blur-3xl"
              style={{
                background: 'radial-gradient(circle at center, hsl(320 85% 55% / 0.4), transparent 60%)',
              }}
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.35, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <svg className="w-full h-full relative z-10" viewBox="0 0 400 400">
              {/* Outer rotating ring */}
              <motion.circle
                cx="200"
                cy="200"
                r="160"
                fill="none"
                stroke="url(#ringGradient)"
                strokeWidth="0.5"
                strokeDasharray="8 4"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: 'center' }}
              />
              
              {/* Inner rotating ring */}
              <motion.circle
                cx="200"
                cy="200"
                r="120"
                fill="none"
                stroke="url(#ringGradient)"
                strokeWidth="0.5"
                strokeDasharray="4 8"
                initial={{ rotate: 0 }}
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: 'center' }}
              />

              {/* Connection lines with glow */}
              {[
                { x1: 200, y1: 200, x2: 90, y2: 90 },
                { x1: 200, y1: 200, x2: 310, y2: 90 },
                { x1: 200, y1: 200, x2: 70, y2: 260 },
                { x1: 200, y1: 200, x2: 330, y2: 260 },
                { x1: 200, y1: 200, x2: 200, y2: 40 },
                { x1: 200, y1: 200, x2: 200, y2: 360 },
                { x1: 90, y1: 90, x2: 200, y2: 40 },
                { x1: 310, y1: 90, x2: 200, y2: 40 },
                { x1: 70, y1: 260, x2: 200, y2: 360 },
                { x1: 330, y1: 260, x2: 200, y2: 360 },
                { x1: 90, y1: 90, x2: 70, y2: 260 },
                { x1: 310, y1: 90, x2: 330, y2: 260 },
              ].map((line, i) => (
                <g key={i}>
                  <motion.line
                    x1={line.x1}
                    y1={line.y1}
                    x2={line.x2}
                    y2={line.y2}
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    strokeOpacity="0.15"
                    filter="url(#glow)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.08 }}
                  />
                  <motion.line
                    x1={line.x1}
                    y1={line.y1}
                    x2={line.x2}
                    y2={line.y2}
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    strokeOpacity="0.4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.08 }}
                  />
                </g>
              ))}

              {/* Data packets traveling along lines */}
              {[
                { path: "M200,200 L90,90", delay: 0 },
                { path: "M200,200 L310,90", delay: 0.3 },
                { path: "M200,200 L70,260", delay: 0.6 },
                { path: "M200,200 L330,260", delay: 0.9 },
                { path: "M200,200 L200,40", delay: 1.2 },
                { path: "M200,200 L200,360", delay: 1.5 },
              ].map((item, i) => (
                <motion.circle
                  key={`packet-${i}`}
                  r="4"
                  fill="hsl(320 85% 55%)"
                  filter="url(#glow)"
                >
                  <animateMotion
                    dur="2s"
                    repeatCount="indefinite"
                    begin={`${item.delay}s`}
                    path={item.path}
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    dur="2s"
                    repeatCount="indefinite"
                    begin={`${item.delay}s`}
                  />
                </motion.circle>
              ))}

              {/* Reverse data packets */}
              {[
                { path: "M90,90 L200,200", delay: 1 },
                { path: "M310,90 L200,200", delay: 1.3 },
                { path: "M70,260 L200,200", delay: 1.6 },
                { path: "M330,260 L200,200", delay: 1.9 },
              ].map((item, i) => (
                <motion.circle
                  key={`packet-rev-${i}`}
                  r="3"
                  fill="hsl(185 85% 45%)"
                  filter="url(#glow)"
                >
                  <animateMotion
                    dur="2s"
                    repeatCount="indefinite"
                    begin={`${item.delay}s`}
                    path={item.path}
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    dur="2s"
                    repeatCount="indefinite"
                    begin={`${item.delay}s`}
                  />
                </motion.circle>
              ))}

              {/* Center node - Main hub */}
              <motion.circle
                cx="200"
                cy="200"
                r="36"
                fill="url(#centerGradient)"
                filter="url(#glow)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              />
              <motion.circle
                cx="200"
                cy="200"
                r="44"
                fill="none"
                stroke="hsl(320 85% 55%)"
                strokeWidth="1"
                strokeOpacity="0.5"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.circle
                cx="200"
                cy="200"
                r="52"
                fill="none"
                stroke="hsl(320 85% 55%)"
                strokeWidth="0.5"
                strokeOpacity="0.2"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              />
              <motion.text
                x="200"
                y="205"
                textAnchor="middle"
                fill="white"
                fontSize="11"
                fontWeight="700"
                letterSpacing="0.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                KOLOROWEY
              </motion.text>

              {/* Outer nodes with enhanced styling */}
              {[
                { cx: 90, cy: 90, label: "DSP", color: "320 85% 55%" },
                { cx: 310, cy: 90, label: "SSP", color: "185 85% 45%" },
                { cx: 70, cy: 260, label: "DMP", color: "280 70% 55%" },
                { cx: 330, cy: 260, label: "CDP", color: "200 80% 50%" },
                { cx: 200, cy: 40, label: "Exchange", color: "320 85% 55%" },
                { cx: 200, cy: 360, label: "Publisher", color: "185 85% 45%" },
              ].map((node, i) => (
                <motion.g key={node.label}>
                  {/* Node pulse ring */}
                  <motion.circle
                    cx={node.cx}
                    cy={node.cy}
                    r="24"
                    fill="none"
                    stroke={`hsl(${node.color})`}
                    strokeWidth="0.5"
                    strokeOpacity="0.3"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  />
                  {/* Node background */}
                  <motion.circle
                    cx={node.cx}
                    cy={node.cy}
                    r="20"
                    fill="hsl(var(--card))"
                    stroke={`hsl(${node.color} / 0.5)`}
                    strokeWidth="1.5"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1, type: "spring" }}
                  />
                  {/* Node inner glow */}
                  <motion.circle
                    cx={node.cx}
                    cy={node.cy}
                    r="8"
                    fill={`hsl(${node.color})`}
                    filter="url(#glow)"
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
                  />
                  {/* Node label */}
                  <motion.text
                    x={node.cx}
                    y={node.cy + 38}
                    textAnchor="middle"
                    fill="hsl(var(--foreground))"
                    fontSize="11"
                    fontWeight="600"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1 + i * 0.1 }}
                  >
                    {node.label}
                  </motion.text>
                </motion.g>
              ))}

              {/* Filters and gradients */}
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(320 85% 55%)" />
                  <stop offset="50%" stopColor="hsl(280 70% 55%)" />
                  <stop offset="100%" stopColor="hsl(185 85% 45%)" />
                </linearGradient>
                <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(320 85% 55%)" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="hsl(185 85% 45%)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(320 85% 55%)" stopOpacity="0.5" />
                </linearGradient>
                <radialGradient id="centerGradient">
                  <stop offset="0%" stopColor="hsl(320 85% 60%)" />
                  <stop offset="100%" stopColor="hsl(280 70% 45%)" />
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
