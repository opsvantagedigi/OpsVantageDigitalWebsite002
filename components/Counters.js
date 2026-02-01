"use client";
import React, { useRef, useState, useEffect } from "react";

const stats = [
  { label: "Documentation Coverage (%)", value: 100, suffix: "%" },
  { label: "Governance Pipelines Delivered", value: 12 },
  { label: "Average ROI Potential (%)", value: 500, suffix: "%" },
  { label: "Projects Delivered", value: 128 },
];

function useCountTo(target, duration = 1800, startOn = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!startOn) return;
    let start = null;
    const from = 0;
    const diff = target - from;
    function step(ts) {
      if (!start) start = ts;
      const elapsed = ts - start;
      const progress = Math.min(elapsed / duration, 1);
      setValue(Math.floor(from + diff * progress));
      if (progress < 1) requestAnimationFrame(step);
    }
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, startOn]);
  return value;
}

export default function Counters() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-center mt-6"
    >
      {stats.map((s, i) => {
        const val = useCountTo(s.value, 1600, visible);
        return (
          <div key={i} className="p-4 card-surface rounded-md">
            <div className="text-3xl font-extrabold">
              {val}
              {s.suffix || ""}
            </div>
            <div className="mt-2 text-sm text-muted-2">{s.label}</div>
          </div>
        );
      })}
    </div>
  );
}
