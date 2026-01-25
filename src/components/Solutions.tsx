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
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute inset-0 mesh-bg opacity-40" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="max-w-4xl mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="premium-badge mb-6">
            Solutions
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.05] mb-6">
            Tailored for Every
            <br />
            <span className="gradient-text italic">Partner</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Whether you're a publisher, advertiser, or agency, Kolorowey adapts to your unique needs with precision.
          </p>
        </motion.div>

        {/* Solutions - Horizontal Scrolling Cards */}
        <div className="space-y-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card overflow-hidden hover:border-primary/30 transition-all duration-500">
                <div className="grid md:grid-cols-12 gap-8 p-8 md:p-10">
                  {/* Number */}
                  <div className="md:col-span-1 flex items-start">
                    <span className="editorial-number text-5xl">
                      {solution.number}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="md:col-span-3">
                    <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-primary font-medium">
                      {solution.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="md:col-span-3">
                    <div className="flex flex-wrap gap-2">
                      {solution.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="md:col-span-1 flex items-center justify-end">
                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </div>
                  </div>
                </div>

                {/* Progress bar on hover */}
                <div className="h-1 bg-muted">
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
