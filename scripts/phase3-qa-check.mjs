#!/usr/bin/env node
/**
 * Phase 3 final QA — static checks + optional HTTP smoke tests.
 * Usage: npm run build && npm run start (separate terminal) && node scripts/phase3-qa-check.mjs
 * Or: QA_BASE_URL=https://staging.example.com node scripts/phase3-qa-check.mjs
 */

import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const base = process.env.QA_BASE_URL ?? "http://localhost:3000";
const runHttp = process.env.QA_SKIP_HTTP !== "1";

const phase3Routes = [
  "/company/founder",
  "/technology",
  "/roadmap",
  "/status",
  "/security",
  "/trust",
  "/resources",
  "/guides",
  "/ai-readiness-score",
  "/book-consultation",
  "/partners/portal",
  "/innovation-lab",
  "/events",
  "/client-success",
  "/testimonials",
  "/faq",
  "/media-kit",
  "/developers",
  "/request-proposal",
  "/careers/culture",
  "/products/ecosystem",
];

const phase3SeoPages = [
  "/company/founder",
  "/technology",
  "/roadmap",
  "/status",
  "/security",
  "/trust",
  "/resources",
  "/guides",
  "/ai-readiness-score",
  "/book-consultation",
  "/partners/portal",
  "/innovation-lab",
  "/events",
  "/client-success",
  "/testimonials",
  "/faq",
  "/media-kit",
  "/developers",
  "/request-proposal",
  "/careers/culture",
  "/products/ecosystem",
];

const publicLoginProbeRoutes = ["/login", "/register", "/signup", "/admin"];

const navPhase3Hrefs = [
  "/technology",
  "/innovation-lab",
  "/roadmap",
  "/status",
  "/company/founder",
];

const footerPhase3Hrefs = [
  "/resources",
  "/guides",
  "/ai-readiness-score",
  "/book-consultation",
  "/security",
  "/trust",
];

let failures = 0;

function fail(msg) {
  failures += 1;
  console.error("FAIL", msg);
}

function pass(msg) {
  console.log("PASS", msg);
}

function staticChecks() {
  console.log("=== STATIC CHECKS ===");

  const sitemap = readFileSync(join(root, "src/app/sitemap.ts"), "utf8");
  for (const route of phase3Routes) {
    const needle = `"${route}"`;
    if (!sitemap.includes(needle)) {
      fail(`Sitemap missing ${route}`);
    } else {
      pass(`Sitemap includes ${route}`);
    }
  }

  const seo = readFileSync(join(root, "src/lib/seo.ts"), "utf8");
  const site = readFileSync(join(root, "src/config/site.ts"), "utf8");

  const seoKeys = [
    "founderStory",
    "technologyExcellence",
    "publicRoadmap",
    "statusPage",
    "securityCenter",
    "trustCenter",
    "knowledgeResources",
    "knowledgeGuides",
    "aiReadinessScore",
    "bookConsultation",
    "partnerPortal",
    "innovationLab",
    "events",
    "clientSuccess",
    "testimonials",
    "faq",
    "mediaKit",
    "developers",
    "requestProposal",
    "careersCulture",
    "productEcosystem",
  ];

  for (const key of seoKeys) {
    if (!seo.includes(`${key}:`)) {
      fail(`PAGE_PATHS missing SEO key ${key}`);
    } else if (!site.includes(`${key}:`)) {
      fail(`siteConfig.seo.pages missing ${key}`);
    } else {
      pass(`SEO key ${key} in seo.ts and site.ts`);
    }
  }

  const nav = readFileSync(join(root, "src/config/header-navigation.ts"), "utf8");
  if (!nav.includes('label: "Innovation Lab"')) {
    fail("Main nav missing Innovation Lab");
  } else {
    pass("Main nav includes Innovation Lab");
  }

  for (const href of ["/technology", "/roadmap", "/status", "/company/founder", "/book-consultation"]) {
    if (!nav.includes(`href: "${href}"`) && !nav.includes(`href: '${href}'`)) {
      fail(`Header nav missing ${href}`);
    }
  }

  const middleware = readFileSync(join(root, "src/middleware.ts"), "utf8");
  if (!middleware.includes("/admin/login")) {
    fail("Admin login route not in middleware");
  }
  if (middleware.includes('pathname === "/login"')) {
    fail("Public /login route in middleware — unexpected");
  } else {
    pass("No public /login in middleware (admin-only)");
  }

  const fakeClaimPatterns = [
    /SOC 2 certified/i,
    /ISO 27001 certified/i,
    /\d+\s*million\s+users/i,
    /100%\s*uptime/i,
    /live monitoring enabled/i,
  ];

  const configDir = join(root, "src/config");
  const configFiles = [
    "status-page.ts",
    "security-trust.ts",
    "getpandit-metrics.ts",
    "innovation-lab.ts",
  ];

  for (const file of configFiles) {
    const content = readFileSync(join(configDir, file), "utf8");
    for (const pattern of fakeClaimPatterns) {
      if (pattern.test(content)) {
        fail(`Possible overclaim in ${file}: ${pattern}`);
      }
    }
  }
  pass("No obvious fake-claim patterns in key config files");

  const mobilePatterns = [
    "min-h-11",
    "mobile-cta-stack",
    "sm:grid-cols",
    "grid-cols-1",
    "flex-wrap",
  ];
  const componentSamples = [
    "src/components/book-consultation/BookConsultationForm.tsx",
    "src/components/innovation-lab/InnovationLabItemCard.tsx",
    "src/components/careers/CultureSections.tsx",
    "src/components/partner-portal/PartnerPortalSections.tsx",
  ];

  for (const rel of componentSamples) {
    const content = readFileSync(join(root, rel), "utf8");
    const hits = mobilePatterns.filter((p) => content.includes(p)).length;
    if (hits < 2) {
      fail(`Mobile patterns sparse in ${rel}`);
    } else {
      pass(`Mobile-responsive patterns in ${rel}`);
    }
  }
}

async function httpChecks() {
  console.log("\n=== HTTP CHECKS ===");

  let reachable = false;
  try {
    const ping = await fetch(base, { redirect: "manual" });
    reachable = ping.status > 0;
  } catch {
    console.log("SKIP HTTP — server not reachable at", base);
    return;
  }

  if (!reachable) return;

  const allRoutes = [
    "/",
    "/about",
    "/services",
    "/ai-showcase",
    "/partners",
    "/contact",
    "/careers",
    ...phase3Routes,
    "/robots.txt",
    "/sitemap.xml",
  ];

  for (const path of allRoutes) {
    const res = await fetch(`${base}${path}`, { redirect: "manual" });
    if (res.status !== 200) {
      fail(`HTTP ${res.status} for ${path}`);
    } else {
      pass(`HTTP 200 ${path}`);
    }
  }

  for (const path of publicLoginProbeRoutes) {
    const res = await fetch(`${base}${path}`, { redirect: "manual" });
    if (path === "/admin") {
      if (res.status !== 307 && res.status !== 302 && res.status !== 308) {
        fail(`/admin should redirect unauthenticated, got ${res.status}`);
      } else {
        pass(`/admin redirects unauthenticated (${res.status})`);
      }
      continue;
    }
    if (path === "/admin/login") {
      if (res.status !== 200) fail(`/admin/login expected 200, got ${res.status}`);
      else pass("/admin/login staff-only 200");
      continue;
    }
    if (res.status === 200) {
      const html = await res.text();
      if (html.toLowerCase().includes("sign in") || html.toLowerCase().includes("log in")) {
        fail(`Public login surface at ${path}`);
      }
    }
    pass(`No public login page at ${path} (${res.status})`);
  }

  const sm = await fetch(`${base}/sitemap.xml`);
  const xml = await sm.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  console.log("SITEMAP_URL_COUNT", urls.length);

  for (const route of phase3Routes) {
    const found = urls.some((u) => u.endsWith(route) || u.includes(`${route}`));
    if (!found) fail(`Sitemap XML missing ${route}`);
    else pass(`Sitemap XML includes ${route}`);
  }

  for (const path of phase3SeoPages) {
    const res = await fetch(`${base}${path}`);
    const html = await res.text();
    const ok =
      res.status === 200 &&
      html.includes('rel="canonical"') &&
      html.includes("og:title") &&
      html.includes("twitter:card");
    if (!ok) fail(`SEO tags incomplete on ${path}`);
    else pass(`SEO tags on ${path}`);
  }

  const home = await fetch(`${base}/`);
  const homeHtml = await home.text();
  for (const href of navPhase3Hrefs) {
    if (!homeHtml.includes(`href="${href}"`)) {
      fail(`Home nav missing ${href}`);
    }
  }
  pass("Phase 3 main nav links on home");

  for (const href of footerPhase3Hrefs) {
    if (!homeHtml.includes(`href="${href}"`)) {
      fail(`Footer missing ${href}`);
    }
  }
  pass("Phase 3 footer links on home");

  const homeAnalytics =
    !homeHtml.includes("googletagmanager.com/gtm.js") &&
    !homeHtml.includes("connect.facebook.net") &&
    !homeHtml.includes("gtag/js");
  if (!homeAnalytics) fail("Third-party analytics loaded without env");
  else pass("Analytics no-op on home (no third-party scripts)");

  const leads = await fetch(`${base}/api/admin/leads`);
  if (leads.status !== 401 && leads.status !== 403) {
    fail(`Admin leads API should be protected, got ${leads.status}`);
  } else {
    pass(`Admin API protected (${leads.status})`);
  }
}

async function main() {
  staticChecks();
  if (runHttp) {
    await httpChecks();
  } else {
    console.log("\nSKIP HTTP (QA_SKIP_HTTP=1)");
  }

  console.log("\n=== SUMMARY ===");
  if (failures > 0) {
    console.error(`FAILED: ${failures} check(s)`);
    process.exit(1);
  }
  console.log("All Phase 3 QA checks passed");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
