const partnerLogos = [
  { name: "DSP Partner", initials: "DSP" },
  { name: "Exchange One", initials: "EX1" },
  { name: "Data Provider", initials: "DAT" },
  { name: "Media Group", initials: "MG" },
  { name: "Tech Alliance", initials: "TEC" },
  { name: "Global Media", initials: "GLB" },
];

const Partners = () => {
  return (
    <section id="partnerships" className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Trusted by Industry Leaders
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Powering the Global{" "}
            <span className="gradient-text">Ad Ecosystem</span>
          </h2>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partnerLogos.map((partner) => (
            <div
              key={partner.name}
              className="group flex items-center justify-center w-32 h-20 rounded-xl bg-card/40 border border-border/50 hover:border-primary/30 hover:bg-card/60 transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                  {partner.initials}
                </span>
                <span className="text-xs text-muted-foreground/60 mt-1">
                  Partner
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-20 glass-card p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Enterprise Partners" },
              { value: "$12B+", label: "Annual Ad Spend" },
              { value: "15+", label: "Years in AdTech" },
              { value: "24/7", label: "Global Support" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
