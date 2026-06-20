import { address, brandName, email, flagshipProductName } from "@/config/site-values";
import type { FaqCategory, FaqItem } from "@/types/faq";

export const faqCategoryLabels: Record<FaqCategory, string> = {
  services: "Services",
  products: "Products",
  getpandit: flagshipProductName,
  partnerships: "Partnerships",
  careers: "Careers",
  security: "Security",
  contact: "Contact",
};

export const faqCategories = Object.keys(faqCategoryLabels) as FaqCategory[];

export const faqPageCopy = {
  hero: {
    eyebrow: "Help center",
    title: "Frequently asked questions",
    description: `Answers about ${brandName} services, products, partnerships, and this corporate website — config-driven and updated without a public CMS login.`,
  },
  searchLabel: "Search FAQs",
  searchPlaceholder: "Search questions and answers…",
  emptyMessage: "No FAQs match your search. Try another keyword or category.",
  footnote: "Edit FAQs in src/config/faqs.ts. Draft entries use published: false.",
} as const;

export const faqs: readonly FaqItem[] = [
  {
    id: "services-what-we-offer",
    category: "services",
    question: `What services does ${brandName} offer?`,
    answer: `We deliver AI solutions, product engineering, web and mobile apps, cloud and DevOps, integrations (payments, SMS, WhatsApp), and platform maintenance. See /services for the full catalog — scopes are confirmed per engagement.`,
    published: true,
  },
  {
    id: "services-how-to-start",
    category: "services",
    question: "How do we start a services engagement?",
    answer:
      "Book a free consultation at /book-consultation or submit an RFP at /request-proposal. We respond manually — no automated quoting or public bid portal on this site.",
    published: true,
  },
  {
    id: "services-ai-readiness",
    category: "services",
    question: "Do you offer AI readiness assessments?",
    answer:
      "Yes. The public AI Readiness Score at /ai-readiness-score is a self-assessment with indicative tiers — not professional certification. We use results as a conversation starter for scoped AI work.",
    published: true,
  },
  {
    id: "products-ecosystem",
    category: "products",
    question: "What products does Nexynth Labs build?",
    answer: `Our product ecosystem includes ${flagshipProductName} (live on getpandit.com), AI agents platform work, temple management and vendor marketplace concepts, and enterprise automation — each labeled Live, In Progress, Planned, or Coming Soon on /products/ecosystem.`,
    published: true,
  },
  {
    id: "products-corporate-vs-product",
    category: "products",
    question: "Why are products on separate domains?",
    answer:
      "Product apps run on their own domains and release cadences. The corporate site at nexynthlabs.com is static-friendly marketing, lead capture, and trust content — it does not host product authentication or booking flows.",
    published: true,
  },
  {
    id: "getpandit-what-is",
    category: "getpandit",
    question: `What is ${flagshipProductName}?`,
    answer: `${flagshipProductName} is an online platform for pandit discovery, pooja service catalogs, and ceremony scheduling on getpandit.com — built by ${brandName} as a flagship devotional technology product.`,
    published: true,
  },
  {
    id: "getpandit-book-on-corporate",
    category: "getpandit",
    question: `Can I book a pandit on nexynthlabs.com?`,
    answer: `No. Booking happens on getpandit.com. This corporate site links to the product externally only. Visit /getpandit for an overview and link to the live product domain.`,
    published: true,
  },
  {
    id: "getpandit-payments",
    category: "getpandit",
    question: `Are payments live on ${flagshipProductName}?`,
    answer:
      "Payment gateway integration is architecture-ready on the product side — we do not claim full nationwide payment production unless the product team confirms cutover. Check getpandit.com for current capabilities.",
    published: true,
  },
  {
    id: "partners-types",
    category: "partnerships",
    question: "Who can partner with Nexynth Labs?",
    answer:
      "Temples, service providers, technology partners, vendors, and investors. See /partners for models and /partners/portal for enquiry-only partner readiness — no public partner login yet.",
    published: true,
  },
  {
    id: "partners-getpandit",
    category: "partnerships",
    question: `How do temples join ${flagshipProductName}?`,
    answer:
      "Partner onboarding is enquiry-led today. Submit interest via the Partner Portal readiness page or /partners — our team qualifies leads manually before any product onboarding.",
    published: true,
  },
  {
    id: "careers-apply",
    category: "careers",
    question: "How do I apply for a role?",
    answer:
      "Open roles are listed at /careers with mailto apply links. There is no applicant tracking portal on this site — email your CV and cover letter directly.",
    published: true,
  },
  {
    id: "careers-remote",
    category: "careers",
    question: "Do you offer remote or hybrid work?",
    answer: `We are headquartered in ${address.city} with remote/hybrid readiness described on /careers/culture. Specific arrangements depend on role and team.`,
    published: true,
  },
  {
    id: "security-data",
    category: "security",
    question: "How is my data handled on this website?",
    answer:
      "Enquiry forms and assessments store leads for staff review (file-based today). See /privacy-policy and /security for disclosures — we do not claim certifications we have not earned.",
    published: true,
  },
  {
    id: "security-admin",
    category: "security",
    question: "Is there a public login on nexynthlabs.com?",
    answer:
      "No public login. Admin CMS routes under /admin are staff-only. Product logins live on product domains such as getpandit.com when available.",
    published: true,
  },
  {
    id: "security-trust",
    category: "security",
    question: "Where can I read security and trust information?",
    answer:
      "Visit /security for technical practices and /trust for data protection narratives. Status placeholders are at /status — not live infrastructure monitoring.",
    published: true,
  },
  {
    id: "contact-response",
    category: "contact",
    question: "How quickly will you respond to an enquiry?",
    answer:
      "We aim to respond within one to two business days for corporate enquiries. Urgent product support for GetPandit should use channels listed on getpandit.com.",
    published: true,
  },
  {
    id: "contact-email",
    category: "contact",
    question: "What is the best way to contact Nexynth Labs?",
    answer: `Use /contact for the enquiry form, ${email} for email, or /book-consultation for a discovery call request. WhatsApp click-to-chat is available where configured on contact pages.`,
    published: true,
  },
  {
    id: "contact-draft-hidden",
    category: "contact",
    question: "Draft FAQ — should not appear publicly",
    answer: "This entry is unpublished for CMS testing.",
    published: false,
  },
] as const;

export function getPublishedFaqs(): FaqItem[] {
  return faqs.filter((item) => item.published);
}

export function getFaqsByCategory(category: FaqCategory | "all"): FaqItem[] {
  const published = getPublishedFaqs();
  if (category === "all") return published;
  return published.filter((item) => item.category === category);
}

export function getFaqStructuredDataItems(
  categories: FaqCategory | readonly FaqCategory[],
): { question: string; answer: string }[] {
  const categoryList = Array.isArray(categories) ? categories : [categories];

  return getPublishedFaqs()
    .filter((item) => categoryList.includes(item.category))
    .map(({ question, answer }) => ({ question, answer }));
}
