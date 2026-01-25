import { ArrowUpRight } from "lucide-react";

const solutions = [
  {
    title: "For Publishers",
    description:
      "Maximize yield with header bidding, unified auctions, and direct demand partnerships. Take control of your inventory.",
    features: ["Header Bidding", "Yield Optimization", "Floor Price Management", "Direct Deals"],
    gradient: "from-primary/20 to-primary/5",
  },
  {
    title: "For Advertisers",
    description:
      "Reach your audience across premium inventory with advanced targeting, brand safety, and transparent measurement.",
    features: ["Audience Targeting", "Brand Safety", "Cross-Device", "Attribution"],
    gradient: "from-accent/20 to-accent/5",
  },
  {
    title: "For Agencies",
    description:
      "Manage campaigns at scale with white-label solutions, unified reporting, and automated optimization.",
    features: ["Campaign Management", "White-Label", "Bulk Operations", "Client Reporting"],
    gradient: "from-primary/15 to-accent/10",
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="relative py-32 bg-card/30">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tailored for Every{" "}
            <span className="gradient-text">Partner</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're a publisher, advertiser, or agency, Kolorowey adapts to your needs.
          </p>
        </div>

        {/* Solutions Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="group relative glass-card overflow-hidden"
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative p-8">
                {/* Title with arrow */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    {solution.title}
                  </h3>
                  <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features list */}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
