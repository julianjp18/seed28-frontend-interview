import { useState } from "react";
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
  render: function DefaultStory(args) {
    const [toggleChecked, setToggleChecked] = useState(true);
    const [dropdownValue, setDropdownValue] = useState(
      args.dropdownValue ?? coatOptions[0]?.value ?? ""
    );
    return (
      <ProductiveFiltersSidebar
        title={args.title}
        toggleLabel={args.toggleLabel}
        toggleSubLabel={args.toggleSubLabel}
        toggleChecked={toggleChecked}
        onToggleChange={setToggleChecked}
        dropdownLabel={args.dropdownLabel}
        dropdownValue={dropdownValue}
        dropdownOptions={args.dropdownOptions}
        onDropdownChange={setDropdownValue}
      />
    );
  },
  args: {
    toggleLabel: "Para vaquillona",
    toggleSubLabel: "Facilidad de parto",
    dropdownLabel: "Pelaje",
    dropdownValue: "all",
    dropdownOptions: coatOptions,
  },
};
