"use client";

import { cn } from "@/lib/utils";
import type { ClassificationResultsLayoutProps } from "./ClassificationResultsLayout.types";

export function ClassificationResultsLayout({
  topBarLeft,
  topBarRight,
  sidebar,
  mainHeader,
  children,
  className,
}: ClassificationResultsLayoutProps) {
  return (
    <div className={cn("flex min-h-screen flex-col bg-[#111714] max-w-7xl mx-auto", className)}>
      <header className="flex h-11 shrink-0 items-center justify-between gap-4 bg-[#111714] px-4 lg:h-22 ">
        <div className="min-w-0 shrink-0">{topBarLeft}</div>
        <div className="min-w-0 shrink-0">{topBarRight}</div>
      </header>
      <div className="flex min-h-0 flex-1 flex-col lg:flex-row bg-[#111714]">
        <aside className="w-full shrink-0 border-b border-border bg-[#111714] p-4 lg:w-72 lg:border-b-0 max-w-[240px]">
          {sidebar}
        </aside>
        <main className="min-w-0 flex-1 bg-[#F7F7F7] rounded-tl-[2.5rem] rounded-tr-[2.5rem] p-4 xl:pt-6 xl:px-6 max-w-7xl">
          {mainHeader && <div className="mb-4">{mainHeader}</div>}
          {children}
        </main>
      </div>
    </div>
  );
}
