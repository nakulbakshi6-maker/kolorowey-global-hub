import { Layers, Globe, Zap, Shield, BarChart3, Workflow } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Unified Stack",
    description:
      "One platform connecting DSPs, SSPs, ad exchanges, and data partners. No more fragmented integrations.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Access inventory across 180+ countries with localized optimization and compliance built-in.",
  },
  {
    icon: Zap,
    title: "Real-Time Bidding",
    description:
      "Sub-10ms latency RTB infrastructure processing 50+ billion requests daily at scale.",
  },
  {
    icon: Shield,
    title: "Privacy-First",
    description:
      "GDPR, CCPA, and global privacy compliance with cookieless identity solutions.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Cross-platform attribution, real-time reporting, and predictive insights powered by ML.",
  },
  {
    icon: Workflow,
    title: "Open Ecosystem",
    description:
      "API-first architecture with 200+ pre-built integrations and custom workflow automation.",
  },
];

const Features = () => {
  return (
    <section id="platform" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-bg opacity-50" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            Platform Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Infrastructure Built for{" "}
            <span className="gradient-text">Scale</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Enterprise-grade advertising technology that unifies your entire
            programmatic ecosystem.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card-hover p-8 group"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
