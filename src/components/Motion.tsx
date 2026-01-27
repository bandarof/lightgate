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

    counters.forEach((el) => {
      const counter = el as HTMLElement;

      const update = () => {
        const target = Number(counter.dataset.target);
        const current = Number(counter.innerText.replace(/\D/g, ""));
        const increment = target / 600;

        if (current < target) {
          counter.innerText = Math.ceil(current + increment).toString();
          requestAnimationFrame(update);
        } else {
          counter.innerText = target.toString();
        }
      };

      update();
    });
  }, []);
}
