export interface AvatarProps {
  /** URL de la imagen (si no hay, se muestra fallback) */
  src?: string | null;
  /** Texto alternativo (ej. iniciales) cuando no hay imagen */
  alt?: string;
  /** Mostrar indicador de estado (punto verde) */
  showStatus?: boolean;
  /** Tamaño en clases Tailwind (ej. size-10) */
  className?: string;
}
