import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show on every refresh after a short delay
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-50"
        >
          <div className="bg-gradient-to-br from-primary to-[hsl(250_40%_30%)] rounded-2xl shadow-2xl p-5 text-white border border-white/10">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm font-bold text-white">Cookie Notice</h3>
                  <button
                    onClick={handleDismiss}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-white/80 leading-relaxed">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By continuing to use our site, you agree to our{" "}
                  <Link to="/privacy" className="text-[hsl(185_85%_60%)] hover:underline font-medium">
                    Privacy Policy
                  </Link>
                  {" "}&{" "}
                  <Link to="/dpa" className="text-[hsl(185_85%_60%)] hover:underline font-medium">
                    DPA
                  </Link>.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Button
                    onClick={handleDismiss}
                    size="sm"
                    className="h-8 px-4 text-xs font-semibold rounded-lg bg-white text-primary hover:bg-white/90"
                  >
                    <Cookie className="w-3.5 h-3.5 mr-1.5" />
                    Got it
                  </Button>
                  <Button
                    onClick={handleDismiss}
                    variant="ghost"
                    size="sm"
                    className="h-8 px-3 text-xs font-medium rounded-lg text-white/70 hover:text-white hover:bg-white/10"
                  >
                    Dismiss
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
