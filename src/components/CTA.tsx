import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 swiss-grid opacity-30" />
      
      {/* Subtle accent */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground mb-8 leading-[1.1]">
              Ready to{" "}
              <span className="gradient-text italic">Unify</span>
              <br />
              Your AdTech Stack?
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Join 500+ enterprise partners who have transformed their advertising 
              infrastructure with Kolorowey.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button 
                className="h-14 px-10 bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm font-medium text-base group"
              >
                Schedule a Demo
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                className="h-14 px-10 border-foreground/20 hover:border-foreground/40 hover:bg-transparent rounded-sm font-medium text-base"
              >
                Contact Sales
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              {["Enterprise-ready", "SOC 2 Compliant", "GDPR Ready", "ISO 27001"].map((badge) => (
                <span key={badge} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="container mx-auto px-6">
          <div className="precision-line" />
        </div>
      </div>
    </section>
  );
};

export default CTA;
