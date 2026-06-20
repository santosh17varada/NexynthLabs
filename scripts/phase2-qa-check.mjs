const base = process.env.QA_BASE_URL ?? "http://localhost:3000";

const routes = [
  "/",
  "/about",
  "/services",
  "/ai-showcase",
  "/products",
  "/portfolio",
  "/case-studies",
  "/case-studies/getpandit",
  "/getpandit",
  "/partners",
  "/contact",
  "/careers",
  "/blog",
  "/blog/introducing-nexynth-labs",
  "/privacy-policy",
  "/terms",
  "/cookie-policy",
  "/disclaimer",
  "/robots.txt",
  "/sitemap.xml",
  "/admin",
  "/admin/login",
  "/login",
  "/register",
  "/nonexistent",
];

const redirectRoutes = ["/portfolio/getpandit"];

async function check(path) {
  const res = await fetch(`${base}${path}`, { redirect: "manual" });
  return { path, status: res.status, location: res.headers.get("location") };
}

async function main() {
  const results = await Promise.all([...routes, ...redirectRoutes].map(check));
  console.log("ROUTE_RESULTS");
  for (const r of results) console.log(JSON.stringify(r));

  const sm = await fetch(`${base}/sitemap.xml`);
  const xml = await sm.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  console.log("SITEMAP_COUNT", urls.length);

  const pagesToCheck = [
    "/",
    "/portfolio",
    "/case-studies/getpandit",
    "/ai-showcase",
    "/partners",
    "/getpandit",
  ];

  for (const path of pagesToCheck) {
    const res = await fetch(`${base}${path}`);
    const html = await res.text();
    console.log(
      "SEO",
      JSON.stringify({
        path,
        status: res.status,
        canonical: html.includes('rel="canonical"'),
        ogTitle: html.includes("og:title"),
        twitter: html.includes("twitter:card"),
        ldJson: html.includes("application/ld+json"),
      }),
    );
  }

  const home = await fetch(`${base}/`);
  const homeHtml = await home.text();
  console.log(
    "ANALYTICS_NOOP",
    JSON.stringify({
      noGtm: !homeHtml.includes("googletagmanager.com/gtm.js"),
      noFbq: !homeHtml.includes("connect.facebook.net"),
      noLinkedIn: !homeHtml.includes("snap.licdn.com"),
      noGa: !homeHtml.includes("gtag/js"),
    }),
  );

  const navHrefs = [
    "/",
    "/about",
    "/services",
    "/ai-showcase",
    "/products",
    "/portfolio",
    "/case-studies",
    "/careers",
    "/blog",
    "/contact",
    "/partners",
    "/getpandit",
  ];
  const homeNav = await fetch(`${base}/`);
  const navHtml = await homeNav.text();
  const missingNav = navHrefs.filter((h) => !navHtml.includes(`href="${h}"`));
  console.log("NAV_MISSING", JSON.stringify(missingNav));

  const enquiry = await fetch(`${base}/api/enquiry`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "", email: "bad", message: "" }),
  });
  console.log("ENQUIRY_INVALID", enquiry.status);

  const leads = await fetch(`${base}/api/admin/leads`);
  console.log("ADMIN_LEADS_UNAUTH", leads.status);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
