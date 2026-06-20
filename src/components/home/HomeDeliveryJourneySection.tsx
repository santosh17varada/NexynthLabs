import { HomeDarkSection } from "@/components/home/HomeDarkSection";
import { DeliveryJourneyVisual } from "@/components/visual-storytelling/lifecycle/DeliveryJourneyVisual";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeDeliveryJourneyCopy } from "@/config/home-delivery-journey";
import { MotionReveal } from "@/motion/MotionReveal";

export function HomeDeliveryJourneySection() {
  const copy = homeDeliveryJourneyCopy;

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

          <p className="mt-4 text-xs text-on-dark-muted">
            Hover stages on desktop to trace how Nexynth delivers from discovery to scale.
          </p>
        </div>

        <MotionReveal variant="section" delay={1}>
          <DeliveryJourneyVisual />
        </MotionReveal>
      </div>
    </HomeDarkSection>
  );
}
