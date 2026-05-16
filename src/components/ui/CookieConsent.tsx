"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const storageKey = "zeylun-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setVisible(window.localStorage.getItem(storageKey) === null);
  }, []);

  function choose(value: "accepted" | "declined") {
    window.localStorage.setItem(storageKey, value);
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <motion.aside
      aria-label="Cookie consent"
      className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-3xl rounded-2xl border border-surface-container-highest bg-surface-container-lowest/95 p-4 shadow-floating backdrop-blur-md md:bottom-6 md:p-5"
      initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      exit={reduceMotion ? undefined : { opacity: 0, y: 12 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <p className="font-serif text-xl leading-tight text-primary">A quieter browsing experience.</p>
          <p className="mt-2 text-sm leading-6 text-on-surface-variant">
            We use essential cookies and light session preferences to keep the site
            smooth, remember choices, and understand what hospitality teams find useful.
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => choose("declined")}
            className="h-11 rounded-lg border border-secondary px-4 text-xs font-semibold uppercase tracking-[0.08em] text-secondary transition-colors hover:bg-secondary/5"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="h-11 rounded-lg bg-primary-container px-4 text-xs font-semibold uppercase tracking-[0.08em] text-on-primary shadow-tactile transition-opacity hover:opacity-90"
          >
            Allow
          </button>
        </div>
      </div>
    </motion.aside>
  );
}
