import { Linkedin, ArrowRight, MapPin, Mail, Phone } from "lucide-react";
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
    <footer style={{ background: 'var(--gradient-navy)' }} className="text-white relative overflow-hidden">
      {/* Subtle animated gradient */}
      <motion.div 
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
        style={{ background: 'var(--gradient-brand)' }}
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Footer - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* Left Side - Brand & Contact */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.a 
              href="/" 
              className="inline-block mb-6 group"
              whileHover={{ scale: 1.02 }}
            >
              <motion.img 
                src={koloroweyLogo} 
                alt="Kolorowey" 
                className="h-20 w-auto brightness-0 invert"
                whileHover={{ rotate: 2 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
            </motion.a>
            
            <motion.p 
              className="text-xs font-bold tracking-widest text-white/40 uppercase mb-4"
              animate={{ opacity: [0.4, 0.6, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              AdTech Unfragmented
            </motion.p>
            
            <p className="text-white/50 text-sm mb-8 max-w-sm leading-relaxed">
              Unifying the global advertising ecosystem with enterprise-grade infrastructure for the modern programmatic world.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <motion.div 
                className="flex items-start gap-3 text-sm text-white/50"
                whileHover={{ x: 3, color: 'hsl(325 80% 55%)' }}
              >
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>World Trade Centre, Nauroji Nagar, Safdarjung Enclave, New Delhi, Delhi 110029</span>
              </motion.div>
              <motion.a 
                href="mailto:hello@kolorowey.com" 
                className="flex items-center gap-3 text-sm text-white/50 hover:text-accent transition-colors"
                whileHover={{ x: 3 }}
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                hello@kolorowey.com
              </motion.a>
            </div>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/company/koloroweymedia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="absolute inset-0 bg-accent"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <Linkedin className="w-5 h-5 relative z-10" />
            </motion.a>
          </motion.div>

          {/* Right Side - Navigation & CTA */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {/* Navigation Links */}
              {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                <motion.div 
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + categoryIndex * 0.1 }}
                >
                  <h4 className="font-bold text-white mb-5 text-sm">
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
                          className="group inline-flex items-center gap-1 text-sm text-white/40 hover:text-accent transition-colors"
                        >
                          <motion.span whileHover={{ x: 5 }}>
                            {link.label}
                          </motion.span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}

              {/* CTA Card */}
              <motion.div
                className="sm:col-span-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h4 className="font-bold text-white mb-5 text-sm">
                  Get Started
                </h4>
                <p className="text-white/40 text-sm mb-4">
                  Ready to transform your advertising?
                </p>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 group"
                    style={{ background: 'var(--gradient-brand)' }}
                  >
                    Contact Us
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm text-white/30">
            © 2026 Kolorowey. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            {["Privacy", "Terms", "Cookies"].map((item, index) => (
              <motion.a 
                key={item}
                href="#" 
                className="text-sm text-white/30 hover:text-accent transition-colors"
                whileHover={{ y: -2, scale: 1.05 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
