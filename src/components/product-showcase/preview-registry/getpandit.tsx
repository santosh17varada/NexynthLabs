import { cn } from "@/lib/cn";
import type { ShowcasePreviewRegistry } from "@/types/product-showcase";

function PreviewCard({
  title,
  subtitle,
  badge,
}: {
  title: string;
  subtitle: string;
  badge?: string;
}) {
  return (
    <div className="rounded-ds-md border border-border/60 bg-surface/90 p-3 shadow-soft">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">{title}</p>
          <p className="mt-0.5 text-xs text-muted">{subtitle}</p>
        </div>
        {badge ? (
          <span className="shrink-0 rounded-ds-full bg-electric-violet/15 px-2 py-0.5 text-[0.6rem] font-bold uppercase text-foreground">
            {badge}
          </span>
        ) : null}
      </div>
    </div>
  );
}

function PanditDiscoveryPreview() {
  return (
    <div className="space-y-3" aria-hidden="true">
      <div className="flex gap-2">
        <div className="h-9 flex-1 rounded-ds-md border border-border/60 bg-surface px-3 text-xs leading-9 text-muted">
          Search pandits, poojas…
        </div>
        <div className="h-9 w-16 rounded-ds-md bg-gradient-brand text-center text-xs font-semibold leading-9 text-on-dark">
          Filter
        </div>
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        <PreviewCard title="Pt. Ramesh Sharma" subtitle="Telugu · Satyanarayana" badge="4.9" />
        <PreviewCard title="Pt. Venkat Rao" subtitle="Hindi · Griha Pravesh" badge="Verified" />
        <PreviewCard title="Pt. Anil Kumar" subtitle="Kannada · Navagraha" />
        <PreviewCard title="Pt. Suresh Iyer" subtitle="Tamil · Lakshmi Pooja" />
      </div>
    </div>
  );
}

function PoojaBookingPreview() {
  return (
    <div className="space-y-3" aria-hidden="true">
      <div className="rounded-ds-md border border-electric-violet/25 bg-electric-violet/5 p-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-electric-violet">
          Satyanarayana Pooja
        </p>
        <p className="mt-1 text-sm text-foreground">2–3 hours · Home ceremony</p>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: 14 }, (_, i) => (
          <div
            key={i}
            className={cn(
              "aspect-square rounded-ds-sm text-center text-[0.6rem] leading-[1.75rem]",
              i === 9
                ? "bg-gradient-brand font-bold text-on-dark"
                : "border border-border/50 bg-surface text-muted",
            )}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

function AstrologyPreview() {
  return (
    <div className="space-y-3" aria-hidden="true">
      <div className="grid grid-cols-3 gap-2">
        {["Kundli", "Match", "Muhurat"].map((item) => (
          <div
            key={item}
            className="rounded-ds-md border border-electric-cyan/30 bg-electric-cyan/5 py-3 text-center text-xs font-semibold text-foreground"
          >
            {item}
          </div>
        ))}
      </div>
      <PreviewCard title="Jyotish consultation" subtitle="45 min · Video or in-person" badge="Book" />
    </div>
  );
}

function VendorNetworkPreview() {
  return (
    <div className="space-y-2" aria-hidden="true">
      {[
        { name: "Temple partner", status: "Active", color: "bg-emerald-500" },
        { name: "Pandit onboarding", status: "Review", color: "bg-amber-500" },
        { name: "Vendor listing", status: "Draft", color: "bg-border" },
      ].map((row) => (
        <div
          key={row.name}
          className="flex items-center justify-between rounded-ds-md border border-border/60 bg-surface px-3 py-2.5"
        >
          <div className="flex items-center gap-2">
            <span className={cn("h-2 w-2 rounded-full", row.color)} />
            <span className="text-sm text-foreground">{row.name}</span>
          </div>
          <span className="text-xs text-muted">{row.status}</span>
        </div>
      ))}
    </div>
  );
}

function CustomerJourneyPreview() {
  const steps = ["Search", "Book", "Pay", "Remind", "Done"];
  return (
    <div className="space-y-4" aria-hidden="true">
      <div className="flex items-center justify-between gap-1">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-1 flex-col items-center gap-1">
            <div
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full text-[0.65rem] font-bold",
                index <= 2
                  ? "bg-gradient-brand text-on-dark"
                  : "border border-border bg-surface text-muted",
              )}
            >
              {index + 1}
            </div>
            <span className="text-[0.6rem] text-muted">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdminOpsPreview() {
  return (
    <div className="grid gap-2 sm:grid-cols-2" aria-hidden="true">
      {[
        { label: "Open bookings", value: "24" },
        { label: "Partners", value: "12" },
        { label: "Pending reviews", value: "5" },
        { label: "Catalog items", value: "48" },
      ].map((stat) => (
        <div
          key={stat.label}
          className="rounded-ds-md border border-glass-border-dark bg-glass-dark/40 p-3"
        >
          <p className="text-[0.65rem] uppercase tracking-wide text-on-dark-muted">{stat.label}</p>
          <p className="mt-1 text-2xl font-semibold text-on-dark">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}

function MobileAppPreview() {
  return (
    <div className="space-y-2" aria-hidden="true">
      <div className="rounded-ds-md bg-gradient-brand px-3 py-4 text-on-dark">
        <p className="text-[0.65rem] font-semibold uppercase tracking-wide opacity-80">GetPandit</p>
        <p className="mt-1 text-sm font-semibold">Book your next pooja</p>
      </div>
      <PreviewCard title="Griha Pravesh" subtitle="Tomorrow · 9:00 AM" badge="Live" />
      <PreviewCard title="Find pandits near you" subtitle="12 available today" />
    </div>
  );
}

function TrustPreview() {
  return (
    <div className="space-y-2" aria-hidden="true">
      {[
        "HTTPS product domain",
        "Profile verification",
        "Honest readiness labels",
        "No fake metrics",
      ].map((item) => (
        <div
          key={item}
          className="flex items-center gap-2 rounded-ds-md border border-emerald-500/25 bg-emerald-500/5 px-3 py-2"
        >
          <span className="text-emerald-600">✓</span>
          <span className="text-sm text-foreground">{item}</span>
        </div>
      ))}
    </div>
  );
}

export const getPanditPreviewRegistry: ShowcasePreviewRegistry = {
  "pandit-discovery": PanditDiscoveryPreview,
  "pooja-booking": PoojaBookingPreview,
  astrology: AstrologyPreview,
  "vendor-network": VendorNetworkPreview,
  "customer-journey": CustomerJourneyPreview,
  "admin-ops": AdminOpsPreview,
  "mobile-app": MobileAppPreview,
  trust: TrustPreview,
};
