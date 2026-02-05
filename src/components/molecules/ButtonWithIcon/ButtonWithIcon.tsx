"use client";

import { Button } from "@/components/atoms";
import type { ButtonWithIconProps } from "./ButtonWithIcon.types";

export function ButtonWithIcon({
  children,
  onClick,
  iconLeft = "arrowLeft",
  iconRight,
  variant = "outline",
  className,
}: ButtonWithIconProps) {
  return (
    <Button
      variant={variant}
      iconLeft={iconRight ? undefined : iconLeft}
      iconRight={iconRight}
      onClick={onClick}
      className={className}
    >
      {children}
    </Button>
  );
}
