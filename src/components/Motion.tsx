"use client";

import { motion } from "framer-motion";

export const FadeUp = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);
if (typeof window !== "undefined") {
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    const update = () => {
      const target = +counter.getAttribute("data-target")!;
      const current = +counter.innerText.replace(/\D/g, "");
      const inc = target / 200;
      if (current < target) {
        counter.innerText = Math.ceil(current + inc).toString();
        setTimeout(update, 10);
      }
    };
    update();
  });
}
