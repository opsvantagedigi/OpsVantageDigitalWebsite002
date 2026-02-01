const fs = require("fs");
const cp = require("child_process");
const path = require("path");

const envFile = path.resolve(process.cwd(), "vercel.env");
if (fs.existsSync(envFile)) {
  const content = fs.readFileSync(envFile, "utf8");
  content.split(/\r?\n/).forEach((line) => {
    const l = line.trim();
    if (!l || l.startsWith("#")) return;
    const idx = l.indexOf("=");
    if (idx === -1) return;
    const key = l.slice(0, idx);
    const val = l.slice(idx + 1);
    process.env[key] = val;
  });
}

try {
  process.env.VERCEL_GIT_COMMIT_SHA = cp
    .execSync("git rev-parse HEAD")
    .toString()
    .trim();
} catch (err) {
  // Fall back to existing values if git not available
}

// Run the standard postbuild uploader
require("./sentry-postbuild");
