import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { socialProofContentCopy } from "@/config/social-proof-content";
import { testimonialsPageCopy } from "@/config/testimonials";
import { cn } from "@/lib/cn";

type SocialProofFallbackPromoProps = {
  title?: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
};

export function SocialProofFallbackPromo({
  title,
  description,
  primaryCta,
  secondaryCta,
  className,
}: SocialProofFallbackPromoProps) {
  const fallback = socialProofContentCopy.fallbackPromo;
  const empty = testimonialsPageCopy.emptyState;

  return (
    <Card className={cn("p-6 text-center sm:p-8", className)}>
      <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
        {title ?? empty.title}
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
        {description ?? empty.description}
      </p>
      <div className="mobile-cta-stack mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button
          href={primaryCta?.href ?? empty.primaryCta.href}
          variant="gradient"
          size="lg"
        >
          {primaryCta?.label ?? empty.primaryCta.label}
        </Button>
        <Button
          href={secondaryCta?.href ?? empty.secondaryCta.href}
          variant="outline"
          size="lg"
        >
          {secondaryCta?.label ?? empty.secondaryCta.label}
        </Button>
      </div>
      <p className="mt-4 text-xs text-muted">{fallback.description}</p>
    </Card>
  );
}
