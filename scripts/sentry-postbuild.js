const { execSync } = require('child_process');
const fs = require('fs');

// This script runs after `next build` and will upload source maps to Sentry
// if SENTRY_AUTH_TOKEN, SENTRY_ORG and SENTRY_PROJECT are set in the environment.
// It uses `sentry-cli` (installed via devDependency) via npx so CI doesn't need global binaries.

// Optionally load local Sentry env for testing (create .sentry.env and add to .gitignore)
try {
  const path = require('path');
  const dotenvPath = path.resolve(process.cwd(), '.sentry.env');
  if (fs.existsSync(dotenvPath)) {
    // Lazily require dotenv so it's optional
    try { require('dotenv').config({ path: dotenvPath }); } catch (e) { /* ignore */ }
    console.log('Loaded local .sentry.env for Sentry credentials.');
  }
} catch (e) {
  // ignore
}

const SENTRY_AUTH_TOKEN = process.env.SENTRY_AUTH_TOKEN || process.env.NEXT_PUBLIC_SENTRY_AUTH_TOKEN;
const SENTRY_ORG = process.env.SENTRY_ORG || process.env.NEXT_PUBLIC_SENTRY_ORG;
const SENTRY_PROJECT = process.env.SENTRY_PROJECT || process.env.NEXT_PUBLIC_SENTRY_PROJECT;
let COMMIT = process.env.VERCEL_GIT_COMMIT_SHA || process.env.GITHUB_SHA || process.env.COMMIT_SHA || process.env.SOURCE_VERSION;

// fallback to local git commit if available
if (!COMMIT) {
  try {
    COMMIT = execSync('git rev-parse --short HEAD').toString().trim();
    console.log('Detected local git commit SHA:', COMMIT);
  } catch (e) {
    // ignore - COMMIT may remain undefined
  }
}

if (!SENTRY_AUTH_TOKEN || !SENTRY_ORG || !SENTRY_PROJECT || !COMMIT) {
  console.log('Sentry upload skipped: missing one of SENTRY_AUTH_TOKEN, SENTRY_ORG, SENTRY_PROJECT, or commit SHA.');
  console.log('To enable automatic source-map upload, set these env vars in Vercel (production) or create a local .sentry.env file for testing:');
  console.log('\n  SENTRY_AUTH_TOKEN=sk_xxx\n  SENTRY_ORG=your-org\n  SENTRY_PROJECT=your-project\n');
  process.exit(0);
}

try {
  console.log('Creating Sentry release', COMMIT);
  execSync(`npx sentry-cli releases -o ${SENTRY_ORG} -p ${SENTRY_PROJECT} new ${COMMIT}`, { stdio: 'inherit' });

  console.log('Uploading client-side source maps from .next/static to Sentry');
  // Limit uploads to client-side artifacts to avoid warnings about server-side
  // or test fixtures included in some node_modules paths inside the build.
  // Client bundles and source maps are under .next/static (chunks, media, etc.).
  execSync(
    `npx sentry-cli releases -o ${SENTRY_ORG} -p ${SENTRY_PROJECT} files ${COMMIT} upload-sourcemaps .next/static --rewrite --url-prefix '~/_next/static'`,
    { stdio: 'inherit' }
  );

  console.log('Finalizing release');
  execSync(`npx sentry-cli releases -o ${SENTRY_ORG} -p ${SENTRY_PROJECT} finalize ${COMMIT}`, { stdio: 'inherit' });
  console.log('Sentry sourcemap upload complete');
} catch (err) {
  console.error('Sentry upload failed:', err.message || err);
  // Do not fail the build on Sentry upload errors
  process.exit(0);
}
