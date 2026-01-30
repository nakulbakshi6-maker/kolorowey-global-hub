import { Linkedin, ArrowRight, MapPin, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const footerLinks = {
  Platform: [
    { label: "Overview", href: "/" },
    { label: "Technology", href: "/technology" },
    { label: "Environments", href: "/environment" },
  ],
  Solutions: [
    { label: "Publishers", href: "/publishers" },
    { label: "Advertisers", href: "/advertisers" },
  ],
};

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* CTA Banner Section */}
      <div className="relative py-20 overflow-hidden" style={{ background: 'var(--gradient-brand)' }}>
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-white/30"
            style={{
              left: `${5 + i * 8}%`,
              top: `${20 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Sparkles className="w-5 h-5 text-white" />
                </motion.div>
                <span className="text-white/70 text-sm font-medium uppercase tracking-wider">Get Started</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Ready to transform your
              </h3>
              <h3 className="text-3xl md:text-4xl font-bold text-white/80">
                advertising infrastructure?
              </h3>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-primary font-bold text-lg shadow-2xl hover:shadow-white/25 transition-all duration-300 group"
              >
                Contact Us
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div style={{ background: 'var(--gradient-navy)' }} className="text-white relative">
        {/* Decorative gradient orb */}
        <motion.div 
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: 'var(--gradient-brand)' }}
          animate={{ 
            scale: [1, 1.15, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        <div className="container mx-auto px-6 py-12 relative z-10">
          {/* Main Content Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
            {/* Tagline & Description */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.p 
                className="text-sm font-bold tracking-[0.15em] text-accent uppercase mb-3"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                AdTech Unfragmented
              </motion.p>
              
              <p className="text-white/50 text-sm leading-relaxed">
                Unifying the global advertising ecosystem with enterprise-grade infrastructure for the modern programmatic world.
              </p>
            </motion.div>

            {/* Navigation Columns */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + categoryIndex * 0.1 }}
              >
                <h4 className="font-bold text-white mb-4 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {category}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link, linkIndex) => (
                    <motion.li 
                      key={link.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 + linkIndex * 0.05 }}
                    >
                      <Link
                        to={link.href}
                        className="group inline-flex items-center text-sm text-white/40 hover:text-accent transition-all duration-300"
                      >
                        <motion.span 
                          className="relative"
                          whileHover={{ x: 4 }}
                        >
                          {link.label}
                          <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
                        </motion.span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Contact Column */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="font-bold text-white mb-4 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-highlight" />
                Contact
              </h4>
              
              <div className="space-y-3">
                <motion.div 
                  className="flex items-start gap-2.5 text-sm text-white/40 group cursor-pointer"
                  whileHover={{ x: 3 }}
                >
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span className="group-hover:text-white/60 transition-colors leading-relaxed">
                    World Trade Centre, Nauroji Nagar, Safdarjung Enclave, New Delhi, Delhi 110029
                  </span>
                </motion.div>
                
                <motion.a 
                  href="mailto:hello@kolorowey.com" 
                  className="flex items-center gap-2.5 text-sm text-white/40 hover:text-white/60 transition-colors group"
                  whileHover={{ x: 3 }}
                >
                  <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>hello@kolorowey.com</span>
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/company/koloroweymedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-white/40 hover:text-white/60 transition-colors group mt-1"
                  whileHover={{ x: 3 }}
                >
                  <Linkedin className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>LinkedIn</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="my-8">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          {/* Bottom Bar */}
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-sm text-white/30">
              © 2026 Kolorowey. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item, index) => (
                <motion.a 
                  key={item}
                  href="#" 
                  className="text-sm text-white/30 hover:text-accent transition-colors relative group"
                  whileHover={{ y: -1 }}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
