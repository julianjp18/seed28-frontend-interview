import type { Meta, StoryObj } from "@storybook/react";
import { BullCardActions } from "./BullCardActions";

const meta: Meta<typeof BullCardActions> = {
  title: "Molecules/BullCardActions",
  component: BullCardActions,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BullCardActions>;

export const Default: Story = {
  args: {
    onViewDetails: () => {},
    onToggleFavorite: () => {},
  },
};

export const Favorite: Story = {
  args: {
    onViewDetails: () => {},
    onToggleFavorite: () => {},
    isFavorite: true,
  },
};
