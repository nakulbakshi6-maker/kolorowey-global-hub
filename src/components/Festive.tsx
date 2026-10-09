import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFestive, setFestiveOn, hasSeenFestivePopup, markFestivePopupSeen, isFestiveSeasonActive } from "@/lib/festive";

export const DiyaIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
    <path d="M12 3c1.6 2 2.2 3.4 2.2 4.6A2.2 2.2 0 0 1 12 9.8a2.2 2.2 0 0 1-2.2-2.2C9.8 6.4 10.4 5 12 3Z" fill="hsl(var(--festive-flame))" />
    <path d="M3 13h18c-.8 3.6-4.6 6-9 6s-8.2-2.4-9-6Z" fill="hsl(var(--festive-gold))" />
    <path d="M7 13c1.4.8 3.2 1.2 5 1.2s3.6-.4 5-1.2" stroke="hsl(var(--festive-gold-deep))" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export const FestiveToggle = ({ compact = false }: { compact?: boolean }) => {
  const { on, season, toggle } = useFestive();
  if (!season) return null;
  return (
    <button
      onClick={toggle}
      aria-pressed={on}
      aria-label={on ? "Turn off festive theme" : "Turn on festive theme"}
      title={on ? "Festive theme on" : "Festive theme off"}
      className={`relative inline-flex items-center gap-2 rounded-full border transition-all duration-300 ${
        compact ? "p-2.5" : "px-3 py-2"
      } ${on ? "border-festive-gold/60 bg-festive-gold/15 shadow-[0_0_18px_hsl(var(--festive-gold)/0.45)]" : "border-border bg-card/70 opacity-80 hover:opacity-100"}`}
    >
      <DiyaIcon className={`w-5 h-5 ${on ? "animate-pulse" : "grayscale"}`} />
      {!compact && <span className="text-xs font-semibold text-foreground">Festive</span>}
    </button>
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
              <DiyaIcon className="w-9 h-9" />
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

export const FestiveAmbience = () => {
  const { on } = useFestive();
  const items = useMemo(() => Array.from({ length: 18 }, (_, i) => ({
    left: Math.random() * 100, size: 10 + Math.random() * 14, dur: 12 + Math.random() * 10,
    delay: -Math.random() * 20, drift: (Math.random() - 0.5) * 160, kind: i % 3,
  })), []);
  if (!on) return null;
  return (
    <div className="pointer-events-none fixed inset-0 z-[40] overflow-hidden" aria-hidden>
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-festive-gold/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-festive-rose/15 blur-3xl" />
      {/* Corner line patterns */}
      {["top-0 left-0", "bottom-0 right-0 rotate-180"].map((pos) => (
        <svg key={pos} viewBox="0 0 160 160" className={`absolute ${pos} w-40 h-40 opacity-40`}>
          <g stroke="hsl(var(--festive-gold))" fill="none" strokeWidth="1">
            <circle cx="0" cy="0" r="60" /><circle cx="0" cy="0" r="90" /><circle cx="0" cy="0" r="120" />
            {[15, 35, 55, 75].map((a) => <line key={a} x1="0" y1="0" x2={140 * Math.cos((a * Math.PI) / 180)} y2={140 * Math.sin((a * Math.PI) / 180)} />)}
          </g>
        </svg>
      ))}
      {items.map((p, i) => (
        <motion.div key={i} className="absolute top-0" style={{ left: `${p.left}%`, width: p.size, height: p.size, opacity: 0.75 }}
          initial={{ y: "-10vh" }}
          animate={{ y: "110vh", x: [0, p.drift, 0], rotate: [0, 360] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "linear" }}>
          <Petal kind={p.kind} />
        </motion.div>
      ))}
    </div>
  );
};
