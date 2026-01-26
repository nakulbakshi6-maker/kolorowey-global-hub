import { motion, useScroll, useTransform } from "framer-motion";
import { Server, Settings, Globe, Tv, Fingerprint, ArrowRight, Sparkles, Zap, Shield, Clock, Activity, Cpu, Database, Network, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRef, useState, useEffect } from "react";

const technologies = [
  {
    icon: Server,
    title: "Ad Server",
    subtitle: "Decision Engine",
    description: "Enterprise-grade ad serving infrastructure handling billions of requests with sub-10ms response times. Our AI-powered decision engine optimizes every impression in real-time.",
    specs: [
      { label: "Latency", value: "<10ms" },
      { label: "Uptime", value: "99.99%" },
      { label: "Capacity", value: "1M+ QPS" },
    ],
    features: ["Decision Engine", "Creative Management", "Trafficking", "Forecasting"],
    details: [
      "AI-powered real-time decisioning",
      "Multi-variant creative optimization",
      "Predictive inventory forecasting",
      "Global edge deployment",
    ],
    gradient: "from-accent to-pink-500",
  },
  {
    icon: Settings,
    title: "AdOps Engine",
    subtitle: "Automation Platform",
    description: "Automated ad operations platform that streamlines workflows, reduces errors, and scales your operations. Handle complex campaign management with ease.",
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
    icon: Globe,
    title: "CDN Infrastructure",
    subtitle: "Global Delivery Network",
    description: "Global content delivery network optimized for ad creatives. Fast, reliable delivery worldwide with intelligent edge caching and automatic optimization.",
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
    icon: Tv,
    title: "SSAI Architecture",
    subtitle: "Server-Side Ad Insertion",
    description: "Server-side ad insertion for seamless video experiences. Buffer-free, ad-block resistant delivery with sub-50ms stitching latency.",
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
    icon: Fingerprint,
    title: "Identity & Measurement",
    subtitle: "Privacy-First Attribution",
    description: "Privacy-first identity solutions and comprehensive measurement. Accurate attribution without third-party cookies using advanced contextual and cohort-based approaches.",
    specs: [
      { label: "Match Rate", value: "85%+" },
      { label: "Privacy", value: "Compliant" },
      { label: "Attribution", value: "Multi-touch" },
    ],
    features: ["Universal ID", "Contextual Signals", "Attribution Modeling", "Incrementality"],
    details: [
      "First-party identity graph",
      "Contextual targeting engine",
      "Multi-touch attribution",
      "Incrementality measurement",
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
      { threshold: 0.5 }
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

  return <span ref={ref}>{count}{suffix}</span>;
};

const Technology = () => {
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
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
          {/* Animated Grid Background */}
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--muted-foreground)) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
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
                <Sparkles className="w-3 h-3" />
                Technology
              </motion.span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
                Built for
                <br />
                <span className="gradient-text">Scale & Speed</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                Enterprise infrastructure powering the modern advertising ecosystem. 
                Engineered for performance, reliability, and global scale.
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
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button size="xl" className="rounded-full group">
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
                  <div className={`absolute inset-0 bg-gradient-to-r ${tech.gradient} opacity-5 blur-3xl rounded-3xl`} />
                  
                  <div className={`relative grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${tech.gradient}`}>
                          <tech.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold">{tech.title}</h3>
                          <p className="text-muted-foreground">{tech.subtitle}</p>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                        {tech.description}
                      </p>
                      
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
                    
                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="magnetic-card p-10">
                        <div className="grid grid-cols-3 gap-8">
                          {tech.specs.map((spec) => (
                            <div key={spec.label} className="text-center min-w-0">
                              <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold gradient-text mb-2 whitespace-nowrap">
                                {spec.value}
                              </div>
                              <div className="text-xs text-muted-foreground uppercase tracking-wider">
                                {spec.label}
                              </div>
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
              className="magnetic-card p-8 md:p-12 relative overflow-hidden"
            >
              <div className="aspect-[2/1] relative">
                {/* World Map SVG */}
                <svg
                  viewBox="0 0 1000 500"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Simplified world continents */}
                  <g className="fill-muted-foreground/20 stroke-muted-foreground/30" strokeWidth="0.5">
                    {/* North America */}
                    <path d="M150,80 Q180,70 220,75 L260,85 Q280,100 290,130 L280,160 Q260,180 240,190 L200,195 Q170,180 160,150 L140,120 Q135,95 150,80 Z" />
                    <path d="M100,100 Q120,90 140,95 L150,110 Q145,130 130,140 L110,135 Q95,120 100,100 Z" />
                    
                    {/* South America */}
                    <path d="M240,240 Q260,230 280,240 L300,280 Q310,320 300,360 L280,400 Q260,420 240,410 L220,370 Q210,320 220,280 Q225,250 240,240 Z" />
                    
                    {/* Europe */}
                    <path d="M450,80 Q480,70 520,75 L550,90 Q560,110 555,130 L530,145 Q500,150 470,145 L450,130 Q440,100 450,80 Z" />
                    
                    {/* Africa */}
                    <path d="M460,180 Q490,170 530,175 L560,200 Q580,250 570,310 L540,360 Q510,380 480,370 L450,330 Q430,280 440,230 Q445,200 460,180 Z" />
                    
                    {/* Asia */}
                    <path d="M560,60 Q620,50 700,55 L780,70 Q830,90 850,130 L860,180 Q850,220 820,240 L760,250 Q700,245 650,230 L600,200 Q560,160 555,120 Q550,80 560,60 Z" />
                    
                    {/* Southeast Asia & Indonesia */}
                    <path d="M720,250 Q750,245 780,255 L800,280 Q790,310 760,320 L730,315 Q710,290 720,250 Z" />
                    <path d="M760,330 L790,325 Q810,340 800,360 L770,365 Q750,350 760,330 Z" />
                    
                    {/* Australia */}
                    <path d="M800,350 Q840,340 880,350 L910,380 Q920,420 900,450 L860,460 Q820,455 800,430 L790,390 Q785,365 800,350 Z" />
                    
                    {/* Japan */}
                    <path d="M870,120 Q885,115 895,125 L900,150 Q895,165 880,170 L870,160 Q865,140 870,120 Z" />
                  </g>
                  
                  {/* PoP Location Dots - North America */}
                  {[
                    { x: 160, y: 100, size: 8 },
                    { x: 200, y: 120, size: 10 },
                    { x: 240, y: 140, size: 8 },
                    { x: 180, y: 150, size: 6 },
                    { x: 220, y: 170, size: 7 },
                  ].map((dot, i) => (
                    <motion.circle
                      key={`na-${i}`}
                      cx={dot.x}
                      cy={dot.y}
                      r={dot.size}
                      className="fill-accent"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
                    />
                  ))}
                  
                  {/* PoP Location Dots - Europe */}
                  {[
                    { x: 470, y: 95, size: 8 },
                    { x: 500, y: 110, size: 10 },
                    { x: 530, y: 100, size: 7 },
                    { x: 490, y: 130, size: 6 },
                    { x: 520, y: 125, size: 8 },
                    { x: 460, y: 115, size: 6 },
                  ].map((dot, i) => (
                    <motion.circle
                      key={`eu-${i}`}
                      cx={dot.x}
                      cy={dot.y}
                      r={dot.size}
                      className="fill-highlight"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{ repeat: Infinity, duration: 2, delay: 0.5 + i * 0.15 }}
                    />
                  ))}
                  
                  {/* PoP Location Dots - Asia Pacific */}
                  {[
                    { x: 700, y: 100, size: 10 },
                    { x: 750, y: 130, size: 8 },
                    { x: 800, y: 150, size: 9 },
                    { x: 880, y: 140, size: 7 },
                    { x: 760, y: 280, size: 8 },
                    { x: 850, y: 400, size: 9 },
                    { x: 820, y: 180, size: 6 },
                  ].map((dot, i) => (
                    <motion.circle
                      key={`ap-${i}`}
                      cx={dot.x}
                      cy={dot.y}
                      r={dot.size}
                      className="fill-accent"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{ repeat: Infinity, duration: 2, delay: 1 + i * 0.15 }}
                    />
                  ))}
                  
                  {/* PoP Location Dots - Other Regions */}
                  {[
                    { x: 260, y: 300, size: 7 },
                    { x: 280, y: 350, size: 6 },
                    { x: 500, y: 250, size: 8 },
                    { x: 520, y: 300, size: 7 },
                  ].map((dot, i) => (
                    <motion.circle
                      key={`other-${i}`}
                      cx={dot.x}
                      cy={dot.y}
                      r={dot.size}
                      className="fill-highlight"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{ repeat: Infinity, duration: 2, delay: 1.5 + i * 0.2 }}
                    />
                  ))}
                  
                  {/* Connection lines */}
                  <g className="stroke-accent/20" strokeWidth="1" strokeDasharray="4 4">
                    <line x1="200" y1="120" x2="500" y2="110" />
                    <line x1="500" y1="110" x2="700" y2="100" />
                    <line x1="700" y1="100" x2="850" y2="400" />
                    <line x1="200" y1="120" x2="260" y2="300" />
                    <line x1="500" y1="110" x2="500" y2="250" />
                  </g>
                </svg>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-8 text-center">
                {[
                  { value: "North America", count: "45 PoPs", color: "text-accent" },
                  { value: "Europe", count: "60 PoPs", color: "text-highlight" },
                  { value: "Asia Pacific", count: "70 PoPs", color: "text-accent" },
                  { value: "Rest of World", count: "25 PoPs", color: "text-highlight" },
                ].map((region) => (
                  <div key={region.value}>
                    <div className="font-bold text-lg text-foreground">{region.value}</div>
                    <div className={`text-sm font-semibold ${region.color}`}>{region.count}</div>
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
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                  Ready to scale with confidence?
                </h2>
                <p className="text-primary-foreground/70 mb-10 max-w-xl mx-auto text-lg">
                  Our technology handles the complexity so you can focus on growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="xl" variant="secondary" className="rounded-full group">
                    Talk to Engineering
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    size="xl" 
                    variant="outline" 
                    className="rounded-full border-white/30 text-white hover:bg-white/10 hover:text-white"
                    onClick={() => window.location.href = '/resources'}
                  >
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

export default Technology;
