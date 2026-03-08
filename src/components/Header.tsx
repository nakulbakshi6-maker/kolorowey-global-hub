import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import koloroweyLogo from "@/assets/kolorowey-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Platform", href: "/" },
    { label: "Publishers", href: "/publishers" },
    { label: "Advertisers", href: "/advertisers" },
    { label: "Technology", href: "/technology" },
    { label: "Environment", href: "/environment" },
    { label: "Resources", href: "/resources" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "py-3" : "py-6"}`}
    >
      {/* Floating header container */}
      <div className="container mx-auto px-6">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled ? "bg-card/90 backdrop-blur-xl rounded-2xl px-6 py-3 shadow-lg border border-border/50" : ""
          }`}
        >
          {/* Logo - Extra large */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/";
            }}
            className="relative flex items-center group"
          >
            <img
              src={koloroweyLogo}
              alt="Kolorowey"
              className={`transition-all duration-500 ${isScrolled ? "h-28 scale-x-110" : "h-32 scale-x-110"} w-auto group-hover:scale-105`}
            />
            <span
              className={`font-semibold text-muted-foreground transition-all duration-500 ${isScrolled ? "text-[7px] -ml-10 -mt-2" : "text-[12px] -ml-8 -mt-4"}`}
            >
              ™
            </span>
          </a>

          {/* Center Navigation - Pill style */}
          <nav
            className={`hidden lg:flex items-center gap-1 ${
              !isScrolled ? "bg-card/80 backdrop-blur-lg rounded-full px-2 py-2 shadow-md border border-border/30" : ""
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = link.href;
                }}
                className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-accent bg-accent/10"
                    : "text-muted-foreground hover:text-accent hover:bg-accent/5"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              className="rounded-full px-6 font-semibold group"
              onClick={() => (window.location.href = "/contact")}
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 text-foreground rounded-full hover:bg-secondary transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-4 bg-card rounded-2xl shadow-xl border border-border overflow-hidden"
            >
              <nav className="p-4 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`block px-4 py-3 rounded-xl transition-colors font-medium ${
                      isActive(link.href)
                        ? "text-accent bg-accent/10"
                        : "text-foreground hover:text-accent hover:bg-accent/5"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <div className="pt-4 px-4">
                  <Button
                    className="w-full justify-center h-12 rounded-xl font-semibold"
                    onClick={() => (window.location.href = "/contact")}
                  >
                    Get Started
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
