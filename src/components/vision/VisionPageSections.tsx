import Link from "next/link";
import { LeadershipProfileImage } from "@/components/leadership/LeadershipProfileImage";
import { PageSection } from "@/components/layout/PageSection";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { innerLinkClass } from "@/components/ui/variants";
import { visionPageContent } from "@/config/vision";
import { getPrimaryFounder } from "@/config/leadership";
import { cn } from "@/lib/cn";

export function VisionFounderQuoteSection() {
  const { founderQuote } = visionPageContent.hero;
  const founder = getPrimaryFounder();

  return (
    <PageSection variant="muted" divider={false} containerClassName="py-10 sm:py-14 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)] lg:items-start lg:gap-14">
        <div className="mx-auto w-full max-w-[220px] sm:max-w-[260px] lg:mx-0">
          <LeadershipProfileImage profile={founder} size="card" />
          <div className="mt-4 text-center lg:text-left">
            <p className="text-base font-semibold text-foreground">{founderQuote.name}</p>
            <p className="mt-1 text-sm text-muted">{founderQuote.role}</p>
          </div>
        </div>

        <figure className="min-w-0">
          <blockquote className="relative rounded-ds-xl border border-border/70 bg-surface/90 p-6 shadow-soft sm:p-8 lg:p-10">
            <span
              className="absolute left-4 top-2 font-serif text-5xl leading-none text-electric-blue/25 sm:left-6 sm:text-6xl"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <p className="relative text-base leading-relaxed text-foreground sm:text-lg lg:text-xl lg:leading-relaxed">
              {founderQuote.message}
            </p>
          </blockquote>
          <figcaption className="sr-only">
            {founderQuote.name}, {founderQuote.role}
          </figcaption>
          <div className="mobile-cta-stack mt-6">
            <Button href={founderQuote.cta.href} variant="outline" size="lg">
              {founderQuote.cta.label}
            </Button>
          </div>
        </figure>
      </div>
    </PageSection>
  );
}

export function VisionWhySection() {
  const section = visionPageContent.whyNexynthExists;

  return (
    <PageSection id="why-nexynth-exists" variant="default" className="scroll-mt-28">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start lg:gap-14">
        <div>
          <SectionHeading eyebrow={section.eyebrow} title={section.title} />
          <div className="mt-8 space-y-4">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-muted sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-1">
          {section.highlights.map((item, index) => (
            <Card
              key={item.id}
              variant="glass"
              padding="sm"
              className={cn("sm:p-6", index === 0 && "border-electric-blue/25")}
            >
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </PageSection>
  );
}

export function VisionDigitalFutureSection() {
  const section = visionPageContent.digitalProductsFuture;

  return (
    <PageSection id="future-digital-products" variant="surface" className="scroll-mt-28">
      <SectionHeading
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description}
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-6">
        {section.themes.map((theme) => (
          <Card key={theme.id} variant="elevated" padding="sm" as="article" className="h-full sm:p-6">
            <h3 className="text-lg font-semibold text-foreground">{theme.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {theme.description}
            </p>
          </Card>
        ))}
      </div>
    </PageSection>
  );
}

export function VisionAiFutureSection() {
  const section = visionPageContent.aiDrivenFuture;

  return (
    <PageSection id="ai-driven-future" variant="dark" className="scroll-mt-28">
      <SectionHeading
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description}
        tone="dark"
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-6">
        {section.pillars.map((pillar) => (
          <Card
            key={pillar.id}
            variant="glass"
            padding="sm"
            as="article"
            className="h-full border-glass-border-dark bg-glass-dark/40 sm:p-6"
          >
            <h3 className="text-lg font-semibold text-on-dark">{pillar.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-on-dark-muted sm:text-base">
              {pillar.description}
            </p>
          </Card>
        ))}
      </div>
      <div className="mt-8">
        <Link
          href="/ai"
          className={cn("inline-flex min-h-11 items-center text-sm font-semibold text-electric-cyan hover:text-on-dark")}
        >
          Explore AI capability →
        </Link>
      </div>
    </PageSection>
  );
}

export function VisionMarketplaceSection() {
  const section = visionPageContent.marketplaceInnovation;

  return (
    <PageSection id="marketplace-innovation" variant="muted" className="scroll-mt-28">
      <SectionHeading
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description}
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:gap-6">
        {section.items.map((item) => (
          <Card key={item.id} variant="glass" padding="sm" as="article" className="h-full sm:p-6">
            <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {item.description}
            </p>
          </Card>
        ))}
      </div>
    </PageSection>
  );
}

export function VisionGetPanditSection() {
  const section = visionPageContent.getPanditVision;

  return (
    <PageSection id="getpandit-vision" variant="surface" className="scroll-mt-28">
      <div className="overflow-hidden rounded-ds-xl border border-electric-blue/20 bg-gradient-to-br from-electric-blue/5 via-surface to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <SectionHeading eyebrow={section.eyebrow} title={section.title} />
        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-start">
          <div className="space-y-4">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-muted sm:text-lg">
                {paragraph}
              </p>
            ))}
            <div className="flex flex-col gap-2 pt-2 sm:flex-row sm:flex-wrap sm:gap-4">
              {section.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn("inline-flex min-h-11 items-center text-sm", innerLinkClass)}
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </div>

          <ul className="grid gap-3">
            {section.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 rounded-ds-md border border-border/60 bg-background/80 px-4 py-3 text-sm text-foreground"
              >
                <span
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-brand"
                  aria-hidden="true"
                />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageSection>
  );
}

export function VisionLongTermSection() {
  const section = visionPageContent.longTermDirection;

  return (
    <PageSection id="long-term-direction" variant="default" className="scroll-mt-28">
      <SectionHeading
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description}
      />
      <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:gap-6">
        {section.phases.map((phase, index) => (
          <Card
            key={phase.id}
            variant={index === 1 ? "elevated" : "glass"}
            padding="sm"
            as="article"
            className="flex h-full flex-col sm:p-6"
          >
            <p className="text-eyebrow text-electric-blue">{phase.period}</p>
            <h3 className="mt-2 text-lg font-semibold text-foreground">{phase.title}</h3>
            <ul className="mt-5 flex-1 space-y-2.5">
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
      <Link
        href="/roadmap"
        className={cn("mt-8 inline-flex min-h-11 items-center text-sm", innerLinkClass)}
      >
        View public roadmap →
      </Link>
    </PageSection>
  );
}
