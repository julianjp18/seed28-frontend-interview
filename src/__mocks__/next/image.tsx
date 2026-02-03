import type { ComponentProps } from "react";

export default function MockImage(props: ComponentProps<"img">) {
  const { src, alt, ...rest } = props;
  return <img src={src as string} alt={alt ?? ""} {...rest} />;
}
