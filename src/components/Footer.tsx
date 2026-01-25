import { Linkedin, Twitter, Youtube, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import koloroweyLogo from "@/assets/kolorowey-logo.png";

const footerLinks = {
  Platform: ["Overview", "Features", "Integrations", "API Docs", "Pricing"],
  Solutions: ["Publishers", "Advertisers", "Agencies", "Enterprise"],
  Resources: ["Blog", "Case Studies", "Webinars", "Documentation"],
  Company: ["About Us", "Careers", "Press", "Contact"],
};

const Footer = () => {
  return (
    <footer style={{ background: 'var(--gradient-navy)' }} className="text-white">
      <div className="container mx-auto px-6 py-20">
        {/* Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="inline-block mb-6 group">
              <motion.img 
                src={koloroweyLogo} 
                alt="Kolorowey" 
                className="h-24 w-auto brightness-0 invert"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
            </a>
            <p className="text-xs font-bold tracking-widest text-white/40 uppercase mb-4">
              AdTech Unfragmented
            </p>
            <p className="text-white/50 text-sm mb-8 max-w-xs leading-relaxed">
              Unifying the global advertising ecosystem. Enterprise-grade infrastructure for the modern programmatic world.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Youtube, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-accent hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-white mb-5 text-sm">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="group inline-flex items-center gap-1 text-sm text-white/40 hover:text-accent transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      {link}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            © 2025 Kolorowey. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <motion.a 
                key={item}
                href="#" 
                className="text-sm text-white/30 hover:text-accent transition-colors"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
