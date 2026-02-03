import type { Meta, StoryObj } from "@storybook/react";
import { AppImage } from "./AppImage";

const meta: Meta<typeof AppImage> = {
  title: "Atoms/AppImage",
  component: AppImage,
  tags: ["autodocs"],
  argTypes: {
    rounded: { control: "select", options: ["none", "sm", "md", "lg"] },
  },
};

export default meta;

type Story = StoryObj<typeof AppImage>;

export const Default: Story = {
  args: {
    src: "https://picsum.photos/120/120",
    alt: "Imagen de toro",
    className: "size-24",
  },
};

export const RoundedLg: Story = {
  args: {
    src: "https://picsum.photos/120/120",
    alt: "Toro",
    rounded: "lg",
    className: "size-32",
  },
};
