import type { Meta, StoryObj } from "@storybook/react";
import { BullTags } from "./BullTags";

const meta: Meta<typeof BullTags> = {
  title: "Molecules/BullTags",
  component: BullTags,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BullTags>;

export const Default: Story = {
  args: {
    tags: [
      { label: "Propio", variant: "default" },
      { label: "Para vaquillona", variant: "success" },
    ],
  },
};

export const ThreeTags: Story = {
  args: {
    tags: [
      { label: "Propio" },
      { label: "Para vaquillona", variant: "success" },
      { label: "Catálogo", variant: "secondary" },
    ],
  },
};
