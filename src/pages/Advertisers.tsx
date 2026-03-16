import { motion, useScroll, useTransform } from "framer-motion";
import { Store, MousePointer, Users, Lock, Tv, Building2, ArrowRight, Check, Target, BarChart, Globe, Layers, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useRef, useState } from "react";

const solutions = [
  {
    icon: Store,
    title: "Ad Marketplace / Exchange",
    description: "Access premium inventory across the open web through our transparent, real-time bidding marketplace. Connect with quality publishers worldwide.",
    features: ["Real-Time Bidding", "Premium Inventory", "Transparent Pricing", "Brand Safety"],
    stats: { value: "10B+", label: "Daily Auctions" },
    details: [
      "Direct access to 50,000+ premium publishers",
      "Real-time bidding with sub-10ms response times",
      "Full transparency on pricing and placements",
      "Advanced fraud detection and brand safety",
    ],
    gradient: "from-highlight to-cyan-400",
  },
  {
    icon: MousePointer,
    title: "Self-Serve Platform",
    description: "Launch and manage campaigns independently with our intuitive interface. Powerful targeting, optimization, and reporting at your fingertips.",
    features: ["Easy Campaign Setup", "Advanced Targeting", "Real-time Reporting", "Budget Control"],
    stats: { value: "5min", label: "Campaign Launch" },
    details: [
      "Intuitive campaign builder with templates",
      "500+ targeting segments available",
      "Real-time performance dashboards",
      "Automated budget pacing and optimization",
    ],
    gradient: "from-accent to-pink-400",
  },
  {
    icon: Users,
    title: "Managed Campaigns",
    description: "Full-service campaign management by our expert team. From strategy to execution, we handle everything while you focus on results.",
    features: ["Dedicated Account Team", "Custom Strategy", "Performance Optimization", "Detailed Reporting"],
    stats: { value: "35%", label: "Avg. ROAS Lift" },
    details: [
      "Dedicated account manager and strategist",
      "Custom creative development support",
      "Continuous A/B testing and optimization",
      "Weekly performance reviews and insights",
    ],
    gradient: "from-violet-500 to-purple-400",
  },
  {
    icon: Lock,
    title: "PMP & Programmatic Guaranteed",
    description: "Private marketplace deals with premium publishers. Guaranteed inventory at negotiated rates with priority access to exclusive placements.",
    features: ["Exclusive Inventory", "Fixed Pricing", "Priority Access", "Custom Deals"],
    stats: { value: "500+", label: "PMP Deals Available" },
    details: [
      "Direct relationships with top publishers",
      "First-look at premium inventory",
      "Negotiated rates and guaranteed delivery",
      "Custom deal structures and terms",
    ],
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    icon: Tv,
    title: "CTV Advertising",
    description: "Reach cord-cutters on connected TV with premium streaming inventory. Household-level targeting and measurement for maximum impact.",
    features: ["Premium Streaming", "Household Targeting", "Cross-Device", "Viewability Guaranteed"],
    stats: { value: "150M+", label: "Monthly CTV Reach" },
    details: [
      "Access to all major streaming platforms",
      "Household and individual targeting",
      "Cross-device attribution and measurement",
      "Guaranteed viewable impressions",
    ],
    gradient: "from-orange-500 to-amber-400",
  },
  {
    icon: Building2,
    title: "DOOH Advertising",
    description: "Digital out-of-home campaigns at scale. Programmatic access to screens in prime locations with dynamic, context-aware creative.",
    features: ["Location Targeting", "Dynamic Creative", "Audience Data", "Real-time Activation"],
    stats: { value: "10K+", label: "DOOH Screens" },
    details: [
      "Billboards, transit, retail, and venues",
      "Location and audience-based targeting",
      "Weather and time-triggered creative",
      "Real-time campaign activation",
    ],
    gradient: "from-rose-500 to-red-400",
  },
];

const targetingOptions = [
  { icon: Target, title: "Audience", description: "Demographics, interests, behaviors" },
  { icon: Globe, title: "Geographic", description: "Country, city, zip, geofencing" },
  { icon: Layers, title: "Contextual", description: "Content categories, keywords" },
  { icon: BarChart, title: "Performance", description: "Retargeting, lookalikes, CRM" },
];

const Advertisers = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-highlight/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
                For Advertisers
              </motion.span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
                Reach Your Audience
                <br />
                <span className="gradient-text">Everywhere</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                Programmatic advertising solutions that deliver results. Access premium inventory, 
                advanced targeting, and real-time optimization across every channel and format.
              </p>
              
              {/* Hero Stats */}
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                {[
                  { value: "2.5B+", label: "Daily Reach" },
                  { value: "150+", label: "Countries" },
                  { value: "500+", label: "Targeting Segments" },
                  { value: "98%", label: "Brand Safety" },
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
                <Button size="xl" className="rounded-full group" onClick={() => window.location.href = '/contact'}>
                  Start Advertising
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
        </section>

        {/* Targeting Capabilities */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Advanced <span className="gradient-text">Targeting</span> Capabilities
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Reach the right audience at the right time with precision targeting
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {targetingOptions.map((option, index) => (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="magnetic-card p-8 text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-highlight/20 to-accent/20 group-hover:scale-110 transition-transform">
                    <option.icon className="w-8 h-8 text-highlight" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{option.title}</h3>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Interactive Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-highlight font-semibold text-sm uppercase tracking-wider">Advertising Solutions</span>
              <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
                Choose Your <span className="gradient-text">Channel</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From self-serve to fully managed, we have solutions for every advertiser
              </p>
            </motion.div>
            
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {solutions.map((solution, index) => (
                <button
                  key={solution.title}
                  onClick={() => setActiveTab(index)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeTab === index
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary hover:bg-secondary/80 text-foreground'
                  }`}
                >
                  {solution.title.split(' ')[0]}
                </button>
              ))}
            </div>
            
            {/* Active Solution Display */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${solutions[activeTab].gradient} mb-6`}>
                  {(() => {
                    const IconComponent = solutions[activeTab].icon;
                    return <IconComponent className="w-8 h-8 text-white" />;
                  })()}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{solutions[activeTab].title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {solutions[activeTab].description}
                </p>
                
                <div className="space-y-4 mb-8">
                  {solutions[activeTab].details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-highlight mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {solutions[activeTab].features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-secondary text-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <Button 
                  className="rounded-full group"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${solutions[activeTab].gradient} opacity-20 blur-3xl rounded-3xl`} />
                <div className="relative magnetic-card p-16 text-center">
                  <div className="text-7xl md:text-8xl font-extrabold gradient-text mb-4">
                    {solutions[activeTab].stats.value}
                  </div>
                  <div className="text-xl text-muted-foreground font-medium">
                    {solutions[activeTab].stats.label}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Launch in <span className="gradient-text">3 Simple Steps</span>
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Create Account", description: "Sign up and get access to our platform in minutes. No setup fees, no minimums." },
                { step: "02", title: "Build Campaign", description: "Use our intuitive campaign builder to define audience, budget, and creative." },
                { step: "03", title: "Go Live", description: "Launch your campaign and start reaching your audience across all channels." },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="text-8xl font-extrabold absolute -top-6 left-0 gradient-text opacity-80">
                    {item.step}
                  </div>
                  <div className="relative pt-16 pl-4">
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
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
              <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <Zap className="w-12 h-12 text-white/80 mx-auto mb-6" />
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                  Ready to reach your audience?
                </h2>
                <p className="text-primary-foreground/70 mb-10 max-w-xl mx-auto text-lg">
                  Launch your first campaign today and see the Kolorowey difference.
                </p>
                <Button 
                  size="xl" 
                  variant="secondary" 
                  className="rounded-full group"
                  onClick={() => window.location.href = '/contact'}
                >
                  Book a Demo
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

export default Advertisers;
