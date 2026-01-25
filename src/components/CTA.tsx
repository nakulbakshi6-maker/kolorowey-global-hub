import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="relative py-32 overflow-hidden" style={{ background: 'var(--gradient-navy)' }}>
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30"
        style={{ background: 'linear-gradient(135deg, hsl(320 85% 55% / 0.5), transparent)' }}
        animate={{ scale: [1, 1.3, 1], x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-20"
        style={{ background: 'linear-gradient(135deg, hsl(185 85% 45% / 0.5), transparent)' }}
        animate={{ scale: [1.2, 1, 1.2], x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Icon with glow */}
            <motion.div 
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-8"
              style={{ background: 'var(--gradient-brand)' }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>

            <motion.p 
              className="text-sm font-bold tracking-widest text-white/40 uppercase mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Get Started Today
            </motion.p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-8">
              Ready to transform your
              <br />
              <span className="gradient-text">advertising infrastructure?</span>
            </h2>

            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Join 500+ enterprise partners who trust Kolorowey to power their 
              programmatic advertising at global scale.
            </p>

            {/* CTAs with micro-interactions */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button 
                size="lg" 
                className="h-14 px-10 bg-white text-primary hover:bg-white/90 hover:scale-105 rounded-full font-bold text-base group transition-all duration-300"
              >
                Get Started Free
                <motion.span 
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="h-14 px-10 border-2 border-white/30 text-white bg-transparent hover:bg-white/10 hover:border-accent rounded-full font-bold text-base transition-all duration-300"
              >
                Talk to Sales
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
