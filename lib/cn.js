// Governance Note: Utility for merging Tailwind and classnames. Ensures clean, teachable class logic.
// Maintenance: Update as utility libraries change. Keep code teachable and future-proof.
// Legacy Alignment: Follows "Clarity over Cleverness" and "Stewardship" pillars. Comments clarify teachability and impact.
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}
