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

          {/* Right column - Enhanced Stacked Platform Cards */}
          <motion.div 
            className="relative hidden lg:flex items-center justify-center h-[520px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Multi-layer ambient glow */}
            <motion.div 
              className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
              style={{ background: 'radial-gradient(circle, hsl(320 85% 55%), transparent 60%)' }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute w-80 h-80 rounded-full blur-2xl opacity-10"
              style={{ background: 'radial-gradient(circle, hsl(185 85% 45%), transparent 70%)' }}
              animate={{ scale: [1.1, 1, 1.1], x: [0, 20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Stacked cards */}
            <div className="relative w-[400px] h-[440px]">
              {[
                { title: "Publishers", metric: "2.4M+", desc: "Active Sites", icon: "📡", trend: "+12.4%", offset: 0, delay: 0 },
                { title: "Advertisers", metric: "850K", desc: "Campaigns", icon: "🎯", trend: "+8.2%", offset: 1, delay: 0.1 },
                { title: "Data Points", metric: "180B", desc: "Daily Events", icon: "⚡", trend: "+24.1%", offset: 2, delay: 0.2 },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  className="absolute inset-x-0 bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-xl border border-border/40 rounded-2xl p-6 shadow-2xl overflow-hidden group cursor-pointer"
                  style={{
                    top: `${i * 35}px`,
                    zIndex: 3 - i,
                  }}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ 
                    opacity: 1 - i * 0.08, 
                    y: 0, 
                    scale: 1 - i * 0.025,
                  }}
                  transition={{ duration: 0.7, delay: 0.5 + card.delay, type: "spring", stiffness: 100 }}
                  whileHover={{ 
                    y: -12, 
                    scale: 1.02,
                    opacity: 1,
                    zIndex: 10,
                    boxShadow: '0 25px 50px -12px hsl(320 85% 55% / 0.25)',
                    transition: { duration: 0.25 }
                  }}
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-highlight/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Shimmer effect on hover */}
                  <motion.div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background: 'linear-gradient(105deg, transparent 40%, hsl(320 85% 55% / 0.1) 45%, transparent 50%)',
                      backgroundSize: '200% 100%',
                    }}
                    animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{card.icon}</span>
                        <span className="text-sm font-semibold text-foreground/80">{card.title}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <motion.span 
                          className="text-xs font-medium text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full"
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 + card.delay }}
                        >
                          {card.trend}
                        </motion.span>
                        <motion.div 
                          className="w-2 h-2 rounded-full bg-green-500"
                          animate={{ 
                            opacity: [1, 0.4, 1],
                            scale: [1, 1.2, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-baseline gap-3 mb-1">
                      <motion.span 
                        className="text-5xl font-extrabold gradient-text tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + card.delay, duration: 0.5 }}
                      >
                        {card.metric}
                      </motion.span>
                      <span className="text-sm text-muted-foreground font-medium">{card.desc}</span>
                    </div>
                    
                    {/* Enhanced mini chart */}
                    <div className="flex items-end gap-1.5 h-14 mt-5 px-1">
                      {[30, 50, 35, 65, 45, 80, 55, 90, 70, 95, 75, 85].map((h, j) => (
                        <motion.div
                          key={j}
                          className="flex-1 rounded-t-sm relative overflow-hidden"
                          style={{ 
                            background: `linear-gradient(to top, ${j % 3 === 0 ? 'hsl(320 85% 55%)' : 'hsl(var(--muted))'}, ${j % 3 === 0 ? 'hsl(320 85% 65%)' : 'hsl(var(--muted) / 0.7)'})`,
                          }}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 0.5, delay: 0.9 + j * 0.04 + card.delay, ease: "easeOut" }}
                          whileHover={{ 
                            scaleY: 1.1,
                            filter: 'brightness(1.2)',
                            transition: { duration: 0.1 }
                          }}
                        >
                          {j % 3 === 0 && (
                            <motion.div 
                              className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20"
                              animate={{ opacity: [0.3, 0.6, 0.3] }}
                              transition={{ duration: 2, repeat: Infinity, delay: j * 0.1 }}
                            />
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Enhanced floating accent elements */}
              <motion.div 
                className="absolute -right-16 top-16 w-24 h-24 rounded-2xl border border-accent/40 bg-gradient-to-br from-accent/10 to-accent/5 backdrop-blur-xl flex items-center justify-center shadow-lg"
                animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.1, borderColor: 'hsl(320 85% 55% / 0.6)' }}
              >
                <div className="text-center">
                  <motion.div 
                    className="text-xl font-bold text-accent"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    99.9%
                  </motion.div>
                  <div className="text-[10px] text-muted-foreground font-medium">Uptime</div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -left-12 bottom-28 w-20 h-20 rounded-xl border border-highlight/40 bg-gradient-to-br from-highlight/10 to-highlight/5 backdrop-blur-xl flex items-center justify-center shadow-lg"
                animate={{ y: [0, 12, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                whileHover={{ scale: 1.1, borderColor: 'hsl(185 85% 45% / 0.6)' }}
              >
                <div className="text-center">
                  <motion.div 
                    className="text-lg font-bold text-highlight"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    &lt;10ms
                  </motion.div>
                  <div className="text-[9px] text-muted-foreground font-medium">Latency</div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -right-8 bottom-12 w-16 h-16 rounded-lg border border-purple-500/40 bg-gradient-to-br from-purple-500/10 to-purple-500/5 backdrop-blur-xl flex items-center justify-center shadow-lg"
                animate={{ x: [0, 8, 0], y: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-center">
                  <div className="text-sm font-bold text-purple-400">180+</div>
                  <div className="text-[8px] text-muted-foreground font-medium">Countries</div>
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
