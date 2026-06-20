import { RequestProposalForm } from "@/components/request-proposal/RequestProposalForm";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { MarketingHero } from "@/components/ui/MarketingHero";
import { requestProposalPageCopy } from "@/config/request-proposal";
import { createPageMetadataFromKey } from "@/lib/seo";

export const metadata = createPageMetadataFromKey("requestProposal");

export default function RequestProposalPage() {
  const { hero, formTitle, formNote, processSteps } = requestProposalPageCopy;

  return (
    <>
      <MarketingHero eyebrow={hero.eyebrow} title={hero.title} description={hero.description} />
      <Container className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_280px] lg:gap-12">
          <Card className="p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">{formTitle}</h2>
            <p className="mt-2 text-sm text-muted">{formNote}</p>
            <div className="mt-6">
              <RequestProposalForm />
            </div>
          </Card>

          <aside className="space-y-6">
            <div className="rounded-ds-lg border border-border/70 bg-surface p-5 sm:p-6">
              <h3 className="text-eyebrow font-semibold text-electric-blue">
                What happens next
              </h3>
              <ol className="mt-4 space-y-5">
                {processSteps.map((step, index) => (
                  <li key={step.title} className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-electric-violet/15 text-xs font-bold text-foreground">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-medium text-foreground">{step.title}</p>
                      <p className="mt-1 text-sm text-muted">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <p className="text-xs text-muted">
              No bid portal or automated pricing. File attachments and enterprise RFP document
              upload are planned — see docs.
            </p>
          </aside>
        </div>
      </Container>
    </>
  );
}
