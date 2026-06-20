import { PageSection } from "@/components/layout/PageSection";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ReadMoreLink } from "@/components/ui/ReadMoreLink";
import { founderStoryContent } from "@/config/founder-story";

function ProseSection({
  eyebrow,
  title,
  paragraphs,
  variant = "default",
}: {
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
  variant?: "default" | "muted";
}) {
  return (
    <PageSection variant={variant === "muted" ? "surface" : "default"} divider={false}>
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="mt-8 max-w-3xl space-y-4">
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-base leading-relaxed text-muted sm:text-lg">
            {paragraph}
          </p>
        ))}
      </div>
    </PageSection>
  );
}

export function FounderNoteSection() {
  const { founderNote } = founderStoryContent;

  return (
    <PageSection divider={false}>
      <SectionHeading eyebrow={founderNote.eyebrow} title={founderNote.title} />
      <Card
        as="article"
        className="mt-8 max-w-3xl border-dashed border-electric-blue/30 bg-electric-blue/5 p-6 sm:p-8"
      >
        {founderNote.isPlaceholder && (
          <SectionLabel className="mb-4">Placeholder — edit in config before publish</SectionLabel>
        )}
        <blockquote className="space-y-4 border-l-4 border-electric-blue/40 pl-4 sm:pl-6">
          {founderNote.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-foreground sm:text-lg">
              {paragraph}
            </p>
          ))}
        </blockquote>
        <footer className="mt-6 text-sm font-medium text-muted">
          — {founderNote.attribution}
        </footer>
      </Card>
    </PageSection>
  );
}

export function WhyGetPanditSection() {
  const { whyGetPandit } = founderStoryContent;

  return (
    <PageSection variant="surface" divider={false}>
      <SectionHeading eyebrow={whyGetPandit.eyebrow} title={whyGetPandit.title} />
      <div className="mt-8 max-w-3xl space-y-4">
        {whyGetPandit.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-base leading-relaxed text-muted sm:text-lg">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        {whyGetPandit.links.map((link) => (
          <ReadMoreLink key={link.href} href={link.href}>
            {link.label} →
          </ReadMoreLink>
        ))}
      </div>
    </PageSection>
  );
}

export function VisionSection() {
  const { vision } = founderStoryContent;

  return (
    <PageSection divider={false}>
      <SectionHeading
        eyebrow={vision.eyebrow}
        title={vision.title}
        description={vision.description}
      />
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        {vision.pillars.map((pillar) => (
          <Card key={pillar.id} as="article" className="h-full p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {pillar.description}
            </p>
          </Card>
        ))}
      </div>
      <ReadMoreLink href="/vision" className="mt-8">
        Read full vision →
      </ReadMoreLink>
    </PageSection>
  );
}

export function RoadmapSection() {
  const { roadmap } = founderStoryContent;

  return (
    <PageSection variant="surface" divider={false}>
      <SectionHeading
        eyebrow={roadmap.eyebrow}
        title={roadmap.title}
        description={roadmap.description}
      />
      <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
        {roadmap.phases.map((phase) => (
          <Card key={phase.id} as="article" className="flex h-full flex-col p-5 sm:p-6">
            <SectionLabel>{phase.period}</SectionLabel>
            <h3 className="mt-2 text-lg font-semibold text-foreground">{phase.title}</h3>
            <ul className="mt-5 space-y-2">
              {phase.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </PageSection>
  );
}

export function WhyNexynthSection() {
  const { whyNexynth } = founderStoryContent;

  return (
    <ProseSection
      eyebrow={whyNexynth.eyebrow}
      title={whyNexynth.title}
      paragraphs={whyNexynth.paragraphs}
    />
  );
}
