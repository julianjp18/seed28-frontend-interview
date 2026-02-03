export interface LocationUserSelectorProps {
  /** Texto de ubicación (ej. "La soledad") */
  locationLabel: string;
  /** URL del avatar del usuario (por defecto usa /Avatar.svg si existe en public) */
  avatarSrc?: string | null;
  onClick?: () => void;
  isOpen?: boolean;
  className?: string;
}
