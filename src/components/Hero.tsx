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
              className="absolute w-[350px] h-[350px] rounded-full blur-3xl opacity-40"
              style={{ background: 'radial-gradient(circle, hsl(320 85% 65%), hsl(185 85% 55%), transparent 70%)' }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Main Bot Container */}
            <motion.div
              className="relative"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Bot Body - rounder and cuter */}
              <motion.div 
                className="relative w-56 h-56 rounded-[60px] bg-gradient-to-b from-[#2a3355] to-[#1a1f35] border-4 border-[#3a4575] shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-visible"
                whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Rosy cheeks */}
                <motion.div 
                  className="absolute top-20 left-2 w-8 h-5 rounded-full bg-pink-400/40 blur-sm"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute top-20 right-2 w-8 h-5 rounded-full bg-pink-400/40 blur-sm"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />

                {/* Big cute eyes */}
                <div className="flex justify-center gap-10 pt-10">
                  {[0, 1].map((i) => (
                    <motion.div
                      key={i}
                      className="relative w-16 h-16"
                      animate={{ scaleY: [1, 1, 0.15, 1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.05, times: [0, 0.42, 0.47, 0.52, 1] }}
                    >
                      {/* Eye white */}
                      <div className="absolute inset-0 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.3)]" />
                      {/* Iris */}
                      <motion.div 
                        className="absolute top-2 left-2 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-300 to-cyan-500"
                        animate={{ x: [0, 3, -2, 0], y: [0, -2, 2, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        {/* Pupil */}
                        <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-[#0a1020]">
                          {/* Sparkle highlights */}
                          <div className="absolute top-1 left-1 w-3 h-3 rounded-full bg-white" />
                          <div className="absolute bottom-2 right-1 w-1.5 h-1.5 rounded-full bg-white/70" />
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* Happy mouth */}
                <motion.div 
                  className="flex justify-center mt-3"
                  animate={{ scaleX: [1, 1.15, 1], scaleY: [1, 0.9, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <div className="w-10 h-5 rounded-b-full bg-[#0a1020] border-t-2 border-pink-400" />
                </motion.div>

                {/* Decorative heart antenna */}
                <motion.div 
                  className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
                  animate={{ rotate: [-8, 8, -8] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <motion.div 
                    className="text-2xl"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  >
                    💖
                  </motion.div>
                  <div className="w-1.5 h-5 bg-gradient-to-b from-pink-300 to-gray-500 rounded-full -mt-1" />
                </motion.div>

                {/* Little feet peeking out */}
                <motion.div 
                  className="absolute -bottom-4 left-10 w-8 h-6 rounded-full bg-gradient-to-b from-[#2a3355] to-[#1a1f35] border-2 border-[#3a4575]"
                  animate={{ rotate: [-5, 5, -5] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute -bottom-4 right-10 w-8 h-6 rounded-full bg-gradient-to-b from-[#2a3355] to-[#1a1f35] border-2 border-[#3a4575]"
                  animate={{ rotate: [5, -5, 5] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                />
              </motion.div>

              {/* Waving arm */}
              <motion.div 
                className="absolute top-20 -right-12 origin-top-left"
                animate={{ rotate: [0, 20, 0, 20, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 2 }}
              >
                <div className="w-10 h-16 rounded-full bg-gradient-to-b from-[#2a3355] to-[#1a1f35] border-2 border-[#3a4575]" />
                <motion.div className="absolute -bottom-1 left-1 text-lg">👋</motion.div>
              </motion.div>

              {/* Other arm holding data */}
              <motion.div 
                className="absolute top-24 -left-10 w-10 h-14 rounded-full bg-gradient-to-b from-[#2a3355] to-[#1a1f35] border-2 border-[#3a4575]"
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Chat bubbles - cycling messages */}
            <motion.div 
              className="absolute -top-2 right-0 space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {/* Main speech bubble */}
              <motion.div 
                className="bg-white rounded-2xl rounded-bl-sm px-4 py-2.5 shadow-lg max-w-[180px]"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  className="text-sm font-semibold text-gray-800"
                  animate={{ opacity: [1, 0, 0, 1] }}
                  transition={{ duration: 8, repeat: Infinity, times: [0, 0.1, 0.9, 1] }}
                >
                  Hi! I'm KoloBot! ✨
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Floating mini chat bubbles */}
            <motion.div 
              className="absolute top-12 right-12 bg-gradient-to-r from-pink-100 to-cyan-100 rounded-full px-3 py-1 shadow-md"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1, 1, 0.5], y: [20, 0, 0, -10] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
              <span className="text-xs font-medium text-gray-700">1.2M RPS 🚀</span>
            </motion.div>

            <motion.div 
              className="absolute top-32 right-4 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full px-3 py-1 shadow-md"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1, 1, 0.5], y: [20, 0, 0, -10] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2.5 }}
            >
              <span className="text-xs font-medium text-gray-700">8ms latency ⚡</span>
            </motion.div>

            <motion.div 
              className="absolute bottom-28 right-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-3 py-1 shadow-md"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1, 1, 0.5], y: [20, 0, 0, -10] }}
              transition={{ duration: 4, repeat: Infinity, delay: 4 }}
            >
              <span className="text-xs font-medium text-gray-700">99.9% uptime 💪</span>
            </motion.div>

            {/* Floating hearts and sparkles */}
            {['💫', '✨', '💖', '⭐', '🌟'].map((emoji, i) => (
              <motion.div
                key={i}
                className="absolute text-lg"
                style={{
                  left: `${15 + i * 18}%`,
                  top: `${60 + (i % 3) * 12}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.6 }}
              >
                {emoji}
              </motion.div>
            ))}

            {/* Status badge */}
            <motion.div 
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full px-5 py-2 shadow-lg"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="flex items-center gap-2">
                <motion.span 
                  className="text-lg"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  🤖
                </motion.span>
                <span className="text-sm font-bold text-white">Ready to help!</span>
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
