import {
  getDomainHostname,
  getFlagshipProduct,
  getProductHostname,
  siteConfig,
} from "@/config/site";

const flagship = getFlagshipProduct();
const domainHost = getDomainHostname();
const productHost = getProductHostname(flagship);

export const LEGAL_REVIEW_NOTICE =
  "These documents are provided for informational purposes only. Final legal review by qualified counsel is required before production reliance or regulatory submission.";

export type LegalSection = {
  heading: string;
  paragraphs: readonly string[];
};

export type LegalDocument = {
  title: string;
  description: string;
  lastUpdated: string;
  sections: readonly LegalSection[];
};

export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  description: siteConfig.seo.pages.privacyPolicy.description,
  lastUpdated: "2026-06-16",
  sections: [
    {
      heading: "Overview",
      paragraphs: [
        `${siteConfig.companyName} ("${siteConfig.brandName}", "we", "us", "our") operates ${domainHost} as the corporate website for our technology business. This Privacy Policy explains how we collect, use, disclose, and protect personal information when you visit this site or contact us.`,
        `This policy applies to ${domainHost} only. ${flagship.name} is operated as a separate product on ${productHost} with its own privacy practices, terms, and data handling.`,
      ],
    },
    {
      heading: "Information we collect",
      paragraphs: [
        "Contact and enquiry data: When you submit our contact or enquiry form, we collect the information you provide, such as your name, email address, phone number, company name, service interest, and message content.",
        "Technical and usage data: We may collect standard server logs (IP address, browser type, referring URL, pages viewed, timestamps) and, if analytics tools are enabled, aggregated usage statistics to understand how visitors use the site.",
        "Administrative access: Internal staff who access the content management area may have session identifiers stored in secure cookies. These are not used for public marketing or tracking of general visitors.",
      ],
    },
    {
      heading: "How we use information",
      paragraphs: [
        `We use enquiry and contact information to respond to your request, evaluate partnership or service opportunities, and communicate with you about ${siteConfig.brandName}.`,
        "We use technical data to maintain site security, diagnose issues, and improve performance and content.",
        "We do not sell your personal information. We share data only when required by applicable law, to protect our rights, or with service providers who process data on our behalf under appropriate confidentiality obligations.",
      ],
    },
    {
      heading: "Legal basis and retention",
      paragraphs: [
        "We process enquiry data based on your consent when you submit a form and our legitimate interest in operating and improving our business communications.",
        "We retain enquiry records for as long as needed to respond, maintain business records, and comply with legal obligations, after which data is deleted or anonymised where feasible.",
      ],
    },
    {
      heading: "Your rights",
      paragraphs: [
        "Depending on applicable law, you may have rights to access, correct, delete, or restrict processing of your personal information, or to withdraw consent where processing is consent-based.",
        `To exercise these rights, contact us at ${siteConfig.email}. We will respond within a reasonable timeframe as required by applicable law.`,
      ],
    },
    {
      heading: "Children's privacy",
      paragraphs: [
        "This corporate website is not directed at children under 18. We do not knowingly collect personal information from children through this site.",
      ],
    },
    {
      heading: "Changes to this policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. The \"Last updated\" date at the top of this page indicates when it was last revised. Continued use of the site after changes constitutes acceptance of the updated policy.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        `For privacy-related questions or requests, email ${siteConfig.email} or write to:`,
        `${siteConfig.companyName}, ${siteConfig.address.full}.`,
      ],
    },
  ],
};

export const termsOfService: LegalDocument = {
  title: "Terms & Conditions",
  description: siteConfig.seo.pages.terms.description,
  lastUpdated: "2026-06-16",
  sections: [
    {
      heading: "Agreement to terms",
      paragraphs: [
        `These Terms & Conditions ("Terms") govern your access to and use of ${domainHost}, operated by ${siteConfig.companyName} ("${siteConfig.brandName}", "we", "us"). By accessing or using this website, you agree to be bound by these Terms. If you do not agree, please do not use this site.`,
      ],
    },
    {
      heading: "Website purpose",
      paragraphs: [
        `${domainHost} is a corporate information website. It provides company information, service and product overviews, careers content, blog posts, and contact options.`,
        "This site does not offer public user registration or login. Product booking, payments, and account features for GetPandit are provided only on the GetPandit product domain.",
        `Use of ${flagship.name} at ${productHost} is governed by separate terms and policies on that domain.`,
      ],
    },
    {
      heading: "Permitted use",
      paragraphs: [
        "You may use this website for lawful, personal, or business informational purposes in accordance with these Terms.",
        "You agree not to misuse the site, including by attempting unauthorised access, introducing malware, scraping content in violation of applicable law, or interfering with site operation.",
      ],
    },
    {
      heading: "Intellectual property",
      paragraphs: [
        `All content on this site — including text, graphics, logos, layouts, and software — is owned by ${siteConfig.companyName} or its licensors and is protected by applicable intellectual property laws.`,
        "You may not copy, modify, distribute, or create derivative works from site content without our prior written permission, except for limited personal viewing or sharing of links to public pages.",
      ],
    },
    {
      heading: "Third-party links",
      paragraphs: [
        `This site may link to third-party websites, including ${productHost}. We are not responsible for the content, policies, or practices of third-party sites. Your use of third-party services is at your own risk and subject to their terms.`,
      ],
    },
    {
      heading: "Disclaimer of warranties",
      paragraphs: [
        `This website and its content are provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied, to the fullest extent permitted by law.`,
        "We do not warrant that the site will be uninterrupted, error-free, or free of harmful components.",
      ],
    },
    {
      heading: "Limitation of liability",
      paragraphs: [
        `To the maximum extent permitted by applicable law, ${siteConfig.companyName} and its directors, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website.`,
        "Nothing in these Terms excludes liability that cannot be excluded under applicable law.",
      ],
    },
    {
      heading: "Governing law",
      paragraphs: [
        `These Terms are governed by the laws of India. Courts in ${siteConfig.address.city}, ${siteConfig.address.state} shall have exclusive jurisdiction over disputes arising from use of this corporate website, subject to applicable law.`,
      ],
    },
    {
      heading: "Changes",
      paragraphs: [
        "We may revise these Terms at any time by posting an updated version on this page. Your continued use of the site after changes become effective constitutes acceptance of the revised Terms.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        `Questions about these Terms may be directed to ${siteConfig.email}.`,
        `${siteConfig.companyName}, ${siteConfig.address.full}.`,
      ],
    },
  ],
};

export const cookiePolicy: LegalDocument = {
  title: "Cookie Policy",
  description: siteConfig.seo.pages.cookiePolicy.description,
  lastUpdated: "2026-06-16",
  sections: [
    {
      heading: "What are cookies",
      paragraphs: [
        "Cookies are small text files placed on your device when you visit a website. Similar technologies include local storage and session storage. They help websites function, remember preferences, and understand usage.",
      ],
    },
    {
      heading: "How we use cookies",
      paragraphs: [
        `${siteConfig.brandName} may use cookies and similar technologies on ${domainHost} for the purposes described below. We aim to minimise data collection on this corporate site.`,
      ],
    },
    {
      heading: "Types of cookies we may use",
      paragraphs: [
        "Strictly necessary cookies: Required for basic site functionality, security, and load balancing. These cannot be disabled if you wish to use the site.",
        "Analytics cookies (if enabled): Help us understand aggregated traffic patterns, popular pages, and technical performance. These are configured to avoid unnecessary personal profiling where possible.",
        "Administrative session cookies: Used only when authorised staff access the internal CMS at /admin. Public visitors are not assigned CMS session cookies.",
      ],
    },
    {
      heading: "Third-party cookies",
      paragraphs: [
        "If we embed third-party content or enable analytics providers, those services may set their own cookies. We recommend reviewing the privacy policies of any such providers.",
        `Links to ${productHost} are separate properties with their own cookie practices.`,
      ],
    },
    {
      heading: "Your choices",
      paragraphs: [
        "You can control or delete cookies through your browser settings. Most browsers allow you to block cookies or alert you when cookies are set.",
        "Disabling certain cookies may affect site functionality. Strictly necessary cookies may still be required for secure operation.",
      ],
    },
    {
      heading: "Updates",
      paragraphs: [
        "We may update this Cookie Policy from time to time. Please review this page periodically for changes.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        `Questions about cookies on ${domainHost} may be sent to ${siteConfig.email}.`,
      ],
    },
  ],
};

export const disclaimer: LegalDocument = {
  title: "Disclaimer",
  description: siteConfig.seo.pages.disclaimer.description,
  lastUpdated: "2026-06-16",
  sections: [
    {
      heading: "General information",
      paragraphs: [
        `The information on ${domainHost} is published by ${siteConfig.companyName} ("${siteConfig.brandName}") for general informational purposes about our company, services, and products.`,
        "While we strive to keep content accurate and current, we make no representation or warranty, express or implied, regarding the completeness, accuracy, reliability, or suitability of information on this site.",
      ],
    },
    {
      heading: "Not professional advice",
      paragraphs: [
        "Content on this website does not constitute legal, financial, tax, religious, or other professional advice. You should seek appropriate professional guidance before making decisions based on information found here.",
      ],
    },
    {
      heading: "Product information",
      paragraphs: [
        `Descriptions of ${flagship.name} and other products on this site are summaries for corporate marketing purposes. Feature availability, pricing, and service coverage are determined on the product domain (${productHost}) and may change without notice on this corporate site.`,
        `${siteConfig.brandName} does not guarantee that product capabilities described here are available in your location or at a specific time.`,
      ],
    },
    {
      heading: "External links",
      paragraphs: [
        "This site contains links to external websites, including the GetPandit product application. We do not control and are not responsible for the content, availability, or practices of linked third-party sites.",
      ],
    },
    {
      heading: "Limitation of liability",
      paragraphs: [
        `To the fullest extent permitted by law, ${siteConfig.companyName} shall not be liable for any loss or damage arising from reliance on information on ${domainHost}, including indirect or consequential loss.`,
        "Use of this website is at your own risk.",
      ],
    },
    {
      heading: "Trademarks",
      paragraphs: [
        `${siteConfig.brandName}, ${flagship.name}, and related logos are trademarks or branding of ${siteConfig.companyName} or its affiliates. Other names and marks may be property of their respective owners.`,
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        `For questions about this Disclaimer, contact ${siteConfig.email}.`,
        `${siteConfig.companyName}, ${siteConfig.address.full}.`,
      ],
    },
  ],
};
