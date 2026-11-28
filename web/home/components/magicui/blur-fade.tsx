"use client";
// Adapted from Magic UI BlurFade (MIT). Keep SSR and no-JS content visible.
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
export function BlurFade({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const [mounted, setMounted] = useState(false);
  const reduce = useReducedMotion();
  useEffect(() => setMounted(true), []);
  return (
    <motion.div
      initial={false}
      animate={
        mounted && !reduce
          ? { opacity: [0.6, 1], y: [8, 0], filter: ["blur(3px)", "blur(0px)"] }
          : { opacity: 1, y: 0, filter: "blur(0px)" }
      }
      transition={{
        duration: reduce ? 0 : 0.55,
        delay: reduce ? 0 : delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
