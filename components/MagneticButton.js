"use client";
import React, { useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagneticButton({ children, className = "", ...props }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { stiffness: 300, damping: 20, mass: 1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);


  // Throttle getBoundingClientRect to once per animation frame
  const frame = useRef(null);
  const lastRect = useRef(null);
  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return;
    if (!lastRect.current) {
      lastRect.current = ref.current.getBoundingClientRect();
    }
    if (!frame.current) {
      frame.current = requestAnimationFrame(() => {
        frame.current = null;
        lastRect.current = null;
      });
    }
    const rect = lastRect.current;
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.3);
    y.set(relY * 0.3);
  }, [x, y]);

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    lastRect.current = null;
    if (frame.current) {
      cancelAnimationFrame(frame.current);
      frame.current = null;
    }
  }

  return (
    <motion.button
      ref={ref}
      className={`relative inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg shadow-md transition-colors bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95 ${className}`}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </motion.button>
  );
}
