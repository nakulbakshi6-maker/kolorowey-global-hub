import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFestive, setFestiveOn, hasSeenFestivePopup, markFestivePopupSeen, isFestiveSeasonActive } from "@/lib/festive";

export const DiyaIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
    <path d="M12 2c1.6 2 2.2 3.4 2.2 4.6a2.2 2.2 0 0 1-4.4 0C9.8 5.4 10.4 4 12 2Z" stroke="currentColor" strokeWidth="1.2" />
    <path d="M3 13h18c-.8 3.6-4.6 6-9 6s-8.2-2.4-9-6Z" stroke="currentColor" strokeWidth="1.2" />
    <path d="M3 13c4-3 14-3 18 0M12 10v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export const FestiveToggle = ({ compact = false }: { compact?: boolean }) => {
  const { on, season, toggle } = useFestive();
  if (!season) return null;
  return (
    <Button
      variant="ghost"
      onClick={toggle}
      role="switch"
      aria-checked={on}
      aria-label={on ? "Turn off festive theme" : "Turn on festive theme"}
      title={on ? "Festive theme on" : "Festive theme off"}
      className={`festive-switch ${compact ? "festive-switch-compact" : ""}`}
    >
      <DiyaIcon className="festive-switch-diya" />
      <span className="festive-switch-thumb" aria-hidden="true" />
    </Button>
  );
};

export const FestivePopup = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!isFestiveSeasonActive() || hasSeenFestivePopup()) return;
    const t = setTimeout(() => setOpen(true), 2500);
    return () => clearTimeout(t);
  }, []);
  const close = (enable: boolean) => {
    if (enable) setFestiveOn(true);
    else markFestivePopupSeen();
    setOpen(false);
  };
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-foreground/30 backdrop-blur-sm"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 22, stiffness: 260 }}
            className="relative w-full max-w-md rounded-3xl border border-festive-gold/40 bg-card/95 p-8 text-center shadow-[0_20px_60px_hsl(var(--festive-gold)/0.3)]"
          >
            <button onClick={() => close(false)} aria-label="Close" className="absolute right-4 top-4 p-1 text-muted-foreground hover:text-foreground">
              <X className="w-4 h-4" />
            </button>
            <motion.div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-festive-gold/15"
              animate={{ boxShadow: ["0 0 0px hsl(var(--festive-gold)/0.3)", "0 0 30px hsl(var(--festive-gold)/0.6)", "0 0 0px hsl(var(--festive-gold)/0.3)"] }}
              transition={{ duration: 2.4, repeat: Infinity }}>
               <DiyaIcon className="w-9 h-9 text-festive-gold-deep" />
            </motion.div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Celebrate Festive Season 2026 with us</h2>
            <p className="text-muted-foreground mb-7">Experience Kolorowey in a warm festive light this season.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="rounded-full px-6 font-semibold bg-festive-gold text-foreground hover:bg-festive-gold/90" onClick={() => close(true)}>
                View Festive Theme
              </Button>
              <Button variant="ghost" className="rounded-full" onClick={() => close(false)}>Maybe later</Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Petal = ({ kind }: { kind: number }) =>
  kind === 0 ? (
    <svg viewBox="0 0 24 24" className="w-full h-full"><g fill="hsl(var(--festive-marigold))">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((r) => <ellipse key={r} cx="12" cy="6" rx="3" ry="5" transform={`rotate(${r} 12 12)`} />)}
    </g><circle cx="12" cy="12" r="3" fill="hsl(var(--festive-gold-deep))" /></svg>
  ) : (
    <svg viewBox="0 0 20 20" className="w-full h-full"><path d="M10 1C15 6 15 13 10 19C5 13 5 6 10 1Z" fill={kind === 1 ? "hsl(var(--festive-gold))" : "hsl(var(--festive-rose))"} /></svg>
  );

export const FestiveRangoli = () => (
  <div className="festive-rangoli" aria-hidden="true">
    {["left", "right"].map((side) => (
      <svg key={side} viewBox="0 0 300 300" className={`festive-rangoli-${side}`} fill="none">
        <g stroke="currentColor" strokeWidth="1.1">
          {[-18, 6, 30, 54, 78].map((angle) => (
            <path key={angle} d="M0 300 Q-46 144 0 10 Q146 142 0 300Z" transform={`rotate(${angle} 0 300)`} />
          ))}
          {[-6, 18, 42, 66, 90].map((angle) => (
            <path key={angle} d="M0 300 Q-30 186 0 94 Q110 186 0 300Z" transform={`rotate(${angle} 0 300)`} />
          ))}
          {[0, 24, 48, 72].map((angle) => (
            <path key={angle} d="M0 300 Q-17 244 0 190 Q60 244 0 300Z" transform={`rotate(${angle} 0 300)`} />
          ))}
        </g>
      </svg>
    ))}
  </div>
);

export const FestiveAmbience = () => {
  const { on } = useFestive();
  const reducedMotion = useReducedMotion();
  const items = useMemo(() => Array.from({ length: 14 }, (_, i) => ({
    left: i % 2 === 0 ? Math.random() * 22 : 78 + Math.random() * 22, size: 12 + Math.random() * 10, dur: 18 + Math.random() * 10,
    delay: -Math.random() * 20, drift: (Math.random() - 0.5) * 160, kind: i % 3,
  })), []);
  if (!on) return null;
  return (
    <div className="festive-ambience pointer-events-none fixed inset-0 z-[40] overflow-hidden" aria-hidden>
      {!reducedMotion && items.map((p, i) => (
        <motion.div key={i} className="absolute top-0" style={{ left: `${p.left}%`, width: p.size, height: p.size, opacity: 0.6 }}
          initial={{ y: "-10vh" }}
          animate={{ y: "110vh", x: [0, p.drift, 0], rotate: [0, 360] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "linear" }}>
          <Petal kind={p.kind} />
        </motion.div>
      ))}
    </div>
  );
};
