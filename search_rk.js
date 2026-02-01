const fs = require("fs");
const path = "prod_chunk.js";
if (!fs.existsSync(path)) {
  console.error("prod_chunk.js not found");
  process.exit(2);
}
const txt = fs.readFileSync(path, "utf8");
const lines = txt.split(/\r?\n/);
const patterns = [/\brK\b/g, /rK=/g, /rK:/g, /rK\(/g, /function\s+rK\b/g];
let found = false;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  patterns.forEach((re) => {
    let m;
    while ((m = re.exec(line)) !== null) {
      found = true;
      const col = m.index + 1;
      console.log(`MATCH pattern=${re} line=${i + 1} col=${col}`);
      console.log(lines[Math.max(0, i - 2)] || "");
      console.log(lines[Math.max(0, i - 1)] || "");
      console.log("> " + line);
      console.log(lines[i + 1] || "");
      console.log(lines[i + 2] || "");
      console.log("---");
    }
  });
}
if (!found) console.log("No matches for rK patterns in prod_chunk.js");
