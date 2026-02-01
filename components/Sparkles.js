// Governance Note: This component adds animated sparkles for visual delight. It supports emotional impact and brand energy.
// Maintenance: Update animation and SVG logic as visual identity evolves. Keep code teachable and cinematic.
// Legacy Alignment: Follows "Emotional Awareness" and "Visual Hierarchy" pillars. Comments clarify teachability and impact.
"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Sparkles({ children, className = "", ...props }) {
  return (
    <span className={`relative inline-block ${className}`} {...props}>
      <motion.svg
        className="absolute -top-2 -left-2 w-6 h-6 text-yellow-400 opacity-80 pointer-events-none"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: [0, 1.2, 1], rotate: [0, 20, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 2 }}
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 2L13.09 8.26L19 9.27L14.5 13.14L15.82 19.02L12 15.77L8.18 19.02L9.5 13.14L5 9.27L10.91 8.26L12 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </motion.svg>
      <span className="relative z-10">{children}</span>
    </span>
  );
}
