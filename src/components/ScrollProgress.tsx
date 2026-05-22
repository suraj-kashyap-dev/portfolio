"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.3,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX, transformOrigin: "0% 50%" }}
    />
  );
}
