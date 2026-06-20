import { HomeDarkSection } from "@/components/home/HomeDarkSection";
import { AiWorkflowFlowVisual } from "@/components/visual-storytelling/ai-workflow/AiWorkflowFlowVisual";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeAiWorkflowCopy } from "@/config/home-ai-workflow";
import { MotionReveal } from "@/motion/MotionReveal";

export function HomeAiWorkflowSection() {
  const copy = homeAiWorkflowCopy;

  return (
    <HomeDarkSection id={copy.id}>
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12 xl:gap-16">
        <div className="min-w-0">
          <SectionHeading
            eyebrow={copy.eyebrow}
            title={copy.title}
            description={copy.description}
            tone="dark"
          />

          <ul className="mt-8 space-y-3">
            {copy.outcomes.map((outcome) => (
              <li
                key={outcome}
                className="flex items-center gap-2.5 text-sm text-on-dark-muted sm:text-base"
              >
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-electric-cyan"
                  aria-hidden="true"
                />
                {outcome}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button href={copy.cta.href} variant="gradient" size="lg">
              {copy.cta.label}
            </Button>
          </div>
        </div>

        <MotionReveal variant="section" delay={1}>
          <AiWorkflowFlowVisual />
        </MotionReveal>
      </div>
    </HomeDarkSection>
  );
}
