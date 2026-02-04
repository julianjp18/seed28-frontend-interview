"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/atoms";
import type { DrawerProps } from "./Drawer.types";

export function Drawer({ open, onClose, children, title = "Filtros", className }: DrawerProps) {
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

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/50 transition-opacity lg:hidden"
        onClick={onClose}
        onKeyDown={(e) => e.key === "Escape" && onClose()}
        role="button"
        tabIndex={0}
        aria-label="Cerrar overlay"
      />
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 flex h-full w-full max-w-[280px] flex-col bg-[#111714] shadow-xl transition-transform duration-200 ease-out lg:hidden",
          open ? "translate-x-0" : "-translate-x-full",
          className
        )}
        aria-modal="true"
        aria-label={title}
      >
        <div className="flex h-14 shrink-0 items-center justify-between border-b border-white/20 px-4">
          <h2 className="font-inter text-lg font-semibold text-white">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="flex shrink-0 items-center justify-center rounded-full p-2 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            aria-label="Cerrar"
          >
            <Icon name="close" className="size-5" />
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto p-4">{children}</div>
      </aside>
    </>
  );
}
