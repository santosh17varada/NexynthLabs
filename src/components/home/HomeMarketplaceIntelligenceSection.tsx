import { HomeSectionShell } from "@/components/home/HomeSectionShell";
import { MarketplaceIntelligenceVisual } from "@/components/visual-storytelling/marketplace/MarketplaceIntelligenceVisual";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeMarketplaceIntelligenceCopy } from "@/config/home-marketplace-intelligence";
import { MotionReveal } from "@/motion/MotionReveal";

export function HomeMarketplaceIntelligenceSection() {
  const copy = homeMarketplaceIntelligenceCopy;

  return (
    <HomeSectionShell id={copy.id} variant="surface">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12 xl:gap-16">
        <MotionReveal variant="section" delay={1}>
          <MarketplaceIntelligenceVisual />
        </MotionReveal>

        <div className="min-w-0">
          <SectionHeading
            eyebrow={copy.eyebrow}
            title={copy.title}
            description={copy.description}
          />

          <ul className="mt-8 space-y-3">
            {copy.capabilities.map((capability) => (
              <li
                key={capability}
                className="flex items-center gap-2.5 text-sm text-muted sm:text-base"
              >
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand"
                  aria-hidden="true"
                />
                {capability}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button href={copy.cta.href} variant="gradient" size="lg">
              {copy.cta.label}
            </Button>
          </div>
        </div>
      </div>
    </HomeSectionShell>
  );
}
