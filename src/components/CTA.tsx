import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      <div className="absolute inset-0 data-stream opacity-40" />
      
      {/* Neon glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, hsl(180 100% 50% / 0.08) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Terminal prompt */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-background border border-border rounded-sm">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm text-muted-foreground">
                <span className="text-primary">$</span> ready_to_integrate
                <span className="cursor-blink text-primary"></span>
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-6">
              UNIFY_YOUR
              <br />
              <span className="neon-text">ADTECH_STACK</span>
            </h2>

            <p className="text-muted-foreground font-mono text-sm max-w-xl mx-auto mb-10">
              <span className="text-primary">&gt;</span> Join 500+ enterprise partners who have transformed their advertising infrastructure with Kolorowey.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button 
                className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-sm tracking-wider group"
              >
                SCHEDULE_DEMO
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                className="h-12 px-8 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary font-mono text-sm tracking-wider"
              >
                CONTACT_SALES
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-muted-foreground">
              {["SOC_2", "GDPR", "ISO_27001", "CCPA"].map((badge) => (
                <span key={badge} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom neon line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
    </section>
  );
};

export default CTA;
