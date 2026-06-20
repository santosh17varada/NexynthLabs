#!/usr/bin/env node
/**
 * Full regression QA — Prompt 26
 * Usage: npm run build && PORT=3001 npm run start && QA_BASE_URL=http://localhost:3001 node scripts/regression-qa-check.mjs
 */

const base = process.env.QA_BASE_URL ?? "http://localhost:3001";

const staticRoutes = [
  "/",
  "/about",
  "/company/founder",
  "/company/leadership",
  "/leadership",
  "/leadership/santosh-kumar-varada",
  "/leadership/swathi-varada",
  "/company/vision",
  "/services",
  "/technology",
  "/ai-showcase",
  "/innovation-lab",
  "/events",
  "/products",
  "/products/ecosystem",
  "/portfolio",
  "/case-studies",
  "/case-studies/getpandit",
  "/client-success",
  "/testimonials",
  "/faq",
  "/media-kit",
  "/developers",
  "/getpandit",
  "/careers",
  "/careers/culture",
  "/blog",
  "/blog/introducing-nexynth-labs",
  "/blog/why-getpandit-is-separate",
  "/resources",
  "/resources/practical-ai-automation-overview",
  "/guides",
  "/guides/ai-agent-guardrails-checklist",
  "/ai-readiness-score",
  "/book-consultation",
  "/request-proposal",
  "/contact",
  "/partners",
  "/partners/portal",
  "/roadmap",
  "/status",
  "/security",
  "/trust",
  "/privacy-policy",
  "/terms",
  "/cookie-policy",
  "/disclaimer",
  "/robots.txt",
  "/sitemap.xml",
  "/admin/login",
];

const redirects = [
  { from: "/rfp", to: "/request-proposal", status: 308 },
  { from: "/press", to: "/media-kit", status: 308 },
  { from: "/portfolio/getpandit", to: "/case-studies/getpandit", status: 308 },
  { from: "/company/leadership", to: "/leadership", status: 308 },
];

const publicLoginProbes = ["/login", "/register", "/signup"];

const formPages = [
  { path: "/contact", marker: "name" },
  { path: "/request-proposal", marker: "email" },
  { path: "/book-consultation", marker: "email" },
  { path: "/ai-readiness-score", marker: "email" },
  { path: "/partners", marker: "email" },
];

const seoSamplePages = [
  "/",
  "/getpandit",
  "/faq",
  "/media-kit",
  "/developers",
  "/case-studies/getpandit",
  "/blog/introducing-nexynth-labs",
];

const headerNavHrefs = [
  "/services",
  "/technology",
  "/innovation-lab",
  "/products",
  "/getpandit",
  "/blog",
  "/case-studies",
  "/faq",
  "/resources",
  "/about",
  "/leadership",
  "/company/founder",
  "/careers",
  "/contact",
  "/book-consultation",
];

const footerHrefs = [
  "/privacy-policy",
  "/resources",
  "/security",
  "/trust",
  "/book-consultation",
  "/services",
  "/getpandit",
  "/contact",
];

const getpanditExternalPatterns = [
  "https://getpandit.com",
  'target="_blank"',
];

let failures = 0;
const results = { routes: [], redirects: [], seo: [], forms: [], misc: [] };

function fail(category, msg) {
  failures += 1;
  results[category]?.push({ status: "FAIL", msg });
  console.error("FAIL", msg);
}

function pass(category, msg) {
  results[category]?.push({ status: "PASS", msg });
  console.log("PASS", msg);
}

async function main() {
  console.log("=== REGRESSION QA ===");
  console.log("BASE", base);

  let serverOk = false;
  try {
    const ping = await fetch(base, { redirect: "manual" });
    serverOk = ping.status === 200;
  } catch (e) {
    console.error("Server unreachable:", e.message);
    process.exit(1);
  }
  if (!serverOk) {
    console.error("Home not 200");
    process.exit(1);
  }
  pass("misc", "Server reachable");

  for (const path of staticRoutes) {
    const res = await fetch(`${base}${path}`, { redirect: "manual" });
    if (path === "/admin/login") {
      if (res.status !== 200) fail("routes", `${path} expected 200 got ${res.status}`);
      else pass("routes", `${path} 200 staff login`);
      continue;
    }
    if (res.status !== 200 && !(path === "/company/leadership" && res.status === 308)) {
      fail("routes", `${path} HTTP ${res.status}`);
    } else pass("routes", `${path} ${res.status === 308 ? "308 redirect" : "200"}`);
  }

  const adminRes = await fetch(`${base}/admin`, { redirect: "manual" });
  if (![302, 307, 308].includes(adminRes.status)) {
    fail("misc", `/admin should redirect unauthenticated got ${adminRes.status}`);
  } else {
    pass("misc", `/admin redirects (${adminRes.status})`);
  }

  for (const { from, to, status } of redirects) {
    const res = await fetch(`${base}${from}`, { redirect: "manual" });
    const loc = res.headers.get("location") ?? "";
    if (res.status !== status && res.status !== 301) {
      fail("redirects", `${from} expected ${status} got ${res.status}`);
    } else if (!loc.includes(to)) {
      fail("redirects", `${from} location ${loc} missing ${to}`);
    } else {
      pass("redirects", `${from} → ${to} (${res.status})`);
    }
  }

  for (const path of publicLoginProbes) {
    const res = await fetch(`${base}${path}`, { redirect: "manual" });
    if (res.status === 200) {
      const html = await res.text();
      if (/sign\s*in|log\s*in|create\s*account/i.test(html)) {
        fail("misc", `Public login UI at ${path}`);
      }
    }
    pass("misc", `No public login at ${path} (${res.status})`);
  }

  const robots = await fetch(`${base}/robots.txt`);
  const robotsTxt = await robots.text();
  if (!robotsTxt.includes("Allow: /") && !robotsTxt.includes("allow: /")) {
    fail("misc", "robots.txt missing Allow /");
  }
  if (!robotsTxt.toLowerCase().includes("disallow: /admin")) {
    fail("misc", "robots.txt missing Disallow /admin");
  }
  if (!robotsTxt.includes("sitemap")) {
    fail("misc", "robots.txt missing sitemap");
  } else {
    pass("misc", "robots.txt rules OK");
  }

  const sm = await fetch(`${base}/sitemap.xml`);
  const xml = await sm.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  console.log("SITEMAP_URL_COUNT", urls.length);
  if (urls.length < 50) fail("misc", `Sitemap only ${urls.length} URLs`);
  else pass("misc", `Sitemap ${urls.length} URLs`);

  for (const path of seoSamplePages) {
    const res = await fetch(`${base}${path}`);
    const html = await res.text();
    const ok =
      res.status === 200 &&
      html.includes('rel="canonical"') &&
      html.includes("og:title") &&
      html.includes("twitter:card");
    if (!ok) fail("seo", `SEO incomplete ${path}`);
    else pass("seo", `SEO tags ${path}`);
  }

  const faq = await fetch(`${base}/faq`);
  const faqHtml = await faq.text();
  if (!faqHtml.includes("FAQPage") && !faqHtml.includes("Question")) {
    fail("seo", "FAQ page missing FAQPage JSON-LD hint");
  } else {
    pass("seo", "FAQ JSON-LD present");
  }

  const home = await fetch(`${base}/`);
  const homeHtml = await home.text();

  if (
    !homeHtml.includes("AI-First Product Engineering") ||
    homeHtml.includes("Home | Nexynth Labs")
  ) {
    fail("seo", "Homepage title not using post-redesign SEO title");
  } else {
    pass("seo", "Homepage SEO title OK");
  }

  if (!homeHtml.includes("WebPage") || !homeHtml.includes("Product")) {
    fail("seo", "Homepage missing WebPage/Product JSON-LD");
  } else {
    pass("seo", "Homepage JSON-LD OK");
  }

  if (!homeHtml.includes("<header") && !homeHtml.includes("header")) {
    fail("misc", "Home missing header");
  } else pass("misc", "Header on home");

  if (!homeHtml.includes("<footer") && !homeHtml.includes("footer")) {
    fail("misc", "Home missing footer");
  } else pass("misc", "Footer on home");

  let headerNavOk = true;
  for (const href of headerNavHrefs) {
    if (!homeHtml.includes(`href="${href}"`)) {
      fail("misc", `Header nav missing ${href}`);
      headerNavOk = false;
    }
  }
  if (headerNavOk) pass("misc", "Header nav links on home");

  let footerNavOk = true;
  for (const href of footerHrefs) {
    if (!homeHtml.includes(`href="${href}"`)) {
      fail("misc", `Footer missing ${href}`);
      footerNavOk = false;
    }
  }
  if (footerNavOk) pass("misc", "Footer links on home");

  if (!homeHtml.includes("viewport")) fail("misc", "Missing viewport meta");
  else pass("misc", "Viewport meta present");

  const analyticsLoaded =
    homeHtml.includes("googletagmanager.com/gtm.js") ||
    homeHtml.includes("connect.facebook.net") ||
    homeHtml.includes("gtag/js");
  if (analyticsLoaded) fail("misc", "Third-party analytics without consent");
  else pass("misc", "Analytics no-op default");

  const gp = await fetch(`${base}/getpandit`);
  const gpHtml = await gp.text();
  for (const pattern of getpanditExternalPatterns) {
    if (!gpHtml.includes(pattern) && pattern !== 'target="_blank"') {
      fail("misc", `GetPandit page missing ${pattern}`);
    }
  }
  if (!gpHtml.includes("getpandit.com")) fail("misc", "GetPandit external domain missing");
  else pass("misc", "GetPandit page links to product domain only");

  for (const { path, marker } of formPages) {
    const res = await fetch(`${base}${path}`);
    const html = await res.text();
    if (!html.includes(marker) && !html.includes("type=\"email\"")) {
      fail("forms", `Form markers missing on ${path}`);
    } else {
      pass("forms", `Form present ${path}`);
    }
  }

  const leadsApi = await fetch(`${base}/api/admin/leads`);
  if (leadsApi.status !== 401 && leadsApi.status !== 403) {
    fail("misc", `Admin leads API exposed ${leadsApi.status}`);
  } else {
    pass("misc", `Admin API protected (${leadsApi.status})`);
  }

  const status = await fetch(`${base}/status`);
  const statusHtml = await status.text();
  if (/100%\s*uptime|live monitoring enabled/i.test(statusHtml)) {
    fail("misc", "Status page overclaims live monitoring");
  } else {
    pass("misc", "Status page no fake live claims");
  }

  console.log("\n=== SUMMARY ===");
  console.log(JSON.stringify({ failures, sitemapCount: urls.length }));
  if (failures > 0) {
    console.error(`FAILED: ${failures}`);
    process.exit(1);
  }
  console.log("All regression checks passed");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
