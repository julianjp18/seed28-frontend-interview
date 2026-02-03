export interface BullCardInfoProps {
  /** URL de la imagen del toro */
  imageSrc: string;
  imageAlt: string;
  /** Nombre o ID (ej. "Toro #992") */
  name: string;
  /** Línea secundaria (ej. "Angus . 36 meses") */
  subtitle: string;
  className?: string;
}
