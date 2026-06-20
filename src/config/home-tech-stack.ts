export type HomeTechStackItem = {
  id: string;
  name: string;
  category: string;
};

export const homeTechStackCopy = {
  eyebrow: "Stack",
  title: "Tools we ship with",
  description: `Production patterns across web, API, mobile, and cloud — the same stack behind this site and client products.`,
  footnote:
    "Stack choices are confirmed per engagement. Listing a tool describes capability — not that every project uses every tool.",
  cta: { label: "See our technology", href: "/technology" },
} as const;

export const homeTechStackItems: readonly HomeTechStackItem[] = [
  { id: "nextjs", name: "Next.js", category: "Web" },
  { id: "react", name: "React", category: "Web" },
  { id: "nodejs", name: "Node.js", category: "Runtime" },
  { id: "nestjs", name: "NestJS", category: "API" },
  { id: "mongodb", name: "MongoDB", category: "Data" },
  { id: "aws", name: "AWS", category: "Cloud" },
  { id: "nginx", name: "Nginx", category: "Edge" },
  { id: "pm2", name: "PM2", category: "Ops" },
  { id: "ai-tools", name: "AI tools", category: "AI" },
  { id: "apis", name: "APIs", category: "Integrations" },
  { id: "mobile-apps", name: "Mobile apps", category: "Mobile" },
] as const;
