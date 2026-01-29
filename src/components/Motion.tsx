"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

/* ================= FADE UP ================= */

export function FadeUp({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const counter = entry.target as HTMLElement;
          observer.unobserve(counter);

          const target = Number(counter.dataset.target);
          const duration = 2000; // ms
          const start = performance.now();

          function animate(now: number) {
            const progress = Math.min((now - start) / duration, 1);
            const value = Math.floor(progress * target);

            counter.innerText = value.toString();

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              if (counter.dataset.suffix) {
                counter.innerText =
                  target.toString() + counter.dataset.suffix;
              }

              if (target >= 1000000) {
                counter.innerText = "2M+";
              }
            }
          }

          requestAnimationFrame(animate);
        });
      },
      { threshold: 0.4 }
    );

    counters.forEach((c) => observer.observe(c));
  }, []);
}
