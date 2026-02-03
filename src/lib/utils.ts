/**
 * Utilidad para combinar clases CSS (compatible con Tailwind)
 */
export function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
