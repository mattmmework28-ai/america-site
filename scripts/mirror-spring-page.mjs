import { chromium } from "playwright";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = path.join(ROOT, "spring-page");
const ORIGIN = "https://spring.mmeink.com";

function toLocalPath(urlString) {
  const url = new URL(urlString);
  if (url.origin !== ORIGIN) return null;

  let pathname = decodeURIComponent(url.pathname);
  if (pathname === "/") return path.join(OUT_DIR, "index.html");
  if (pathname.endsWith("/")) pathname += "index.html";

  return path.join(OUT_DIR, ...pathname.split("/").filter(Boolean));
}

async function writeFileEnsuringDir(filePath, data) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, data);
}

async function downloadAsset(request, urlString, downloaded) {
  if (!urlString.startsWith(ORIGIN) || downloaded.has(urlString)) return;
  downloaded.add(urlString);

  const localPath = toLocalPath(urlString);
  if (!localPath || localPath.endsWith(`${path.sep}index.html`) && urlString !== `${ORIGIN}/`) {
    // skip writing index.html from asset downloads; we save rendered HTML separately
    if (urlString === `${ORIGIN}/` || urlString === ORIGIN) return;
  }

  try {
    await fs.access(localPath);
    return;
  } catch {
    // not downloaded yet
  }

  const response = await request.get(urlString);
  if (!response.ok()) {
    console.warn(`Skipped (${response.status()}): ${urlString}`);
    return;
  }

  const body = await response.body();
  await writeFileEnsuringDir(localPath, body);
  console.log(`Saved: ${urlString}`);
}

async function collectCssUrls(downloadQueue) {
  const cssFiles = [];

  async function walk(dir) {
    let entries;
    try {
      entries = await fs.readdir(dir, { withFileTypes: true });
    } catch {
      return;
    }

    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) await walk(full);
      else if (entry.name.endsWith(".css")) cssFiles.push(full);
    }
  }

  await walk(OUT_DIR);

  for (const cssFile of cssFiles) {
    const css = await fs.readFile(cssFile, "utf8");
    const matches = css.matchAll(/url\(["']?([^"')]+)["']?\)/g);
    for (const match of matches) {
      const assetPath = match[1];
      if (assetPath.startsWith("data:")) continue;
      try {
        downloadQueue.add(new URL(assetPath, ORIGIN).href);
      } catch {
        // ignore invalid URLs
      }
    }
  }
}

function rewriteHtml(html) {
  return html
    .replaceAll("https://spring.mmeink.com/", "./")
    .replaceAll('href="/', 'href="./')
    .replaceAll('src="/', 'src="./')
    .replace(/url\(&quot;\/([^&]+)&quot;\)/g, "url('./$1')")
    .replace(/url\(["']?\/([^"')]+)["']?\)/g, "url('./$1')");
}

async function main() {
  await fs.rm(OUT_DIR, { recursive: true, force: true });
  await fs.mkdir(OUT_DIR, { recursive: true });

  const downloadQueue = new Set();
  const downloaded = new Set();

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  page.on("response", (response) => {
    const url = response.url();
    if (url.startsWith(ORIGIN) && response.ok()) {
      downloadQueue.add(url);
    }
  });

  console.log("Loading page...");
  await page.goto(ORIGIN, {
    waitUntil: "networkidle",
    timeout: 120000,
  });

  await page.waitForSelector("#root nav", { timeout: 30000 });

  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let total = 0;
      const distance = 400;
      const timer = setInterval(() => {
        window.scrollBy(0, distance);
        total += distance;
        if (total >= document.body.scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });

  await page.waitForTimeout(3000);

  const domUrls = await page.evaluate(() => {
    const urls = new Set();

    for (const el of document.querySelectorAll(
      "img[src], source[src], link[rel='stylesheet'][href], script[src]",
    )) {
      const value = el.getAttribute("src") || el.getAttribute("href");
      if (value) urls.add(value);
    }

    for (const el of document.querySelectorAll("[style*='url']")) {
      const style = el.getAttribute("style") ?? "";
      const match = style.match(/url\(["']?([^"')]+)["']?\)/);
      if (match) urls.add(match[1]);
    }

    return [...urls];
  });

  for (const relativeOrAbsolute of domUrls) {
    try {
      downloadQueue.add(new URL(relativeOrAbsolute, ORIGIN).href);
    } catch {
      // ignore
    }
  }

  console.log(`Downloading ${downloadQueue.size} assets...`);
  for (const url of downloadQueue) {
    await downloadAsset(context.request, url, downloaded);
  }

  await collectCssUrls(downloadQueue);
  for (const url of downloadQueue) {
    await downloadAsset(context.request, url, downloaded);
  }

  const html = rewriteHtml(await page.content());
  await fs.writeFile(path.join(OUT_DIR, "index.html"), html, "utf8");
  console.log("Saved rendered index.html");

  await browser.close();

  console.log(`\nDone. Output: ${OUT_DIR}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
