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
      {/* Background gradient accent - hidden on mobile for better readability */}
      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block" style={{ background: 'var(--gradient-navy)' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
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
            
            {/* Solution Cards */}
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="magnetic-card p-6 group cursor-pointer"
                >
                  <div className="flex items-start gap-5">
                    <motion.div 
                      className="icon-box flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <solution.icon className="w-6 h-6" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                          For {solution.title}
                        </h3>
                        <motion.div whileHover={{ x: 5 }} className="text-muted-foreground group-hover:text-accent transition-colors">
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">{solution.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {solution.features.map((feature) => (
                          <span 
                            key={feature} 
                            className="text-xs font-medium px-3 py-1 bg-secondary rounded-full group-hover:bg-accent/10 group-hover:text-accent transition-colors"
                          >
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

          {/* Right - Gradient panel */}
          <motion.div 
            className="gradient-card p-10 md:p-14 lg:-mr-20"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative z-10 mb-10">
              <p className="text-primary-foreground/50 text-sm font-bold uppercase tracking-widest mb-4">
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
            <div className="relative z-10 grid grid-cols-2 gap-6">
              {[
                { value: "50B+", label: "Daily bids" },
                { value: "180+", label: "Countries" },
                { value: "200+", label: "Integrations" },
                { value: "99.9%", label: "Uptime" },
              ].map((metric, index) => (
                <motion.div 
                  key={metric.label}
                  className="border-l-2 border-primary-foreground/20 pl-4 group cursor-pointer"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="text-3xl font-extrabold mb-1 group-hover:text-accent transition-colors">{metric.value}</div>
                  <div className="text-sm text-primary-foreground/50">{metric.label}</div>
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
