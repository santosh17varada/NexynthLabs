import { HomeSectionShell } from "@/components/home/HomeSectionShell";
import { ProductLifecycleVisual } from "@/components/visual-storytelling/lifecycle/ProductLifecycleVisual";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeProductLifecycleCopy } from "@/config/home-product-lifecycle";
import { MotionReveal } from "@/motion/MotionReveal";

export function HomeProductLifecycleSection() {
  const copy = homeProductLifecycleCopy;

  return (
    <HomeSectionShell id={copy.id} variant="surface">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
          align="center"
        />
      </div>

      <MotionReveal variant="section" delay={1} className="mt-10 sm:mt-12">
        <ProductLifecycleVisual />
      </MotionReveal>

      <ul className="mx-auto mt-8 flex max-w-2xl flex-col gap-2 sm:mt-10">
        {copy.principles.map((principle) => (
          <li
            key={principle}
            className="flex items-center justify-center gap-2.5 text-center text-sm text-muted sm:text-base"
          >
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand"
              aria-hidden="true"
            />
            {principle}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex justify-center sm:mt-10">
        <Button href={copy.cta.href} variant="gradient" size="lg">
          {copy.cta.label}
        </Button>
      </div>

      <p className="mt-4 text-center text-xs text-muted">
        Hover stages on desktop to trace the journey from discovery to scale.
      </p>
    </HomeSectionShell>
  );
}
