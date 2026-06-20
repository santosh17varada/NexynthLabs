import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { EngineeringDiagramVariant } from "@/config/engineering-excellence";

type NodeProps = {
  label: string;
  className?: string;
  accent?: boolean;
  small?: boolean;
};

function FlowNode({ label, className, accent, small }: NodeProps) {
  return (
    <div
      className={cn(
        "rounded-ds-md border px-2.5 py-2 text-center font-semibold",
        small ? "text-[0.6rem] sm:text-[0.65rem]" : "text-[0.65rem] sm:text-xs",
        accent
          ? "border-electric-blue/40 bg-gradient-brand-subtle text-foreground"
          : "border-border/70 bg-surface/90 text-foreground shadow-soft",
        className,
      )}
    >
      {label}
    </div>
  );
}

function FlowArrow({ vertical }: { vertical?: boolean }) {
  return (
    <span className={cn("text-muted", vertical && "block text-center")} aria-hidden="true">
      {vertical ? "↓" : "→"}
    </span>
  );
}

function HeroStackDiagram() {
  return (
    <div className="space-y-2" aria-hidden="true">
      <div className="grid grid-cols-3 gap-2">
        {["Web", "API", "Mobile"].map((l) => (
          <FlowNode key={l} label={l} accent />
        ))}
      </div>
      <div className="text-center"><FlowArrow vertical /></div>
      <FlowNode label="Domain services · NestJS" className="w-full" accent />
      <div className="text-center"><FlowArrow vertical /></div>
      <div className="grid grid-cols-2 gap-2">
        <FlowNode label="Data · MongoDB" />
        <FlowNode label="Integrations" />
      </div>
      <div className="text-center"><FlowArrow vertical /></div>
      <FlowNode label="AWS · Nginx · PM2" className="w-full" />
    </div>
  );
}

function PhilosophyDiagram() {
  const nodes = ["Marketing site", "Product domain", "Admin / ops"];
  return (
    <div className="flex flex-wrap items-center justify-center gap-2" aria-hidden="true">
      {nodes.map((node, i) => (
        <div key={node} className="flex items-center gap-2">
          <FlowNode label={node} accent={i === 1} />
          {i < nodes.length - 1 ? <FlowArrow /> : null}
        </div>
      ))}
      <FlowNode label="Shared APIs only where intentional" className="mt-3 w-full" small />
    </div>
  );
}

function CloudDiagram() {
  return (
    <div className="space-y-2" aria-hidden="true">
      <FlowNode label="CDN / static assets" className="w-full" />
      <div className="text-center"><FlowArrow vertical /></div>
      <FlowNode label="Nginx · TLS" className="w-full" accent />
      <div className="grid grid-cols-2 gap-2">
        <FlowNode label="Next.js" />
        <FlowNode label="API tier" />
      </div>
      <FlowNode label="AWS · S3 · compute" className="w-full" />
    </div>
  );
}

function BackendDiagram() {
  return (
    <div className="space-y-2" aria-hidden="true">
      {["Controller", "Service", "Repository", "MongoDB"].map((layer, i) => (
        <FlowNode key={layer} label={layer} className="w-full" accent={i === 1} />
      ))}
    </div>
  );
}

function ApiDiagram() {
  return (
    <div className="space-y-2" aria-hidden="true">
      <div className="grid grid-cols-3 gap-2">
        {["Web", "Mobile", "Partner"].map((c) => (
          <FlowNode key={c} label={c} />
        ))}
      </div>
      <div className="text-center"><FlowArrow vertical /></div>
      <FlowNode label="API gateway · auth" className="w-full" accent />
      <FlowNode label="REST / webhooks" className="w-full" />
    </div>
  );
}

function MarketplaceDiagram() {
  return (
    <div className="grid grid-cols-2 gap-2" aria-hidden="true">
      {["Discovery", "Listings", "Booking", "Payments*", "Notify*", "Admin"].map((n) => (
        <FlowNode key={n} label={n} accent={n.includes("*")} small />
      ))}
    </div>
  );
}

function MobileDiagram() {
  return (
    <div className="space-y-2" aria-hidden="true">
      <FlowNode label="React Native UI" className="w-full" accent />
      <FlowNode label="Shared TS models" className="w-full" />
      <FlowNode label="REST API" className="w-full" accent />
      <p className="text-center text-[0.6rem] text-muted">* readiness varies by product</p>
    </div>
  );
}

function SecurityDiagram() {
  return (
    <div className="space-y-2" aria-hidden="true">
      <FlowNode label="TLS · HTTPS" className="w-full" accent />
      <div className="grid grid-cols-2 gap-2">
        <FlowNode label="RBAC" />
        <FlowNode label="Secrets mgmt" />
      </div>
      <FlowNode label="Audit logs" className="w-full" />
    </div>
  );
}

function ScalabilityDiagram() {
  return (
    <div className="flex items-center justify-center gap-2 flex-wrap" aria-hidden="true">
      {["Static", "Cache", "API", "Queue", "DB"].map((s, i) => (
        <div key={s} className="flex items-center gap-2">
          <FlowNode label={s} accent={i >= 2} small />
          {i < 4 ? <FlowArrow /> : null}
        </div>
      ))}
    </div>
  );
}

function ObservabilityDiagram() {
  return (
    <div className="space-y-2" aria-hidden="true">
      <FlowNode label="App logs · errors" className="w-full" />
      <FlowNode label="Metrics · health" className="w-full" accent />
      <FlowNode label="Status & alerts" className="w-full" />
    </div>
  );
}

function CicdDiagram() {
  const steps = ["Commit", "Lint", "Build", "Deploy"];
  return (
    <div className="flex flex-wrap items-center justify-center gap-2" aria-hidden="true">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-2">
          <FlowNode label={step} accent={i === 2} small />
          {i < steps.length - 1 ? <FlowArrow /> : null}
        </div>
      ))}
    </div>
  );
}

function InfrastructureDiagram() {
  return (
    <div className="grid grid-cols-2 gap-2" aria-hidden="true">
      {["Nginx", "PM2", "Backups", "Firewall", "VPC", "IaC-ready"].map((l) => (
        <FlowNode key={l} label={l} accent={l === "Nginx"} small />
      ))}
    </div>
  );
}

const diagrams: Record<EngineeringDiagramVariant, () => ReactNode> = {
  "hero-stack": HeroStackDiagram,
  philosophy: PhilosophyDiagram,
  cloud: CloudDiagram,
  backend: BackendDiagram,
  api: ApiDiagram,
  marketplace: MarketplaceDiagram,
  mobile: MobileDiagram,
  security: SecurityDiagram,
  scalability: ScalabilityDiagram,
  observability: ObservabilityDiagram,
  cicd: CicdDiagram,
  infrastructure: InfrastructureDiagram,
};

type EngineeringDiagramProps = {
  variant: EngineeringDiagramVariant;
  className?: string;
  tone?: "light" | "dark";
};

export function EngineeringDiagram({
  variant,
  className,
  tone = "light",
}: EngineeringDiagramProps) {
  const Diagram = diagrams[variant];

  return (
    <div
      className={cn(
        "rounded-ds-lg border p-4 sm:p-6",
        tone === "dark"
          ? "border-glass-border-dark bg-glass-dark/50"
          : "border-glass-border bg-glass/80 shadow-soft backdrop-blur-sm",
        className,
      )}
      aria-hidden="true"
    >
      <Diagram />
    </div>
  );
}

export function EngineeringHeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      <div
        className="pointer-events-none absolute -right-6 top-4 h-40 w-40 rounded-full bg-electric-blue/25 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative overflow-hidden rounded-ds-xl border border-glass-border-dark bg-glass-dark/40 p-6 shadow-glass-dark backdrop-blur-sm sm:p-8">
        <p className="text-eyebrow text-electric-cyan">System overview</p>
        <div className="mt-4">
          <EngineeringDiagram
            variant="hero-stack"
            tone="dark"
            className="border-glass-border-dark bg-midnight/40"
          />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[0.65rem] text-on-dark-muted sm:text-xs">
          <span>Clients</span>
          <span>Services</span>
          <span>Infra</span>
        </div>
      </div>
    </div>
  );
}
