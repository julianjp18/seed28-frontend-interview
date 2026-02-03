import type { Meta, StoryObj } from "@storybook/react";
import { BullCardInfo } from "./BullCardInfo";

const meta: Meta<typeof BullCardInfo> = {
  title: "Molecules/BullCardInfo",
  component: BullCardInfo,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BullCardInfo>;

export const Default: Story = {
  args: {
    imageSrc: "https://picsum.photos/64/64",
    imageAlt: "Toro 992",
    name: "Toro #992",
    subtitle: "Angus . 36 meses",
  },
};
