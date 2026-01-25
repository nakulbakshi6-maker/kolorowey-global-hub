import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden bg-foreground">
      {/* Animated decorative elements */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'linear-gradient(135deg, hsl(320 70% 50%), hsl(185 70% 45%))' }}
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10"
        style={{ background: 'linear-gradient(135deg, hsl(185 70% 45%), hsl(320 70% 50%))' }}
        animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-1/4 left-0 w-full h-px bg-background" />
        <div className="absolute top-2/4 left-0 w-full h-px bg-background" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.p 
            className="text-sm font-semibold tracking-widest text-background/40 uppercase mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Get Started Today
          </motion.p>

          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-background mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Ready to transform your
            <br />
            <span className="gradient-text">advertising infrastructure?</span>
          </motion.h2>

          <motion.p 
            className="text-lg text-background/60 mb-12 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
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
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              className="h-14 px-8 bg-background text-foreground hover:bg-background/90 rounded-full font-semibold text-base group transition-all duration-300"
            >
              Get Started Free
              <motion.span
                className="ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-14 px-8 border-background/30 text-background hover:bg-background/10 hover:border-background/50 rounded-full font-semibold text-base transition-all duration-300"
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
