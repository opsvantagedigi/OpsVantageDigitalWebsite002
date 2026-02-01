// Server-safe Sentry init. Reads DSN from env; non-intrusive defaults.
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 0.1,
  // Do not send PII by default; keep server config conservative
  sendDefaultPii: false,
});
