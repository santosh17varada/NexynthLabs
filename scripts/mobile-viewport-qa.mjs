#!/usr/bin/env node
/**
 * Mobile viewport regression — horizontal overflow + header/footer at key widths.
 * Uses Playwright when installed; otherwise runs HTTP + responsive markup checks.
 *
 * Full overflow checks: npx playwright install chromium && npm run qa:viewport
 */

const base = process.env.QA_BASE_URL ?? "http://localhost:3001";
const widths = [360, 390, 430, 768, 1024, 1280];
const pages = [
  "/",
  "/contact",
  "/faq",
  "/getpandit",
  "/request-proposal",
  "/partners/portal",
  "/media-kit",
  "/developers",
];

const responsiveMarkers = [
  "viewport",
  "max-w-",
  "sm:",
  "lg:",
  "min-h-11",
  "mobile-cta-stack",
];

async function liteViewportChecks() {
  console.log("=== MOBILE VIEWPORT QA (lite — no Playwright) ===");
  console.log("BASE", base);

  let failures = 0;

  try {
    const ping = await fetch(base, { redirect: "manual" });
    if (ping.status !== 200) {
      console.error(`Server not reachable at ${base} (${ping.status})`);
      process.exit(1);
    }
  } catch (error) {
    console.error(`Server unreachable at ${base}:`, error.message);
    process.exit(1);
  }

  for (const path of pages) {
    const res = await fetch(`${base}${path}`);
    const html = await res.text();

    if (res.status !== 200) {
      failures += 1;
      console.error("FAIL", `${path} HTTP ${res.status}`);
      continue;
    }

    if (!html.includes('name="viewport"') && !html.includes("viewport")) {
      failures += 1;
      console.error("FAIL", `${path} missing viewport meta`);
      continue;
    }

    const markerHits = responsiveMarkers.filter((m) => html.includes(m)).length;
    if (markerHits < 3) {
      failures += 1;
      console.error("FAIL", `${path} weak responsive markers (${markerHits})`);
      continue;
    }

    if (!html.includes("<header") && !html.includes("header")) {
      failures += 1;
      console.error("FAIL", `${path} missing header`);
      continue;
    }

    if (!html.includes("<footer") && !html.includes("footer")) {
      failures += 1;
      console.error("FAIL", `${path} missing footer`);
      continue;
    }

    if (/overflow-x:\s*scroll/.test(html)) {
      failures += 1;
      console.error("FAIL", `${path} inline overflow-x:scroll detected`);
      continue;
    }

    console.log("PASS", `${path} responsive markup OK`);
  }

  console.log("\n=== SUMMARY ===");
  if (failures > 0) {
    console.error(`FAILED: ${failures} (install Playwright for pixel overflow checks)`);
    process.exit(1);
  }
  console.log("All lite viewport checks passed");
  console.log(
    "Tip: npx playwright install chromium && npm run qa:viewport:playwright for full checks",
  );
}

async function playwrightViewportChecks() {
  const { chromium } = await import("playwright");
  const browser = await chromium.launch({ headless: true });
  const results = [];

  for (const w of widths) {
    const context = await browser.newContext({
      viewport: { width: w, height: 800 },
    });
    const page = await context.newPage();

    for (const path of pages) {
      await page.goto(`${base}${path}`, {
        waitUntil: "domcontentloaded",
        timeout: 30000,
      });
      const m = await page.evaluate(() => {
        const el = document.documentElement;
        const before = window.scrollX;
        window.scrollTo(5000, 0);
        const userCanScrollX = window.scrollX > 0;
        window.scrollTo(before, 0);
        return {
          overflow: userCanScrollX,
          scrollWidth: el.scrollWidth,
          clientWidth: el.clientWidth,
          header: Boolean(document.querySelector("header")),
          footer: Boolean(document.querySelector("footer")),
        };
      });
      results.push({ width: w, path, ...m });
    }
    await context.close();
  }

  await browser.close();

  const fails = results.filter((r) => r.overflow || !r.header || !r.footer);
  console.log(
    JSON.stringify(
      {
        mode: "playwright",
        checked: results.length,
        fails: fails.length,
        failsDetail: fails,
      },
      null,
      2,
    ),
  );

  if (fails.length > 0) process.exit(1);
  console.log("All viewport checks passed");
}

async function main() {
  try {
    await import("playwright");
    console.log("=== MOBILE VIEWPORT QA (Playwright) ===");
    console.log("BASE", base);
    await playwrightViewportChecks();
  } catch {
    await liteViewportChecks();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
