import { motion } from "framer-motion";
import { Store, MousePointer, Users, Lock, Tv, Building2, ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const solutions = [
  {
    icon: Store,
    title: "Ad Marketplace / Exchange",
    description: "Access premium inventory across the open web. Real-time bidding with transparent pricing and full control.",
    features: ["Real-Time Bidding", "Premium Inventory", "Transparent Pricing", "Brand Safety"],
  },
  {
    icon: MousePointer,
    title: "Self-Serve Platform",
    description: "Launch and manage campaigns independently. Intuitive interface with powerful targeting and optimization tools.",
    features: ["Easy Campaign Setup", "Advanced Targeting", "Real-time Reporting", "Budget Control"],
  },
  {
    icon: Users,
    title: "Managed Campaigns",
    description: "Full-service campaign management by our expert team. Strategy, execution, and optimization included.",
    features: ["Dedicated Account Team", "Custom Strategy", "Performance Optimization", "Detailed Reporting"],
  },
  {
    icon: Lock,
    title: "PMP & Programmatic Guaranteed",
    description: "Private marketplace deals with premium publishers. Guaranteed inventory at negotiated rates.",
    features: ["Exclusive Inventory", "Fixed Pricing", "Priority Access", "Custom Deals"],
  },
  {
    icon: Tv,
    title: "CTV Advertising",
    description: "Reach cord-cutters on connected TV. Premium streaming inventory with household-level targeting.",
    features: ["Premium Streaming", "Household Targeting", "Cross-Device", "Viewability Guaranteed"],
  },
  {
    icon: Building2,
    title: "DOOH Advertising",
    description: "Digital out-of-home campaigns at scale. Programmatic access to screens in prime locations.",
    features: ["Location Targeting", "Dynamic Creative", "Audience Data", "Real-time Activation"],
  },
];

const Advertisers = () => {
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
              For Advertisers
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Reach Your Audience
              <br />
              <span className="gradient-text">Everywhere</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Programmatic advertising solutions that deliver results. Access premium inventory, 
              advanced targeting, and real-time optimization across all channels.
            </p>
            <Button size="xl" className="rounded-full group">
              Start Advertising
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
                    style={{ background: 'var(--gradient-cyan)' }}
                  >
                    <solution.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-highlight transition-colors">
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
                          <Check className="w-3 h-3 text-highlight" />
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
              Ready to reach your audience?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
              Launch your first campaign today and see the Kolorowey difference.
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

export default Advertisers;
