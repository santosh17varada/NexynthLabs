import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  complianceRoadmapItems,
  complianceRoadmapStatusLabels,
  getSectionsForPage,
} from "@/config/security-trust";
import type { SecurityTrustPage } from "@/types/security-trust";

const roadmapStatusStyles = {
  in_review: "bg-amber-500/15 text-foreground border-amber-500/30",
  planned: "bg-primary/10 text-primary border-primary/20",
  future: "bg-surface text-muted border-border",
} as const;

export function SecurityTrustReviewBanner({ message }: { message: string }) {
  return (
    <Container className="py-8 sm:py-10">
      <Card className="border-dashed border-electric-blue/40 bg-electric-blue/5 p-5 sm:p-6">
        <p className="text-sm font-semibold text-foreground">Review required</p>
        <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{message}</p>
      </Card>
    </Container>
  );
}

function TrustSectionCard({
  title,
  summary,
  points,
  links,
}: {
  title: string;
  summary: string;
  points: readonly string[];
  links?: readonly { label: string; href: string }[];
}) {
  return (
    <Card as="article" className="h-full p-5 sm:p-6">
      <h3 className="text-lg font-semibold text-foreground sm:text-xl">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{summary}</p>
      <ul className="mt-5 space-y-2">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-2.5 text-sm text-muted">
            <span
              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand"
              aria-hidden="true"
            />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      {links && links.length > 0 && (
        <div className="mt-6 flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"
            >
              {link.label} →
            </Link>
          ))}
        </div>
      )}
    </Card>
  );
}

export function SecurityTrustSectionGrid({ page }: { page: SecurityTrustPage }) {
  const sections = getSectionsForPage(page);

  return (
    <section className="border-t border-border/60">
      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {sections.map((section) => (
            <TrustSectionCard
              key={section.id}
              title={section.title}
              summary={section.summary}
              points={section.points}
              links={section.links}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ComplianceRoadmapSection() {
  return (
    <section className="border-t border-border/60 bg-surface" id="compliance-roadmap">
      <Container className="py-14 sm:py-16 lg:py-20">
        <SectionHeading
          eyebrow="Compliance direction"
          title="Future compliance roadmap"
          description="Planned reviews and frameworks — not certifications held today."
        />
        <div className="mt-8 grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
          {complianceRoadmapItems.map((item) => (
            <Card key={item.id} as="article" className="p-5 sm:p-6">
              <span
                className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide ${roadmapStatusStyles[item.status]}`}
              >
                {complianceRoadmapStatusLabels[item.status]}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
