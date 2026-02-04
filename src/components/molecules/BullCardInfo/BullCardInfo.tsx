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
      color="dark"
      as="p"
      className="truncate font-inter text-[24px] font-semibold"
    >
      {name}
    </Text>
    <Text
      variant="body"
      color="dark"
      className="font-inter text-[16px] font-medium leading-5"
    >
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
