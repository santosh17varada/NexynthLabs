import Link from "next/link";
import { LeadershipProfileImage } from "@/components/leadership/LeadershipProfileImage";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  aboutLeadershipSection,
  founderMessageSection,
  getFeaturedLeadershipProfiles,
  getPrimaryFounder,
  mediaKitFounderProfile,
  partnerFounderVision,
} from "@/config/leadership";

export function FounderMessageSection() {
  const founder = getPrimaryFounder();
  const copy = founderMessageSection;

  return (
    <section className="border-b border-border/60 bg-gradient-to-b from-surface to-background">
      <Container className="py-16 sm:py-20 lg:py-24">
        <SectionHeading eyebrow={copy.eyebrow} title={copy.title} />
        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,280px)_1fr] lg:items-start lg:gap-14">
          <LeadershipProfileImage profile={founder} size="card" />
          <blockquote className="min-w-0">
            <p className="text-lg leading-relaxed text-foreground sm:text-xl">{copy.message}</p>
            <p className="mt-6 text-base leading-relaxed text-muted">{copy.closing}</p>
            <footer className="mt-8 border-t border-border/60 pt-6">
              <p className="text-base font-semibold text-foreground">{copy.signatureName}</p>
              <p className="mt-1 text-sm text-muted">{copy.signatureTitle}</p>
              <div className="mt-6">
                <Button href={copy.profileHref} variant="outline" size="sm">
                  {copy.ctaLabel}
                </Button>
              </div>
            </footer>
          </blockquote>
        </div>
      </Container>
    </section>
  );
}

export function AboutLeadershipSection() {
  const copy = aboutLeadershipSection;
  const profiles = getFeaturedLeadershipProfiles().slice(0, 2);

  return (
    <section className="border-t border-border/60 bg-surface">
      <Container className="py-16 sm:py-20">
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {profiles.map((profile) => (
            <Link
              key={profile.id}
              href={`/leadership/${profile.slug}`}
              className="group flex gap-4 rounded-ds-lg border border-border/70 bg-background p-5 transition-shadow hover:shadow-elevated sm:p-6"
            >
              <LeadershipProfileImage profile={profile} size="compact" className="shrink-0" />
              <div className="min-w-0">
                <h3 className="font-semibold text-foreground group-hover:text-electric-violet">
                  {profile.name}
                </h3>
                <p className="mt-1 text-sm text-electric-violet">{profile.title}</p>
                <p className="mt-2 line-clamp-2 text-sm text-muted">{profile.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Button href={copy.ctaHref} variant="outline">
            {copy.ctaLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}

export function MediaKitFounderProfileSection() {
  const copy = mediaKitFounderProfile;
  const founder = getPrimaryFounder();

  return (
    <section id={copy.sectionId} className="scroll-mt-28 border-t border-border/60">
      <Container className="py-14 sm:py-16 lg:py-20">
        <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-12">
          <LeadershipProfileImage profile={founder} size="card" />
          <div>
            <p className="text-lg font-semibold text-foreground">{founder.name}</p>
            <p className="mt-1 text-sm font-medium text-electric-violet">{founder.title}</p>
            {founder.subtitle && (
              <p className="mt-2 text-sm text-muted">{founder.subtitle}</p>
            )}
            <div className="mt-6 space-y-4">
              {founder.biography.slice(0, 2).map((paragraph) => (
                <p key={paragraph} className="text-sm leading-relaxed text-muted sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted">{copy.downloadNote}</p>
            <Link
              href={`/leadership/${founder.slug}`}
              className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"
            >
              Full founder profile →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function PartnerFounderVisionSection() {
  const copy = partnerFounderVision;
  const founder = getPrimaryFounder();

  return (
    <section className="border-t border-border/60 bg-surface">
      <Container className="py-14 sm:py-16 lg:py-20">
        <SectionHeading eyebrow={copy.eyebrow} title={copy.title} />
        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,240px)_1fr] lg:items-start lg:gap-12">
          <LeadershipProfileImage profile={founder} size="card" className="mx-auto lg:mx-0" />
          <div>
            <div className="space-y-4">
              {copy.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-muted sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-8">
              <Button href={copy.profileHref} variant="outline">
                {copy.ctaLabel}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
