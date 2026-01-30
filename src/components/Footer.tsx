import { Linkedin, ArrowRight } from "lucide-react";
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
    <footer style={{ background: 'var(--gradient-navy)' }} className="text-white relative overflow-hidden">
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Gradient accent */}
      <div className="h-1 w-full" style={{ background: 'var(--gradient-brand)' }} />

      <div className="container mx-auto px-6 py-14 relative z-10">
        {/* Top Row - CTA */}
        <motion.div 
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: 'var(--gradient-brand)' }}>
              <motion.span 
                className="text-white text-xl font-bold"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                K
              </motion.span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Let's work together</h3>
              <p className="text-white/40 text-sm">Transform your advertising today</p>
            </div>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.02, x: 3 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-accent/50 text-accent font-semibold hover:bg-accent hover:text-white transition-all duration-300"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 mb-10" />

        {/* Main Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-10">
          {/* Navigation Columns */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
            >
              <h4 className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/40 hover:text-white transition-colors duration-200 hover:pl-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h4 className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:hello@kolorowey.com" 
                  className="text-sm text-white/40 hover:text-white transition-colors duration-200"
                >
                  hello@kolorowey.com
                </a>
              </li>
              <li>
                <motion.a
                  href="https://www.linkedin.com/company/koloroweymedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-[#0A66C2] transition-colors duration-200 group"
                  whileHover={{ x: 2 }}
                >
                  <motion.div
                    className="w-5 h-5 rounded flex items-center justify-center bg-white/10 group-hover:bg-[#0A66C2] transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Linkedin className="w-3 h-3 group-hover:text-white" />
                  </motion.div>
                  LinkedIn
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Address */}
          <motion.div 
            className="col-span-2 sm:col-span-1 lg:col-span-2"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h4 className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-4">
              Office
            </h4>
            <p className="text-sm text-white/40 leading-relaxed">
              World Trade Centre, Nauroji Nagar,<br />
              Safdarjung Enclave, New Delhi,<br />
              Delhi 110029, India
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <motion.span 
              className="text-xs font-bold tracking-[0.15em] uppercase"
              style={{ 
                background: 'var(--gradient-brand)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              AdTech Unfragmented
            </motion.span>
            <span className="hidden sm:inline text-white/20">|</span>
            <p className="text-xs text-white/30">
              © 2026 Kolorowey. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-5">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-xs text-white/30 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
