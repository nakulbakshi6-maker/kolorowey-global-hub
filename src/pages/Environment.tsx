import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, Smartphone, AppWindow, Tv, Building2, Gamepad2, Volume2, ArrowRight, Sparkles, Check, Zap, Monitor, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRef, useState } from "react";

const environments = [
  {
    icon: Globe,
    title: "Web",
    subtitle: "Desktop & Laptop",
    description: "Desktop and laptop browsers across all major platforms. Display, video, and native formats optimized for web experiences with industry-leading viewability.",
    formats: ["Display Banners", "Video Pre-roll", "Native Ads", "Rich Media", "Interstitials"],
    reach: "3B+ daily impressions",
    devices: ["Chrome", "Safari", "Firefox", "Edge"],
    gradient: "from-accent to-pink-400",
    stats: { impressions: "3B+", viewability: "92%", ctr: "0.45%" },
  },
  {
    icon: Smartphone,
    title: "Mobile Web",
    subtitle: "Smartphones & Tablets",
    description: "Mobile-optimized ad experiences for browsers on smartphones and tablets. AMP-compatible for lightning-fast delivery without compromising Core Web Vitals.",
    formats: ["Mobile Display", "Mobile Video", "AMP Ads", "Interstitials", "Sticky Banners"],
    reach: "2B+ daily impressions",
    devices: ["iOS Safari", "Chrome Mobile", "Samsung Internet"],
    gradient: "from-highlight to-cyan-400",
    stats: { impressions: "2B+", viewability: "88%", ctr: "0.65%" },
  },
  {
    icon: AppWindow,
    title: "In-App",
    subtitle: "Mobile Applications",
    description: "Native advertising within mobile applications. Rewarded, interstitial, and banner formats optimized for maximum engagement and user retention.",
    formats: ["Rewarded Video", "Interstitials", "Banner Ads", "Native Ads", "Playable Ads"],
    reach: "1.5B+ daily impressions",
    devices: ["iOS Apps", "Android Apps", "Gaming Apps"],
    gradient: "from-violet-500 to-accent",
    stats: { impressions: "1.5B+", viewability: "95%", ctr: "1.2%" },
  },
  {
    icon: Tv,
    title: "Connected TV (CTV)",
    subtitle: "Streaming Platforms",
    description: "Premium streaming environments on smart TVs and OTT devices. Non-skippable, high-impact video advertising with household-level targeting and attribution.",
    formats: ["Pre-roll", "Mid-roll", "Post-roll", "Pause Ads", "Branded Content"],
    reach: "500M+ daily impressions",
    devices: ["Smart TVs", "Roku", "Fire TV", "Apple TV", "Gaming Consoles"],
    gradient: "from-emerald-500 to-teal-400",
    stats: { impressions: "500M+", viewability: "98%", ctr: "2.1%" },
  },
  {
    icon: Building2,
    title: "Digital Out of Home (DOOH)",
    subtitle: "Public Displays",
    description: "Programmatic access to digital screens in public spaces. Billboards, transit, retail, and venue advertising with location-based targeting and real-time activation.",
    formats: ["Digital Billboards", "Transit Screens", "Retail Displays", "Venue Screens", "Street Furniture"],
    reach: "100M+ daily impressions",
    devices: ["Billboards", "Transit", "Retail", "Airports", "Stadiums"],
    gradient: "from-amber-500 to-orange-400",
    stats: { impressions: "100M+", viewability: "99%", ctr: "N/A" },
  },
  {
    icon: Gamepad2,
    title: "In-Game",
    subtitle: "Gaming Environments",
    description: "Advertising within gaming environments across console, PC, and mobile. Intrinsic, rewarded, and interstitial formats for highly engaged audiences.",
    formats: ["Intrinsic Ads", "Rewarded Video", "Interstitials", "Branded Content", "Audio Ads"],
    reach: "200M+ daily impressions",
    devices: ["PC Games", "Console Games", "Mobile Games", "VR/AR"],
    gradient: "from-rose-500 to-red-400",
    stats: { impressions: "200M+", viewability: "96%", ctr: "1.8%" },
  },
  {
    icon: Volume2,
    title: "Audio",
    subtitle: "Streaming & Podcasts",
    description: "Audio advertising across podcasts, music streaming, and digital radio. Voice-enabled and companion display ads for an immersive audio experience.",
    formats: ["Audio Spots", "Host-Read Ads", "Companion Display", "Voice-Activated", "Podcast Ads"],
    reach: "300M+ daily impressions",
    devices: ["Spotify", "Podcasts", "Digital Radio", "Smart Speakers"],
    gradient: "from-indigo-500 to-blue-400",
    stats: { impressions: "300M+", viewability: "100%", ctr: "0.8%" },
  },
];

const Environment = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  
  const [activeEnv, setActiveEnv] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20"
            >
              {/* Orbital rings */}
              <div className="absolute inset-0 border-2 border-accent/30 rounded-full" />
              <div className="absolute inset-12 border-2 border-highlight/30 rounded-full" />
              <div className="absolute inset-24 border-2 border-accent/30 rounded-full" />
            </motion.div>
          </div>
          
          <motion.div 
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="container mx-auto px-6 relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-5xl mx-auto"
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
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
                Omnichannel
                <br />
                <span className="gradient-text">Reach</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                Beyond the walled gardens. Reach your audience across every screen, 
                device, and platform with unified programmatic access to premium inventory.
              </p>
              
              {/* Hero Stats */}
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                {[
                  { value: "7+", label: "Environments" },
                  { value: "7B+", label: "Daily Impressions" },
                  { value: "150+", label: "Countries" },
                  { value: "35+", label: "Ad Formats" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-extrabold gradient-text">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button size="xl" className="rounded-full group">
                  Explore Environments
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1.5 h-1.5 bg-accent rounded-full mt-2"
              />
            </div>
          </motion.div>
        </section>

        {/* Environment Icons Overview */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                One Platform, <span className="gradient-text">Every Screen</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Unified access to premium inventory across all digital environments
              </p>
            </motion.div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {environments.map((env, index) => (
                <motion.button
                  key={env.title}
                  onClick={() => setActiveEnv(index)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`flex flex-col items-center p-6 rounded-2xl transition-all ${
                    activeEnv === index 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-card hover:bg-secondary border border-border'
                  }`}
                >
                  <env.icon className="w-8 h-8 mb-2" />
                  <span className="text-sm font-medium">{env.title}</span>
                </motion.button>
              ))}
            </div>
            
            {/* Active Environment Details */}
            <motion.div
              key={activeEnv}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${environments[activeEnv].gradient}`}>
                    {(() => {
                      const IconComponent = environments[activeEnv].icon;
                      return <IconComponent className="w-8 h-8 text-white" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold">{environments[activeEnv].title}</h3>
                    <p className="text-muted-foreground">{environments[activeEnv].subtitle}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {environments[activeEnv].description}
                </p>
                
                <div className="mb-8">
                  <h4 className="font-semibold mb-4">Supported Devices & Platforms</h4>
                  <div className="flex flex-wrap gap-2">
                    {environments[activeEnv].devices.map((device) => (
                      <span
                        key={device}
                        className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-secondary text-foreground"
                      >
                        <Monitor className="w-3 h-3" />
                        {device}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-4">Ad Formats</h4>
                  <div className="flex flex-wrap gap-2">
                    {environments[activeEnv].formats.map((format) => (
                      <span
                        key={format}
                        className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-secondary text-foreground"
                      >
                        <Check className="w-3 h-3 text-accent" />
                        {format}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="magnetic-card p-6 text-center">
                  <div className="text-3xl md:text-4xl font-extrabold gradient-text mb-2">
                    {environments[activeEnv].stats.impressions}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
                    Daily Impressions
                  </div>
                </div>
                <div className="magnetic-card p-6 text-center">
                  <div className="text-3xl md:text-4xl font-extrabold gradient-text mb-2">
                    {environments[activeEnv].stats.viewability}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
                    Viewability
                  </div>
                </div>
                <div className="magnetic-card p-6 text-center">
                  <div className="text-3xl md:text-4xl font-extrabold gradient-text mb-2">
                    {environments[activeEnv].stats.ctr}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
                    Avg CTR
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* All Environments Grid - Detailed */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">All Environments</span>
              <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
                Complete <span className="gradient-text">Coverage</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Detailed breakdown of each advertising environment in our network
              </p>
            </motion.div>
            
            <div className="space-y-16">
              {environments.map((env, index) => (
                <motion.div
                  key={env.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className="magnetic-card p-8 md:p-12"
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left - Icon and Title */}
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${env.gradient} flex-shrink-0`}>
                        <env.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold mb-1">{env.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{env.subtitle}</p>
                        <div className="text-lg font-bold gradient-text">{env.reach}</div>
                      </div>
                    </div>
                    
                    {/* Center - Description and Formats */}
                    <div className="lg:col-span-2">
                      <p className="text-muted-foreground mb-6">{env.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {env.formats.map((format) => (
                          <span
                            key={format}
                            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-foreground"
                          >
                            <Check className="w-3 h-3 text-accent" />
                            {format}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Format Comparison Table */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Performance by <span className="gradient-text">Environment</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Compare metrics across different advertising channels
              </p>
            </motion.div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-semibold">Environment</th>
                    <th className="text-center py-4 px-4 font-semibold">Daily Impressions</th>
                    <th className="text-center py-4 px-4 font-semibold">Viewability</th>
                    <th className="text-center py-4 px-4 font-semibold">Avg CTR</th>
                    <th className="text-center py-4 px-4 font-semibold">Formats</th>
                  </tr>
                </thead>
                <tbody>
                  {environments.map((env, index) => (
                    <motion.tr
                      key={env.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="border-b border-border/50 hover:bg-secondary/50 transition-colors"
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${env.gradient}`}>
                            <env.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-medium">{env.title}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center font-bold gradient-text">{env.stats.impressions}</td>
                      <td className="py-4 px-4 text-center">{env.stats.viewability}</td>
                      <td className="py-4 px-4 text-center">{env.stats.ctr}</td>
                      <td className="py-4 px-4 text-center">{env.formats.length}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="gradient-card p-12 md:p-20 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <Radio className="w-12 h-12 text-white/80 mx-auto mb-6" />
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                  Go beyond the walled gardens
                </h2>
                <p className="text-primary-foreground/70 mb-10 max-w-xl mx-auto text-lg">
                  Access premium inventory across every environment from a single platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="xl" variant="secondary" className="rounded-full group">
                    Book a Demo
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    size="xl" 
                    variant="outline" 
                    className="rounded-full border-white/30 text-white hover:bg-white/10 hover:text-white"
                    onClick={() => window.location.href = '/advertisers'}
                  >
                    View Advertising Solutions
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Environment;
