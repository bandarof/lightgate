"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

/* ================= FADE UP ================= */

export function FadeUp({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

/* ================= COUNTERS ================= */

export function useCounters() {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");

    const DURATION = 2000; // ms
    const FPS = 60;
    const STEPS = (DURATION / 1000) * FPS; // ~120 frames

    counters.forEach((el) => {
      const counter = el as HTMLElement;
      const target = Number(counter.dataset.target);

      let current = 0;
      const increment = target / STEPS;

      const update = () => {
        current += increment;

        if (current < target) {
          counter.innerText = Math.floor(current).toString();
          requestAnimationFrame(update);
        } else {
          // Finish value
          counter.innerText = target.toString();

          /* ===== Format AFTER finish ===== */

          if (target >= 1000000) {
            const millions = target / 1000000;
            counter.innerText =
              (millions % 1 === 0
                ? millions.toString()
                : millions.toFixed(1)) + "M+";
          } else if (counter.dataset.suffix) {
            counter.innerText =
              target.toString() + counter.dataset.suffix;
          }
        }
      };

      update();
    });
  }, []);
}
