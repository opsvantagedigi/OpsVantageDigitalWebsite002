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

try {
  process.env.VERCEL_GIT_COMMIT_SHA = cp.execSync('git rev-parse HEAD').toString().trim();
} catch (err) {
  // ignore
}

const org = process.env.SENTRY_ORG;
const project = process.env.SENTRY_PROJECT;
const release = process.env.VERCEL_GIT_COMMIT_SHA;
if (!org || !project || !release) {
  console.error('Missing SENTRY_ORG, SENTRY_PROJECT, or VERCEL_GIT_COMMIT_SHA in environment');
  process.exit(1);
}

try {
  const out = cp.execSync(`npx sentry-cli releases -o ${org} -p ${project} files ${release} list`, {encoding: 'utf8'});
  console.log(out);
} catch (err) {
  if (err.stdout) console.log(err.stdout);
  if (err.stderr) console.error(err.stderr);
  process.exit(err.status || 1);
}
