import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MeshBackground } from "@/components/ui/MeshBackground";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { SectionHeading } from "@/components/ui/SectionHeading";

type CtaBannerProps = {
  id?: string;
  title: string;
  description?: string;
  primaryLabel: string;
  primaryHref: string;
  primaryExternal?: boolean;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CtaBanner({
  id,
  title,
  description,
  primaryLabel,
  primaryHref,
  primaryExternal = false,
  secondaryLabel,
  secondaryHref,
}: CtaBannerProps) {
  return (
    <section
      id={id}
      className="relative overflow-hidden border-t border-glass-border-dark"
      aria-labelledby={id ? `${id}-title` : undefined}
    >
      <MeshBackground variant="dark" density="subtle" className="absolute inset-0" />
      <SectionDivider variant="strong" className="absolute inset-x-0 top-0" />
      <Container className="relative py-section text-on-dark">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <SectionHeading
              id={id ? `${id}-title` : undefined}
              title={title}
              description={description}
              tone="dark"
              className="max-w-2xl"
            />
          </div>
          <div className="mobile-cta-stack flex flex-col gap-3 md:flex-row md:items-center">
            <Button
              href={primaryHref}
              external={primaryExternal}
              variant="gradient"
              size="lg"
            >
              {primaryLabel}
            </Button>
            {secondaryLabel && secondaryHref ? (
              <Button
                href={secondaryHref}
                variant="glass"
                size="lg"
                className="border-on-dark/25 text-on-dark hover:bg-white/10"
              >
                {secondaryLabel}
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
