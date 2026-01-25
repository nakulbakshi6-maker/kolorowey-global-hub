import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import koloroweyLogo from "@/assets/kolorowey-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "PLATFORM", href: "#platform" },
    { label: "SOLUTIONS", href: "#solutions" },
    { label: "NETWORK", href: "#partners" },
    { label: "DOCS", href: "#about" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-primary/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <motion.img 
              src={koloroweyLogo} 
              alt="Kolorowey" 
              className="h-10 w-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-4 py-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wider group"
              >
                <span className="text-primary/50 mr-1">&gt;</span>
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant="ghost" 
              className="text-xs font-mono tracking-wider h-9"
            >
              <Terminal className="w-3 h-3 mr-1" />
              LOGIN
            </Button>
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-mono tracking-wider h-9 px-5"
            >
              GET_ACCESS
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-primary"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="py-6 space-y-1 border-t border-border mt-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block px-4 py-3 text-foreground hover:text-primary transition-colors font-mono text-sm tracking-wider"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-primary mr-2">&gt;</span>
                    {link.label}
                  </motion.a>
                ))}
                <div className="flex flex-col gap-3 pt-4 px-4">
                  <Button variant="outline" className="w-full justify-center h-11 font-mono text-xs tracking-wider">
                    LOGIN
                  </Button>
                  <Button className="w-full justify-center h-11 bg-primary text-primary-foreground font-mono text-xs tracking-wider">
                    GET_ACCESS
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
