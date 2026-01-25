import { Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import koloroweyLogo from "@/assets/kolorowey-logo.png";

const footerLinks = {
  Platform: ["Overview", "Features", "Integrations", "Pricing", "Changelog"],
  Solutions: ["Publishers", "Advertisers", "Agencies", "Enterprise", "Partners"],
  Resources: ["Documentation", "API Reference", "Case Studies", "Blog", "Webinars"],
  Company: ["About", "Careers", "Press", "Contact", "Legal"],
};

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-background to-muted/30 border-t border-border/30">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="#" className="inline-block mb-8">
              <img src={koloroweyLogo} alt="Kolorowey" className="h-10 w-auto" />
            </a>
            <p className="text-muted-foreground mb-8 max-w-xs leading-relaxed">
              Unifying the global advertising ecosystem. Beyond the walled gardens, towards a connected future.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-medium text-foreground mb-5 text-sm uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="group inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            © 2025 Kolorowey. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flowing-underline"
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
