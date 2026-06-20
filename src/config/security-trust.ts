import { brandName, companyName, flagshipProductName } from "@/config/site-values";
import { LEGAL_REVIEW_NOTICE } from "@/config/legal";
import type { ComplianceRoadmapItem, SecurityTrustSection } from "@/types/security-trust";

export const securityReviewNotice =
  "Security and trust content on this site describes current practices and readiness only. It is not a certification, audit report, or legal opinion. Final security and legal review by qualified professionals is required before production reliance or regulatory submission.";

export const securityPageCopy = {
  hero: {
    eyebrow: "Security",
    title: "How we protect the platform",
    description: `Technical security practices for the ${brandName} corporate site and integration architecture — honest readiness statements without false compliance claims.`,
  },
  disclaimer: securityReviewNotice,
  closingCta: {
    title: "Questions about security?",
    description: "Partners and enterprise clients can discuss architecture, access control, and integration patterns with our team.",
    primary: { label: "Contact us", href: "/contact" },
    secondary: { label: "Trust center", href: "/trust" },
  },
} as const;

export const trustPageCopy = {
  hero: {
    eyebrow: "Trust center",
    title: "Data, privacy, and compliance direction",
    description: `How ${companyName} handles information responsibly — with clear boundaries between the corporate site and ${flagshipProductName} on getpandit.com.`,
  },
  disclaimer: `${LEGAL_REVIEW_NOTICE} ${securityReviewNotice}`,
  closingCta: {
    title: "Review our policies",
    description: "Legal policies are drafts until counsel sign-off. Product privacy is maintained on getpandit.com.",
    primary: { label: "Privacy policy", href: "/privacy-policy" },
    secondary: { label: "Security overview", href: "/security" },
  },
} as const;

export const securityTrustSections: readonly SecurityTrustSection[] = [
  {
    id: "data-protection",
    page: "trust",
    title: "Data protection",
    summary:
      "We limit collection to what enquiries and operations require, store leads with access controls, and avoid placing secrets in public configuration.",
    points: [
      "Contact and partner forms collect only fields needed to respond — name, email, message, and optional context.",
      "Lead data is stored for internal sales follow-up; file-based storage today with PostgreSQL migration planned.",
      "No payment card data is processed on the corporate marketing site.",
      "Administrative access is staff-only; public visitors are not assigned CMS session cookies.",
    ],
    links: [
      { label: "Privacy policy", href: "/privacy-policy" },
      { label: "Contact enquiries", href: "/contact" },
    ],
  },
  {
    id: "secure-hosting",
    page: "security",
    title: "Secure hosting",
    summary:
      "Production deployments target reputable cloud hosting with HTTPS, environment-isolated secrets, and separation between corporate and product domains.",
    points: [
      "Static-first public pages reduce attack surface versus heavy server-side session state.",
      "Secrets and API keys belong in host environment variables — never in version-controlled config.",
      "Admin routes and APIs are excluded from search indexing and protected by session middleware.",
      "GetPandit product infrastructure is hosted and released independently on getpandit.com.",
    ],
    links: [
      { label: "System status", href: "/status" },
      { label: "Architecture docs", href: "/technology" },
    ],
  },
  {
    id: "ssl-readiness",
    page: "security",
    title: "SSL readiness",
    summary:
      "All public corporate routes are intended to be served over HTTPS in production with valid TLS certificates on the apex domain.",
    points: [
      "Production checklist requires HTTPS before go-live — no mixed-content embeds of third-party apps.",
      "HSTS and certificate renewal are managed at the hosting / CDN layer.",
      "External product links (getpandit.com) use HTTPS destinations.",
    ],
  },
  {
    id: "payment-security-readiness",
    page: "security",
    title: "Payment security readiness",
    summary:
      "Payment processing is designed for product domains — not the corporate brochure site. Architecture prepares for PCI-aware gateway integrations.",
    points: [
      "Corporate site does not collect card numbers or run checkout flows.",
      `${flagshipProductName} payment integration readiness is documented on the product stack — gateway-hosted checkout patterns preferred.`,
      "Webhook signature verification and idempotent handlers are part of integration design.",
      "No PCI DSS certification is claimed by this marketing site.",
    ],
    links: [{ label: "GetPandit case study", href: "/case-studies/getpandit" }],
  },
  {
    id: "privacy-practices",
    page: "trust",
    title: "Privacy practices",
    summary:
      "Privacy disclosures are published as draft policies with a counsel review notice. Analytics and cookies remain disabled until policy and consent align.",
    points: [
      "Privacy, Terms, Cookie, and Disclaimer pages describe corporate-site practices only.",
      "Analytics scripts load only when public measurement IDs are configured — default is no third-party tracking.",
      "Cookie policy explains admin session cookies versus optional marketing cookies.",
      "Data subject requests can be directed to the contact email published on this site.",
    ],
    links: [
      { label: "Cookie policy", href: "/cookie-policy" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
  {
    id: "access-control",
    page: "security",
    title: "Access control",
    summary:
      "Internal admin access uses signed sessions, role-based module visibility, and no public registration path.",
    points: [
      "Middleware redirects unauthenticated users away from /admin routes.",
      "Roles: SUPER_ADMIN, ADMIN, MARKETING_ADMIN, SALES_ADMIN — least-privilege module matrix.",
      "Shared admin password is a phase-1 interim measure; per-user hashes planned.",
      "API routes for leads require valid admin session cookies.",
    ],
    links: [{ label: "Admin login", href: "/admin/login" }],
  },
] as const;

export const complianceRoadmapItems: readonly ComplianceRoadmapItem[] = [
  {
    id: "legal-counsel-review",
    title: "Final legal & privacy review",
    status: "in_review",
    description:
      "Qualified counsel review of Privacy, Terms, Cookie, and Disclaimer before regulatory reliance — required for production marketing claims.",
  },
  {
    id: "security-assessment",
    title: "Independent security assessment",
    status: "planned",
    description:
      "Third-party review of corporate deployment, admin access, and integration patterns — not completed or certified today.",
  },
  {
    id: "dpdp-alignment",
    title: "India DPDP Act alignment review",
    status: "planned",
    description:
      "Map data processing activities to Digital Personal Data Protection Act obligations when counsel advises — no compliance certification claimed.",
  },
  {
    id: "cookie-consent",
    title: "Cookie consent & analytics governance",
    status: "planned",
    description:
      "Banner and consent logging before enabling production analytics tags — placeholders exist; go-live pending policy approval.",
  },
  {
    id: "soc-iso",
    title: "SOC 2 / ISO 27001 evaluation",
    status: "future",
    description:
      "Evaluate formal frameworks if enterprise customer contracts require them — not in scope for current corporate site phase.",
  },
] as const;

export const complianceRoadmapStatusLabels = {
  in_review: "In review",
  planned: "Planned",
  future: "Future",
} as const;

export function getSectionsForPage(
  page: SecurityTrustSection["page"],
): SecurityTrustSection[] {
  return securityTrustSections.filter((section) => section.page === page);
}
