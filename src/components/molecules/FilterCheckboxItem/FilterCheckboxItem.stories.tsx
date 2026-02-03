import type { Meta, StoryObj } from "@storybook/react";
import { FilterCheckboxItem } from "./FilterCheckboxItem";

const meta: Meta<typeof FilterCheckboxItem> = {
  title: "Molecules/FilterCheckboxItem",
  component: FilterCheckboxItem,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FilterCheckboxItem>;

export const Unchecked: Story = {
  args: { label: "Toros propios" },
};

export const Checked: Story = {
  args: { label: "Catálogo", checked: true, onChange: () => {} },
};

export const Favoritos: Story = {
  args: { label: "Favoritos" },
};
