import type { NavItem } from "@/config/site";

/** Cross-links shown on /company/* pages */
export const companySectionNav: readonly NavItem[] = [
  { label: "Founder story", href: "/founder" },
  { label: "Leadership", href: "/leadership" },
  { label: "Vision", href: "/vision" },
] as const;
