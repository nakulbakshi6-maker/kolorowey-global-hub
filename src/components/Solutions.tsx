import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const solutions = [
  {
    title: "PUBLISHERS",
    subtitle: "yield.maximize()",
    description: "Header bidding, unified auctions, and direct demand partnerships.",
    features: ["Header Bidding", "Yield Opt", "Floor Mgmt", "Direct Deals"],
    status: "ACTIVE",
  },
  {
    title: "ADVERTISERS",
    subtitle: "audience.reach()",
    description: "Premium inventory with advanced targeting and brand safety.",
    features: ["Targeting", "Brand Safety", "Cross-Device", "Attribution"],
    status: "ACTIVE",
  },
  {
    title: "AGENCIES",
    subtitle: "campaigns.scale()",
    description: "White-label solutions with unified reporting and automation.",
    features: ["Campaign Mgmt", "White-Label", "Bulk Ops", "Reporting"],
    status: "ACTIVE",
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      <div className="absolute inset-0 data-stream opacity-30" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="terminal-badge mb-6">
            <span className="text-accent">$</span> SOLUTION_TYPES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4">
            TAILORED_FOR
            <br />
            <span className="neon-text">EVERY_PARTNER</span>
          </h2>
        </motion.div>

        {/* Solutions */}
        <div className="space-y-4">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="terminal-card-hover overflow-hidden">
                <div className="grid md:grid-cols-12 gap-6 p-6 md:p-8">
                  {/* Title */}
                  <div className="md:col-span-3">
                    <h3 className="text-xl font-mono font-bold text-foreground group-hover:text-primary transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-sm font-mono text-accent">
                      {solution.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="md:col-span-4">
                    <div className="flex flex-wrap gap-2">
                      {solution.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-1 bg-secondary border border-border text-xs font-mono text-muted-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Status & Arrow */}
                  <div className="md:col-span-1 flex items-center justify-end gap-3">
                    <span className="text-xs font-mono text-primary flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      {solution.status}
                    </span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>

                {/* Progress bar */}
                <div className="h-0.5 bg-border">
                  <div className="h-full bg-gradient-to-r from-primary to-accent w-0 group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
