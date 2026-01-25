import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background with logo-inspired gradient */}
      <div 
        className="absolute inset-0" 
        style={{ background: 'linear-gradient(135deg, hsl(320 85% 55%) 0%, hsl(280 75% 50%) 40%, hsl(185 85% 45%) 100%)' }}
      />
      
      {/* Animated decorative shapes */}
      <motion.div 
        className="absolute top-10 right-10 w-48 h-48 rounded-full bg-white/10"
        animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-white/5"
        animate={{ scale: [1.3, 1, 1.3], rotate: [360, 180, 0], x: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/3 w-32 h-32 rounded-2xl border border-white/10"
        animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Icon with pulse */}
          <motion.div 
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-8 shimmer"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="w-8 h-8 text-white" />
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ready to transform your
            <br />
            advertising infrastructure?
          </motion.h2>
          <motion.p 
            className="text-lg text-white/80 mb-10 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Join 500+ enterprise partners who trust Kolorowey to power their 
            programmatic advertising at global scale.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              className="h-14 px-8 bg-white text-primary hover:bg-white/90 hover:scale-105 rounded-full font-semibold text-base group transition-all duration-300"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-14 px-8 border-white/30 text-white hover:bg-white/10 hover:border-white/50 rounded-full font-semibold text-base transition-all duration-300"
            >
              Talk to Sales
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
