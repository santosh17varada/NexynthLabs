import Link from "next/link";
import { InteractiveFlowDemo } from "@/components/product-demo/InteractiveFlowDemo";
import { featuredProductDemos, productDemoCopy } from "@/config/product-demos";

export function ProductDemoShowcase() {
  return (
    <div className="space-y-16">
      {featuredProductDemos.map((demo) => (
        <div key={demo.id}>
          <p className="text-eyebrow text-electric-blue">{demo.eyebrow}</p>
          <h3 className="mt-2 text-lg font-semibold text-foreground">{demo.title}</h3>
          {demo.description ? (
            <p className="mt-2 max-w-2xl text-sm text-muted">{demo.description}</p>
          ) : null}
          <div className="mt-6">
            <InteractiveFlowDemo demo={demo} />
          </div>
        </div>
      ))}

      <pre className="overflow-x-auto rounded-ds-md border border-border/60 bg-surface px-4 py-3 font-mono text-xs text-muted">
        {productDemoCopy.framework.usage}
      </pre>

      <p className="text-sm text-muted">{productDemoCopy.framework.cmsNote}</p>

      <p className="text-sm text-muted">
        Live on{" "}
        <Link href="/getpandit" className="font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline">
          /getpandit
        </Link>
        ,{" "}
        <Link href="/ai-showcase" className="font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline">
          /ai-showcase
        </Link>
        , and{" "}
        <Link href="/products/ecosystem" className="font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline">
          /products/ecosystem
        </Link>
        .
      </p>
    </div>
  );
}
