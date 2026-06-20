import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getPartnerEnquiryHref } from "@/config/partners";
import type { PartnerOpportunity } from "@/config/partners";

type PartnerOpportunityGridProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: readonly PartnerOpportunity[];
};

export function PartnerOpportunityGrid({
  eyebrow,
  title,
  description,
  items,
}: PartnerOpportunityGridProps) {
  return (
    <section>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {items.map((item) => (
          <Card key={item.id} as="article" className="flex h-full flex-col p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-base">
              {item.description}
            </p>
            <ul className="mt-5 space-y-2">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2.5 text-sm text-muted">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand"
                    aria-hidden="true"
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <Link
              href={getPartnerEnquiryHref(item.enquiryInterest)}
              className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"
            >
              Enquire about this →
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}

type PartnerWhyGridProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: readonly { title: string; description: string }[];
};

export function PartnerWhyGrid({ eyebrow, title, description, items }: PartnerWhyGridProps) {
  return (
    <section>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        {items.map((item) => (
          <Card key={item.title} as="article" className="h-full p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {item.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
