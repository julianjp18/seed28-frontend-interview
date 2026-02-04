export interface BullScoreIndicatorProps {
  /** Value 0–1 or 0–100 depending on max */
  value: number;
  max?: number;
  /** Descriptive text (e.g. "Top 1% of calving ease") */
  description?: string;
  /** Show score number to the right of the bar */
  showScoreNumber?: boolean;
  className?: string;
}
