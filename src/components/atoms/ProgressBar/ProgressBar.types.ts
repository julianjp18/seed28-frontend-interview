export interface ProgressBarProps {
  /** Current value (0 to max) */
  value: number;
  /** Maximum value (default 1 for decimal type 0.9) */
  max?: number;
  /** Height of the bar (Tailwind class or number px) */
  className?: string;
  /** Class for the track (background) */
  trackClassName?: string;
  /** Class for the fill (progress) */
  fillClassName?: string;
}
