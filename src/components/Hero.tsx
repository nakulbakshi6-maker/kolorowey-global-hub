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

          {/* Right column - Friendly Data Sprite Character */}
          <motion.div 
            className="relative hidden lg:flex items-center justify-center h-[520px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Ambient glow */}
            <motion.div 
              className="absolute w-[350px] h-[350px] rounded-full blur-3xl opacity-30"
              style={{ background: 'radial-gradient(circle, hsl(280 70% 60%), hsl(320 85% 55%), transparent 70%)' }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            />

            {/* Main Character - Friendly Blob Sprite */}
            <motion.div
              className="relative"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Body - soft gradient blob */}
              <motion.div 
                className="relative w-48 h-52 rounded-[60%_40%_50%_50%/50%_50%_40%_60%]"
                style={{
                  background: 'linear-gradient(135deg, hsl(280 70% 60%), hsl(320 85% 55%), hsl(340 80% 60%))',
                  boxShadow: '0 20px 60px rgba(236, 72, 153, 0.4), inset 0 -10px 30px rgba(0,0,0,0.2), inset 0 10px 30px rgba(255,255,255,0.2)',
                }}
                animate={{ 
                  borderRadius: [
                    "60% 40% 50% 50%/50% 50% 40% 60%",
                    "50% 50% 40% 60%/60% 40% 50% 50%",
                    "60% 40% 50% 50%/50% 50% 40% 60%"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Shiny highlight */}
                <div className="absolute top-4 left-6 w-12 h-8 rounded-full bg-white/30 blur-sm" />
                
                {/* Big sparkly eyes */}
                <div className="flex justify-center gap-8 pt-12">
                  {[0, 1].map((i) => (
                    <motion.div
                      key={i}
                      className="relative w-12 h-14 rounded-full bg-white shadow-lg"
                      animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
                      transition={{ duration: 4, repeat: Infinity, delay: i * 0.05, times: [0, 0.45, 0.5, 0.55, 1] }}
                    >
                      {/* Pupil */}
                      <motion.div 
                        className="absolute top-3 left-2 w-8 h-10 rounded-full bg-[#1a1030]"
                        animate={{ x: [0, 2, -1, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        {/* Sparkles */}
                        <div className="absolute top-1 left-1 w-3 h-3 rounded-full bg-white" />
                        <div className="absolute top-5 right-1 w-1.5 h-1.5 rounded-full bg-white/80" />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* Happy smile */}
                <motion.div 
                  className="flex justify-center mt-4"
                  animate={{ scaleX: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-12 h-6 rounded-b-full border-b-4 border-x-4 border-white/80" />
                </motion.div>

                {/* Rosy cheeks */}
                <div className="absolute top-24 left-3 w-6 h-4 rounded-full bg-pink-300/50 blur-sm" />
                <div className="absolute top-24 right-3 w-6 h-4 rounded-full bg-pink-300/50 blur-sm" />
              </motion.div>

              {/* Tiny arms waving */}
              <motion.div 
                className="absolute top-28 -left-6 w-8 h-12 rounded-full"
                style={{ background: 'linear-gradient(135deg, hsl(280 70% 55%), hsl(320 85% 50%))' }}
                animate={{ rotate: [-15, 15, -15] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
              <motion.div 
                className="absolute top-28 -right-6 w-8 h-12 rounded-full"
                style={{ background: 'linear-gradient(135deg, hsl(280 70% 55%), hsl(320 85% 50%))' }}
                animate={{ rotate: [15, -15, 15] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
              />

              {/* Sparkle antenna */}
              <motion.div 
                className="absolute -top-8 left-1/2 -translate-x-1/2"
                animate={{ rotate: [-10, 10, -10] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <motion.span 
                  className="text-3xl"
                  animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✨
                </motion.span>
              </motion.div>
            </motion.div>

            {/* Floating words around character */}
            <motion.div 
              className="absolute top-8 right-4 bg-white rounded-2xl px-4 py-2 shadow-xl"
              animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <span className="text-sm font-bold text-gray-800">Unified! 🎯</span>
            </motion.div>

            <motion.div 
              className="absolute top-28 -right-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl px-4 py-2 shadow-xl"
              animate={{ y: [0, 6, 0], rotate: [0, -3, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <span className="text-sm font-bold text-white">Fast! ⚡</span>
            </motion.div>

            <motion.div 
              className="absolute bottom-32 right-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl px-4 py-2 shadow-xl"
              animate={{ y: [0, -6, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <span className="text-sm font-bold text-white">Global! 🌍</span>
            </motion.div>

            <motion.div 
              className="absolute top-16 -left-8 bg-white rounded-2xl px-4 py-2 shadow-xl"
              animate={{ y: [0, 8, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, delay: 0.3 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <span className="text-sm font-bold text-gray-800">1.2M RPS 🚀</span>
            </motion.div>

            <motion.div 
              className="absolute top-40 -left-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl px-4 py-2 shadow-xl"
              animate={{ y: [0, -5, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, delay: 0.8 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <span className="text-sm font-bold text-white">99.9% ✓</span>
            </motion.div>

            <motion.div 
              className="absolute bottom-28 -left-6 bg-white rounded-2xl px-4 py-2 shadow-xl"
              animate={{ y: [0, 6, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 2.6, repeat: Infinity, delay: 1.2 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <span className="text-sm font-bold text-gray-800">8ms ⚡</span>
            </motion.div>

            {/* Speech bubble from character */}
            <motion.div 
              className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl rounded-b-sm px-5 py-3 shadow-xl"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.span 
                className="text-base font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent"
              >
                Let's connect AdTech! 💜
              </motion.span>
            </motion.div>

            {/* Floating hearts and data symbols */}
            {['💜', '📊', '💫', '🔗', '✨', '📈'].map((emoji, i) => (
              <motion.div
                key={i}
                className="absolute text-xl"
                style={{
                  left: `${10 + (i % 3) * 35}%`,
                  top: `${65 + Math.floor(i / 3) * 20}%`,
                }}
                animate={{
                  y: [0, -25, 0],
                  opacity: [0.5, 1, 0.5],
                  scale: [0.9, 1.2, 0.9],
                }}
                transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, delay: i * 0.4 }}
              >
                {emoji}
              </motion.div>
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
