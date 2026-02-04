"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/atoms";
import type { ModalProps } from "./Modal.types";

export function Modal({
  open,
  onClose,
  children,
  title,
  className,
  fullScreenOnMobile = true,
}: ModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  };

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/50 transition-opacity"
        onClick={onClose}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label="Cerrar overlay"
      />
      <div
        className={cn(
          "fixed left-1/2 top-1/2 z-50 flex max-h-[85vh] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl bg-white shadow-xl",
          fullScreenOnMobile && "max-h-[90vh] sm:max-h-[85vh]",
          className
        )}
        role="dialog"
        aria-modal="true"
        aria-label={title ?? "Modal"}
      >
        {title != null && (
          <div className="flex shrink-0 items-center justify-between border-b border-border px-4 py-3 sm:px-6">
            <h2 className="font-inter text-lg font-semibold text-foreground">{title}</h2>
            <button
              type="button"
              onClick={onClose}
              className="flex shrink-0 items-center justify-center rounded-full p-2 text-foreground hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Cerrar"
            >
              <Icon name="close" className="size-5" />
            </button>
          </div>
        )}
        <div className="min-h-0 flex-1 overflow-y-auto">{children}</div>
      </div>
    </>
  );
}
