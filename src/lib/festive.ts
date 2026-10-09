import { useEffect, useState } from "react";

// Festive season ends at the end of 30 November 2026 (IST). After this, everything festive turns off automatically.
export const FESTIVE_END = new Date("2026-11-30T23:59:59+05:30");

export const isFestiveSeasonActive = (now: Date = new Date()) => now.getTime() <= FESTIVE_END.getTime();

const KEY = "kolorowey-festive-mode";
const SEEN_KEY = "kolorowey-festive-popup-seen";
const EVT = "festive-change";

export const getFestiveOn = () =>
  isFestiveSeasonActive() && typeof window !== "undefined" && localStorage.getItem(KEY) === "on";

export const setFestiveOn = (on: boolean) => {
  localStorage.setItem(KEY, on ? "on" : "off");
  localStorage.setItem(SEEN_KEY, "1");
  window.dispatchEvent(new Event(EVT));
};

export const hasSeenFestivePopup = () => localStorage.getItem(SEEN_KEY) === "1";
export const markFestivePopupSeen = () => localStorage.setItem(SEEN_KEY, "1");

export const useFestive = () => {
  const [on, setOn] = useState(getFestiveOn);
  useEffect(() => {
    const sync = () => setOn(getFestiveOn());
    window.addEventListener(EVT, sync);
    return () => window.removeEventListener(EVT, sync);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("festive", on);
  }, [on]);
  return { on, season: isFestiveSeasonActive(), toggle: () => setFestiveOn(!on) };
};
