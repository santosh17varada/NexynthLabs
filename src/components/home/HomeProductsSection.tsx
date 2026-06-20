import { HomeSectionShell } from "@/components/home/HomeSectionShell";
import { HomeGridCard } from "@/components/home/HomeGridCard";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeProductItems, homeProductsCopy } from "@/config/home-products";
import { cn } from "@/lib/cn";

export function HomeProductsSection() {
  const copy = homeProductsCopy;

  return (
    <HomeSectionShell id="products" variant="surface">
      <SectionHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />

      <div className="mt-10 grid grid-cols-1 items-stretch gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {homeProductItems.map((item) => (
          <HomeGridCard
            key={item.id}
            title={item.title}
            description={item.description}
            href={item.href}
            icon={item.icon}
            variant={item.flagship ? "flagship" : "default"}
            badge={item.badge}
            className={cn(
              item.flagship && "sm:col-span-2 lg:col-span-2 lg:min-h-[17rem]",
            )}
          />
        ))}
      </div>

      <div className="mt-8 lg:mt-10">
        <Button href={copy.footerCta.href} variant="outline" size="lg">
          {copy.footerCta.label}
        </Button>
      </div>
    </HomeSectionShell>
  );
}
