import Link from "next/link";
import { LeadershipProfileImage } from "@/components/leadership/LeadershipProfileImage";
import { PageSection } from "@/components/layout/PageSection";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { innerLinkClass } from "@/components/ui/variants";
import { founderPageContent } from "@/config/founder-story";
import { getPrimaryFounder } from "@/config/leadership";
import { cn } from "@/lib/cn";

export function FounderIntroSection() {
  const { hero } = founderPageContent;
  const founder = getPrimaryFounder();

  return (
    <PageSection variant="muted" divider={false} containerClassName="py-10 sm:py-14 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)] lg:items-start lg:gap-14">
        <div className="mx-auto w-full max-w-[220px] sm:max-w-[260px] lg:mx-0">
          <LeadershipProfileImage profile={founder} size="card" />
          <div className="mt-4 text-center lg:text-left">
            <p className="text-base font-semibold text-foreground">{hero.name}</p>
            <p className="mt-1 text-sm text-muted">{hero.role}</p>
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
              {hero.quote}
            </p>
          </blockquote>
          <figcaption className="sr-only">
            {hero.name}, {hero.role}
          </figcaption>
          <div className="mobile-cta-stack mt-6">
            <Button href={hero.profileCta.href} variant="outline" size="lg">
              {hero.profileCta.label}
            </Button>
          </div>
        </figure>
      </div>
    </PageSection>
  );
}

export function FounderBackgroundSection() {
  const section = founderPageContent.background;

  return (
    <PageSection id="background" variant="default" className="scroll-mt-28">
      <SectionHeading eyebrow={section.eyebrow} title={section.title} />
      <div className="mt-8 max-w-3xl space-y-4">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-base leading-relaxed text-muted sm:text-lg">
            {paragraph}
          </p>
        ))}
      </div>
    </PageSection>
  );
}

export function FounderExperienceSection() {
  const section = founderPageContent.experience;

  return (
    <PageSection id="experience" variant="surface" className="scroll-mt-28">
      <SectionHeading
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description}
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-6">
        {section.highlights.map((item) => (
          <Card key={item.id} variant="elevated" padding="sm" as="article" className="h-full sm:p-6">
            <h3 className="text-lg font-semibold text-foreground">{item.label}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {item.description}
            </p>
          </Card>
        ))}
      </div>

      <div className="mt-10">
        <p className="text-sm font-semibold text-foreground">Core expertise</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {section.expertise.map((skill) => (
            <li
              key={skill}
              className="rounded-ds-full border border-border/70 bg-background px-3 py-1.5 text-sm text-muted"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <Link
        href={section.profileLink.href}
        className={cn("mt-8 inline-flex min-h-11 items-center text-sm", innerLinkClass)}
      >
        {section.profileLink.label} →
      </Link>
    </PageSection>
  );
}

export function FounderWhyNexynthSection() {
  const section = founderPageContent.whyNexynth;

  return (
    <PageSection id="why-nexynth" variant="muted" className="scroll-mt-28">
      <SectionHeading eyebrow={section.eyebrow} title={section.title} />
      <div className="mt-8 max-w-3xl space-y-4">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-base leading-relaxed text-muted sm:text-lg">
            {paragraph}
          </p>
        ))}
      </div>
      <Link
        href="/about"
        className={cn("mt-8 inline-flex min-h-11 items-center text-sm", innerLinkClass)}
      >
        About Nexynth Labs →
      </Link>
    </PageSection>
  );
}

export function FounderWhyGetPanditSection() {
  const section = founderPageContent.whyGetPandit;

  return (
    <PageSection id="why-getpandit" variant="default" className="scroll-mt-28">
      <div className="overflow-hidden rounded-ds-xl border border-electric-blue/20 bg-gradient-to-br from-electric-blue/5 via-surface to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <SectionHeading eyebrow={section.eyebrow} title={section.title} />
        <div className="mt-8 max-w-3xl space-y-4">
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-muted sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-4">
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
    </PageSection>
  );
}

export function FounderLessonsSection() {
  const section = founderPageContent.lessonsLearned;

  return (
    <PageSection id="lessons-learned" variant="surface" className="scroll-mt-28">
      <SectionHeading
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description}
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {section.lessons.map((lesson) => (
          <Card key={lesson.id} variant="glass" padding="sm" as="article" className="h-full sm:p-6">
            <h3 className="text-lg font-semibold text-foreground">{lesson.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {lesson.description}
            </p>
          </Card>
        ))}
      </div>
    </PageSection>
  );
}

export function FounderFutureVisionSection() {
  const section = founderPageContent.futureVision;

  return (
    <PageSection id="future-vision" variant="dark" className="scroll-mt-28">
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
      <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-4">
        {section.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="inline-flex min-h-11 items-center text-sm font-semibold text-electric-cyan transition-colors hover:text-on-dark"
          >
            {link.label} →
          </Link>
        ))}
      </div>
    </PageSection>
  );
}
