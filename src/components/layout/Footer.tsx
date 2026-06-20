import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { MeshBackground } from "@/components/ui/MeshBackground";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { footerBrandCopy, footerNavigation } from "@/config/footer-navigation";
import { getMailtoLink, getTelLink, siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

type FooterLinkGroupProps = {
  title: string;
  links: readonly { label: string; href: string; external?: boolean }[];
};

function FooterLinkGroup({ title, links }: FooterLinkGroupProps) {
  return (
    <div className="min-w-0">
      <p className="text-eyebrow mb-4 text-electric-cyan">{title}</p>
      <ul className="space-y-0.5">
        {links.map((item) => (
          <li key={`${title}-${item.href}`}>
            {item.external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center py-1.5 text-sm text-on-dark-muted transition-colors hover:text-on-dark"
              >
                {item.label}
              </a>
            ) : (
              <Link
                href={item.href}
                className="inline-flex min-h-11 items-center py-1.5 text-sm text-on-dark-muted transition-colors hover:text-on-dark"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

type SocialKey = keyof typeof siteConfig.socialLinks;

const socialLabels: Record<SocialKey, string> = {
  linkedin: "LinkedIn",
  twitter: "X (Twitter)",
  instagram: "Instagram",
};

export function Footer() {
  const year = new Date().getFullYear();
  const { companyName, email, phoneDisplay, address, copy } = siteConfig;
  const socialEntries = (
    Object.entries(siteConfig.socialLinks) as [SocialKey, string][]
  ).filter(([, url]) => url.trim().length > 0);

  return (
    <footer className="relative overflow-hidden border-t border-glass-border-dark pb-[env(safe-area-inset-bottom)] text-on-dark">
      <MeshBackground variant="dark" density="subtle" showGrid="desktop" className="absolute inset-0" />
      <SectionDivider variant="strong" className="absolute inset-x-0 top-0" />

      <Container className="relative py-12 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-10">
          <div className="space-y-6 lg:col-span-4 xl:col-span-4">
            <Logo showWordmark tone="dark" />
            <p className="max-w-sm text-sm leading-relaxed text-on-dark-muted sm:text-base">
              {footerBrandCopy.summary}
            </p>
            <p className="text-xs text-on-dark-muted/80">{companyName}</p>

            <div className="rounded-ds-lg border border-glass-border-dark bg-glass-dark/60 p-5 backdrop-blur-sm">
              <p className="text-eyebrow text-electric-cyan">Contact</p>
              <ul className="mt-4 space-y-1 text-sm">
                <li>
                  <Link
                    href="/contact"
                    className="inline-flex min-h-11 items-center py-1 font-medium text-on-dark transition-colors hover:text-electric-cyan"
                  >
                    Contact us
                  </Link>
                </li>
                <li>
                  <a
                    href={getMailtoLink()}
                    className="inline-flex min-h-11 items-center break-all py-1 text-on-dark-muted transition-colors hover:text-on-dark"
                  >
                    {email}
                  </a>
                </li>
                <li>
                  <a
                    href={getTelLink()}
                    className="inline-flex min-h-11 items-center py-1 text-on-dark-muted transition-colors hover:text-on-dark"
                  >
                    {phoneDisplay}
                  </a>
                </li>
                <li className="py-1 leading-relaxed text-on-dark-muted">{address.full}</li>
              </ul>
            </div>

            {socialEntries.length > 0 ? (
              <div>
                <p className="text-eyebrow mb-3 text-on-dark-muted">Follow</p>
                <ul className="flex flex-wrap gap-3">
                  {socialEntries.map(([key, url]) => (
                    <li key={key}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center rounded-ds-full border border-glass-border-dark px-4 text-sm text-on-dark-muted transition-colors hover:border-electric-blue/40 hover:text-on-dark"
                      >
                        {socialLabels[key]}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-5 lg:gap-6">
            <FooterLinkGroup title="Products" links={footerNavigation.products} />
            <FooterLinkGroup title="Solutions" links={footerNavigation.solutions} />
            <FooterLinkGroup title="Company" links={footerNavigation.company} />
            <FooterLinkGroup title="Resources" links={footerNavigation.resources} />
            <div className="col-span-2 sm:col-span-1">
              <FooterLinkGroup title="Legal" links={footerNavigation.legal} />
            </div>
          </div>
        </div>
      </Container>

      <SectionDivider variant="subtle" className="relative opacity-60" />

      <Container
        className={cn(
          "relative flex flex-col gap-3 py-6 text-xs text-on-dark-muted",
          "sm:flex-row sm:items-center sm:justify-between",
        )}
      >
        <p suppressHydrationWarning>
          © {year} {companyName}. All rights reserved.
        </p>
        <p>{copy.registrationLine}</p>
      </Container>
    </footer>
  );
}
