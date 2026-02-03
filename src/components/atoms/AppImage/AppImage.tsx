"use client";

import { cn } from "@/lib/utils";
import type { AppImageProps } from "./AppImage.types";

const roundedClasses = {
  none: "",
  sm: "rounded",
  md: "rounded-md",
  lg: "rounded-lg",
};

export function AppImage({
  src,
  alt,
  rounded = "md",
  className,
  ...rest
}: AppImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn("object-cover", roundedClasses[rounded], className)}
      {...rest}
    />
  );
}
