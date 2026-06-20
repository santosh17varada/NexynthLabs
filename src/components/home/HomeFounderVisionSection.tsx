import { LeadershipProfileImage } from "@/components/leadership/LeadershipProfileImage";
import { HomeSectionShell } from "@/components/home/HomeSectionShell";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeFounderVisionCopy } from "@/config/home-founder";
import { getPrimaryFounder } from "@/config/leadership";

export function HomeFounderVisionSection() {
  const copy = homeFounderVisionCopy;
  const founder = getPrimaryFounder();

  return (
    <HomeSectionShell
      id="founder-vision"
      variant="gradient"
      className="relative overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,rgba(30,58,95,0.08),transparent_45%),radial-gradient(circle_at_100%_20%,rgba(184,137,31,0.1),transparent_40%)]"
        aria-hidden="true"
      />

      <div className="relative">
        <SectionHeading eyebrow={copy.eyebrow} title={copy.sectionTitle} />

        <div className="mt-8 grid gap-8 lg:mt-12 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:items-start lg:gap-14 xl:gap-16">
          <div className="mx-auto w-full max-w-[240px] sm:max-w-[280px] lg:mx-0 lg:max-w-none">
            <LeadershipProfileImage profile={founder} size="card" />
            <div className="mt-4 text-center sm:mt-5 lg:text-left">
              <p className="text-base font-semibold text-foreground">{copy.name}</p>
              <p className="mt-1 text-sm text-muted">{copy.roleTitle}</p>
            </div>
          </div>

          <figure className="min-w-0">
            <blockquote className="relative rounded-ds-lg border border-border/70 bg-surface/90 p-5 shadow-soft sm:p-8 lg:p-10">
              <span
                className="absolute left-4 top-3 text-4xl font-serif leading-none text-electric-blue/30 sm:left-6 sm:top-4 sm:text-6xl"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="relative text-base leading-relaxed text-foreground sm:text-xl lg:leading-relaxed">
                {copy.message}
              </p>
            </blockquote>
            <figcaption className="sr-only">
              {copy.name}, {copy.roleTitle}
            </figcaption>
            <div className="mobile-cta-stack mt-6 sm:mt-8">
              <Button href={copy.cta.href} variant="gradient" size="lg">
                {copy.cta.label}
              </Button>
            </div>
          </figure>
        </div>
      </div>
    </HomeSectionShell>
  );
}
