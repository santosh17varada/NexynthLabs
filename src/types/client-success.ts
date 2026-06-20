export type ClientSuccessCta = {
  label: string;
  href: string;
  external?: boolean;
};

export type ClientSuccessStory = {
  id: string;
  title: string;
  /** Anonymous segment label — no client names or logos */
  segment: string;
  problem: string;
  approach: string;
  solution: string;
  outcomes: readonly string[];
  technologies: readonly string[];
  cta?: ClientSuccessCta;
  published: boolean;
};
