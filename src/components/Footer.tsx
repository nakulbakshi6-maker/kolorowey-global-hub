import { Linkedin, Twitter, Github } from "lucide-react";
import koloroweyLogo from "@/assets/kolorowey-logo.png";

const footerLinks = {
  PLATFORM: ["Overview", "Features", "Integrations", "Pricing", "Changelog"],
  SOLUTIONS: ["Publishers", "Advertisers", "Agencies", "Enterprise", "Partners"],
  DEVELOPERS: ["Documentation", "API Reference", "SDKs", "Status", "Changelog"],
  COMPANY: ["About", "Careers", "Press", "Contact", "Legal"],
};

const Footer = () => {
  return (
    <footer className="relative bg-background border-t border-border">
      {/* Top neon line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="#" className="inline-block mb-6">
              <img src={koloroweyLogo} alt="Kolorowey" className="h-10 w-auto" />
            </a>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs font-mono leading-relaxed">
              <span className="text-primary">&gt;</span> Unifying the global advertising ecosystem beyond the walled gardens.
            </p>
            {/* Social Links */}
            <div className="flex gap-2">
              {[Linkedin, Twitter, Github].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-mono font-bold text-foreground mb-4 text-xs tracking-wider">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs text-muted-foreground hover:text-primary transition-colors font-mono"
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
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-mono">
            © 2025 KOLOROWEY. ALL_RIGHTS_RESERVED.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-xs text-muted-foreground hover:text-primary transition-colors font-mono"
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
