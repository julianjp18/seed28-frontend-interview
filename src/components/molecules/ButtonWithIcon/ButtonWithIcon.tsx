"use client";

import { Button } from "@/components/atoms";
import type { ButtonWithIconProps } from "./ButtonWithIcon.types";

export function ButtonWithIcon({
  children,
  onClick,
  iconLeft = "arrowLeft",
  variant = "outline",
  className,
}: ButtonWithIconProps) {
  return (
    <Button
      variant={variant}
      iconLeft={iconLeft}
      onClick={onClick}
      className={className}
    >
      {children}
    </Button>
  );
}
