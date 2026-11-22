/**
 * Next static export emits route.html; GitHub Pages serves /route from route/index.html.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "out");
const spaPathsFile = path.join(root, "src/lib/spaPaths.ts");

function loadSpaPaths() {
  const src = fs.readFileSync(spaPathsFile, "utf8");
  const block =
    src.match(/export const SPA_CLIENT_PATHS = \[([\s\S]*?)\] as const/)?.[1] ??
    "";
  return [...block.matchAll(/"([^"]+)"/g)].map((m) => m[1]);
}

function pathToSegments(routePath) {
  return routePath.replace(/^\//, "").split("/").filter(Boolean);
}

function routeHtmlSource(segments) {
  return path.join(outDir, ...segments) + ".html";
}

function routeIndexTarget(segments) {
  return path.join(outDir, ...segments, "index.html");
}

for (const routePath of loadSpaPaths()) {
  const segments = pathToSegments(routePath);
  const source = routeHtmlSource(segments);
  const target = routeIndexTarget(segments);

  if (!fs.existsSync(source)) {
    console.warn(`export-spa-route-html: missing ${source}`);
    continue;
  }

  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.renameSync(source, target);
  console.log(`export-spa-route-html: ${routePath} → ${path.relative(outDir, target)}`);
}