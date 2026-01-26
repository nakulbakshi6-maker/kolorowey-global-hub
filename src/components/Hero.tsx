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

          {/* Right column - Pixel Art Data Creature */}
          <motion.div 
            className="relative hidden lg:flex items-center justify-center h-[520px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ imageRendering: 'pixelated' }}
          >
            {/* Retro glow effect */}
            <motion.div 
              className="absolute w-[300px] h-[300px] blur-2xl opacity-40"
              style={{ background: 'radial-gradient(circle, hsl(280 90% 60%), hsl(180 90% 50%), transparent 70%)' }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Scanline overlay effect */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
              }}
            />

            {/* Main Pixel Character */}
            <motion.div
              className="relative"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              {/* Pixel body - built with blocks */}
              <div className="relative">
                {/* Main body block */}
                <div 
                  className="w-40 h-44 relative"
                  style={{ 
                    background: 'linear-gradient(180deg, #8B5CF6 0%, #7C3AED 50%, #6D28D9 100%)',
                    clipPath: 'polygon(12.5% 0%, 87.5% 0%, 100% 12.5%, 100% 87.5%, 87.5% 100%, 12.5% 100%, 0% 87.5%, 0% 12.5%)',
                    boxShadow: '4px 4px 0 #4C1D95, 8px 8px 0 rgba(0,0,0,0.3)',
                  }}
                >
                  {/* Pixel highlight */}
                  <div className="absolute top-2 left-3 w-8 h-4 bg-purple-300" style={{ clipPath: 'polygon(0 0, 100% 0, 75% 100%, 25% 100%)' }} />
                  
                  {/* Eyes container */}
                  <div className="flex justify-center gap-6 pt-8">
                    {[0, 1].map((i) => (
                      <motion.div
                        key={i}
                        className="relative"
                        animate={{ scaleY: [1, 1, 0.2, 1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, times: [0, 0.4, 0.5, 0.6, 1] }}
                      >
                        {/* Eye white - pixelated */}
                        <div 
                          className="w-10 h-12 bg-white"
                          style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' }}
                        >
                          {/* Pupil */}
                          <motion.div 
                            className="absolute top-3 left-2 w-6 h-7 bg-[#1a1030]"
                            animate={{ x: [0, 2, 0, -2, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            {/* Pixel highlight in eye */}
                            <div className="absolute top-1 left-1 w-2 h-2 bg-white" />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Pixel mouth - happy */}
                  <div className="flex justify-center mt-4">
                    <div className="flex">
                      <div className="w-2 h-2 bg-pink-400" />
                      <div className="w-8 h-2 bg-[#1a1030]" />
                      <div className="w-2 h-2 bg-pink-400" />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-8 h-2 bg-[#1a1030]" />
                  </div>

                  {/* Pixel blush */}
                  <div className="absolute top-20 left-2 flex gap-1">
                    <div className="w-2 h-2 bg-pink-400/60" />
                    <div className="w-2 h-2 bg-pink-400/40" />
                  </div>
                  <div className="absolute top-20 right-2 flex gap-1">
                    <div className="w-2 h-2 bg-pink-400/40" />
                    <div className="w-2 h-2 bg-pink-400/60" />
                  </div>
                </div>

                {/* Pixel feet */}
                <div className="flex justify-center gap-8 -mt-1">
                  <motion.div 
                    className="w-8 h-6 bg-purple-700"
                    style={{ boxShadow: '2px 2px 0 #4C1D95' }}
                    animate={{ rotate: [-5, 5, -5] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  />
                  <motion.div 
                    className="w-8 h-6 bg-purple-700"
                    style={{ boxShadow: '2px 2px 0 #4C1D95' }}
                    animate={{ rotate: [5, -5, 5] }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: 0.1 }}
                  />
                </div>

                {/* Pixel arms */}
                <motion.div 
                  className="absolute top-20 -left-8 w-6 h-10 bg-purple-600 origin-right"
                  style={{ boxShadow: '2px 2px 0 #4C1D95' }}
                  animate={{ rotate: [-20, 20, -20] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute top-20 -right-8 w-6 h-10 bg-purple-600 origin-left"
                  style={{ boxShadow: '2px 2px 0 #4C1D95' }}
                  animate={{ rotate: [20, -20, 20] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.15 }}
                />

                {/* Antenna with data symbol */}
                <motion.div 
                  className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
                  animate={{ rotate: [-8, 8, -8] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  <motion.div 
                    className="w-6 h-6 bg-cyan-400 flex items-center justify-center text-[10px] font-bold text-cyan-900"
                    style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    ◆
                  </motion.div>
                  <div className="w-2 h-4 bg-gray-400" />
                </motion.div>
              </div>
            </motion.div>

            {/* Pixel-style word bubbles */}
            <motion.div 
              className="absolute top-4 right-0 bg-white px-4 py-2"
              style={{ 
                clipPath: 'polygon(0% 10%, 10% 10%, 10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%)',
                boxShadow: '3px 3px 0 #000',
              }}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              <span className="font-mono text-sm font-bold text-purple-600">UNIFIED!</span>
            </motion.div>

            <motion.div 
              className="absolute top-24 right-4 bg-cyan-400 px-4 py-2"
              style={{ 
                clipPath: 'polygon(0% 10%, 10% 10%, 10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%)',
                boxShadow: '3px 3px 0 #000',
              }}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
            >
              <span className="font-mono text-sm font-bold text-cyan-900">FAST!</span>
            </motion.div>

            <motion.div 
              className="absolute bottom-32 right-2 bg-pink-400 px-4 py-2"
              style={{ 
                clipPath: 'polygon(0% 10%, 10% 10%, 10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%)',
                boxShadow: '3px 3px 0 #000',
              }}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
            >
              <span className="font-mono text-sm font-bold text-pink-900">1.2M RPS</span>
            </motion.div>

            <motion.div 
              className="absolute top-12 -left-4 bg-green-400 px-4 py-2"
              style={{ 
                clipPath: 'polygon(0% 10%, 10% 10%, 10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%)',
                boxShadow: '3px 3px 0 #000',
              }}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: 0.3 }}
            >
              <span className="font-mono text-sm font-bold text-green-900">99.9%</span>
            </motion.div>

            <motion.div 
              className="absolute top-36 -left-8 bg-yellow-400 px-4 py-2"
              style={{ 
                clipPath: 'polygon(0% 10%, 10% 10%, 10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%)',
                boxShadow: '3px 3px 0 #000',
              }}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: 0.5 }}
            >
              <span className="font-mono text-sm font-bold text-yellow-900">8ms</span>
            </motion.div>

            <motion.div 
              className="absolute bottom-24 -left-2 bg-white px-4 py-2"
              style={{ 
                clipPath: 'polygon(0% 10%, 10% 10%, 10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%)',
                boxShadow: '3px 3px 0 #000',
              }}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: 0.6 }}
            >
              <span className="font-mono text-sm font-bold text-gray-800">GLOBAL</span>
            </motion.div>

            {/* Main speech bubble */}
            <motion.div 
              className="absolute -top-2 left-1/2 -translate-x-1/2 bg-white px-5 py-3"
              style={{ 
                clipPath: 'polygon(0% 10%, 5% 10%, 5% 0%, 95% 0%, 95% 10%, 100% 10%, 100% 85%, 95% 85%, 95% 90%, 55% 90%, 50% 100%, 45% 90%, 5% 90%, 5% 85%, 0% 85%)',
                boxShadow: '4px 4px 0 #000',
              }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <span className="font-mono text-sm font-bold text-purple-600">CONNECT ADTECH!</span>
            </motion.div>

            {/* Floating pixel particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3"
                style={{
                  background: ['#8B5CF6', '#06B6D4', '#EC4899', '#22C55E', '#FBBF24', '#8B5CF6'][i],
                  left: `${20 + (i % 3) * 30}%`,
                  top: `${60 + Math.floor(i / 3) * 15}%`,
                }}
                animate={{
                  y: [0, -16, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
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
