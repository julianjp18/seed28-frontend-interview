import { cn } from "@/lib/utils";
import { AppImage, Text } from "@/components/atoms";
import type { BullCardInfoProps } from "./BullCardInfo.types";

const textBlock = (
  name: string,
  subtitle: string,
  className?: string
) => (
  <div className={cn("min-w-0", className)}>
    <Text
      variant="label"
      as="p"
      className="truncate font-inter font-semibold text-[#2D2D2D]"
    >
      {name}
    </Text>
    <Text variant="caption" className="font-inter text-[#2D2D2D]">
      {subtitle}
    </Text>
  </div>
);

export function BullCardInfo({
  imageSrc,
  imageAlt,
  name,
  subtitle,
  showImage = true,
  className,
}: BullCardInfoProps) {
  if (!showImage) {
    return textBlock(name, subtitle, className);
  }
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <AppImage
        src={imageSrc!}
        alt={imageAlt ?? ""}
        rounded="md"
        className="size-16 shrink-0 object-cover"
      />
      {textBlock(name, subtitle)}
    </div>
  );
}
