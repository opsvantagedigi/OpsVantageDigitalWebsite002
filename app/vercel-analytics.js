// Governance Note: Vercel Analytics integration for real-user metrics. Ensures maintainable, teachable setup.
// Maintenance: Update integration as Vercel Analytics API evolves. Document all changes in GOVERNANCE.md.
// Legacy Alignment: Follows "Stewardship" and "Care over Exploitation" pillars.

"use client";
import { Analytics } from "@vercel/analytics/react";

export default function VercelAnalytics() {
  return <Analytics />;
}
