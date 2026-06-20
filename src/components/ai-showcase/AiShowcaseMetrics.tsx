import { Container } from "@/components/ui/Container";
import { aiShowcaseMetrics, aiShowcasePageCopy } from "@/config/ai-showcase";

export function AiShowcaseMetrics() {
  return (
    <section className="border-b border-border/60 bg-primary text-primary-foreground">
      <Container className="py-10 sm:py-12">
        <p className="text-center text-eyebrow font-semibold text-primary-foreground/75 sm:text-sm">
          {aiShowcasePageCopy.metricsIntro}
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3 sm:gap-8">
          {aiShowcaseMetrics.map((metric) => (
            <div key={metric.value} className="text-center sm:text-left">
              <p className="text-lg font-semibold text-primary-foreground sm:text-xl">
                {metric.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
