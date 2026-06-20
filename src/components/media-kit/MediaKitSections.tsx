import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { MediaKitCopyButton } from "@/components/media-kit/MediaKitCopyButton";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  getMediaKitDownloadActionLabel,
  getMediaKitDownloadHref,
  getMediaKitLogoRequestHref,
  mediaKitBoilerplate,
  mediaKitBrandColors,
  mediaKitCompanyProfile,
  mediaKitContact,
  mediaKitDownloadAssets,
  mediaKitDownloadsCopy,
  mediaKitLogos,
  mediaKitTypography,
} from "@/config/media-kit";
import { getTelLink } from "@/config/site";

function MediaKitSection({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-28 border-t border-border/60 ${className}`}>
      <Container className="py-14 sm:py-16 lg:py-20">{children}</Container>
    </section>
  );
}

export function MediaKitSections() {
  return (
    <>
      <MediaKitSection id="company-profile">
        <SectionHeading
          eyebrow="Profile"
          title={mediaKitCompanyProfile.title}
          description={mediaKitCompanyProfile.summary}
        />
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
          <div className="space-y-4">
            {mediaKitCompanyProfile.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-muted sm:text-lg">
                {paragraph}
              </p>
            ))}
            <div className="flex flex-col gap-2 pt-2 sm:flex-row sm:flex-wrap">
              {mediaKitCompanyProfile.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </div>
          <Card className="p-5 sm:p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">At a glance</h3>
            <dl className="mt-4 space-y-3">
              {mediaKitCompanyProfile.facts.map((fact) => (
                <div key={fact.label} className="grid gap-0.5 sm:grid-cols-[9rem_1fr]">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                    {fact.label}
                  </dt>
                  <dd className="text-sm font-medium text-foreground">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Card>
        </div>
      </MediaKitSection>

      <MediaKitSection id="logos">
        <SectionHeading
          eyebrow="Identity"
          title="Logo assets"
          description="On-screen previews from the branding folder. Full-resolution press exports are placeholders until the ZIP pack is published."
        />
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {mediaKitLogos.map((logo) => (
            <Card key={logo.id} as="article" className="flex h-full flex-col overflow-hidden">
              <div
                className={`flex min-h-[10rem] items-center justify-center border-b border-border p-8 sm:min-h-[12rem] ${logo.backgroundClass}`}
              >
                <Image
                  src={logo.imagePath}
                  alt={logo.title}
                  width={200}
                  height={56}
                  className="h-auto max-h-14 w-auto max-w-[12rem] sm:max-h-16"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground">{logo.title}</h3>
                  {!logo.available && (
                    <span className="rounded-full border border-border bg-surface px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted">
                      {mediaKitDownloadsCopy.placeholderBadge}
                    </span>
                  )}
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{logo.description}</p>
                <p className="mt-4 text-xs text-muted">Target: {logo.downloadPath}</p>
                <Link
                  href={getMediaKitLogoRequestHref(logo.id)}
                  className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"
                >
                  {mediaKitDownloadsCopy.requestLabel} →
                </Link>
              </div>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">
          Full guidelines:{" "}
          <span className="font-mono text-xs text-foreground">branding/GUIDELINES.md</span> in the
          repository. Do not stretch, recolor, or mix logo concepts on the same document.
        </p>
      </MediaKitSection>

      <MediaKitSection id="brand-colors">
        <SectionHeading
          eyebrow="Palette"
          title="Brand colors"
          description="Synced with globals.css and branding/colors/palette.json. Use navy and ivory for large fields; gold for accents — not body text on ivory."
        />
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mediaKitBrandColors.map((color) => (
            <Card key={color.token} as="article" className="overflow-hidden">
              <div
                className="h-20 border-b border-border sm:h-24"
                style={{ backgroundColor: color.hex }}
                aria-hidden="true"
              />
              <div className="p-5">
                <p className="text-eyebrow font-semibold text-electric-blue">
                  {color.token}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-foreground">{color.name}</h3>
                <p className="mt-2 font-mono text-sm text-foreground">{color.hex}</p>
                <p className="mt-2 text-sm text-muted">{color.usage}</p>
              </div>
            </Card>
          ))}
        </div>
      </MediaKitSection>

      <MediaKitSection id="typography">
        <SectionHeading
          eyebrow="Type"
          title="Typography"
          description="Geist Sans and Geist Mono via next/font — 16 px minimum body size on mobile for accessibility."
        />
        <div className="mt-8 space-y-4">
          {mediaKitTypography.map((item) => (
            <Card key={item.label} as="article" className="p-5 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-eyebrow font-semibold text-muted">
                    {item.label}
                  </p>
                  <p className={`mt-3 text-foreground ${item.className}`}>{item.sample}</p>
                </div>
                <p className="shrink-0 text-xs text-muted sm:max-w-[12rem] sm:text-right">
                  {item.specs}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </MediaKitSection>

      <MediaKitSection id="boilerplate">
        <SectionHeading
          eyebrow="Copy"
          title="Boilerplate text"
          description="Approved wording for press releases, partner pages, and event programmes. Copy and paste — adjust only for grammar in context."
        />
        <div className="mt-8 space-y-4">
          {mediaKitBoilerplate.map((block) => (
            <Card key={block.id} as="article" className="p-5 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="text-lg font-semibold text-foreground">{block.label}</h3>
                <MediaKitCopyButton text={block.text} label={block.label} />
              </div>
              <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-muted sm:text-base">
                {block.text}
              </p>
            </Card>
          ))}
        </div>
      </MediaKitSection>

      <MediaKitSection id="contact-details">
        <SectionHeading
          eyebrow="Reach us"
          title={mediaKitContact.title}
          description={mediaKitContact.summary}
        />
        <Card className="mt-8 p-5 sm:p-8">
          <dl className="grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted">Email</dt>
              <dd className="mt-2">
                <a
                  href={mediaKitContact.pressMailto}
                  className="inline-flex min-h-11 items-center text-base font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"
                >
                  {mediaKitContact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted">Phone</dt>
              <dd className="mt-2">
                <a
                  href={getTelLink()}
                  className="inline-flex min-h-11 items-center text-base font-semibold text-foreground hover:text-electric-violet"
                >
                  {mediaKitContact.phoneDisplay}
                </a>
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted">Address</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                {mediaKitContact.address}
              </dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:flex-wrap sm:gap-4">
            {mediaKitContact.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </Card>
      </MediaKitSection>

      <MediaKitSection id="downloadable-assets">
        <SectionHeading
          eyebrow="Assets"
          title="Downloadable assets"
          description="ZIP and PDF packs will live under public/press/ when finalized. Until then, use request links — we respond by email."
        />
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {mediaKitDownloadAssets.map((item) => {
            const href = getMediaKitDownloadHref(item);
            const actionLabel = getMediaKitDownloadActionLabel(item);

            return (
              <Card key={item.id} as="article" className="flex h-full flex-col p-5 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <p className="text-eyebrow font-semibold text-electric-blue">
                    {item.fileType}
                  </p>
                  {!item.available && (
                    <span className="rounded-full border border-border bg-surface px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted">
                      {mediaKitDownloadsCopy.placeholderBadge}
                    </span>
                  )}
                </div>
                <h3 className="mt-2 text-lg font-semibold text-foreground sm:text-xl">
                  {item.title}
                </h3>
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
                    className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"
                  >
                    {actionLabel} →
                  </a>
                ) : (
                  <Link
                    href={href}
                    className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"
                  >
                    {actionLabel} →
                  </Link>
                )}
              </Card>
            );
          })}
        </div>
      </MediaKitSection>
    </>
  );
}
