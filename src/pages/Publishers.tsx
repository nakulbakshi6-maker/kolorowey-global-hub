import { motion } from "framer-motion";
import { Server, Play, Tv, Video, MonitorPlay, Building2, Smartphone, Globe, ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const solutions = [
  {
    icon: Server,
    title: "SSP (Supply-Side Platform)",
    description: "Maximize revenue with our advanced supply-side platform. Connect to premium demand partners and optimize yield in real-time.",
    features: ["Header Bidding", "Unified Auctions", "Floor Price Optimization", "Real-time Analytics"],
  },
  {
    icon: Play,
    title: "Video Ad Player",
    description: "Enterprise-grade video player with seamless ad integration. Support for VAST, VPAID, and all major video formats.",
    features: ["VAST/VPAID Support", "Adaptive Streaming", "Cross-Platform", "Low Latency"],
  },
  {
    icon: Tv,
    title: "SSAI & CSAI",
    description: "Server-side and client-side ad insertion for flawless viewing experiences across all devices and platforms.",
    features: ["Buffer-Free Ads", "Ad-Block Resistant", "Dynamic Ad Insertion", "Session Management"],
  },
  {
    icon: Video,
    title: "Video CMS & VOD Platform",
    description: "Complete video content management with monetization built-in. Upload, transcode, and monetize your video library.",
    features: ["Auto Transcoding", "CDN Distribution", "Metadata Management", "Analytics Dashboard"],
  },
  {
    icon: MonitorPlay,
    title: "CTV Monetization",
    description: "Unlock premium CTV inventory with advanced targeting and measurement capabilities for connected TV environments.",
    features: ["Household Targeting", "Frequency Capping", "Brand Safety", "Attribution"],
  },
  {
    icon: Building2,
    title: "DOOH Monetization",
    description: "Digital out-of-home advertising solutions. Programmatic access to screens in high-traffic locations worldwide.",
    features: ["Location Targeting", "Dayparting", "Weather Triggers", "Audience Measurement"],
  },
  {
    icon: Smartphone,
    title: "In-App Monetization",
    description: "Maximize mobile app revenue with native, rewarded, and interstitial ad formats optimized for engagement.",
    features: ["Rewarded Ads", "Native Formats", "Mediation", "User Segmentation"],
  },
  {
    icon: Globe,
    title: "Web & AMP Monetization",
    description: "High-performance ad delivery for web and AMP pages. Fast loading, high viewability, maximum revenue.",
    features: ["Lazy Loading", "AMP Compatible", "Core Web Vitals", "Viewability Optimization"],
  },
];

const Publishers = () => {
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
              For Publishers
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Maximize Your
              <br />
              <span className="gradient-text">Ad Revenue</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Complete monetization solutions for publishers. From SSP to video players, 
              we provide everything you need to maximize yield across all channels.
            </p>
            <Button size="xl" className="rounded-full group">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </section>

        {/* Solutions Grid */}
        <section className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="magnetic-card p-8 group hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--gradient-brand)' }}
                  >
                    <solution.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {solution.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {solution.features.map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-foreground"
                        >
                          <Check className="w-3 h-3 text-accent" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Ready to maximize your revenue?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
              Join thousands of publishers who trust Kolorowey to power their monetization.
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

export default Publishers;
