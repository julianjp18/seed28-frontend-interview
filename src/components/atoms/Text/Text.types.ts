import type { ReactNode } from "react";

export type TextVariant =
  | "heading1"
  | "heading2"
  | "heading4"
  | "label"
  | "body"
  | "caption"
  | "button";

export type TextColor = "default" | "muted" | "inverse" | "primary";

export interface TextProps {
  children: ReactNode;
  variant?: TextVariant;
  color?: TextColor;
  uppercase?: boolean;
  className?: string;
  as?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "label" | "div";
}
