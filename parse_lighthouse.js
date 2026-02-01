const fs = require("fs");
const path = "lighthouse.report.json";
if (!fs.existsSync(path)) {
  console.error("no report");
  process.exit(2);
}
const j = JSON.parse(fs.readFileSync(path, "utf8"));
let found = [];
function walk(o) {
  if (!o || typeof o !== "object") return;
  for (const k of Object.keys(o)) {
    const v = o[k];
    if (typeof v === "string") {
      if (/Minified React/.test(v) || /\brK\b/.test(v))
        found.push({ key: k, value: v });
    }
    walk(v);
  }
}
walk(j);
if (found.length) {
  console.log("matches:");
  found.forEach((m, i) => {
    console.log(i + 1, m.key, "\n", m.value, "\n---");
  });
} else {
  console.log("no matches for Minified React or rK in Lighthouse JSON");
}
