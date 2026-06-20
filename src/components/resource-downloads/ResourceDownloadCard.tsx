"use client";

import Link from "next/link";
import { Card } from "@/components/ui/Card";
import {
  getResourceDownloadActionLabel,
  getResourceDownloadHref,
  resourceDownloadsSectionCopy,
} from "@/config/resource-downloads";
import { trackPlannedEvent } from "@/lib/analytics/track-client";
import type { ResourceDownload } from "@/types/resource-downloads";

function trackResourceDownloadClick(item: ResourceDownload, href: string) {
  trackPlannedEvent("resource_download_click", {
    asset_id: item.id,
    available: item.available,
    action: item.available ? "download" : "request",
    href,
  });
}

export function ResourceDownloadCard({ item }: { item: ResourceDownload }) {
  const href = getResourceDownloadHref(item);
  const actionLabel = getResourceDownloadActionLabel(item);

  return (
    <Card as="article" className="flex h-full flex-col p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <p className="text-eyebrow font-semibold text-electric-blue">
          {item.fileType}
        </p>
        {!item.available && (
          <span className="rounded-full border border-border bg-surface px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted">
            {resourceDownloadsSectionCopy.placeholderBadge}
          </span>
        )}
      </div>
      <h3 className="mt-2 text-lg font-semibold text-foreground sm:text-xl">{item.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-base">
        {item.description}
      </p>
      <p className="mt-4 text-xs text-muted">
        {item.available ? item.downloadPath : `Placeholder: ${item.downloadPath}`}
      </p>
      {item.available ? (
        <a
          href={href}
          download
          onClick={() => trackResourceDownloadClick(item, href)}
          className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"
        >
          {actionLabel} →
        </a>
      ) : (
        <Link
          href={href}
          onClick={() => trackResourceDownloadClick(item, href)}
          className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"
        >
          {actionLabel} →
        </Link>
      )}
    </Card>
  );
}
