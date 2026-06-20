import { GetPanditHeroMockupStack } from "@/components/getpandit/GetPanditUiPreview";
import { HomeSectionShell } from "@/components/home/HomeSectionShell";
import { Button } from "@/components/ui/Button";
import { ReadMoreLink } from "@/components/ui/ReadMoreLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeGetPanditHighlightCopy } from "@/config/home-getpandit-highlight";

export function HomeGetPanditHighlightSection() {
  const copy = homeGetPanditHighlightCopy;

  return (
    <HomeSectionShell id="getpandit" variant="surface">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,48fr)_minmax(0,52fr)] lg:gap-8 xl:gap-10">
        <div className="min-w-0">
          <SectionHeading
            eyebrow={copy.eyebrow}
            title={copy.title}
            description={copy.description}
          />

          <ul className="mt-6 space-y-3 sm:mt-8">
            {copy.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2.5 text-sm text-muted sm:text-base">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand"
                  aria-hidden="true"
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="mobile-cta-stack mt-8 flex flex-col gap-3 sm:mt-10">
            <Button
              href={copy.primaryCta.href}
              external={copy.primaryCta.external}
              variant="gradient"
              size="lg"
            >
              {copy.primaryCta.label}
            </Button>
            <Button href={copy.secondaryCta.href} variant="outline" size="lg">
              {copy.secondaryCta.label}
            </Button>
          </div>

          <ReadMoreLink href={copy.caseStudyCta.href} className="mt-6">
            {copy.caseStudyCta.label} →
          </ReadMoreLink>
        </div>

        <div className="flex min-w-0 justify-center self-start px-1 sm:px-2">
          <GetPanditHeroMockupStack urlBar={copy.mockup.urlBar} />
        </div>
      </div>
    </HomeSectionShell>
  );
}
