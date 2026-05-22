import puppeteer from "puppeteer-core";
import { mkdir } from "node:fs/promises";

const CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE = process.env.BASE_URL || "http://localhost:5173";

const pages = [
  { slug: "01-home", path: "/" },
  { slug: "02-de-essentie", path: "/de-essentie" },
  { slug: "03-uw-private-office", path: "/uw-private-office" },
  { slug: "04-over-ons", path: "/over-ons" },
  { slug: "05-nieuws-opinie", path: "/nieuws-opinie" },
  { slug: "06-contact", path: "/contact" },
  { slug: "07-vaste-vergoeding", path: "/vaste-vergoeding" },
  { slug: "08-mijn-orchestra", path: "/mijn-orchestra" },
];

const langs = process.env.LANGS ? process.env.LANGS.split(",") : ["nl", "en"];

await mkdir("screenshots", { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME_PATH,
  headless: "new",
  args: ["--no-sandbox", "--disable-gpu", "--hide-scrollbars"],
  defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 1 },
});

try {
  for (const lang of langs) {
    for (const { slug, path } of pages) {
      const page = await browser.newPage();
      await page.evaluateOnNewDocument((l) => {
        try {
          localStorage.setItem("orchestra-private-lang", l);
          localStorage.setItem("orchestra-cookie-consent", "accepted");
        } catch {}
      }, lang);

      const url = `${BASE}${path}`;
      try {
        await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
      } catch (e) {
        console.warn(`  goto warning for ${url}: ${e.message}`);
      }

      // Trigger IntersectionObserver-driven animations: scroll through page,
      // then disable animations and force every motion-hidden element visible.
      await page.evaluate(async () => {
        const step = window.innerHeight * 0.8;
        const total = document.documentElement.scrollHeight;
        for (let y = 0; y < total; y += step) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 150));
        }
        window.scrollTo(0, 0);
      });
      // Allow motion/react to settle once everything has been observed.
      await new Promise((r) => setTimeout(r, 600));
      // Belt-and-braces: force any element that is still hidden (opacity 0
      // or transform offset from a stalled animation) to be visible.
      await page.addStyleTag({
        content: `
          *, *::before, *::after {
            animation-duration: 0s !important;
            transition-duration: 0s !important;
          }
        `,
      });
      await new Promise((r) => setTimeout(r, 200));

      const out = `screenshots/${slug}-${lang}.png`;
      await page.screenshot({ path: out, fullPage: true });
      const { width, height } = await page.evaluate(() => ({
        width: document.documentElement.scrollWidth,
        height: document.documentElement.scrollHeight,
      }));
      console.log(`✓ ${out}  (${width}×${height})`);
      await page.close();
    }
  }
} finally {
  await browser.close();
}
