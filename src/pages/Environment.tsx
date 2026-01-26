import { motion } from "framer-motion";
import { Globe, Smartphone, AppWindow, Tv, Building2, Gamepad2, Volume2, ArrowRight, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const environments = [
  {
    icon: Globe,
    title: "Web",
    description: "Desktop and laptop browsers across all major platforms. Display, video, and native formats optimized for web experiences.",
    formats: ["Display Banners", "Video Pre-roll", "Native Ads", "Rich Media", "Interstitials"],
    reach: "3B+ daily impressions",
    gradient: "from-accent to-pink-400",
  },
  {
    icon: Smartphone,
    title: "Mobile Web",
    description: "Mobile-optimized ad experiences for browsers on smartphones and tablets. AMP-compatible for lightning-fast delivery.",
    formats: ["Mobile Display", "Mobile Video", "AMP Ads", "Interstitials", "Sticky Banners"],
    reach: "2B+ daily impressions",
    gradient: "from-highlight to-cyan-400",
  },
  {
    icon: AppWindow,
    title: "In-App",
    description: "Native advertising within mobile applications. Rewarded, interstitial, and banner formats for maximum engagement.",
    formats: ["Rewarded Video", "Interstitials", "Banner Ads", "Native Ads", "Playable Ads"],
    reach: "1.5B+ daily impressions",
    gradient: "from-violet-500 to-accent",
  },
  {
    icon: Tv,
    title: "Connected TV (CTV)",
    description: "Premium streaming environments on smart TVs and OTT devices. Non-skippable, high-impact video advertising.",
    formats: ["Pre-roll", "Mid-roll", "Post-roll", "Pause Ads", "Branded Content"],
    reach: "500M+ daily impressions",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    icon: Building2,
    title: "Digital Out of Home (DOOH)",
    description: "Programmatic access to digital screens in public spaces. Billboards, transit, retail, and venue advertising.",
    formats: ["Digital Billboards", "Transit Screens", "Retail Displays", "Venue Screens", "Street Furniture"],
    reach: "100M+ daily impressions",
    gradient: "from-amber-500 to-orange-400",
  },
  {
    icon: Gamepad2,
    title: "In-Game",
    description: "Advertising within gaming environments. Intrinsic, rewarded, and interstitial formats for engaged audiences.",
    formats: ["Intrinsic Ads", "Rewarded Video", "Interstitials", "Branded Content", "Audio Ads"],
    reach: "200M+ daily impressions",
    gradient: "from-rose-500 to-red-400",
  },
  {
    icon: Volume2,
    title: "Audio",
    description: "Audio advertising across podcasts, music streaming, and digital radio. Voice-enabled and companion display ads.",
    formats: ["Audio Spots", "Host-Read Ads", "Companion Display", "Voice-Activated", "Podcast Ads"],
    reach: "300M+ daily impressions",
    gradient: "from-indigo-500 to-blue-400",
  },
];

const Environment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span 
              className="shimmer-badge mb-6 inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-3 h-3" />
              Environments
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Omnichannel
              <br />
              <span className="gradient-text">Reach</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Beyond the walled gardens. Reach your audience across every screen, 
              device, and platform with unified programmatic access.
            </p>
            <Button size="xl" className="rounded-full group">
              Explore Environments
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </section>

        {/* Environments Grid */}
        <section className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {environments.map((env, index) => (
              <motion.div
                key={env.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="magnetic-card p-8 group hover:border-accent/50 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${env.gradient}`}
                  >
                    <env.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                      {env.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">{env.reach}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {env.description}
                </p>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Ad Formats
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {env.formats.map((format) => (
                      <span
                        key={format}
                        className="inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-md bg-secondary text-foreground"
                      >
                        <Check className="w-2.5 h-2.5 text-accent" />
                        {format}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-6 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { value: "7+", label: "Environments" },
              { value: "7B+", label: "Daily Impressions" },
              { value: "150+", label: "Countries" },
              { value: "35+", label: "Ad Formats" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-card p-12 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Go beyond the walled gardens
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
              Access premium inventory across every environment from a single platform.
            </p>
            <Button size="xl" variant="secondary" className="rounded-full group">
              Book a Demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Environment;
