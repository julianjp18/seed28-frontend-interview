"use client";

import { cn } from "@/lib/utils";
import { Icon, Text } from "@/components/atoms";
import type { SectionHeaderProps } from "./SectionHeader.types";

export function SectionHeader({
  title,
  description,
  showInfoIcon = false,
  onInfoClick,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-1", className)}>
      <div className="flex items-center gap-2">
        <Text variant="heading1" as="h1">
          {title}
        </Text>
        {showInfoIcon && (
          <button
            type="button"
            onClick={onInfoClick}
            className="text-muted-foreground hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            aria-label="Más información"
          >
            <Icon name="info" className="size-5" />
          </button>
        )}
      </div>
      {description && (
        <Text variant="body" color="muted">
          {description}
        </Text>
      )}
    </div>
  );
}
