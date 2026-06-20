import { PageSection } from "@/components/layout/PageSection";
import { CloudArchitectureVisual } from "@/components/visual-storytelling/cloud/CloudArchitectureVisual";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { engineeringRequestPathCopy } from "@/config/engineering-request-path";
import { MotionReveal } from "@/motion/MotionReveal";

export function EngineeringRequestPathSection() {
  const copy = engineeringRequestPathCopy;

  return (
    <PageSection id={copy.id} variant="muted">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12 xl:gap-16">
        <div className="min-w-0">
          <SectionHeading
            eyebrow={copy.eyebrow}
            title={copy.title}
            description={copy.description}
          />

          <ul className="mt-8 space-y-3">
            {copy.signals.map((signal) => (
              <li
                key={signal}
                className="flex items-center gap-2.5 text-sm text-muted sm:text-base"
              >
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-electric-violet"
                  aria-hidden="true"
                />
                {signal}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-xs text-muted">
            Hover layers on desktop to trace the request path from user to observability.
          </p>
        </div>

        <MotionReveal variant="section" delay={1}>
          <CloudArchitectureVisual />
        </MotionReveal>
      </div>
    </PageSection>
  );
}
