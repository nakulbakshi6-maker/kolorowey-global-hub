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

          {/* Right column - Orbital System */}
          <motion.div 
            className="relative hidden lg:flex items-center justify-center h-[520px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Ambient glow */}
            <motion.div 
              className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-20"
              style={{ background: 'radial-gradient(circle, hsl(320 85% 55%), hsl(185 85% 45%), transparent 60%)' }}
              animate={{ scale: [1, 1.15, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />

            {/* Orbital rings */}
            {[180, 240, 300].map((size, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border"
                style={{
                  width: size,
                  height: size,
                  borderColor: `hsla(${185 + i * 40}, 70%, 50%, ${0.15 - i * 0.03})`,
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20 + i * 10, repeat: Infinity, ease: "linear" }}
              />
            ))}

            {/* Center hub */}
            <motion.div 
              className="relative z-20 w-28 h-28 rounded-full bg-gradient-to-br from-[#1a1f35] to-[#0d1020] border-2 border-[#3a4575] shadow-[0_0_60px_rgba(236,72,153,0.3)] flex items-center justify-center"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.div 
                className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-[hsl(185,85%,45%)] opacity-80"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute text-2xl font-bold text-white">K</div>
            </motion.div>

            {/* Orbiting elements */}
            {[
              { icon: "📊", label: "Publishers", angle: 0, radius: 90, duration: 12, color: "from-pink-500/20 to-pink-600/20", borderColor: "border-pink-500/40" },
              { icon: "🎯", label: "Advertisers", angle: 120, radius: 90, duration: 12, color: "from-cyan-500/20 to-cyan-600/20", borderColor: "border-cyan-500/40" },
              { icon: "🔗", label: "Platforms", angle: 240, radius: 90, duration: 12, color: "from-purple-500/20 to-purple-600/20", borderColor: "border-purple-500/40" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="absolute z-10"
                style={{ 
                  width: 90, 
                  height: 90,
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: item.duration, repeat: Infinity, ease: "linear", delay: (item.angle / 360) * item.duration }}
              >
                <motion.div 
                  className={`absolute -top-11 left-1/2 -translate-x-1/2 w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} backdrop-blur-sm border ${item.borderColor} flex flex-col items-center justify-center gap-1 shadow-lg`}
                  animate={{ rotate: -360 }}
                  transition={{ duration: item.duration, repeat: Infinity, ease: "linear", delay: (item.angle / 360) * item.duration }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-[10px] font-medium text-foreground/80">{item.label}</span>
                </motion.div>
              </motion.div>
            ))}

            {/* Outer orbiting stats */}
            {[
              { value: "1.2M", label: "RPS", angle: 45, radius: 150 },
              { value: "8ms", label: "Latency", angle: 135, radius: 150 },
              { value: "99.9%", label: "Uptime", angle: 225, radius: 150 },
              { value: "50+", label: "Countries", angle: 315, radius: 150 },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="absolute z-10"
                style={{
                  left: `calc(50% + ${Math.cos((stat.angle * Math.PI) / 180) * stat.radius}px)`,
                  top: `calc(50% + ${Math.sin((stat.angle * Math.PI) / 180) * stat.radius}px)`,
                  transform: 'translate(-50%, -50%)',
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.15, type: "spring" }}
              >
                <motion.div 
                  className="bg-[#0d1020]/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-[#2a3555] text-center min-w-[60px]"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  whileHover={{ scale: 1.1, borderColor: "hsl(320 85% 55%)" }}
                >
                  <div className="text-sm font-bold gradient-text">{stat.value}</div>
                  <div className="text-[9px] text-muted-foreground">{stat.label}</div>
                </motion.div>
              </motion.div>
            ))}

            {/* Connection lines pulse effect */}
            {[0, 120, 240].map((angle, i) => (
              <motion.div
                key={angle}
                className="absolute w-[2px] h-16 origin-bottom"
                style={{
                  background: `linear-gradient(to top, transparent, ${i === 0 ? 'hsl(320 85% 55%)' : i === 1 ? 'hsl(185 85% 45%)' : 'hsl(280 70% 55%)'}, transparent)`,
                  transform: `rotate(${angle}deg)`,
                  left: 'calc(50% - 1px)',
                  top: 'calc(50% - 64px)',
                }}
                animate={{ opacity: [0.2, 0.6, 0.2], scaleY: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              />
            ))}

            {/* Floating particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{
                  background: i % 2 === 0 ? 'hsl(320 85% 55%)' : 'hsl(185 85% 45%)',
                  left: `${30 + Math.random() * 40}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{ duration: 3 + i * 0.3, repeat: Infinity, delay: i * 0.4 }}
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
