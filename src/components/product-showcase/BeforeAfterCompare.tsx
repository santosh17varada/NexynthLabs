"use client";

import { useState } from "react";
import Image from "next/image";
import { deviceFrameForType } from "@/components/product-showcase/DeviceFrames";
import type { ProductMockupAsset, ShowcaseDeviceType } from "@/types/product-showcase";
import { cn } from "@/lib/cn";

type BeforeAfterCompareProps = {
  before: ProductMockupAsset;
  after: ProductMockupAsset;
  beforeLabel?: string;
  afterLabel?: string;
  device?: ShowcaseDeviceType;
  className?: string;
};

export function BeforeAfterCompare({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
  device = "browser",
  className,
}: BeforeAfterCompareProps) {
  const [position, setPosition] = useState(50);

  const frame = (asset: ProductMockupAsset, label: string) => (
    <div className="relative aspect-[1200/630] w-full overflow-hidden rounded-ds-md">
      <Image
        src={asset.imageSrc}
        alt={asset.imageAlt}
        fill
        className="object-cover object-center"
        sizes="(max-width: 1024px) 100vw, 560px"
        unoptimized={asset.imageSrc.endsWith(".svg")}
      />
      <span className="absolute left-3 top-3 rounded-ds-full bg-background/90 px-2.5 py-1 text-xs font-semibold text-foreground shadow-soft">
        {label}
      </span>
    </div>
  );

  return (
    <div className={cn("space-y-4", className)}>
      <div className="relative overflow-hidden rounded-ds-lg">
        {deviceFrameForType(
          device,
          after.urlBar ?? before.urlBar,
          <div className="relative">
            <div className="relative">{frame(after, afterLabel)}</div>
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${position}%` }}
              aria-hidden="true"
            >
              {frame(before, beforeLabel)}
            </div>
            <div
              className="pointer-events-none absolute inset-y-0 w-0.5 bg-gradient-brand shadow-glow"
              style={{ left: `${position}%` }}
              aria-hidden="true"
            />
          </div>,
        )}
      </div>
      <label className="flex items-center gap-3 text-sm text-muted">
        <span className="shrink-0">{beforeLabel}</span>
        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          className="h-2 w-full cursor-ew-resize accent-accent"
          aria-label={`Compare ${beforeLabel} and ${afterLabel}`}
        />
        <span className="shrink-0">{afterLabel}</span>
      </label>
    </div>
  );
}
