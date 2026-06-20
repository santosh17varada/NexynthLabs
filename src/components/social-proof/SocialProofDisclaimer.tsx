import { socialProofCopy } from "@/config/social-proof";
import { cn } from "@/lib/cn";

export type SocialProofDisclaimerKind =
  | "testimonial"
  | "review"
  | "partnerLogo"
  | "technology"
  | "metrics"
  | "trust"
  | "caseStudy";

type SocialProofDisclaimerProps = {
  kind: SocialProofDisclaimerKind;
  text?: string;
  className?: string;
};

export function SocialProofDisclaimer({
  kind,
  text,
  className,
}: SocialProofDisclaimerProps) {
  const message = text ?? socialProofCopy.disclaimers[kind];

  return (
    <p
      className={cn(
        "rounded-ds-md border border-border/60 bg-surface/80 px-4 py-3 text-xs leading-relaxed text-muted sm:text-sm",
        className,
      )}
    >
      {message}
    </p>
  );
}
