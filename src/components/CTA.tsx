import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Megaphone, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'var(--gradient-navy)' }}>
      {/* Subtle gradient orbs */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, hsl(320 85% 55% / 0.4), transparent)' }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(circle, hsl(185 85% 45% / 0.4), transparent)' }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-6">
              Get Started
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Ready to unify your
              <br />
              <span className="gradient-text">advertising infrastructure?</span>
            </h2>

            <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
              Join 500+ enterprise partners who trust Kolorowey to power their 
              programmatic advertising at global scale.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg" 
                  className="h-14 px-8 bg-white text-primary hover:bg-white/90 rounded-full font-semibold group"
                >
                  <Building2 className="w-5 h-5 mr-2" />
                  For Publishers
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  className="h-14 px-8 border-2 border-white/30 text-white bg-transparent hover:bg-white/10 rounded-full font-semibold group"
                >
                  <Megaphone className="w-5 h-5 mr-2" />
                  For Advertisers
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>

            <div className="flex items-center justify-center gap-2 text-white/40 text-sm">
              <Calendar className="w-4 h-4" />
              <span>Or</span>
              <a href="#" className="text-accent hover:underline font-medium">
                schedule a demo
              </a>
              <span>with our team</span>
            </div>

            {/* Trust badges */}
            <div className="mt-16 pt-12 border-t border-white/10">
              <div className="flex flex-wrap items-center justify-center gap-8 text-white/40 text-sm">
                {['SOC 2 Certified', 'GDPR Compliant', 'ISO 27001', 'TAG Certified'].map((badge) => (
                  <div key={badge} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
