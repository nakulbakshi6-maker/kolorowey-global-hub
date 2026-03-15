import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const COOKIE_KEY = "kolorowey_cookie_seen_date";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const today = new Date().toDateString();
    const lastSeen = localStorage.getItem(COOKIE_KEY);

    if (lastSeen === today) return;

    const timer = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    localStorage.setItem(COOKIE_KEY, new Date().toDateString());
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-foreground/20 backdrop-blur-[2px] z-[60]"
            onClick={handleDismiss}
          />

          {/* Banner — centered in viewport */}
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 24, stiffness: 280, mass: 0.6 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-md">
            <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-xl">
              {/* Animated gradient accent bar */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: "var(--gradient-brand)" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              />

              {/* Floating glow orbs */}
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-highlight/10 blur-2xl pointer-events-none" />

              <div className="relative p-5 pt-6">
                {/* Close button */}
                <button
                  onClick={handleDismiss}
                  className="absolute top-3 right-3 w-7 h-7 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Icon + Title row */}
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="icon-box w-10 h-10 rounded-xl"
                    animate={{ rotate: [0, -8, 8, -4, 0] }}
                    transition={{ delay: 0.8, duration: 0.6, ease: "easeInOut" }}
                  >
                    <Cookie className="w-5 h-5" />
                  </motion.div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-foreground">Cookie Notice</h3>
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                      <Sparkles className="w-3.5 h-3.5 text-accent" />
                    </motion.div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-muted-foreground leading-relaxed mb-4 pr-4">
                  We use cookies to enhance your experience, serve personalized content, and analyze traffic. By continuing, you agree to our{" "}
                  <Link to="/privacy" onClick={handleDismiss} className="text-accent hover:underline font-semibold">
                    Privacy Policy
                  </Link>
                  {" & "}
                  <Link to="/dpa" onClick={handleDismiss} className="text-accent hover:underline font-semibold">
                    DPA
                  </Link>.
                </p>

                {/* Action buttons */}
                <div className="flex items-center gap-2">
                  <Button
                    onClick={handleDismiss}
                    size="sm"
                    className="h-9 px-5 text-xs font-bold rounded-xl shadow-sm"
                    style={{ background: "var(--gradient-brand)" }}
                  >
                    <Shield className="w-3.5 h-3.5 mr-1.5" />
                    Accept All
                  </Button>
                  <Button
                    onClick={handleDismiss}
                    variant="outline"
                    size="sm"
                    className="h-9 px-4 text-xs font-semibold rounded-xl"
                  >
                    Dismiss
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
