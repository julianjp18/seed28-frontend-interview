export interface AvatarProps {
  /** Image URL (if no image, fallback is shown) */
  src?: string | null;
  /** Alternative text (e.g. initials) when no image is present */
  alt?: string;
  /** Show status indicator (green dot) */
  showStatus?: boolean;
  /** Size in Tailwind classes (e.g. size-10) */
  className?: string;
}
