"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms";
import type { BullCardActionsProps } from "./BullCardActions.types";

export function BullCardActions({
  onViewDetails,
  onToggleFavorite,
  isFavorite = false,
  className,
}: BullCardActionsProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      {onViewDetails && (
        <Button
          variant="iconToggle"
          onClick={onViewDetails}
          iconLeft="eye"
          aria-label="Ver detalles"
        />
      )}
      {onToggleFavorite && (
        <Button
          variant="iconToggle"
          active={isFavorite}
          onClick={onToggleFavorite}
          iconLeft={isFavorite ? "heartFilled" : "heart"}
          aria-label={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
        />
      )}
    </div>
  );
}
