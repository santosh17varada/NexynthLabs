import fs from "node:fs";
import path from "node:path";

const root = path.join(process.cwd(), "src");
const skipDirs = new Set(["admin"]);

const replacements = [
  [
    'className="inline-flex min-h-11 items-center text-sm font-semibold text-accent hover:underline"',
    'className="inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"',
  ],
  [
    "className=\"mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-accent group-hover:underline\"",
    "className=\"mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors group-hover:text-electric-violet group-hover:underline\"",
  ],
  [
    "className=\"mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-accent group-hover:underline\"",
    "className=\"mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors group-hover:text-electric-violet group-hover:underline\"",
  ],
  [
    'className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-accent hover:underline"',
    'className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"',
  ],
  [
    'className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-accent hover:underline"',
    'className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"',
  ],
  [
    'className="mt-8 inline-flex min-h-11 items-center text-sm font-semibold text-accent hover:underline"',
    'className="mt-8 inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"',
  ],
  [
    'className="text-xs font-semibold uppercase tracking-widest text-accent"',
    'className="text-eyebrow font-semibold text-electric-blue"',
  ],
  [
    'className="text-xs font-semibold uppercase tracking-widest text-muted"',
    'className="text-eyebrow font-semibold text-muted"',
  ],
  [
    'className="text-xs font-semibold uppercase tracking-wide text-accent"',
    'className="text-eyebrow font-semibold text-electric-blue"',
  ],
  [
    'className="text-xs font-semibold uppercase tracking-wider text-accent"',
    'className="text-eyebrow font-semibold text-electric-blue"',
  ],
  [
    'className="text-sm font-semibold uppercase tracking-widest text-accent"',
    'className="text-eyebrow font-semibold text-electric-blue"',
  ],
  [
    'className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent"',
    'className="mb-4 text-eyebrow font-semibold text-electric-blue"',
  ],
  [
    'className="mt-2 text-base font-medium text-accent sm:text-lg"',
    'className="mt-2 text-base font-medium text-electric-violet sm:text-lg"',
  ],
  [
    'className="mt-4 text-sm font-medium text-accent sm:text-base"',
    'className="mt-4 text-sm font-medium text-electric-violet sm:text-base"',
  ],
  [
    'className="mt-1 text-sm font-medium text-accent"',
    'className="mt-1 text-sm font-medium text-electric-violet"',
  ],
  [
    'className="mt-2 text-sm font-medium text-accent"',
    'className="mt-2 text-sm font-medium text-electric-violet"',
  ],
  [
    'className="mt-4 text-sm font-medium text-accent"',
    'className="mt-4 text-sm font-medium text-electric-violet"',
  ],
  [
    'className="font-medium text-accent hover:underline"',
    'className="font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"',
  ],
  [
    'className="transition-colors hover:text-accent"',
    'className="transition-colors hover:text-electric-violet"',
  ],
  [
    'className="font-semibold text-foreground group-hover:text-accent"',
    'className="font-semibold text-foreground group-hover:text-electric-violet"',
  ],
  [
    'className="absolute left-4 top-2 font-serif text-5xl leading-none text-accent/25 sm:left-6 sm:text-6xl"',
    'className="absolute left-4 top-2 font-serif text-5xl leading-none text-electric-blue/25 sm:left-6 sm:text-6xl"',
  ],
  [
    'className="absolute left-4 top-3 text-4xl font-serif leading-none text-accent/30 sm:left-6 sm:top-4 sm:text-6xl"',
    'className="absolute left-4 top-3 text-4xl font-serif leading-none text-electric-blue/30 sm:left-6 sm:top-4 sm:text-6xl"',
  ],
  ['variant="accent"', 'variant="gradient"'],
  ['bg-accent"', 'bg-gradient-brand"'],
  ['rounded-full bg-accent ', 'rounded-full bg-gradient-brand '],
  ['bg-accent/15', 'bg-electric-violet/15'],
  ['bg-accent/10', 'bg-electric-violet/10'],
  ['bg-accent/5', 'bg-electric-blue/5'],
  ['bg-accent/20', 'bg-electric-violet/20'],
  ['bg-accent/30', 'bg-electric-violet/30'],
  ['border-accent/40', 'border-electric-blue/40'],
  ['border-accent/35', 'border-electric-blue/35'],
  ['border-accent/30', 'border-electric-blue/30'],
  ['border-accent/25', 'border-electric-blue/25'],
  ['border-accent/20', 'border-electric-blue/20'],
  ['hover:border-accent/40', 'hover:border-electric-blue/40'],
  ['hover:border-accent/35', 'hover:border-electric-blue/35'],
  ['hover:border-accent/30', 'hover:border-electric-blue/30'],
  ['hover:border-accent/25', 'hover:border-electric-blue/25'],
  ['hover:border-accent', 'hover:border-electric-blue'],
  ['hover:text-accent', 'hover:text-electric-violet'],
  ['text-accent transition-colors hover:underline', 'text-electric-blue transition-colors hover:text-electric-violet hover:underline'],
  ['text-accent hover:underline', 'text-electric-blue transition-colors hover:text-electric-violet hover:underline'],
  ['text-sm text-accent', 'text-sm text-electric-violet'],
  ['text-xs font-medium text-accent', 'text-xs font-medium text-electric-violet'],
  ['text-base font-medium text-accent', 'text-base font-medium text-electric-violet'],
  ['focus:border-accent focus:ring-2 focus:ring-accent/20', 'focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20'],
  ['to-accent/[0.06]', 'to-electric-violet/[0.06]'],
  ['from-accent/5', 'from-electric-blue/5'],
  ['via-accent/50', 'via-electric-violet/50'],
  ['ring-accent/30', 'ring-electric-violet/30'],
];

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (skipDirs.has(entry.name)) continue;
      walk(path.join(dir, entry.name), files);
      continue;
    }
    if (entry.name.endsWith(".tsx") || entry.name.endsWith(".ts")) {
      files.push(path.join(dir, entry.name));
    }
  }
  return files;
}

const files = walk(root);
let changed = 0;

for (const file of files) {
  if (file.includes(`${path.sep}admin${path.sep}`)) continue;
  let content = fs.readFileSync(file, "utf8");
  const original = content;
  for (const [from, to] of replacements) {
    content = content.split(from).join(to);
  }
  if (content !== original) {
    fs.writeFileSync(file, content, "utf8");
    changed += 1;
    console.log(path.relative(process.cwd(), file));
  }
}

console.log(`Updated ${changed} files.`);
