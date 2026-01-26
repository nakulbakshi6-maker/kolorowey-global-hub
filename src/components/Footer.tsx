import { Linkedin, Twitter, Youtube, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import koloroweyLogo from "@/assets/kolorowey-logo.png";

const footerLinks = {
  Platform: [
    { label: "Overview", href: "/platform" },
    { label: "Supply Solutions", href: "/supply" },
    { label: "Demand Solutions", href: "/demand" },
    { label: "Technology", href: "/technology" },
  ],
  Solutions: [
    { label: "For Publishers", href: "/supply" },
    { label: "For Advertisers", href: "/demand" },
    { label: "Environments", href: "/environments" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      {/* Subtle glow */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(192 80% 50% / 0.5), transparent)' }}
      />

      <div className="container mx-auto px-6 py-16 relative z-10">
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
            <Link to="/" className="inline-block mb-6">
              <img 
                src={koloroweyLogo} 
                alt="Kolorowey" 
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-4">
              AdTech Unfragmented
            </p>
            <p className="text-muted-foreground text-sm mb-8 max-w-xs leading-relaxed">
              Unifying the global advertising ecosystem. Enterprise-grade infrastructure for the modern programmatic world.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3 mb-8">
              <a 
                href="mailto:hello@kolorowey.com" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@kolorowey.com
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Global Presence
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + categoryIndex * 0.1 }}
            >
              <h4 className="font-semibold text-foreground mb-5 text-sm">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="py-10 border-y border-border mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-1">Stay in the loop</h4>
              <p className="text-muted-foreground text-sm">Get the latest updates on AdTech trends and Kolorowey news.</p>
            </div>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-5 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors w-64"
              />
              <button className="px-6 py-3 rounded-xl font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kolorowey. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-sm text-muted-foreground flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 pulse-dot" />
              All Systems Operational
            </span>
            <div className="flex items-center gap-4">
              {["SOC 2", "GDPR", "ISO 27001"].map((badge) => (
                <span key={badge} className="text-xs text-muted-foreground font-medium px-2 py-1 rounded bg-secondary">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;