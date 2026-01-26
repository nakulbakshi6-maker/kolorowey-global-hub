import { ArrowRight, Building2, Megaphone, Users, Check, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const solutions = [
  {
    id: "publishers",
    icon: Building2,
    title: "Publishers",
    shortDesc: "Maximize your ad revenue",
    description: "Maximize yield with header bidding, unified auctions, and premium demand partnerships that work seamlessly.",
    features: ["Header Bidding", "Yield Optimization", "Floor Management", "Demand Partners", "Real-time Analytics"],
    stats: { value: "45%", label: "Average revenue lift" },
    gradient: "from-accent to-pink-400",
    metrics: [
      { value: "50B+", label: "Daily impressions" },
      { value: "180+", label: "Demand partners" },
      { value: "200+", label: "SSP integrations" },
      { value: "99.9%", label: "Fill rate" },
    ],
  },
  {
    id: "advertisers",
    icon: Megaphone,
    title: "Advertisers",
    shortDesc: "Reach the right audience",
    description: "Reach your audience across premium inventory with advanced targeting, brand safety, and real-time optimization.",
    features: ["Audience Targeting", "Brand Safety", "Cross-Device", "Real-Time Reporting", "AI Optimization"],
    stats: { value: "3.2x", label: "ROAS improvement" },
    gradient: "from-highlight to-cyan-400",
    metrics: [
      { value: "2.5B+", label: "Daily reach" },
      { value: "150+", label: "Countries" },
      { value: "500+", label: "Targeting segments" },
      { value: "98%", label: "Brand safety score" },
    ],
  },
  {
    id: "agencies",
    icon: Users,
    title: "Agencies",
    shortDesc: "Scale with ease",
    description: "Manage campaigns at scale with white-label solutions, unified reporting dashboards, and full API access.",
    features: ["Campaign Management", "White-Label", "Custom Reporting", "API Access", "Multi-Client Support"],
    stats: { value: "60%", label: "Time saved on operations" },
    gradient: "from-violet-500 to-accent",
    metrics: [
      { value: "1000+", label: "Clients managed" },
      { value: "50+", label: "White-label partners" },
      { value: "100%", label: "API coverage" },
      { value: "24/7", label: "Dedicated support" },
    ],
  },
];

const Solutions = () => {
  const [activeTab, setActiveTab] = useState("publishers");
  const activeSolution = solutions.find(s => s.id === activeTab)!;

  return (
    <section id="solutions" className="relative py-32 bg-background overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-1/4 -right-40 w-[500px] h-[500px] rounded-full opacity-10"
        style={{ background: 'var(--gradient-brand)' }}
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full opacity-10"
        style={{ background: 'var(--gradient-cyan)' }}
        animate={{ 
          scale: [1.2, 1, 1.2],
          y: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header with floating animation */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.span 
            className="outline-badge mb-6 inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Sparkles className="w-3 h-3" />
            Solutions
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Tailored for every
            <br />
            <span className="gradient-text">partner</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're a publisher, advertiser, or agency, we have the tools you need to succeed.
          </p>
        </motion.div>

        {/* Interactive Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {solutions.map((solution) => (
            <motion.button
              key={solution.id}
              onClick={() => setActiveTab(solution.id)}
              className={`relative px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeTab === solution.id 
                  ? 'text-white' 
                  : 'text-muted-foreground hover:text-foreground bg-secondary hover:bg-secondary/80'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {activeTab === solution.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full"
                  style={{ background: 'var(--gradient-brand)' }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <solution.icon className="w-4 h-4" />
                For {solution.title}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Main Content Card with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
              {/* Left - Features Card */}
              <motion.div 
                className="magnetic-card p-8 md:p-10 flex flex-col"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${activeSolution.gradient}`}
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <activeSolution.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold">For {activeSolution.title}</h3>
                    <p className="text-muted-foreground text-sm">{activeSolution.shortDesc}</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                  {activeSolution.description}
                </p>

                {/* Features List with stagger animation */}
                <div className="space-y-3 mb-8">
                  {activeSolution.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.08 }}
                      className="flex items-center gap-3 group"
                    >
                      <div 
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: 'var(--gradient-brand)' }}
                      >
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm font-medium group-hover:text-accent transition-colors">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <motion.button 
                  className="inline-flex items-center gap-2 text-accent font-semibold group"
                  whileHover={{ x: 5 }}
                >
                  Learn more about {activeSolution.title.toLowerCase()} solutions
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>

              {/* Right - Stats & Info Card */}
              <motion.div 
                className="gradient-card p-8 md:p-10 flex flex-col justify-between"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative z-10">
                  <p className="text-primary-foreground/50 text-sm font-bold uppercase tracking-widest mb-4">
                    Why Kolorowey for {activeSolution.title}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
                    One platform,
                    <br />
                    infinite possibilities
                  </h3>
                  <p className="text-primary-foreground/70 leading-relaxed mb-10">
                    We've built the infrastructure that powers the modern advertising ecosystem. 
                    From real-time bidding to cross-platform attribution, everything you need is here.
                  </p>
                </div>

                {/* Big Stat with counter animation */}
                <motion.div 
                  className="relative z-10 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <motion.div 
                    className="text-5xl md:text-6xl font-extrabold text-white mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {activeSolution.stats.value}
                  </motion.div>
                  <p className="text-primary-foreground/60">{activeSolution.stats.label}</p>
                </motion.div>

                {/* Key metrics grid - Dynamic per tab */}
                <div className="relative z-10 grid grid-cols-2 gap-4 mt-6">
                  {activeSolution.metrics.map((metric, index) => (
                    <motion.div 
                      key={metric.label}
                      className="border-l-2 border-primary-foreground/20 pl-4 group cursor-pointer"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.08 }}
                      whileHover={{ x: 5, borderColor: 'hsl(320 85% 55%)' }}
                    >
                      <div className="text-xl font-bold mb-0.5 text-white group-hover:text-accent transition-colors">
                        {metric.value}
                      </div>
                      <div className="text-xs text-primary-foreground/50">{metric.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Solutions;
