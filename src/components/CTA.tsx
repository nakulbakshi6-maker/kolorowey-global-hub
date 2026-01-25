import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        <div className="absolute inset-0 mesh-bg opacity-50" />
        
        {/* Animated orbs */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-primary/10 to-accent/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Gradient border glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur-lg opacity-20" />
            
            <div className="relative glass-card p-12 md:p-20 text-center overflow-hidden rounded-3xl">
              {/* Decorative elements */}
              <div className="absolute top-8 left-8 w-20 h-20 border border-primary/20 rounded-full" />
              <div className="absolute bottom-8 right-8 w-32 h-32 border border-accent/20 rounded-full" />
              
              {/* Top accent */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                animate={{ scaleX: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative">
                {/* Icon */}
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 mb-8"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Sparkles className="w-8 h-8 text-primary" />
                </motion.div>

                <h2 className="text-5xl md:text-6xl lg:text-7xl text-foreground mb-8 leading-[1.1]">
                  Ready to{" "}
                  <span className="gradient-text italic">Unify</span>
                  <br />
                  Your AdTech Stack?
                </h2>

                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light">
                  Join 500+ enterprise partners who have transformed their advertising 
                  infrastructure with Kolorowey.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                  <Button variant="hero" size="xl" className="group">
                    Schedule a Demo
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="glass" size="xl" className="group">
                    <Mail className="w-5 h-5" />
                    Contact Sales
                  </Button>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                  {["Enterprise-ready", "SOC 2 Compliant", "GDPR Ready", "ISO 27001"].map((badge) => (
                    <span key={badge} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
