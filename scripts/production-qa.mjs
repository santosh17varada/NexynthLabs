#!/usr/bin/env node
/**
 * Production readiness QA orchestrator.
 * Starts `next start` on an ephemeral port, runs regression + viewport + phase3 HTTP checks.
 *
 * Usage: npm run qa:production
 * Or:    QA_BASE_URL=https://staging.example.com node scripts/production-qa.mjs
 */

import { spawn } from "node:child_process";
import { createServer } from "node:net";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

async function getFreePort() {
  return new Promise((resolve, reject) => {
    const server = createServer();
    server.listen(0, () => {
      const { port } = server.address();
      server.close(() => resolve(port));
    });
    server.on("error", reject);
  });
}

function runNode(script, env = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [script], {
      cwd: root,
      env: { ...process.env, ...env },
      stdio: "inherit",
      shell: process.platform === "win32",
    });
    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${script} exited with ${code}`));
    });
  });
}

function startServer(port) {
  return new Promise((resolve, reject) => {
    const child = spawn(
      process.platform === "win32" ? "npm.cmd" : "npm",
      ["run", "start"],
      {
        cwd: root,
        env: { ...process.env, PORT: String(port) },
        stdio: ["ignore", "pipe", "pipe"],
        shell: process.platform === "win32",
      },
    );

    let ready = false;
    const timeout = setTimeout(() => {
      if (!ready) reject(new Error("Server start timeout"));
    }, 60000);

    const onData = (chunk) => {
      const text = chunk.toString();
      if (text.includes("Ready") || text.includes("started server")) {
        ready = true;
        clearTimeout(timeout);
        resolve(child);
      }
    };

    child.stdout?.on("data", onData);
    child.stderr?.on("data", onData);
    child.on("exit", (code) => {
      if (!ready) reject(new Error(`Server exited early (${code})`));
    });
  });
}

async function waitForServer(base) {
  for (let i = 0; i < 30; i += 1) {
    try {
      const res = await fetch(base, { redirect: "manual" });
      if (res.status === 200) return;
    } catch {
      // retry
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Server not ready at ${base}`);
}

async function main() {
  const externalBase = process.env.QA_BASE_URL;
  let serverProcess;
  let base = externalBase;

  console.log("=== PRODUCTION READINESS QA ===\n");

  if (!externalBase) {
    const port = await getFreePort();
    base = `http://localhost:${port}`;
    console.log(`Starting production server on ${base}`);
    serverProcess = await startServer(port);
    await waitForServer(base);
  } else {
    console.log(`Using external base ${base}`);
  }

  const env = { QA_BASE_URL: base };

  try {
    await runNode("scripts/regression-qa-check.mjs", env);
    await runNode("scripts/phase3-qa-check.mjs", env);
    await runNode("scripts/mobile-viewport-qa.mjs", env);
    console.log("\n=== ALL PRODUCTION QA CHECKS PASSED ===");
  } finally {
    if (serverProcess) {
      serverProcess.kill();
    }
  }
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
