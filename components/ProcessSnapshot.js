"use client";
import React from "react";
import { motion } from "framer-motion";

const steps = ["Discover", "Architect", "Implement", "Steward"];

export default function ProcessSnapshot() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-2xl font-semibold">Our Process</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              className="p-4 card-surface rounded-md text-center"
              whileHover={{ scale: 1.03 }}
            >
              <div className="text-lg font-bold">{i + 1}</div>
              <div className="mt-2">{s}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
