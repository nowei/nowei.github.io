import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const timelinePath = path.join(root, "src/app/pages/timeline/timeline.json");
const docsSource = path.join(root, "src/app/pages/projects/docs");
const docsDest = path.join(root, "out/projects/docs");

function collectLocalProjectFiles(node, files = new Set()) {
  if (!node || typeof node !== "object") return files;
  for (const [key, value] of Object.entries(node)) {
    if (
      key === "content" &&
      typeof value === "string" &&
      !value.includes("://")
    ) {
      files.add(value);
    } else if (value && typeof value === "object") {
      collectLocalProjectFiles(value, files);
    }
  }
  return files;
}

const timeline = JSON.parse(fs.readFileSync(timelinePath, "utf8"));
const referenced = [...collectLocalProjectFiles(timeline)].sort();

if (!fs.existsSync(path.join(root, "out"))) {
  console.error("copy-timeline-assets: run after `next build` (missing out/)");
  process.exit(1);
}

fs.mkdirSync(docsDest, { recursive: true });

let copied = 0;
let bytes = 0;
const missing = [];

for (const file of referenced) {
  const src = path.join(docsSource, file);
  const dest = path.join(docsDest, file);
  if (!fs.existsSync(src)) {
    missing.push(file);
    continue;
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  copied += 1;
  bytes += fs.statSync(src).size;
}

const mb = (bytes / (1024 * 1024)).toFixed(1);
console.log(
  `copy-timeline-assets: ${copied} file(s), ${mb} MiB → out/projects/docs/`,
);

if (missing.length) {
  console.warn("copy-timeline-assets: missing source file(s):");
  for (const file of missing) console.warn(`  - ${file}`);
  process.exit(1);
}