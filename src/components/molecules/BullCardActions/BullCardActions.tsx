"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms";
import type { BullCardActionsProps } from "./BullCardActions.types";

export function BullCardActions({
  onViewDetails,
  onToggleFavorite,
  isFavorite = false,
  favoriteLoading = false,
  className,
}: BullCardActionsProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {onViewDetails && (
        <Button
          variant="primary"
          onClick={onViewDetails}
          iconLeft="eye"
          aria-label="Ver detalles"
          className="size-10 border-0 p-0 [&_svg]:text-white"
        />
      )}
      {onToggleFavorite && (
        <Button
          variant="primary"
          onClick={onToggleFavorite}
          disabled={favoriteLoading}
          iconLeft={isFavorite ? "heartFilled" : "heart"}
          aria-label={
            favoriteLoading
              ? "Guardando…"
              : isFavorite
                ? "Quitar de favoritos"
                : "Añadir a favoritos"
          }
          title={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
          className="size-10 border-0 p-0 [&_svg]:text-white"
        />
      )}
    </div>
  );
}
