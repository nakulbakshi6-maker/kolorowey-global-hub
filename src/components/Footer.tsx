import { Linkedin, Twitter, Youtube, ArrowUpRight } from "lucide-react";
import koloroweyLogo from "@/assets/kolorowey-logo.png";

const footerLinks = {
  Platform: ["Overview", "Features", "Integrations", "API Docs", "Pricing"],
  Solutions: ["Publishers", "Advertisers", "Agencies", "Enterprise"],
  Resources: ["Blog", "Case Studies", "Webinars", "Documentation"],
  Company: ["About Us", "Careers", "Press", "Contact"],
};

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-20">
        {/* Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12 mb-16">
          {/* Brand - Extra large logo */}
          <div className="col-span-2">
            <a href="#" className="inline-block mb-6 group">
              <img 
                src={koloroweyLogo} 
                alt="Kolorowey" 
                className="h-24 w-auto brightness-0 invert transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <p className="text-xs font-bold tracking-widest text-primary-foreground/40 uppercase mb-4">
              AdTech Unfragmented
            </p>
            <p className="text-primary-foreground/50 text-sm mb-8 max-w-xs leading-relaxed">
              Unifying the global advertising ecosystem. Enterprise-grade infrastructure for the modern programmatic world.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Youtube, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-11 h-11 rounded-full bg-primary-foreground/5 flex items-center justify-center text-primary-foreground/50 hover:bg-primary-foreground/10 hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-primary-foreground mb-5 text-sm">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="group inline-flex items-center gap-1 text-sm text-primary-foreground/40 hover:text-primary-foreground transition-colors"
                    >
                      {link}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/30">
            © 2025 Kolorowey. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-sm text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
