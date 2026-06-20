#!/usr/bin/env node
const base = process.env.QA_BASE_URL ?? "http://localhost:3001";
const home = await fetch(`${base}/`);
const html = await home.text();
const hrefs = [...html.matchAll(/href="(\/[^"#?]+)/g)].map((m) => m[1]);
const unique = [...new Set(hrefs)].filter((h) => !h.startsWith("/api"));
const broken = [];
for (const h of unique) {
  const res = await fetch(`${base}${h}`, { redirect: "manual" });
  if (res.status >= 400 && res.status !== 307 && res.status !== 308) {
    broken.push({ h, status: res.status });
  }
}
console.log("INTERNAL_LINKS", unique.length, "BROKEN", broken.length);
if (broken.length) {
  console.log(JSON.stringify(broken, null, 2));
  process.exit(1);
}
