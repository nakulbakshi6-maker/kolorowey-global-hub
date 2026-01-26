import { forwardRef } from "react";
import { Linkedin, Twitter, Youtube, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import koloroweyLogo from "@/assets/kolorowey-logo.png";

const footerLinks = {
  Platform: [
    { label: "Overview", href: "/" },
    { label: "Features", href: "/" },
    { label: "Technology", href: "/technology" },
    { label: "Environments", href: "/environment" },
  ],
  Solutions: [
    { label: "Publishers", href: "/publishers" },
    { label: "Advertisers", href: "/advertisers" },
    { label: "Agencies", href: "/advertisers" },
    { label: "Enterprise", href: "/technology" },
  ],
  Resources: [
    { label: "Blog", href: "/resources" },
    { label: "Case Studies", href: "/resources" },
    { label: "Documentation", href: "/resources" },
    { label: "FAQs", href: "/resources" },
  ],
  Company: [
    { label: "About Us", href: "/" },
    { label: "Careers", href: "/" },
    { label: "Press", href: "/resources" },
    { label: "Contact", href: "/" },
  ],
};

const Footer = forwardRef<HTMLElement>((_, ref) => {
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

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <motion.div 
            className="col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.a 
              href="#" 
              className="inline-block mb-6 group"
              whileHover={{ scale: 1.02 }}
            >
              <motion.img 
                src={koloroweyLogo} 
                alt="Kolorowey" 
                className="h-24 w-auto brightness-0 invert"
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
            <p className="text-white/50 text-sm mb-8 max-w-xs leading-relaxed">
              Unifying the global advertising ecosystem. Enterprise-grade infrastructure for the modern programmatic world.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3 mb-8">
              <motion.a 
                href="mailto:hello@kolorowey.com" 
                className="flex items-center gap-2 text-sm text-white/40 hover:text-accent transition-colors"
                whileHover={{ x: 3 }}
              >
                <Mail className="w-4 h-4" />
                hello@kolorowey.com
              </motion.a>
              <motion.div 
                className="flex items-center gap-2 text-sm text-white/40"
                whileHover={{ x: 3 }}
              >
                <MapPin className="w-4 h-4" />
                San Francisco, CA
              </motion.div>
            </div>

            {/* Social with enhanced hover */}
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-accent"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <social.icon className="w-5 h-5 relative z-10" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links with stagger animation */}
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
                    <motion.a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = link.href;
                      }}
                      className="group inline-flex items-center gap-1 text-sm text-white/40 hover:text-accent transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {link.label}
                      <motion.span
                        initial={{ opacity: 0, x: -5 }}
                        whileHover={{ opacity: 1, x: 0 }}
                      >
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.span>
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div 
          className="py-10 border-y border-white/10 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-bold mb-1">Stay in the loop</h4>
              <p className="text-white/40 text-sm">Get the latest updates on AdTech trends and Kolorowey news.</p>
            </div>
            <motion.div 
              className="flex gap-2"
              whileHover={{ scale: 1.02 }}
            >
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors w-64"
              />
              <motion.button 
                className="px-6 py-3 rounded-full font-semibold text-white transition-all duration-300"
                style={{ background: 'var(--gradient-brand)' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm text-white/30">
            © 2025 Kolorowey. All rights reserved.
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
});

Footer.displayName = "Footer";

export default Footer;
