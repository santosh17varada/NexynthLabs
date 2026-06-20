import { CtaBanner } from "@/components/ui/CtaBanner";
import { homeFinalCtaCopy } from "@/config/footer-navigation";

export function HomeFinalCta() {
  const copy = homeFinalCtaCopy;

  return (
    <CtaBanner
      id="final-cta"
      title={copy.title}
      description={copy.description}
      primaryLabel={copy.primary.label}
      primaryHref={copy.primary.href}
      secondaryLabel={copy.secondary.label}
      secondaryHref={copy.secondary.href}
    />
  );
}
