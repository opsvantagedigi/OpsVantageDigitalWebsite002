# Audit Workflow: Lighthouse & Playwright

## Purpose

Document the steps, governance, and rollback plan for running audits on OpsVantage Digital.

---

## 1. Lighthouse Audit

- **Run:** `npx lighthouse http://localhost:3000 --output=json --output-path=./lighthouse.report.json --chrome-flags='--headless'`
- **Review:** Open `lighthouse.report.json` and check scores for Performance, Accessibility, Best Practices, SEO.
- **Governance:** If any score < 90, document the issue and create a remediation PR.
- **Rollback:** If audit fails due to a new change, revert the PR and re-run audit.

## 2. Playwright Audit

- **Run:** `npx playwright test --reporter=html`
- **Review:** Open `playwright-report/index.html` for test results.
- **Governance:** All tests must pass before deploy. If any fail, document and fix before proceeding.
- **Rollback:** If a test fails due to a new change, revert the PR and re-run tests.

---

## Maintenance Note

Update this workflow as audit tools or governance requirements evolve. Always document changes for future stewards.

## Legacy Alignment

Follows "Stewardship" and "Governance" pillars. Ensures all audits are teachable, repeatable, and safe for future maintainers.
