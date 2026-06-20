import { brandName } from "@/config/site-values";
import {
  innovationLabPageCopy,
  innovationLabSections,
  innovationLabStatusDescriptions,
  innovationLabStatusLabels,
} from "@/config/innovation-lab";
import type { InnovationLabSection, InnovationLabStatus } from "@/types/innovation-lab";

export const homeInnovationLabCopy = {
  eyebrow: "Innovation Lab",
  title: "What we're exploring next",
  description: `${brandName} publishes R&D with honest status labels — Concept, Prototype, Planned, or Live. Never sold as finished unless stated.`,
  statusLegendTitle: "Status labels",
  featuredItemLimit: 3,
  cta: { label: "Explore the lab", href: "/innovation-lab" },
  disclaimer: innovationLabPageCopy.disclaimer,
  sectionIds: [
    "ai-experiments",
    "automation-concepts",
    "agentic-ai-research",
    "future-product-ideas",
    "getpandit-evolution",
  ] as const,
} as const;

export const homeInnovationLabStatusOrder: readonly InnovationLabStatus[] = [
  "concept",
  "prototype",
  "planned",
  "live",
];

export function getHomeInnovationLabSections(): InnovationLabSection[] {
  return homeInnovationLabCopy.sectionIds
    .map((id) => innovationLabSections.find((section) => section.id === id))
    .filter((section): section is InnovationLabSection => section !== undefined);
}

export function getInnovationLabSectionPath(sectionId: string): string {
  return `/innovation-lab#${sectionId}`;
}

export function getSectionStatusCounts(
  section: InnovationLabSection,
): Record<InnovationLabStatus, number> {
  const counts: Record<InnovationLabStatus, number> = {
    concept: 0,
    prototype: 0,
    planned: 0,
    live: 0,
  };

  for (const item of section.items) {
    counts[item.status] += 1;
  }

  return counts;
}

export { innovationLabStatusDescriptions, innovationLabStatusLabels };
