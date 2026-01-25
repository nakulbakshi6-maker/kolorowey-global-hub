import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 mesh-bg opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <div className="glass-card p-12 md:p-16 text-center relative overflow-hidden">
            {/* Decorative gradient border effect */}
            <div className="absolute inset-0 rounded-xl gradient-border opacity-50" />

            {/* Glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2" />

            <div className="relative">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Ready to{" "}
                <span className="gradient-text">Unify</span>
                <br />
                Your AdTech Stack?
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                Join 500+ enterprise partners who have transformed their advertising 
                infrastructure with Kolorowey.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" className="group">
                  Schedule a Demo
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="glass" size="xl" className="group">
                  <Mail className="w-5 h-5" />
                  Contact Sales
                </Button>
              </div>

              {/* Trust note */}
              <p className="mt-8 text-sm text-muted-foreground">
                Enterprise-ready • SOC 2 Compliant • GDPR Ready
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
