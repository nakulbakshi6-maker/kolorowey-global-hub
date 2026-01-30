import { Linkedin, ArrowRight, MapPin, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import koloroweyLogo from "@/assets/kolorowey-logo.png";

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

        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Column */}
            <motion.div 
              className="lg:col-span-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/" className="inline-block mb-6 group">
                <motion.img 
                  src={koloroweyLogo} 
                  alt="Kolorowey" 
                  className="h-16 w-auto brightness-0 invert"
                  whileHover={{ scale: 1.02, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                />
              </Link>
              
              <motion.p 
                className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-4"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                AdTech Unfragmented
              </motion.p>
              
              <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                Unifying the global advertising ecosystem with enterprise-grade infrastructure for the modern programmatic world.
              </p>
            </motion.div>

            {/* Navigation Columns */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-8">
              {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                <motion.div 
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + categoryIndex * 0.1 }}
                >
                  <h4 className="font-bold text-white mb-5 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {category}
                  </h4>
                  <ul className="space-y-3">
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
                          className="group inline-flex items-center gap-2 text-sm text-white/40 hover:text-accent transition-all duration-300"
                        >
                          <motion.span 
                            className="relative"
                            whileHover={{ x: 5 }}
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
            </div>

            {/* Contact Column */}
            <motion.div 
              className="lg:col-span-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="font-bold text-white mb-5 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-highlight" />
                Contact
              </h4>
              
              <div className="space-y-4 mb-6">
                <motion.div 
                  className="flex items-start gap-3 text-sm text-white/50 group cursor-pointer"
                  whileHover={{ x: 3 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <MapPin className="w-4 h-4 text-accent" />
                  </div>
                  <span className="pt-1.5 group-hover:text-white/70 transition-colors">
                    World Trade Centre, Nauroji Nagar, Safdarjung Enclave, New Delhi, Delhi 110029
                  </span>
                </motion.div>
                
                <motion.a 
                  href="mailto:hello@kolorowey.com" 
                  className="flex items-center gap-3 text-sm text-white/50 hover:text-white/70 transition-colors group"
                  whileHover={{ x: 3 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <span>hello@kolorowey.com</span>
                </motion.a>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-3">
                <span className="text-xs text-white/30 uppercase tracking-wider">Follow us</span>
                <motion.a
                  href="https://www.linkedin.com/company/koloroweymedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/50 hover:text-white transition-all duration-300 relative overflow-hidden group border border-white/10 hover:border-accent/50"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <Linkedin className="w-5 h-5 relative z-10" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Divider with gradient */}
          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
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
