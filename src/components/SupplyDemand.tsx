import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Target, Users, LineChart, Shield, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SupplyDemand = () => {
  return (
    <section className="py-24 md:py-32 section-dark">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="premium-badge mb-6 inline-block">
            Complete Ecosystem
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Supply & Demand <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            End-to-end solutions for publishers and advertisers across all channels.
          </p>
        </motion.div>

        {/* Supply Solutions */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="premium-badge mb-4 inline-block">
              For Publishers
            </span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-6">
              Supply Solutions
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Maximize revenue with our comprehensive monetization suite. From header bidding 
              to direct deals, we provide the tools publishers need to thrive.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                { icon: TrendingUp, text: "Header Bidding & Unified Auctions" },
                { icon: Gauge, text: "Dynamic Floor Optimization" },
                { icon: Users, text: "180+ Premium Demand Partners" },
                { icon: LineChart, text: "Real-Time Analytics & Reporting" },
              ].map((item, i) => (
                <motion.div 
                  key={item.text}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <Button asChild className="rounded-full group">
              <Link to="/supply">
                Explore Supply Solutions
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8">
              <div className="mb-8">
                <div className="text-sm text-muted-foreground mb-2">Average Revenue Lift</div>
                <div className="text-5xl md:text-6xl font-bold gradient-text">+45%</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="text-2xl font-bold text-foreground">50B+</div>
                  <div className="text-xs text-muted-foreground">Daily Impressions</div>
                </div>
                <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="text-2xl font-bold text-foreground">99.9%</div>
                  <div className="text-xs text-muted-foreground">Fill Rate</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Demand Solutions */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8">
              <div className="mb-8">
                <div className="text-sm text-muted-foreground mb-2">Average ROAS</div>
                <div className="text-5xl md:text-6xl font-bold gradient-text-magenta">3.2x</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="text-2xl font-bold text-foreground">2.5B+</div>
                  <div className="text-xs text-muted-foreground">Daily Reach</div>
                </div>
                <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="text-2xl font-bold text-foreground">98%</div>
                  <div className="text-xs text-muted-foreground">Brand Safety</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="premium-badge mb-4 inline-block !bg-[hsl(320,85%,55%)/0.1] !border-[hsl(320,85%,55%)/0.3] !text-[hsl(320,85%,60%)]">
              For Advertisers
            </span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-6">
              Demand Solutions
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Reach your audience with precision across premium inventory. Our demand platform 
              delivers performance, transparency, and brand safety at scale.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                { icon: Target, text: "Advanced Audience Targeting" },
                { icon: Shield, text: "Brand Safety & Fraud Prevention" },
                { icon: Users, text: "Cross-Device Identity Resolution" },
                { icon: LineChart, text: "AI-Powered Optimization" },
              ].map((item, i) => (
                <motion.div 
                  key={item.text}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-[hsl(320,85%,55%)/0.1] flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[hsl(320,85%,55%)]" />
                  </div>
                  <span className="text-foreground font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <Button asChild variant="outline" className="rounded-full group border-[hsl(320,85%,55%)/0.3] hover:border-[hsl(320,85%,55%)/0.5] hover:bg-[hsl(320,85%,55%)/0.05]">
              <Link to="/demand">
                Explore Demand Solutions
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SupplyDemand;