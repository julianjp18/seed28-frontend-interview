"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/atoms";
import { Drawer } from "@/components/molecules";
import type { ClassificationResultsLayoutProps } from "./ClassificationResultsLayout.types";

export function ClassificationResultsLayout({
  topBarLeft,
  topBarRight,
  sidebar,
  mainHeader,
  children,
  className,
}: ClassificationResultsLayoutProps) {
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);

  return (
    <div className={cn("flex min-h-screen flex-col bg-[#111714] w-full max-w-7xl mx-auto", className)}>
      <header className="flex min-h-14 shrink-0 flex-wrap items-center justify-between gap-2 bg-[#111714] px-2 py-2 sm:flex-nowrap sm:px-4 sm:py-0 sm:h-[4.5rem] lg:h-[5.5rem]">
        <div className="flex min-w-0 flex-1 basis-0 items-center gap-1.5 overflow-hidden sm:gap-2 sm:basis-auto sm:flex-1">
          {topBarLeft}
          {/* Botón Filtros solo en móvil/tablet: icono + texto en sm+ */}
          <button
            type="button"
            onClick={() => setFilterDrawerOpen(true)}
            className="flex lg:hidden shrink-0 items-center justify-center rounded-lg border border-white/30 bg-white/5 p-2 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:gap-1.5 sm:px-3 sm:py-2 sm:text-sm sm:font-medium"
            aria-label="Abrir filtros"
          >
            <Icon name="filter" className="size-4" />
            <span className="hidden sm:inline">Filtros</span>
          </button>
        </div>
        <div className="flex min-w-0 shrink-0 items-center sm:flex-1 sm:justify-end">{topBarRight}</div>
      </header>

      <Drawer open={filterDrawerOpen} onClose={() => setFilterDrawerOpen(false)} title="Filtros">
        {sidebar}
      </Drawer>

      <div className="flex min-h-0 flex-1 flex-col lg:flex-row bg-[#111714]">
        <aside className="hidden w-60 shrink-0 bg-[#111714] pl-4 py-4 pr-0 lg:block">
          {sidebar}
        </aside>
        <main className="min-w-0 flex-1 bg-[#F7F7F7] rounded-tl-[40px] rounded-tr-[40px] p-3 sm:p-4 xl:pt-6 xl:px-6 w-full">
          {mainHeader && <div className="mb-3 sm:mb-4">{mainHeader}</div>}
          {children}
        </main>
      </div>
    </div>
  );
}
