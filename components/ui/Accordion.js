import React from "react";
import { cn } from "../../lib/cn";

export function AccordionItem({
  id,
  title,
  children,
  defaultOpen = false,
  className,
}) {
  return (
    <details id={id} className={cn("border-b", className)} open={defaultOpen}>
      <summary className="cursor-pointer px-4 py-3 list-none flex items-center justify-between text-sm font-medium">
        <span>{title}</span>
        <span className="text-xs text-gray-500">{defaultOpen ? "-" : "+"}</span>
      </summary>
      <div className="px-4 py-3 text-sm text-gray-700">{children}</div>
    </details>
  );
}

export default function Accordion({ children, className }) {
  return <div className={cn("space-y-1", className)}>{children}</div>;
}
