import { motion, useScroll, useTransform } from "framer-motion";
import { Server, Play, Tv, Video, MonitorPlay, Building2, Smartphone, Globe, ArrowRight, Check, Sparkles, Zap, TrendingUp, Shield, Clock, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRef } from "react";

const solutions = [
  {
    icon: Server,
    title: "SSP (Supply-Side Platform)",
    description: "Maximize revenue with our advanced supply-side platform. Connect to premium demand partners and optimize yield in real-time with AI-powered decisioning.",
    features: ["Header Bidding", "Unified Auctions", "Floor Price Optimization", "Real-time Analytics"],
    stats: { value: "40%", label: "Revenue Lift" },
    gradient: "from-accent to-pink-500",
  },
  {
    icon: Play,
    title: "Video Ad Player",
    description: "Enterprise-grade video player with seamless ad integration. Support for VAST, VPAID, and all major video formats with sub-second load times.",
    features: ["VAST/VPAID Support", "Adaptive Streaming", "Cross-Platform", "Low Latency"],
    stats: { value: "<100ms", label: "Load Time" },
    gradient: "from-highlight to-cyan-400",
  },
  {
    icon: Tv,
    title: "SSAI & CSAI",
    description: "Server-side and client-side ad insertion for flawless viewing experiences. Buffer-free, ad-block resistant delivery across all devices.",
    features: ["Buffer-Free Ads", "Ad-Block Resistant", "Dynamic Ad Insertion", "Session Management"],
    stats: { value: "99.9%", label: "Delivery Rate" },
    gradient: "from-violet-500 to-purple-400",
  },
  {
    icon: Video,
    title: "Video CMS & VOD Platform",
    description: "Complete video content management with monetization built-in. Upload, transcode, and monetize your video library with enterprise-grade security.",
    features: ["Auto Transcoding", "CDN Distribution", "Metadata Management", "Analytics Dashboard"],
    stats: { value: "4K+", label: "Resolution Support" },
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    icon: MonitorPlay,
    title: "CTV Monetization",
    description: "Unlock premium CTV inventory with advanced targeting and measurement capabilities. Reach cord-cutters in their living rooms.",
    features: ["Household Targeting", "Frequency Capping", "Brand Safety", "Attribution"],
    stats: { value: "85%", label: "Completion Rate" },
    gradient: "from-orange-500 to-amber-400",
  },
  {
    icon: Building2,
    title: "DOOH Monetization",
    description: "Digital out-of-home advertising solutions. Programmatic access to screens in high-traffic locations with real-time creative optimization.",
    features: ["Location Targeting", "Dayparting", "Weather Triggers", "Audience Measurement"],
    stats: { value: "10K+", label: "Screen Network" },
    gradient: "from-rose-500 to-red-400",
  },
  {
    icon: Smartphone,
    title: "In-App Monetization",
    description: "Maximize mobile app revenue with native, rewarded, and interstitial ad formats optimized for engagement and user experience.",
    features: ["Rewarded Ads", "Native Formats", "Mediation", "User Segmentation"],
    stats: { value: "3x", label: "eCPM Increase" },
    gradient: "from-indigo-500 to-blue-400",
  },
  {
    icon: Globe,
    title: "Web & AMP Monetization",
    description: "High-performance ad delivery for web and AMP pages. Fast loading, high viewability, and maximum revenue without compromising UX.",
    features: ["Lazy Loading", "AMP Compatible", "Core Web Vitals", "Viewability Optimization"],
    stats: { value: "95%+", label: "Viewability" },
    gradient: "from-fuchsia-500 to-pink-400",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Higher Revenue",
    description: "Our AI-powered yield optimization consistently delivers 30-50% higher eCPMs than industry alternatives.",
  },
  {
    icon: Shield,
    title: "Brand Safe",
    description: "Enterprise-grade brand safety with real-time content scanning and blocking of malicious creatives.",
  },
  {
    icon: Clock,
    title: "Fast Integration",
    description: "Go live in days, not months. Our lightweight SDK and tag-based solutions make integration seamless.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Granular reporting with real-time dashboards. Track every impression, click, and dollar.",
  },
];

const Publishers = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section - Full Width */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-highlight/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
                For Publishers
              </motion.span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
                Maximize Your
                <br />
                <span className="gradient-text">Ad Revenue</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                Complete monetization solutions for publishers. From SSP to video players, 
                we provide everything you need to maximize yield across all channels and formats.
              </p>
              
              {/* Hero Stats */}
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                {[
                  { value: "50B+", label: "Daily Impressions" },
                  { value: "180+", label: "Demand Partners" },
                  { value: "99.9%", label: "Fill Rate" },
                  { value: "<10ms", label: "Latency" },
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
                  Get Started
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

        {/* Benefits Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Why Publishers Choose <span className="gradient-text">Kolorowey</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join thousands of publishers who trust us to power their monetization stack
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-8 magnetic-card group"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-accent/20 to-highlight/20 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section - Alternating Layout */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
              <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
                Complete Monetization <span className="gradient-text">Stack</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need to monetize your content across every platform and format
              </p>
            </motion.div>
            
            <div className="space-y-24">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${solution.gradient} mb-6`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{solution.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {solution.description}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-8">
                      {solution.features.map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-secondary text-foreground"
                        >
                          <Check className="w-4 h-4 text-accent" />
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Button variant="outline" className="rounded-full group">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-20 blur-3xl rounded-3xl`} />
                      <div className="relative magnetic-card p-12 text-center">
                        <div className="text-6xl md:text-7xl font-extrabold gradient-text mb-2">
                          {solution.stats.value}
                        </div>
                        <div className="text-lg text-muted-foreground font-medium">
                          {solution.stats.label}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Partners */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Connected to <span className="gradient-text">180+ Demand Partners</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Maximum competition for every impression through our premium partner network
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="h-20 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground font-medium"
                >
                  Partner {i + 1}
                </motion.div>
              ))}
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
                <Zap className="w-12 h-12 text-white/80 mx-auto mb-6" />
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                  Ready to maximize your revenue?
                </h2>
                <p className="text-primary-foreground/70 mb-10 max-w-xl mx-auto text-lg">
                  Join thousands of publishers who trust Kolorowey to power their monetization stack.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="xl" variant="secondary" className="rounded-full group">
                    Book a Demo
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="xl" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10">
                    View Documentation
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

export default Publishers;
