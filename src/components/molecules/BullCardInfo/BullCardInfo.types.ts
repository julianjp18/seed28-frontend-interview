export interface BullCardInfoProps {
  /** URL de la imagen del toro */
  imageSrc?: string;
  imageAlt?: string;
  /** Nombre o ID (ej. "Toro #992") */
  name: string;
  /** Línea secundaria (ej. "Angus . 36 meses") */
  subtitle: string;
  /** Si es false, solo se renderiza nombre y subtítulo (sin imagen ni wrapper flex). Por defecto true. */
  showImage?: boolean;
  className?: string;
}
