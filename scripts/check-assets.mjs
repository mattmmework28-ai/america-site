import fs from "fs";
import path from "path";

const root = path.resolve(import.meta.dirname, "..");
const publicDir = path.join(root, "public");

function collectPathsFromFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  return [...content.matchAll(/"(\/[^"]+\.(png|jpg|jpeg|svg|gif|webp|mp4))"/gi)].map(
    (m) => m[1],
  );
}

const dataPaths = collectPathsFromFile(path.join(root, "src/data/index.ts"));
const componentFiles = fs
  .readdirSync(path.join(root, "src/components"), { recursive: true })
  .filter((f) => f.endsWith(".tsx"))
  .map((f) => path.join(root, "src/components", f));

const componentPaths = componentFiles.flatMap(collectPathsFromFile);
const allPaths = [
  ...new Set([...dataPaths, ...componentPaths, "/videos/hero-poster.jpg"]),
];

const missing = [];
for (const p of allPaths) {
  const file = path.join(publicDir, p.replace(/^\//, "").replace(/\//g, path.sep));
  if (!fs.existsSync(file)) missing.push(p);
}

if (missing.length) {
  console.error("Missing assets:");
  missing.forEach((p) => console.error("  ", p));
  process.exit(1);
}

console.log(`All ${allPaths.length} referenced public assets exist.`);
