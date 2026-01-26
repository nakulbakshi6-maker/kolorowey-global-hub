import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Target, Users, LineChart, Shield, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";

const SupplyDemand = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Supply Solutions */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              For Publishers
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Supply Solutions
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Maximize revenue with our comprehensive monetization suite. From header bidding 
              to direct deals, we provide the tools publishers need to thrive in the open internet.
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
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <Button className="rounded-full group">
              Explore Supply Solutions
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-accent/20 via-accent/5 to-transparent p-8 border border-accent/10">
              <div className="h-full rounded-2xl bg-card border border-border p-6 flex flex-col justify-between">
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Average Revenue Lift</div>
                  <div className="text-5xl font-bold gradient-text">+45%</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-secondary">
                    <div className="text-2xl font-bold">50B+</div>
                    <div className="text-xs text-muted-foreground">Daily Impressions</div>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary">
                    <div className="text-2xl font-bold">99.9%</div>
                    <div className="text-xs text-muted-foreground">Fill Rate</div>
                  </div>
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
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-highlight/20 via-highlight/5 to-transparent p-8 border border-highlight/10">
              <div className="h-full rounded-2xl bg-card border border-border p-6 flex flex-col justify-between">
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Average ROAS</div>
                  <div className="text-5xl font-bold text-highlight">3.2x</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-secondary">
                    <div className="text-2xl font-bold">2.5B+</div>
                    <div className="text-xs text-muted-foreground">Daily Reach</div>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary">
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-xs text-muted-foreground">Brand Safety</div>
                  </div>
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
            <span className="inline-block text-highlight text-sm font-semibold uppercase tracking-widest mb-4">
              For Advertisers
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Demand Solutions
            </h2>
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
                  <div className="w-8 h-8 rounded-lg bg-highlight/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-highlight" />
                  </div>
                  <span className="text-foreground font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <Button className="rounded-full group bg-highlight hover:bg-highlight/90">
              Explore Demand Solutions
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SupplyDemand;
