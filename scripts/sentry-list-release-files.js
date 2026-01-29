const fs = require('fs');
const cp = require('child_process');
const path = require('path');

const envFile = path.resolve(process.cwd(), 'vercel.env');
if (fs.existsSync(envFile)) {
  const content = fs.readFileSync(envFile, 'utf8');
  content.split(/\r?\n/).forEach((line) => {
    const l = line.trim();
    if (!l || l.startsWith('#')) return;
    const idx = l.indexOf('=');
    if (idx === -1) return;
    const key = l.slice(0, idx);
    const val = l.slice(idx + 1);
    process.env[key] = val;
  });
}

const release = process.argv[2];
if (!release) {
  console.error('Usage: node scripts/sentry-list-release-files.js <release>');
  process.exit(1);
}

const org = process.env.SENTRY_ORG;
const project = process.env.SENTRY_PROJECT;
if (!org || !project) {
  console.error('SENTRY_ORG or SENTRY_PROJECT not set in vercel.env');
  process.exit(1);
}

try {
  cp.execSync(`npx sentry-cli releases -o ${org} -p ${project} files ${release} list`, { stdio: 'inherit' });
} catch (err) {
  console.error('sentry-cli failed:', err.message || err);
  process.exit(1);
}
