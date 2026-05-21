import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");
const OUT = path.join(ROOT, "spring-page");

async function copyDir(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

async function main() {
  try {
    await fs.access(path.join(DIST, "index.html"));
  } catch {
    console.error("dist/ not found. Run npm run build first.");
    process.exit(1);
  }

  await fs.rm(OUT, { recursive: true, force: true });
  await copyDir(DIST, OUT);
  console.log(`Synced dist/ -> spring-page/`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
