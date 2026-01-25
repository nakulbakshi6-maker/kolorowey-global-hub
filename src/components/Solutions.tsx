import { ArrowRight, Building2, Megaphone, Users } from "lucide-react";
import { motion } from "framer-motion";

const solutions = [
  {
    icon: Building2,
    title: "Publishers",
    description: "Maximize yield with header bidding, unified auctions, and premium demand partnerships.",
    features: ["Header Bidding", "Yield Optimization", "Floor Management", "Demand Partners"],
  },
  {
    icon: Megaphone,
    title: "Advertisers",
    description: "Reach your audience across premium inventory with advanced targeting and brand safety.",
    features: ["Audience Targeting", "Brand Safety", "Cross-Device", "Real-Time Reporting"],
  },
  {
    icon: Users,
    title: "Agencies",
    description: "Manage campaigns at scale with white-label solutions and unified reporting dashboards.",
    features: ["Campaign Management", "White-Label", "Custom Reporting", "API Access"],
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="relative py-32 bg-background overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Dark section */}
          <motion.div 
            className="lg:pr-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="outline-badge mb-6 inline-block">Solutions</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Tailored for every
              <br />
              <span className="gradient-text">partner</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-md">
              Whether you're a publisher, advertiser, or agency, we have the tools you need to succeed.
            </p>
            
            {/* Solution Cards stacked */}
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bold-card-hover p-6 group cursor-pointer"
                >
                  <div className="flex items-start gap-5">
                    <div className="icon-box flex-shrink-0">
                      <solution.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold">For {solution.title}</h3>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">{solution.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {solution.features.map((feature) => (
                          <span key={feature} className="text-xs font-medium px-3 py-1 bg-secondary rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - White on dark section */}
          <motion.div 
            className="bg-primary text-primary-foreground rounded-3xl p-10 md:p-14 lg:-mr-20"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="mb-10">
              <p className="text-primary-foreground/60 text-sm font-semibold uppercase tracking-widest mb-4">
                Why Kolorowey
              </p>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-6">
                One platform,
                <br />
                infinite possibilities
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                We've built the infrastructure that powers the modern advertising ecosystem. 
                From real-time bidding to cross-platform attribution, everything you need is here.
              </p>
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "50B+", label: "Daily bids" },
                { value: "180+", label: "Countries" },
                { value: "200+", label: "Integrations" },
                { value: "99.9%", label: "Uptime" },
              ].map((metric, index) => (
                <motion.div 
                  key={metric.label}
                  className="border-l-2 border-primary-foreground/20 pl-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <div className="text-3xl font-extrabold mb-1">{metric.value}</div>
                  <div className="text-sm text-primary-foreground/60">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
