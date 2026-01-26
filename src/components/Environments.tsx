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
    <section className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-4">
            Omnichannel Reach
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Supported Environments
          </h2>
          <p className="text-lg text-primary-foreground/70">
            Reach audiences wherever they are with our comprehensive multi-environment support.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {environments.map((env, index) => (
            <motion.div
              key={env.name}
              className="group p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-accent/30 transition-all text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                <env.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-1">{env.name}</h3>
              <p className="text-xs text-primary-foreground/50">{env.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Environments;
