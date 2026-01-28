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

    const startCounter = (counter: HTMLElement) => {
      const target = Number(counter.dataset.target);
      const suffix = counter.dataset.suffix || "";
      let current = 0;
      const increment = target / 200;

      const update = () => {
        if (current < target) {
          current += increment;
          counter.innerText = Math.ceil(current).toString();
          requestAnimationFrame(update);
        } else {
          counter.innerText = target.toString();

          // Format AFTER finish
          if (suffix) {
            counter.innerText = target + suffix;
          }
        }
      };

      update();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounter(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    counters.forEach((counter) => observer.observe(counter));
  }, []);
}
