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
    <div className={cn("flex min-h-screen flex-col bg-background", className)}>
      <header className="flex shrink-0 items-center justify-between gap-4 border-b border-border bg-card px-4 py-3">
        <div className="min-w-0 shrink-0">{topBarLeft}</div>
        <div className="min-w-0 shrink-0">{topBarRight}</div>
      </header>
      <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
        <aside className="w-full shrink-0 border-b border-border bg-card p-4 lg:w-72 lg:border-b-0 lg:border-r">
          {sidebar}
        </aside>
        <main className="min-w-0 flex-1 p-4">
          {mainHeader && <div className="mb-4">{mainHeader}</div>}
          {children}
        </main>
      </div>
    </div>
  );
}
