"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect } from "react";

export function FadeUp({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

/* =============================
   Animated Counters
============================= */

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
