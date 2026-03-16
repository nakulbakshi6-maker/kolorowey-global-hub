import { motion, useScroll, useTransform } from "framer-motion";
import {
  Server,
  Settings,
  Globe,
  Tv,
  ArrowRight,
  Zap,
  Shield,
  Clock,
  Activity,
  Cpu,
  Database,
  Network,
  Lock,
  Play,
  Smartphone,
  FileText,
  Code2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRef, useState, useEffect } from "react";

const technologies = [
  {
    icon: Server,
    title: "Ad Server",
    subtitle: "Full-Stack Serving Infrastructure",
    description:
      "A complete, enterprise-grade ad server built to serve every publisher type across every channel. With Native, Prebid, and OpenRTB (oRTB) integration, it offers advanced mediation capabilities including waterfall, in-app bidding, and hybrid auction models, along with support for all major demand sources.",
    specs: [
      { label: "Latency", value: "<10ms" },
      { label: "Channels", value: "8+" },
      { label: "Capacity", value: "1M+ QPS" },
    ],
    features: ["Prebid & oRTB", "Header Bidding", "Mediation Engine", "Yield Optimization"],
    details: [
      "Full Prebid.js & Server-Side Prebid support with oRTB 2.6 compliance",
      "Omnichannel serving: Web, App, CTV, OTT, DOOH, Gaming, Audio & more",
      "Advanced mediation layer with waterfall, in-app bidding & hybrid auction models",
      "Supports all publisher types — from indie blogs to Tier 1 broadcasters",
    ],
    gradient: "from-accent to-pink-500",
  },
  {
    icon: Play,
    title: "Video Player Technology",
    subtitle: "Enterprise Video Playback Engine",
    description:
      "A high-performance, monetization-ready video player designed for seamless content delivery with built-in ad orchestration across every screen. Adaptive streaming, multi-format support, and AI-driven content recommendations out of the box.",
    specs: [
      { label: "Start Time", value: "<200ms" },
      { label: "Ad Formats", value: "VAST/VPAID" },
      { label: "Codecs", value: "All Major" },
    ],
    features: ["Adaptive Bitrate", "Instream & Outstream", "Floating Player", "Playlist Engine"],
    details: [
      "Supports HLS, DASH, MP4 with adaptive bitrate streaming",
      "Built-in VAST, VPAID & OMID compliant ad playback",
      "Customizable floating, sticky & in-content player formats",
      "AI-driven content recommendation & playlist curation",
    ],
    gradient: "from-rose-500 to-red-400",
  },
  {
    icon: Code2,
    title: "Lightweight SDK",
    subtitle: "Modern Integration Toolkit",
    description:
      "A blazing-fast, modular SDK designed for effortless integration across Web, iOS, Android, and CTV platforms. Minimal footprint, maximum capability — built for developers who demand performance without compromise.",
    specs: [
      { label: "Size", value: "<30KB" },
      { label: "Load Time", value: "<50ms" },
      { label: "Platforms", value: "5+" },
    ],
    features: ["Async Loading", "Tree Shaking", "Auto-Config", "Event Hooks"],
    details: [
      "Modular architecture — import only what you need with tree-shaking support",
      "Cross-platform: Web, iOS, Android, CTV & React Native",
      "Zero-config auto-detection of environment, ad slots & viewability",
      "Rich event hooks, callbacks & real-time analytics pipeline",
    ],
    gradient: "from-sky-500 to-blue-400",
  },
  {
    icon: Settings,
    title: "AdOps Engine",
    subtitle: "Automation Platform",
    description:
      "Automated ad operations platform that streamlines workflows, reduces errors, and scales your operations. Handle complex campaign management with ease.",
    specs: [
      { label: "Automation", value: "90%" },
      { label: "Time Saved", value: "60%" },
      { label: "Error Rate", value: "<0.1%" },
    ],
    features: ["Campaign Automation", "Yield Rules", "Alerts & Monitoring", "Bulk Operations"],
    details: [
      "Rules-based campaign automation",
      "Intelligent yield optimization",
      "Real-time alerting and monitoring",
      "Bulk trafficking and updates",
    ],
    gradient: "from-highlight to-cyan-400",
  },
  {
    icon: Tv,
    title: "SSAI Architecture",
    subtitle: "Server-Side Ad Insertion",
    description:
      "Server-side ad insertion for seamless video experiences. Buffer-free, ad-block resistant delivery with sub-50ms stitching latency.",
    specs: [
      { label: "Stitching", value: "<50ms" },
      { label: "Formats", value: "All Major" },
      { label: "Scale", value: "Unlimited" },
    ],
    features: ["Dynamic Stitching", "Session Management", "Manifest Manipulation", "Analytics"],
    details: [
      "Dynamic ad stitching at the edge",
      "Stateful session management",
      "HLS and DASH manifest manipulation",
      "Frame-accurate analytics",
    ],
    gradient: "from-violet-500 to-purple-400",
  },
  {
    icon: Globe,
    title: "CDN Infrastructure",
    subtitle: "Global Delivery Network",
    description:
      "Global content delivery network optimized for ad creatives. Fast, reliable delivery worldwide with intelligent edge caching and automatic optimization.",
    specs: [
      { label: "PoPs", value: "200+" },
      { label: "Countries", value: "150+" },
      { label: "Cache Hit", value: "99%" },
    ],
    features: ["Edge Caching", "Auto Optimization", "SSL/TLS", "Real-time Purge"],
    details: [
      "200+ global points of presence",
      "Automatic creative optimization",
      "HTTP/3 and QUIC support",
      "Instant cache invalidation",
    ],
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    icon: FileText,
    title: "Content CMS",
    subtitle: "Publisher Content Platform",
    description:
      "A flexible, headless content management system built for modern publishers — from news outlets and bloggers to video-first creators and OTT platforms. Manage, distribute, and monetize content at scale with built-in SEO and ad integration.",
    specs: [
      { label: "API-First", value: "RESTful" },
      { label: "Formats", value: "All Types" },
      { label: "Workflow", value: "Automated" },
    ],
    features: ["Headless CMS", "Multi-format", "SEO Engine", "Content Syndication"],
    details: [
      "Headless, API-first architecture for any frontend or platform",
      "Supports articles, video, audio, galleries & interactive content",
      "Built-in SEO optimization, schema markup & AMP support",
      "Automated content syndication, scheduling & multi-site management",
    ],
    gradient: "from-orange-500 to-amber-400",
  },
];

const architectureFeatures = [
  { icon: Shield, title: "Enterprise Security", description: "SOC 2 Type II, GDPR, CCPA compliant" },
  { icon: Clock, title: "99.99% Uptime", description: "Redundant, geo-distributed architecture" },
  { icon: Activity, title: "Real-time Monitoring", description: "24/7 NOC with automated healing" },
  { icon: Cpu, title: "Edge Computing", description: "Processing at 200+ global PoPs" },
  { icon: Database, title: "Data Processing", description: "Petabyte-scale data pipeline" },
  { icon: Lock, title: "Privacy by Design", description: "Built-in consent management" },
];

const AnimatedCounter = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const Technology = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
          {/* Animated Grid Background */}
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--muted-foreground)) 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          {/* Animated Orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
              }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute top-1/4 left-1/3 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, -80, 0],
                y: [0, 80, 0],
              }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-highlight/10 rounded-full blur-3xl"
            />
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
                Technology
              </motion.span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
                Built for
                <br />
                <span className="gradient-text">Scale & Speed</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                Enterprise infrastructure powering the modern advertising ecosystem. Engineered for performance,
                reliability, and global scale.
              </p>

              {/* Hero Stats */}
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                {[
                  { value: 1, suffix: "M+", label: "Requests/Second" },
                  { value: 10, suffix: "ms", label: "Avg Latency" },
                  { value: 99.99, suffix: "%", label: "Uptime" },
                  { value: 200, suffix: "+", label: "Global PoPs" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-extrabold gradient-text">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                <Button size="xl" className="rounded-full group" onClick={() => (window.location.href = "/contact")}>
                  Explore Technology
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

        {/* Architecture Overview */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Enterprise-Grade <span className="gradient-text">Architecture</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Built from the ground up for reliability, security, and performance at scale
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {architectureFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="magnetic-card p-6 flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-accent/20 to-highlight/20 group-hover:scale-110 transition-transform flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Deep Dive */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Core Technology</span>
              <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
                The <span className="gradient-text">Tech Stack</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Cutting-edge technology components that power the Kolorowey platform
              </p>
            </motion.div>

            <div className="space-y-32">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  {/* Background accent */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${tech.gradient} opacity-5 blur-3xl rounded-3xl`}
                  />

                  <div
                    className={`relative grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                  >
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${tech.gradient}`}
                        >
                          <tech.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold">{tech.title}</h3>
                          <p className="text-muted-foreground">{tech.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-lg leading-relaxed mb-8">{tech.description}</p>

                      <div className="space-y-4 mb-8">
                        {tech.details.map((detail, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <Zap className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {tech.features.map((feature) => (
                          <span
                            key={feature}
                            className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-full bg-secondary text-foreground"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                      <div className="magnetic-card p-6 lg:p-10">
                        <div className="flex flex-col sm:flex-row sm:justify-around gap-6">
                          {tech.specs.map((spec) => (
                            <div key={spec.label} className="text-center flex-1">
                              <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-extrabold gradient-text mb-2 leading-tight">
                                {spec.value}
                              </div>
                              <div className="text-xs text-muted-foreground uppercase tracking-wider">{spec.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Infrastructure Map Placeholder */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Global <span className="gradient-text">Infrastructure</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Deployed across 200+ points of presence for low-latency, high-availability service
              </p>
            </motion.div>

            {/* World Map with PoP Locations */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="magnetic-card p-6 md:p-10 relative overflow-hidden"
            >
              <Suspense
                fallback={
                  <div className="aspect-[2/1] flex items-center justify-center bg-secondary/50 rounded-xl">
                    <div className="animate-pulse text-muted-foreground">Loading map...</div>
                  </div>
                }
              >
                <WorldMap />
              </Suspense>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-8 text-center relative">
                {[
                  { value: "North America", color: "text-[hsl(325_80%_55%)]" },
                  { value: "Europe", color: "text-[hsl(188_80%_50%)]" },
                  { value: "Asia Pacific", color: "text-[hsl(142_70%_45%)]" },
                  { value: "Rest of World", color: "text-[hsl(38_90%_55%)]" },
                ].map((region) => (
                  <div key={region.value}>
                    <div className={`font-bold text-lg ${region.color}`}>{region.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
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
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <Network className="w-12 h-12 text-white/80 mx-auto mb-6" />
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Ready to scale with confidence?</h2>
                <p className="text-primary-foreground/70 mb-10 max-w-xl mx-auto text-lg">
                  Our technology handles the complexity so you can focus on growth.
                </p>
                <Button
                  size="xl"
                  variant="secondary"
                  className="rounded-full group"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Technology;
