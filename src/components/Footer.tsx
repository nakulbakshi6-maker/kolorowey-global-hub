import { Linkedin, ArrowRight, MapPin, Mail } from "lucide-react";
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
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'var(--gradient-brand)' }}
        animate={{ 
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      
      {/* Accent line at top */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Top section with tagline and CTA */}
        <motion.div 
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-14 pb-10 border-b border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-white mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Ready to get started?
            </motion.h3>
            <p className="text-white/40 text-sm">
              Transform your advertising infrastructure today.
            </p>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-accent/30"
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

        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Navigation Columns */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h4 className="font-semibold text-white mb-4 text-sm tracking-wide">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                      <Link
                        to={link.href}
                        className="text-sm text-white/40 hover:text-accent transition-colors duration-200 inline-flex items-center gap-1 group"
                      >
                        <span className="w-0 group-hover:w-2 h-px bg-accent transition-all duration-200" />
                        {link.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wide">
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li>
                <motion.a 
                  href="mailto:hello@kolorowey.com" 
                  className="text-sm text-white/40 hover:text-accent transition-colors duration-200 inline-flex items-center gap-2 group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  hello@kolorowey.com
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="https://www.linkedin.com/company/koloroweymedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-accent transition-all duration-200 group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Linkedin className="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-200" />
                  LinkedIn
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Address */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wide">
              Headquarters
            </h4>
            <p className="text-sm text-white/40 leading-relaxed">
              World Trade Centre,<br />
              Nauroji Nagar, Safdarjung Enclave,<br />
              New Delhi, Delhi 110029
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center gap-3">
            <motion.span 
              className="text-xs font-bold tracking-[0.2em] uppercase bg-clip-text text-transparent"
              style={{ backgroundImage: 'var(--gradient-brand)' }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              AdTech Unfragmented
            </motion.span>
            <span className="text-white/20">•</span>
            <p className="text-sm text-white/30">
              © 2026 Kolorowey
            </p>
          </div>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <motion.a 
                key={item}
                href="#" 
                className="text-sm text-white/30 hover:text-accent transition-colors relative group"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
