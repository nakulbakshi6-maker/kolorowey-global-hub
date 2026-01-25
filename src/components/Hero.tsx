import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroMesh from "@/assets/hero-mesh.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95" />
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 mesh-bg opacity-80" />
        
        {/* Hero image with overlay */}
        <div className="absolute inset-0">
          <img
            src={heroMesh}
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        {/* Animated glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-subtle animation-delay-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Global AdTech Infrastructure
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up animation-delay-100 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="text-foreground">AdTech</span>
            <br />
            <span className="gradient-text">Unfragmented</span>
          </h1>

          {/* Subline */}
          <p className="animate-fade-in-up animation-delay-200 text-xl md:text-2xl text-muted-foreground font-light mb-4">
            Beyond the Walled Gardens
          </p>

          {/* Description */}
          <p className="animate-fade-in-up animation-delay-300 text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10">
            Kolorowey unifies the fragmented advertising ecosystem. Connect publishers, 
            advertisers, and platforms through a single, powerful infrastructure.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" className="group">
              Start Integration
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="hero-outline" size="xl" className="group">
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up animation-delay-500 mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { value: "50B+", label: "Daily Impressions" },
              { value: "180+", label: "Countries" },
              { value: "99.9%", label: "Uptime SLA" },
              { value: "<10ms", label: "Avg Latency" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
