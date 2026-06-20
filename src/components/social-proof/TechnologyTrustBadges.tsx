import { SocialProofDisclaimer } from "@/components/social-proof/SocialProofDisclaimer";
import { SocialProofSection } from "@/components/social-proof/SocialProofSection";
import { TechnologyLogoGrid } from "@/components/social-proof/TechnologyLogoGrid";
import { socialProofContentCopy } from "@/config/social-proof-content";
import { getPublicTechnologyLogos } from "@/config/social-proof";
import type { TechnologyLogoEntry } from "@/types/social-proof";
import { cn } from "@/lib/cn";

type TechnologyTrustBadgesProps = {
  items?: readonly TechnologyLogoEntry[];
  limit?: number;
  eyebrow?: string;
  title?: string;
  description?: string;
  variant?: "section" | "inline";
  tone?: "light" | "dark";
  animated?: boolean;
  showDisclaimer?: boolean;
  className?: string;
};

export function TechnologyTrustBadges({
  items,
  limit,
  eyebrow,
  title,
  description,
  variant = "inline",
  tone = "light",
  animated = false,
  showDisclaimer = false,
  className,
}: TechnologyTrustBadgesProps) {
  const copy = socialProofContentCopy.technologyTrustBadges;
  const badges = items ?? getPublicTechnologyLogos();
  const visible = limit === undefined ? badges : badges.slice(0, limit);

  if (visible.length === 0) {
    return null;
  }

  const grid = (
    <TechnologyLogoGrid items={visible} tone={tone} animated={animated} />
  );

  if (variant === "section") {
    return (
      <SocialProofSection
        eyebrow={eyebrow ?? copy.eyebrow}
        title={title ?? copy.title}
        description={description ?? copy.description}
        tone={tone}
        disclaimerKind="technology"
        showDisclaimer={showDisclaimer}
        variant="muted"
        className={className}
      >
        {grid}
      </SocialProofSection>
    );
  }

  return (
    <div className={cn("space-y-4", className)}>
      {grid}
      {showDisclaimer ? <SocialProofDisclaimer kind="technology" /> : null}
    </div>
  );
}
