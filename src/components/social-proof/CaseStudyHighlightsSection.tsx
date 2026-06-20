import {
  CaseStudyHighlightCard,
  CaseStudyHighlightGrid,
} from "@/components/social-proof/CaseStudyHighlight";
import { SocialProofSection } from "@/components/social-proof/SocialProofSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { socialProofContentCopy } from "@/config/social-proof-content";
import { getCaseStudyHighlights } from "@/config/social-proof";
import type { CaseStudyHighlight } from "@/types/social-proof";

type CaseStudyHighlightsSectionProps = {
  highlights?: readonly CaseStudyHighlight[];
  limit?: number;
  eyebrow?: string;
  title?: string;
  description?: string;
  label?: string;
  variant?: "section" | "inline" | "compact";
  showDisclaimer?: boolean;
  className?: string;
};

export function CaseStudyHighlightsSection({
  highlights,
  limit = 1,
  eyebrow,
  title,
  description,
  label,
  variant = "inline",
  showDisclaimer = false,
  className,
}: CaseStudyHighlightsSectionProps) {
  const copy = socialProofContentCopy.caseStudyHighlights;
  const items = highlights ?? getCaseStudyHighlights(limit);

  if (items.length === 0) {
    return null;
  }

  if (variant === "section") {
    return (
      <SocialProofSection
        eyebrow={eyebrow ?? copy.eyebrow}
        title={title ?? copy.title}
        description={description ?? copy.description}
        disclaimerKind="caseStudy"
        showDisclaimer={showDisclaimer}
        variant="surface"
        className={className}
      >
        <CaseStudyHighlightGrid highlights={items} />
      </SocialProofSection>
    );
  }

  if (variant === "compact") {
    return (
      <div className={className}>
        {label ? <SectionLabel className="mb-4">{label}</SectionLabel> : null}
        <CaseStudyHighlightCard highlight={items[0]} />
      </div>
    );
  }

  return (
    <div className={className}>
      {label ? <SectionLabel className="mb-4">{label}</SectionLabel> : null}
      <CaseStudyHighlightGrid highlights={items} />
    </div>
  );
}
