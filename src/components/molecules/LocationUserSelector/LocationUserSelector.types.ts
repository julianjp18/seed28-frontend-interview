export interface LocationUserSelectorProps {
  /** Texto de ubicación (ej. "La soledad") */
  locationLabel: string;
  /** URL del avatar del usuario (por defecto usa /Avatar.svg si existe en public) */
  avatarSrc?: string | null;
  /** Al hacer clic en el botón se abre/cierra el menú desplegable */
  onClick?: () => void;
  /** Si el menú está abierto (controlado desde fuera) */
  isOpen?: boolean;
  /** Se llama al elegir "Cerrar sesión" en el menú */
  onLogout?: () => void;
  className?: string;
}
