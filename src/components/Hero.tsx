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

          {/* Right column - Cute AdTech Bot */}
          <motion.div 
            className="relative hidden lg:flex items-center justify-center h-[520px]"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Ambient glow behind bot */}
            <motion.div 
              className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-30"
              style={{ background: 'radial-gradient(circle, hsl(320 85% 55%), hsl(185 85% 45%), transparent 70%)' }}
              animate={{ scale: [1, 1.15, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Main Bot Container */}
            <motion.div
              className="relative"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Bot Body */}
              <motion.div 
                className="relative w-64 h-72 rounded-[40px] bg-gradient-to-b from-[#1a1f35] to-[#0d1020] border-2 border-[#2a3050] shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                {/* Screen/Face */}
                <div className="absolute top-8 left-6 right-6 h-32 rounded-2xl bg-gradient-to-br from-[#0d1525] to-[#0a0f1a] border border-[#2a3555] overflow-hidden">
                  {/* Screen glow */}
                  <motion.div 
                    className="absolute inset-0 opacity-20"
                    style={{ background: 'radial-gradient(ellipse at center, hsl(185 85% 45%), transparent 70%)' }}
                    animate={{ opacity: [0.15, 0.3, 0.15] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  {/* Eyes */}
                  <div className="flex justify-center gap-8 pt-6">
                    {[0, 1].map((i) => (
                      <motion.div
                        key={i}
                        className="relative w-10 h-10"
                        animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
                        transition={{ duration: 4, repeat: Infinity, delay: i * 0.1, times: [0, 0.45, 0.5, 0.55, 1] }}
                      >
                        {/* Eye outer */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-cyan-400 to-cyan-600 shadow-[0_0_20px_rgba(34,211,238,0.5)]" />
                        {/* Eye inner/pupil */}
                        <motion.div 
                          className="absolute top-2 left-2 w-6 h-6 rounded-full bg-[#0a0f1a]"
                          animate={{ x: [0, 2, -2, 0], y: [0, -1, 1, 0] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          {/* Eye highlight */}
                          <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-white opacity-80" />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Mouth - animated expression */}
                  <motion.div 
                    className="flex justify-center mt-4"
                    animate={{ scaleX: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-8 h-3 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 shadow-[0_0_10px_rgba(244,114,182,0.5)]" />
                  </motion.div>
                </div>

                {/* Chest panel with data visualization */}
                <div className="absolute bottom-8 left-6 right-6 h-20 rounded-xl bg-[#0d1525] border border-[#2a3555] p-3">
                  {/* Mini data bars */}
                  <div className="flex items-end justify-between h-full gap-1">
                    {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 0.3, 0.75].map((height, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-t"
                        style={{ 
                          background: i % 2 === 0 
                            ? 'linear-gradient(to top, hsl(320 85% 55%), hsl(320 85% 65%))' 
                            : 'linear-gradient(to top, hsl(185 85% 45%), hsl(185 85% 55%))',
                        }}
                        animate={{ 
                          height: [`${height * 100}%`, `${Math.random() * 40 + 40}%`, `${height * 100}%`],
                        }}
                        transition={{ duration: 2 + i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                      />
                    ))}
                  </div>
                </div>

                {/* Decorative lights */}
                <motion.div 
                  className="absolute top-4 right-4 w-3 h-3 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute top-4 left-4 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Antenna */}
              <motion.div 
                className="absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div 
                  className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 shadow-[0_0_15px_rgba(236,72,153,0.6)]"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <div className="w-1 h-6 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full" />
              </motion.div>

              {/* Arms */}
              <motion.div 
                className="absolute top-32 -left-10 w-8 h-20 rounded-full bg-gradient-to-b from-[#1a1f35] to-[#0d1020] border border-[#2a3050]"
                animate={{ rotate: [-10, 10, -10] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute top-32 -right-10 w-8 h-20 rounded-full bg-gradient-to-b from-[#1a1f35] to-[#0d1020] border border-[#2a3050]"
                animate={{ rotate: [10, -10, 10] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
            </motion.div>

            {/* Floating data particles around bot */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  background: i % 2 === 0 ? 'hsl(320 85% 55%)' : 'hsl(185 85% 45%)',
                  left: `${20 + Math.cos(i * 60 * Math.PI / 180) * 45}%`,
                  top: `${50 + Math.sin(i * 60 * Math.PI / 180) * 40}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  x: [0, i % 2 === 0 ? 10 : -10, 0],
                  opacity: [0.4, 1, 0.4],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{ duration: 3 + i * 0.3, repeat: Infinity, delay: i * 0.4 }}
              />
            ))}

            {/* Speech bubble */}
            <motion.div 
              className="absolute -top-4 -right-8 bg-white rounded-2xl rounded-bl-none px-4 py-2 shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, type: "spring" }}
            >
              <motion.span 
                className="text-sm font-bold bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent"
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Let's connect! 🚀
              </motion.span>
            </motion.div>

            {/* Platform indicator */}
            <motion.div 
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#1a1f35] to-[#0d1020] rounded-full px-6 py-2 border border-[#2a3555]"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-green-400"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <span className="text-xs font-medium text-cyan-300">KoloBot Online</span>
              </div>
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
