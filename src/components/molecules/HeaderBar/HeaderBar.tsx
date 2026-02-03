"use client";

import { cn } from "@/lib/utils";
import { Icon, Text } from "@/components/atoms";
import type { HeaderBarProps } from "./HeaderBar.types";

export function HeaderBar({ title = "Bulltrack", className }: HeaderBarProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Icon name="logoB" className="size-9 rounded" aria-label="Logo" />
      <Text variant="heading2" as="span">{title}</Text>
    </div>
  );
}
