"use client";

import { useState } from "react";

export function MediaKitCopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex min-h-11 items-center rounded-ds-full border border-border px-4 py-2 text-sm font-semibold text-electric-blue transition-colors hover:border-electric-blue/40"
      aria-label={`Copy ${label} boilerplate`}
    >
      {copied ? "Copied" : "Copy text"}
    </button>
  );
}
