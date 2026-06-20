import { HomeDarkSection } from "@/components/home/HomeDarkSection";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechnologyLogoGrid } from "@/components/social-proof/TechnologyLogoGrid";
import { homeTechStackCopy } from "@/config/home-tech-stack";
import { getPublicTechnologyLogos } from "@/config/social-proof";

export function HomeTechStackSection() {
  const copy = homeTechStackCopy;

  return (
    <HomeDarkSection id="technology">
      <SectionHeading
        eyebrow="Technology"
        title={copy.title}
        description={copy.description}
        tone="dark"
      />

      <TechnologyLogoGrid
        items={getPublicTechnologyLogos()}
        tone="dark"
        layout="grid"
        className="mt-10 sm:mt-12"
      />

      <div className="mt-10 flex flex-col gap-6 border-t border-glass-border-dark/50 pt-8 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <p className="max-w-2xl text-sm leading-relaxed text-on-dark-muted">
          {copy.footnote}
        </p>
        <Button href={copy.cta.href} variant="gradient" size="lg" className="shrink-0 self-start sm:self-center">
          {copy.cta.label}
        </Button>
      </div>
    </HomeDarkSection>
  );
}
