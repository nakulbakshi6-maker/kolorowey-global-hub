import { ArrowRight, Building2, Megaphone, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: Building2,
    title: "Publishers",
    description: "Maximize yield with header bidding, unified auctions, and premium demand partnerships.",
    features: ["Header Bidding", "Yield Optimization", "Floor Management"],
    gradient: "from-indigo-500/10 to-purple-500/5",
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-600",
  },
  {
    icon: Megaphone,
    title: "Advertisers",
    description: "Reach your audience across premium inventory with advanced targeting and brand safety.",
    features: ["Audience Targeting", "Brand Safety", "Cross-Device Attribution"],
    gradient: "from-purple-500/10 to-pink-500/5",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-600",
  },
  {
    icon: Users,
    title: "Agencies",
    description: "Manage campaigns at scale with white-label solutions and unified reporting dashboards.",
    features: ["Campaign Management", "White-Label Solutions", "Custom Reporting"],
    gradient: "from-orange-500/10 to-amber-500/5",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-600",
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="relative py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="pill-badge mb-6">Solutions</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Tailored for every
            <br />
            <span className="gradient-text">partner in the ecosystem</span>
          </h2>
        </motion.div>

        {/* Solutions Cards - Horizontal layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className={`elevated-card-hover h-full p-8 flex flex-col bg-gradient-to-br ${solution.gradient}`}>
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${solution.iconBg} flex items-center justify-center mb-6`}>
                  <solution.icon className={`w-7 h-7 ${solution.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  For {solution.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {solution.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="ghost" className="w-fit p-0 h-auto font-semibold text-primary hover:text-primary group/btn">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
