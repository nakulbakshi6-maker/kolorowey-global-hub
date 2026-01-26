import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="relative py-32 overflow-hidden" style={{ background: 'var(--gradient-navy)' }}>
      {/* Animated gradient orbs with enhanced motion */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
        style={{ background: 'linear-gradient(135deg, hsl(320 85% 55% / 0.6), transparent)' }}
        animate={{ 
          scale: [1, 1.4, 1], 
          x: [0, 80, 0], 
          y: [0, -50, 0],
          rotate: [0, 45, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'linear-gradient(135deg, hsl(185 85% 45% / 0.6), transparent)' }}
        animate={{ 
          scale: [1.2, 1, 1.2], 
          x: [0, -50, 0], 
          y: [0, 50, 0],
          rotate: [0, -45, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/30"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 2, 1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Icon with pulse glow */}
            <motion.div 
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 relative"
              style={{ background: 'var(--gradient-brand)' }}
              animate={{ 
                scale: [1, 1.08, 1],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <motion.div 
                className="absolute inset-0 rounded-2xl"
                style={{ background: 'var(--gradient-brand)' }}
                animate={{ 
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <Sparkles className="w-10 h-10 text-white relative z-10" />
            </motion.div>

            <motion.p 
              className="text-sm font-bold tracking-widest text-white/40 uppercase mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Get Started Today
            </motion.p>

            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Ready to transform your
              <br />
              <motion.span 
                className="gradient-text inline-block"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{ backgroundSize: '200% auto' }}
              >
                advertising infrastructure?
              </motion.span>
            </motion.h2>

            <motion.p 
              className="text-xl text-white/60 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Join 500+ enterprise partners who trust Kolorowey to power their 
              programmatic advertising at global scale.
            </motion.p>

            {/* CTAs with enhanced micro-interactions */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg" 
                  className="h-14 px-10 bg-white text-primary hover:bg-white/90 rounded-full font-bold text-base group relative overflow-hidden transition-all duration-300"
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-accent/20 to-highlight/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10 flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Get Started Free
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
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="h-14 px-10 border-2 border-white/30 text-white bg-transparent hover:bg-white/10 hover:border-accent rounded-full font-bold text-base transition-all duration-300"
                >
                  Talk to Sales
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust badges */}
            <motion.div 
              className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/30 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {['SOC 2 Certified', 'GDPR Compliant', 'ISO 27001'].map((badge, index) => (
                <motion.div 
                  key={badge}
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.1, color: 'hsl(320 85% 55%)' }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div 
                    className="w-2 h-2 rounded-full bg-accent"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                  {badge}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
