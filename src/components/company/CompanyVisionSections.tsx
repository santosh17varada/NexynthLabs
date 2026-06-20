import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { companyVisionPageCopy } from "@/config/company-vision";

export function CompanyMissionSection() {
  const { mission } = companyVisionPageCopy;

  return (
    <section className="border-t border-border/60">
      <Container className="py-14 sm:py-16 lg:py-20">
        <SectionHeading eyebrow={mission.eyebrow} title={mission.title} />
        <div className="mt-8 max-w-3xl space-y-4">
          {mission.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-muted sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function CompanyVisionPillarsSection() {
  const { pillars } = companyVisionPageCopy;

  return (
    <section className="border-t border-border/60 bg-surface">
      <Container className="py-14 sm:py-16 lg:py-20">
        <SectionHeading
          eyebrow={pillars.eyebrow}
          title={pillars.title}
          description={pillars.description}
        />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {pillars.items.map((pillar) => (
            <Card key={pillar.id} as="article" className="h-full p-5 sm:p-6">
              <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {pillar.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function CompanyPrinciplesSection() {
  const { principles } = companyVisionPageCopy;

  return (
    <section className="border-t border-border/60">
      <Container className="py-14 sm:py-16 lg:py-20">
        <SectionHeading
          eyebrow={principles.eyebrow}
          title={principles.title}
          description={principles.description}
        />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {principles.items.map((principle) => (
            <Card key={principle.id} as="article" className="h-full p-5 sm:p-6">
              <h3 className="text-lg font-semibold text-foreground">{principle.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {principle.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
