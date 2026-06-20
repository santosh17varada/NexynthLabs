type ClassValue = string | false | null | undefined;

/** Merge conditional class names (no external dependency). */
export function cn(...inputs: ClassValue[]): string {
  return inputs.filter(Boolean).join(" ");
}
