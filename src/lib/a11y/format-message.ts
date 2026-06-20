export function formatMessage(
  template: string,
  values: Record<string, string>,
): string {
  return Object.entries(values).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, value),
    template,
  );
}

export function focusFirstFocusable(container: HTMLElement | null) {
  if (!container) return;

  const selector =
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
  const element = container.querySelector<HTMLElement>(selector);
  element?.focus();
}
