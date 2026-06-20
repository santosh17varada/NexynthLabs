import { LeadershipProfileImage } from "@/components/leadership/LeadershipProfileImage";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { flagshipProductName } from "@/config/site-values";
import type { LeadershipProfile } from "@/types/leadership";

export function LeadershipProfileDetail({ profile }: { profile: LeadershipProfile }) {
  return (
    <Container className="py-12 sm:py-16 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-14 xl:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <LeadershipProfileImage profile={profile} size="hero" />
          {profile.socialLinks && (
            <div className="mt-6 flex flex-wrap gap-3">
              {profile.socialLinks.linkedin && (
                <a
                  href={profile.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center rounded-full border border-border px-4 text-sm font-medium text-foreground hover:border-electric-blue/40"
                >
                  LinkedIn
                </a>
              )}
              {profile.socialLinks.email && (
                <a
                  href={`mailto:${profile.socialLinks.email}`}
                  className="inline-flex min-h-11 items-center rounded-full border border-border px-4 text-sm font-medium text-foreground hover:border-electric-blue/40"
                >
                  Email
                </a>
              )}
            </div>
          )}
        </div>

        <div className="min-w-0">
          <p className="text-eyebrow font-semibold text-electric-blue">Executive profile</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {profile.name}
          </h2>
          <p className="mt-3 text-lg font-medium text-foreground/90">{profile.title}</p>
          {profile.subtitle && (
            <p className="mt-2 text-base text-muted">{profile.subtitle}</p>
          )}

          {profile.profileHighlights && profile.profileHighlights.length > 0 && (
            <Card className="mt-8 border-electric-blue/20 bg-electric-blue/5">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                Profile highlights
              </h3>
              <ul className="mt-4 space-y-3">
                {profile.profileHighlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}

          <div className="mt-8 space-y-4">
            {profile.biography.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-muted sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          {profile.expertise.length > 0 && (
            <div className="mt-10">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                Areas of expertise
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {profile.expertise.map((area) => (
                  <li
                    key={area}
                    className="rounded-full border border-border/80 bg-surface px-3 py-1.5 text-xs font-medium text-foreground sm:text-sm"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {profile.slug === "santosh-kumar-varada" && (
            <Card className="mt-10 border-primary/20 bg-primary/5">
              <h3 className="text-lg font-semibold text-foreground">Flagship product</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {flagshipProductName} runs on getpandit.com — a dedicated domain for booking and product
                releases, separate from this corporate site.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button href="/getpandit" variant="gradient" size="sm">
                  Explore {flagshipProductName}
                </Button>
                <Button href="/case-studies/getpandit" variant="outline" size="sm">
                  Case study
                </Button>
              </div>
            </Card>
          )}
        </div>
      </div>
    </Container>
  );
}
