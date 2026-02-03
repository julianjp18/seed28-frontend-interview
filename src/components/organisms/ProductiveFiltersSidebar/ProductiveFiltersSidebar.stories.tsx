import type { Meta, StoryObj } from "@storybook/react";
import { ProductiveFiltersSidebar } from "./ProductiveFiltersSidebar";

const coatOptions = [
  { value: "all", label: "All" },
  { value: "black", label: "Black" },
  { value: "red", label: "Red" },
];

const meta: Meta<typeof ProductiveFiltersSidebar> = {
  title: "Organisms/ProductiveFiltersSidebar",
  component: ProductiveFiltersSidebar,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ProductiveFiltersSidebar>;

export const Default: Story = {
  args: {
    toggleLabel: "For heifer",
    toggleSubLabel: "Ease of calving",
    toggleChecked: true,
    dropdownLabel: "Coat",
    dropdownValue: "all",
    dropdownOptions: coatOptions,
    onToggleChange: () => {},
    onDropdownChange: () => {},
  },
};
