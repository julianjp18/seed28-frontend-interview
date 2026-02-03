import type { Meta, StoryObj } from "@storybook/react";
import { LocationUserSelector } from "./LocationUserSelector";

const meta: Meta<typeof LocationUserSelector> = {
  title: "Molecules/LocationUserSelector",
  component: LocationUserSelector,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof LocationUserSelector>;

export const Default: Story = {
  args: { locationLabel: "La soledad", onClick: () => {} },
};

export const Open: Story = {
  args: { locationLabel: "La soledad", isOpen: true, onClick: () => {} },
};
