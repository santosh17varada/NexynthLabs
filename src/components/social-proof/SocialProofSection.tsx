import type { ReactNode } from "react";
import { PageSection } from "@/components/layout/PageSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialProofDisclaimer } from "@/components/social-proof/SocialProofDisclaimer";
import type { SocialProofDisclaimerKind } from "@/components/social-proof/SocialProofDisclaimer";
import type { SocialProofTone } from "@/types/social-proof";
import { cn } from "@/lib/cn";

type SocialProofSectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: SocialProofTone;
  disclaimerKind?: SocialProofDisclaimerKind;
  disclaimer?: string;
  showDisclaimer?: boolean;
  variant?: "default" | "surface" | "muted";
  children: ReactNode;
  className?: string;
};

export function SocialProofSection({
  id,
  eyebrow,
  title,
  description,
  tone = "light",
  disclaimerKind,
  disclaimer,
  showDisclaimer = false,
  variant = "default",
  children,
  className,
}: SocialProofSectionProps) {
  return (
    <PageSection id={id} variant={variant} className={className}>
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
        tone={tone === "dark" ? "dark" : "light"}
      />
      <div className="mt-10 sm:mt-12">{children}</div>
      {showDisclaimer && disclaimerKind ? (
        <SocialProofDisclaimer
          kind={disclaimerKind}
          text={disclaimer}
          className={cn("mt-8")}
        />
      ) : null}
    </PageSection>
  );
}
