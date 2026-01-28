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
    const DURATION = 1800; // ms — all end together

    counters.forEach((el) => {
      const counter = el as HTMLElement;
      const target = Number(counter.dataset.target);
      const suffix = counter.dataset.suffix || "";

      let start = 0;
      let startTime: number | null = null;

      const update = (timestamp: number) => {
        if (!startTime) startTime = timestamp;

        const progress = Math.min(
          (timestamp - startTime) / DURATION,
          1
        );

        const value = Math.floor(progress * target);
        counter.innerText = value.toString();

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          /* ===== FORMAT AFTER FINISH ===== */

          if (target >= 1000000) {
            const millions = target / 1000000;
            counter.innerText =
              (millions % 1 === 0
                ? millions.toString()
                : millions.toFixed(1)) + "M+";
          } else {
            counter.innerText = target.toString() + suffix;
          }
        }
      };

      requestAnimationFrame(update);
    });
  }, []);
}
