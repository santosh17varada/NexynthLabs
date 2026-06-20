export type HeaderNavLink = {
  label: string;
  href: string;
  description?: string;
};

export type HeaderNavGroup = {
  label: string;
  href: string;
  description?: string;
  featured: HeaderNavLink[];
  more?: HeaderNavLink[];
  legal?: HeaderNavLink[];
};

export type HeaderNavDirect = {
  label: string;
  href: string;
};

export type HeaderNavItem = HeaderNavGroup | HeaderNavDirect;

export type HeaderNavConfig = {
  cta: HeaderNavLink;
  contact: HeaderNavLink;
  items: HeaderNavItem[];
};

export function isHeaderNavGroup(item: HeaderNavItem): item is HeaderNavGroup {
  return "featured" in item;
}

export const headerNavigation: HeaderNavConfig = {
  cta: {
    label: "Get started",
    href: "/book-consultation",
    description: "Book a consultation with our product engineering team",
  },
  contact: {
    label: "Contact",
    href: "/contact",
    description: "Enquiries, partnerships, and general support",
  },
  items: [
    {
      label: "Products",
      href: "/products",
      description: "Flagship platforms and product engineering.",
      featured: [
        {
          label: "GetPandit",
          href: "/getpandit",
          description:
            "Pandit booking for pooja services — live on getpandit.com",
        },
        {
          label: "Products overview",
          href: "/products",
          description: "Product roadmaps and product strategy",
        },
        {
          label: "Product ecosystem",
          href: "/products/ecosystem",
          description: "Live and planned products with honest readiness labels",
        },
        {
          label: "Innovation Lab",
          href: "/innovation-lab",
          description: "AI experiments, prototypes, and R&D tracks",
        },
      ],
      more: [
        { label: "Roadmap", href: "/roadmap" },
        { label: "Case studies", href: "/case-studies" },
      ],
    },
    {
      label: "Solutions",
      href: "/services",
      description: "End-to-end engineering — from AI features to cloud delivery.",
      featured: [
        {
          label: "All services",
          href: "/services",
          description: "AI, product engineering, cloud, mobile, and integrations",
        },
        {
          label: "AI Engineering",
          href: "/ai",
          description: "Agentic AI, LLM platforms, retrieval, assistants, and governance",
        },
        {
          label: "Product Engineering",
          href: "/contact?service=product-engineering",
          description: "Full-stack product design, build, and iteration",
        },
        {
          label: "Engineering Excellence",
          href: "/engineering",
          description: "Cloud-native architecture, APIs, and operational discipline",
        },
        {
          label: "Technology Excellence",
          href: "/technology",
          description: "Capability areas and stack overview",
        },
      ],
      more: [
        { label: "Cloud & DevOps", href: "/contact?service=cloud-devops" },
        {
          label: "Enterprise Integrations",
          href: "/contact?service=enterprise-integrations",
        },
        { label: "AI Showcase", href: "/ai-showcase" },
        { label: "Request proposal", href: "/request-proposal" },
      ],
    },
    {
      label: "Company",
      href: "/about",
      description: "Who we are, how we work, and how to partner with us.",
      featured: [
        {
          label: "About",
          href: "/about",
          description: "Our story, values, and Hyderabad engineering roots",
        },
        {
          label: "Leadership",
          href: "/leadership",
          description: "Founder-led team and executive profiles",
        },
        {
          label: "Careers",
          href: "/careers",
          description: "Open roles, culture, and how we hire engineers",
        },
        {
          label: "Partners",
          href: "/partners",
          description: "Temple, vendor, and technology partnership programmes",
        },
      ],
      more: [
        { label: "Founder story", href: "/founder" },
        { label: "Vision", href: "/vision" },
        { label: "Status", href: "/status" },
      ],
      legal: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms & Conditions", href: "/terms" },
        { label: "Cookie Policy", href: "/cookie-policy" },
        { label: "Disclaimer", href: "/disclaimer" },
      ],
    },
    {
      label: "Resources",
      href: "/resources",
      description: "Articles, guides, and knowledge for builders and partners.",
      featured: [
        {
          label: "Blog",
          href: "/blog",
          description: "Product engineering insights and company updates",
        },
        {
          label: "Case studies",
          href: "/case-studies",
          description: "Problem, approach, and qualitative outcomes",
        },
        {
          label: "Knowledge center",
          href: "/resources",
          description: "Downloads, brochures, and reference articles",
        },
        {
          label: "FAQ",
          href: "/faq",
          description: "Services, GetPandit, partnerships, and careers",
        },
      ],
      more: [
        { label: "Guides", href: "/guides" },
        { label: "Client success", href: "/client-success" },
        { label: "Testimonials", href: "/testimonials" },
        { label: "Events", href: "/events" },
        { label: "Media kit", href: "/media-kit" },
        { label: "Developers", href: "/developers" },
      ],
    },
  ],
};

/** Flat list of every header link (for legacy nav consumers and QA). */
export function flattenHeaderNavLinks(): { label: string; href: string }[] {
  const seen = new Set<string>();
  const links: { label: string; href: string }[] = [];

  function add(label: string, href: string) {
    if (seen.has(href)) return;
    seen.add(href);
    links.push({ label, href });
  }

  add("Home", "/");
  add(headerNavigation.contact.label, headerNavigation.contact.href);

  for (const item of headerNavigation.items) {
    if (isHeaderNavGroup(item)) {
      add(item.label, item.href);
      for (const link of item.featured) add(link.label, link.href);
      for (const link of item.more ?? []) add(link.label, link.href);
      for (const link of item.legal ?? []) add(link.label, link.href);
    } else {
      add(item.label, item.href);
    }
  }

  return links;
}

/** All hrefs reachable from the header (including CTA and contact). */
export function getAllHeaderHrefs(): string[] {
  const hrefs = flattenHeaderNavLinks().map((link) => link.href);
  hrefs.push(headerNavigation.cta.href);
  return [...new Set(hrefs)];
}
