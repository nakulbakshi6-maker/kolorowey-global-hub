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

          {/* Right column - Stacked Platform Cards */}
          <motion.div 
            className="relative hidden lg:flex items-center justify-center h-[520px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Ambient background glow */}
            <div 
              className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
              style={{ background: 'radial-gradient(circle, hsl(320 85% 55%), transparent 70%)' }}
            />

            {/* Stacked cards */}
            <div className="relative w-[380px] h-[420px]">
              {[
                { title: "Publishers", metric: "2.4M+", desc: "Active Sites", offset: 0, delay: 0 },
                { title: "Advertisers", metric: "850K", desc: "Campaigns", offset: 1, delay: 0.1 },
                { title: "Data Points", metric: "180B", desc: "Daily Events", offset: 2, delay: 0.2 },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  className="absolute inset-x-0 bg-card/90 backdrop-blur-xl border border-border/50 rounded-2xl p-6 shadow-xl"
                  style={{
                    top: `${i * 30}px`,
                    zIndex: 3 - i,
                  }}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1 - i * 0.03,
                  }}
                  transition={{ duration: 0.6, delay: 0.5 + card.delay }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1,
                    zIndex: 10,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-muted-foreground">{card.title}</span>
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-green-500"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold gradient-text">{card.metric}</span>
                    <span className="text-sm text-muted-foreground">{card.desc}</span>
                  </div>
                  
                  {/* Mini chart */}
                  <div className="flex items-end gap-1 h-12 mt-4">
                    {[35, 55, 40, 70, 50, 85, 65, 90, 75, 95, 80, 88].map((h, j) => (
                      <motion.div
                        key={j}
                        className="flex-1 rounded-t-sm"
                        style={{ 
                          background: j % 3 === 0 ? 'hsl(320 85% 55%)' : 'hsl(var(--muted))',
                          height: `${h}%`
                        }}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.4, delay: 0.8 + j * 0.03 + card.delay }}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Floating accent elements */}
              <motion.div 
                className="absolute -right-12 top-20 w-20 h-20 rounded-2xl border border-accent/30 bg-accent/5 backdrop-blur-sm flex items-center justify-center"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-center">
                  <div className="text-lg font-bold text-accent">99.9%</div>
                  <div className="text-[10px] text-muted-foreground">Uptime</div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -left-8 bottom-32 w-16 h-16 rounded-xl border border-highlight/30 bg-highlight/5 backdrop-blur-sm flex items-center justify-center"
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="text-center">
                  <div className="text-sm font-bold text-highlight">&lt;10</div>
                  <div className="text-[9px] text-muted-foreground">ms</div>
                </div>
              </motion.div>
            </div>
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
