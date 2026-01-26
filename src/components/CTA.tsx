import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Megaphone, Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden section-darker">
      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(192 80% 50% / 0.3) 0%, transparent 60%)' }}
      />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(320 85% 55% / 0.2) 0%, transparent 60%)' }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6">
            Ready to <span className="gradient-text">Unfragment</span> Your AdTech?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join the leading publishers and advertisers who have already transformed 
            their programmatic strategy with Kolorowey.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button size="lg" className="h-14 px-8 rounded-full font-semibold text-base group shadow-lg glow-teal">
                <Building2 className="w-5 h-5 mr-2" />
                I'm a Publisher
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-full font-semibold text-base group border-border hover:border-primary/50">
                <Megaphone className="w-5 h-5 mr-2" />
                I'm an Advertiser
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">Or <button className="text-primary hover:underline">schedule a demo</button> with our team</span>
          </div>

          {/* Trust badges */}
          <motion.div 
            className="mt-16 pt-12 border-t border-border/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6">
              Enterprise-grade security & compliance
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {["SOC 2 Type II", "GDPR Compliant", "ISO 27001", "TAG Certified", "IAB Member"].map((badge) => (
                <span 
                  key={badge}
                  className="px-4 py-2 rounded-lg bg-secondary/50 border border-border text-sm text-muted-foreground font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;