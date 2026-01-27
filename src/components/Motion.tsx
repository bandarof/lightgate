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
    const counters =
      document.querySelectorAll<HTMLElement>(".counter");

    counters.forEach((counter) => {
      const target = Number(counter.dataset.target);
      let current = 0;

      const update = () => {
        const increment = target / 200;

        if (current < target) {
          current += increment;
          counter.innerText = Math.ceil(current).toString();
          requestAnimationFrame(update);
        } else {
          counter.innerText = target.toString();
        }
      };

      update();
    });
  }, []);
}
