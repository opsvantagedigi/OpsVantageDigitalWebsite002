const { execSync } = require('child_process');
const fs = require('fs');

// This script runs after `next build` and will upload source maps to Sentry
// if SENTRY_AUTH_TOKEN, SENTRY_ORG and SENTRY_PROJECT are set in the environment.
// It uses `sentry-cli` (installed via devDependency) via npx so CI doesn't need global binaries.

const SENTRY_AUTH_TOKEN = process.env.SENTRY_AUTH_TOKEN || process.env.NEXT_PUBLIC_SENTRY_AUTH_TOKEN;
const SENTRY_ORG = process.env.SENTRY_ORG || process.env.NEXT_PUBLIC_SENTRY_ORG;
const SENTRY_PROJECT = process.env.SENTRY_PROJECT || process.env.NEXT_PUBLIC_SENTRY_PROJECT;
const COMMIT = process.env.VERCEL_GIT_COMMIT_SHA || process.env.GITHUB_SHA || process.env.COMMIT_SHA;

if (!SENTRY_AUTH_TOKEN || !SENTRY_ORG || !SENTRY_PROJECT || !COMMIT) {
  console.log('Sentry upload skipped: missing one of SENTRY_AUTH_TOKEN, SENTRY_ORG, SENTRY_PROJECT, or commit SHA.');
  console.log('Set these in Vercel and redeploy to enable automatic source-map upload.');
  process.exit(0);
}

try {
  console.log('Creating Sentry release', COMMIT);
  execSync(`npx sentry-cli releases -o ${SENTRY_ORG} -p ${SENTRY_PROJECT} new ${COMMIT}`, { stdio: 'inherit' });

  console.log('Uploading source maps from .next to Sentry');
  execSync(
    `npx sentry-cli releases -o ${SENTRY_ORG} -p ${SENTRY_PROJECT} files ${COMMIT} upload-sourcemaps .next --rewrite --url-prefix '~/_next'`,
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
