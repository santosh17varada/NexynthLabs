#!/usr/bin/env node
/**
 * Runs Lighthouse against a local production server.
 * Usage: npm run build && npm run start (separate terminal) && node scripts/lighthouse-audit.mjs
 * Or: node scripts/lighthouse-audit.mjs --start (builds, starts server, audits, stops)
 */

import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const port = Number(process.env.LH_PORT ?? 3010);
const baseUrl = `http://127.0.0.1:${port}`;
const routes = ["/", "/ai", "/getpandit"];
const shouldStart = process.argv.includes("--start");

function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: root,
      stdio: "inherit",
      shell: process.platform === "win32",
      ...options,
    });
    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) resolve(undefined);
      else reject(new Error(`${command} ${args.join(" ")} exited with code ${code}`));
    });
  });
}

function waitForServer(url, timeoutMs = 120_000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tick = async () => {
      try {
        const response = await fetch(url, { redirect: "manual" });
        if (response.ok || response.status === 304 || response.status < 500) {
          resolve(undefined);
          return;
        }
      } catch {
        // retry
      }

      if (Date.now() - start > timeoutMs) {
        reject(new Error(`Server did not become ready at ${url}`));
        return;
      }

      setTimeout(tick, 1000);
    };

    tick();
  });
}

async function safeKillChrome(chrome) {
  try {
    await chrome.kill();
  } catch (error) {
    if (error?.code === "EBUSY" && process.platform === "win32") {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      try {
        await chrome.kill();
      } catch {
        // Best-effort cleanup on Windows file locks.
      }
      return;
    }
    throw error;
  }
}

async function auditRoute(lighthouse, chromePort, url, formFactor) {
  const result = await lighthouse(
    url,
    {
      logLevel: "error",
      output: "json",
      onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
      formFactor,
      screenEmulation:
        formFactor === "mobile"
          ? { mobile: true, width: 412, height: 823, deviceScaleFactor: 2.625, disabled: false }
          : { mobile: false, width: 1350, height: 940, deviceScaleFactor: 1, disabled: false },
      port: chromePort,
    },
    undefined,
    undefined,
  );

  const lhr = result.lhr;
  const scores = Object.fromEntries(
    Object.entries(lhr.categories).map(([key, category]) => [key, Math.round(category.score * 100)]),
  );

  const audits = lhr.audits;
  const metrics = {
    lcpMs: audits["largest-contentful-paint"]?.numericValue ?? null,
    cls: audits["cumulative-layout-shift"]?.numericValue ?? null,
    inpMs: audits["interaction-to-next-paint"]?.numericValue ?? audits["total-blocking-time"]?.numericValue ?? null,
    tbtMs: audits["total-blocking-time"]?.numericValue ?? null,
    fcpMs: audits["first-contentful-paint"]?.numericValue ?? null,
  };

  return { url, formFactor, scores, metrics };
}

async function main() {
  let serverProcess;

  if (shouldStart) {
    await run("npm", ["run", "build"]);
    serverProcess = spawn("npm", ["run", "start", "--", "-p", String(port)], {
      cwd: root,
      stdio: "inherit",
      shell: process.platform === "win32",
    });
    await waitForServer(baseUrl);
  } else {
    await waitForServer(baseUrl);
  }

  const lighthouse = (await import("lighthouse")).default;
  const chromeLauncher = await import("chrome-launcher");
  const chrome = await chromeLauncher.launch({
    chromeFlags: ["--headless=new", "--no-sandbox", "--disable-dev-shm-usage"],
  });

  const reports = [];
  try {
    for (const route of routes) {
      for (const formFactor of ["mobile", "desktop"]) {
        const report = await auditRoute(
          lighthouse,
          chrome.port,
          `${baseUrl}${route}`,
          formFactor,
        );
        reports.push(report);
        console.log(
          `[${formFactor}] ${route} performance=${report.scores.performance} accessibility=${report.scores.accessibility} seo=${report.scores.seo} LCP=${Math.round(report.metrics.lcpMs)}ms CLS=${report.metrics.cls?.toFixed(3)}`,
        );
      }
    }
  } finally {
    await safeKillChrome(chrome);
  }

  const outDir = path.join(root, ".lighthouse");
  await mkdir(outDir, { recursive: true });
  const summaryPath = path.join(outDir, "summary.json");
  await writeFile(summaryPath, JSON.stringify({ generatedAt: new Date().toISOString(), reports }, null, 2));
  console.log(`\nWrote ${summaryPath}`);

  if (serverProcess) {
    serverProcess.kill("SIGTERM");
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
