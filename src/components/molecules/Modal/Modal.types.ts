import type { ReactNode } from "react";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  /** Título opcional; si se pasa, se muestra un header con botón cerrar */
  title?: string;
  /** Clases del contenedor del panel (no del overlay) */
  className?: string;
  /** Si es true, el panel ocupa casi toda la pantalla en móvil */
  fullScreenOnMobile?: boolean;
}
