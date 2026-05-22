import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import { chromium } from "@playwright/test";

const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;
const OUTPUT_DIR = resolve(process.cwd(), "screenshots");

const routes = [
  { lang: "nl", slug: "home", path: "/" },
  { lang: "nl", slug: "private-office", path: "/uw-private-office" },
  { lang: "nl", slug: "about", path: "/over-ons" },
  { lang: "nl", slug: "fixed-fee", path: "/vaste-vergoeding" },
  { lang: "nl", slug: "contact", path: "/contact" },
  { lang: "nl", slug: "news", path: "/nieuws" },
  { lang: "en", slug: "home", path: "/en" },
  { lang: "en", slug: "private-office", path: "/en/your-private-office" },
  { lang: "en", slug: "about", path: "/en/about" },
  { lang: "en", slug: "fixed-fee", path: "/en/fixed-fee" },
  { lang: "en", slug: "contact", path: "/en/contact" },
  { lang: "en", slug: "news", path: "/en/news" },
];

function startPreviewServer() {
  return new Promise((resolvePromise, rejectPromise) => {
    const proc = spawn(
      "npx",
      ["vite", "preview", "--port", String(PORT), "--strictPort"],
      { stdio: ["ignore", "pipe", "pipe"] }
    );

    let resolved = false;
    const timeout = setTimeout(() => {
      if (!resolved) {
        proc.kill("SIGTERM");
        rejectPromise(new Error("vite preview did not start within 30s"));
      }
    }, 30000);

    proc.stdout.on("data", (chunk) => {
      const text = chunk.toString();
      if (!resolved && /Local:\s+http/i.test(text)) {
        resolved = true;
        clearTimeout(timeout);
        resolvePromise(proc);
      }
    });

    proc.stderr.on("data", (chunk) => {
      process.stderr.write(`[preview] ${chunk}`);
    });

    proc.on("exit", (code) => {
      if (!resolved) {
        clearTimeout(timeout);
        rejectPromise(new Error(`vite preview exited early with code ${code}`));
      }
    });
  });
}

const FORCE_VISIBLE_CSS = `
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-delay: 0ms !important;
    transition-duration: 0.001ms !important;
    transition-delay: 0ms !important;
  }
  /* Motion sets inline styles like opacity:0 + transform:translate3d(...) for
     scroll-triggered reveals. Force them into their finished state so full-page
     screenshots don't capture pre-animation opacity:0 content. */
  [style*="opacity: 0"] { opacity: 1 !important; }
  [style*="translate3d"] { transform: none !important; }
`;

async function preparePageForCapture(page) {
  await page.addStyleTag({ content: FORCE_VISIBLE_CSS });
  // Give layout/paint a beat to flush after the override, then settle at top.
  await page.waitForTimeout(300);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(150);
}

async function main() {
  await mkdir(resolve(OUTPUT_DIR, "nl"), { recursive: true });
  await mkdir(resolve(OUTPUT_DIR, "en"), { recursive: true });

  console.log("→ Starting vite preview...");
  const previewProc = await startPreviewServer();

  const cleanup = () => {
    try {
      previewProc.kill("SIGTERM");
    } catch {}
  };
  process.on("exit", cleanup);
  process.on("SIGINT", () => {
    cleanup();
    process.exit(130);
  });
  process.on("SIGTERM", () => {
    cleanup();
    process.exit(143);
  });

  try {
    console.log("→ Launching Chromium...");
    const browser = await chromium.launch();
    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 2,
    });
    const page = await context.newPage();

    for (const route of routes) {
      const url = `${BASE_URL}${route.path}`;
      const outPath = resolve(OUTPUT_DIR, route.lang, `${route.slug}.png`);
      process.stdout.write(`→ ${route.lang}/${route.slug} ... `);
      await page.goto(url, { waitUntil: "networkidle" });
      await preparePageForCapture(page);
      await page.screenshot({ path: outPath, fullPage: true });
      console.log("✓");
    }

    await browser.close();
    console.log(`\n✓ ${routes.length} screenshots written to ./screenshots/`);
  } finally {
    cleanup();
  }
}

main().catch((err) => {
  console.error("\n✗ Screenshot capture failed:", err.message);
  process.exit(1);
});
