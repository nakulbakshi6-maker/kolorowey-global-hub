import { ArrowRight, Users, Building2, Megaphone } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: Building2,
    title: "For Publishers",
    description: "Maximize yield with header bidding, unified auctions, and premium demand partnerships.",
    features: ["Header Bidding", "Yield Optimization", "Floor Management", "Direct Deals"],
    cta: "Learn More",
    color: "from-blue-500/10 to-blue-600/5",
  },
  {
    icon: Megaphone,
    title: "For Advertisers",
    description: "Reach your audience across premium inventory with advanced targeting and measurement.",
    features: ["Audience Targeting", "Brand Safety", "Cross-Device", "Attribution"],
    cta: "Learn More",
    color: "from-purple-500/10 to-purple-600/5",
  },
  {
    icon: Users,
    title: "For Agencies",
    description: "Manage campaigns at scale with white-label solutions and unified reporting.",
    features: ["Campaign Management", "White-Label", "Bulk Operations", "Reporting"],
    cta: "Learn More",
    color: "from-orange-500/10 to-orange-600/5",
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="relative py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="pro-badge mb-4">Solutions</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Built for every partner
            <br />
            <span className="gradient-text">in the ecosystem</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tailored solutions that adapt to your unique business needs.
          </p>
        </motion.div>

        {/* Solutions Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="pro-card-hover p-8 flex flex-col"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6`}>
                <solution.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {solution.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                {solution.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {solution.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1.5 bg-secondary rounded-full text-xs font-medium text-secondary-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Button variant="ghost" className="w-fit p-0 h-auto font-semibold text-primary hover:text-primary group">
                {solution.cta}
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
