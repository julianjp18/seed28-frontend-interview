export interface BullCardInfoProps {
  /** URL of the bull image */
  imageSrc?: string;
  imageAlt?: string;
  /** name or ID (e.g. "Toro #992") */
  name: string;
  /** Secondary line (e.g. "Angus . 36 months") */
  subtitle: string;
  /** If false, only name and subtitle are rendered (without image and flex wrapper). Default true. */
  showImage?: boolean;
  className?: string;
}
