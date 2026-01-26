import { motion } from "framer-motion";
import { Monitor, Smartphone, Tablet, Tv, MapPin, Gamepad2, Headphones } from "lucide-react";

const environments = [
  { icon: Monitor, name: "Web", description: "Desktop & laptop browsers" },
  { icon: Smartphone, name: "Mobile Web", description: "Mobile browser inventory" },
  { icon: Tablet, name: "In-App", description: "iOS & Android applications" },
  { icon: Tv, name: "CTV", description: "Connected TV & OTT" },
  { icon: MapPin, name: "DOOH", description: "Digital out-of-home" },
  { icon: Gamepad2, name: "In-Game", description: "Gaming environments" },
  { icon: Headphones, name: "Audio", description: "Podcasts & streaming" },
];

const Environments = () => {
  return (
    <section className="py-24 md:py-32 section-darker relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, hsl(222 47% 6%) 0%, hsl(222 47% 10%) 50%, hsl(222 47% 6%) 100%)' }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="premium-badge mb-6 inline-block">
            Omnichannel Reach
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Supported <span className="gradient-text">Environments</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Reach audiences wherever they are with our comprehensive multi-environment support.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {environments.map((env, index) => (
            <motion.div
              key={env.name}
              className="glass-card p-6 text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <env.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">{env.name}</h3>
              <p className="text-xs text-muted-foreground">{env.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Environments;