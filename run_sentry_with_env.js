const fs = require('fs');
const { spawn } = require('child_process');
const path = require('path');
const envPath = path.join(process.cwd(), 'vercel.env');
if (!fs.existsSync(envPath)) { console.error('vercel.env not found at', envPath); process.exit(2); }
const raw = fs.readFileSync(envPath, 'utf8');
raw.split(/\r?\n/).forEach(line => {
  if (!line) return;
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith('#')) return;
  const kv = trimmed.split('=', 2);
  if (kv.length !== 2) return;
  process.env[kv[0]] = kv[1];
});
console.log('Loaded environment variables from vercel.env (hiding token values).');
['SENTRY_AUTH_TOKEN','SENTRY_ORG','SENTRY_PROJECT','VERCEL_GIT_COMMIT_SHA','GIT_COMMIT_SHA'].forEach(k=>{
  if (process.env[k]) console.log(k+':', k.includes('TOKEN')? '<redacted>':process.env[k]);
});
// If no commit SHA provided by Vercel/GitHub, fall back to local git HEAD
if (!process.env.VERCEL_GIT_COMMIT_SHA && !process.env.GITHUB_SHA && !process.env.COMMIT_SHA) {
  try {
    const sha = require('child_process').execSync('git rev-parse HEAD', { cwd: process.cwd() }).toString().trim();
    if (sha) {
      process.env.VERCEL_GIT_COMMIT_SHA = sha;
      console.log('Detected local git commit SHA and set VERCEL_GIT_COMMIT_SHA:', sha);
    }
  } catch (e) {
    console.log('Could not detect local git commit SHA:', e.message || e);
  }
}
console.log('Spawning uploader: node scripts/sentry-postbuild.js');
const child = spawn(process.execPath, ['scripts/sentry-postbuild.js'], {stdio: 'inherit', env: process.env});
child.on('exit', code => process.exit(code));
child.on('error', err => { console.error('Uploader spawn error:', err); process.exit(3); });
