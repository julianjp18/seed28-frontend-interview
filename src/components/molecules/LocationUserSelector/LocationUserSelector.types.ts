export interface LocationUserSelectorProps {
  /** Texto de ubicación (ej. "La soledad") */
  locationLabel: string;
  /** URL del avatar del usuario (opcional) */
  avatarSrc?: string | null;
  onClick?: () => void;
  isOpen?: boolean;
  className?: string;
}
