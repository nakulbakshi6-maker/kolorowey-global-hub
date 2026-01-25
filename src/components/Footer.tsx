import { Linkedin, Twitter } from "lucide-react";
import koloroweyLogo from "@/assets/kolorowey-logo.png";

const footerLinks = {
  Platform: ["Overview", "Features", "Integrations", "Pricing", "Changelog"],
  Solutions: ["Publishers", "Advertisers", "Agencies", "Enterprise", "Partners"],
  Resources: ["Documentation", "API Reference", "Case Studies", "Blog", "Webinars"],
  Company: ["About", "Careers", "Press", "Contact", "Legal"],
};

const Footer = () => {
  return (
    <footer className="relative bg-accent text-accent-foreground">
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-primary/50" />
      
      <div className="container mx-auto px-6 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="#" className="inline-block mb-8">
              <img src={koloroweyLogo} alt="Kolorowey" className="h-12 w-auto brightness-0 invert" />
            </a>
            <p className="text-accent-foreground/60 mb-8 max-w-xs text-sm leading-relaxed">
              Unifying the global advertising ecosystem. Beyond the walled gardens, towards a connected future.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 border border-accent-foreground/20 flex items-center justify-center text-accent-foreground/60 hover:text-primary hover:border-primary transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-accent-foreground/20 flex items-center justify-center text-accent-foreground/60 hover:text-primary hover:border-primary transition-all duration-300"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-accent-foreground mb-5 text-xs uppercase tracking-[0.2em]">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-accent-foreground/50 hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-accent-foreground/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-accent-foreground/40">
            © 2025 Kolorowey. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-xs text-accent-foreground/40 hover:text-primary transition-colors"
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
