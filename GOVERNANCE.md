# Governance Notes for OpsVantage Digital

## Purpose

This document centralizes governance, maintenance, and legacy alignment notes for all major files and systems in the codebase. It ensures every future steward can understand, maintain, and extend the system safely and teachably.

---

## Core Principles (from OPSVANTAGE_BRAIN.md)

- **Care over Exploitation:** Monetization is welcome; manipulation is forbidden.
- **Clarity over Cleverness:** If code is too complex to teach, rewrite it.
- **Stewardship over Shortcuts:** Build for the 10-year horizon.
- **Emotional Awareness:** UX is emotional. Never belittle; always invite.
- **Legacy over Trend:** We build systems that last.

---

## File Governance

### app/global-error.jsx

Handles global error boundaries. Update error handling logic as new error types emerge. Always provide user-friendly, emotionally safe messaging.

### app/layout.js

Root layout for all pages. Update metadata and global imports as branding or navigation changes. Ensure teachability for future maintainers.

### app/page.js

Main landing page. Update hero, counters, and preview sections as product offerings evolve. Keep all logic teachable and cinematic.

### app/globals.css

Aggregates all global and branding CSS. Update imports and brand tokens as visual identity evolves. Comment all major changes for future maintainers.

### components/\*

All components include governance notes for teachability, emotional impact, and legacy alignment. Update as UI/UX and branding evolve.

### lib/\*

Utility files for classnames and Sanity integration. Update as dependencies or integration needs change.

### package.json, next.config.js, tsconfig.json, tailwind.config.cjs, postcss.config.cjs

Project and build configs. Update as tech stack or deployment needs change. Document all changes in this file.

---

## Maintenance Note

Update this document as governance, audit, or legacy requirements evolve. Always document changes for future stewards.

## Legacy Alignment

Follows "Stewardship" and "Governance" pillars. Ensures all governance is teachable, repeatable, and safe for future maintainers.
