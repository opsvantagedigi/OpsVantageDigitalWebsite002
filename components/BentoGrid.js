"use client";
import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Revenue Acceleration",
    body: "From funnel instrumentation to scaled acquisition channels — shipped as a repeatable system.",
  },
  {
    title: "Retention & Growth",
    body: "LTV optimization and onboarding flows that lift activation and reduce churn.",
  },
  {
    title: "Delivery Ops",
    body: "Reliable delivery pipelines, observability, and playbooks for repeatability.",
  },
  {
    title: "Data & Analytics",
    body: "Actionable dashboards and experimentation infrastructure for growth teams.",
  },
  {
    title: "Platform Engineering",
    body: "Reliable infra, observability, and CI pipelines to ship with confidence.",
  },
  {
    title: "Optimization & Insights",
    body: "Experimentation platforms and dashboards that drive actionable decisions.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function BentoGrid() {
  return (
    <motion.div
      className="grid gap-6"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        marginTop: "1.5rem",
      }}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {items.map((it, i) => (
        <motion.article
          key={i}
          className="card-surface border-transparent p-5 rounded-md transform-gpu"
          variants={card}
          whileHover={{ scale: 1.03 }}
        >
          <div className="text-2xl">🔹</div>
          <h3 className="mt-3 text-lg font-semibold">{it.title}</h3>
          <p className="mt-2 text-sm text-muted-2">{it.body}</p>
        </motion.article>
      ))}
    </motion.div>
  );
}
