export type LeadershipSocialLinks = {
  linkedin?: string;
  twitter?: string;
  email?: string;
};

export type LeadershipProfile = {
  id: string;
  slug: string;
  name: string;
  title: string;
  subtitle?: string;
  biography: readonly string[];
  profileHighlights?: readonly string[];
  expertise: readonly string[];
  imagePath?: string;
  imageAlt: string;
  socialLinks?: LeadershipSocialLinks;
  /** Featured on leadership index and home preview */
  featured: boolean;
  /** Display order on index (lower first) */
  order: number;
  /** Short excerpt for cards and meta description */
  excerpt: string;
  /** Optional founder-specific message for home / partners */
  founderMessage?: string;
  /** SEO title override (defaults to name + title) */
  seoTitle?: string;
  seoDescription?: string;
};
