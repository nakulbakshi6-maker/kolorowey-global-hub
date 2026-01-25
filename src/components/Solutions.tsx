import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const solutions = [
  {
    title: "Publishers",
    subtitle: "Maximize Revenue",
    description:
      "Maximize yield with header bidding, unified auctions, and direct demand partnerships. Take control of your inventory.",
    features: ["Header Bidding", "Yield Optimization", "Floor Price Management", "Direct Deals"],
    number: "01",
  },
  {
    title: "Advertisers",
    subtitle: "Reach Audiences",
    description:
      "Reach your audience across premium inventory with advanced targeting, brand safety, and transparent measurement.",
    features: ["Audience Targeting", "Brand Safety", "Cross-Device", "Attribution"],
    number: "02",
  },
  {
    title: "Agencies",
    subtitle: "Scale Campaigns",
    description:
      "Manage campaigns at scale with white-label solutions, unified reporting, and automated optimization.",
    features: ["Campaign Management", "White-Label", "Bulk Operations", "Client Reporting"],
    number: "03",
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="max-w-4xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="editorial-badge mb-6">
            Solutions
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
            Tailored for Every
            <br />
            <span className="gradient-text italic">Partner</span>
          </h2>
        </motion.div>

        {/* Solutions Cards */}
        <div className="space-y-4">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="swiss-card-hover overflow-hidden">
                <div className="grid md:grid-cols-12 gap-6 p-8 md:p-10">
                  {/* Number */}
                  <div className="md:col-span-1 flex items-start">
                    <span className="luxury-number text-4xl">
                      {solution.number}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="md:col-span-3">
                    <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-1">
                      {solution.title}
                    </h3>
                    <p className="text-primary text-sm font-semibold uppercase tracking-wider">
                      {solution.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {solution.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="md:col-span-3">
                    <div className="flex flex-wrap gap-2">
                      {solution.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1.5 bg-secondary text-secondary-foreground text-xs font-medium rounded-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="md:col-span-1 flex items-center justify-end">
                    <div className="w-10 h-10 rounded-sm border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                  </div>
                </div>

                {/* Bottom border accent */}
                <div className="h-0.5 bg-border">
                  <div className="h-full bg-primary w-0 group-hover:w-full transition-all duration-500" />
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
