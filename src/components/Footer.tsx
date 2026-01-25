import { Linkedin, Twitter, Youtube } from "lucide-react";
import koloroweyLogo from "@/assets/kolorowey-logo.png";

const footerLinks = {
  Platform: ["Overview", "Features", "Integrations", "Pricing", "API Docs"],
  Solutions: ["Publishers", "Advertisers", "Agencies", "Enterprise"],
  Resources: ["Blog", "Case Studies", "Webinars", "Documentation"],
  Company: ["About Us", "Careers", "Press", "Contact"],
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-12">
          {/* Brand - Bigger logo */}
          <div className="col-span-2">
            <a href="#" className="inline-block mb-6">
              <img 
                src={koloroweyLogo} 
                alt="Kolorowey" 
                className="h-16 w-auto brightness-0 invert"
              />
            </a>
            <p className="text-background/60 text-sm mb-6 max-w-xs leading-relaxed">
              Unifying the global advertising ecosystem. Enterprise-grade infrastructure for the modern programmatic world.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[Linkedin, Twitter, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/60 hover:bg-background/20 hover:text-background transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-background mb-4 text-sm">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-background/50 hover:text-background transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/40">
            © 2025 Kolorowey. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-sm text-background/40 hover:text-background transition-colors"
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
