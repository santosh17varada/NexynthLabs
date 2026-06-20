import { cn } from "@/lib/cn";

type NexynthParticleNetworkPlaceholderProps = {
  className?: string;
};

/** SSR-safe static gradient — identical dimensions before canvas mount. */
export function NexynthParticleNetworkPlaceholder({
  className,
}: NexynthParticleNetworkPlaceholderProps) {
  return (
    <div
      className={cn(
        "h-full w-full bg-gradient-to-br from-[#12082a] via-[#0f1b2d] to-[#0a1628]",
        className,
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_55%,rgba(139,92,246,0.22)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(59,130,246,0.12)_0%,transparent_50%)]" />
    </div>
  );
}
