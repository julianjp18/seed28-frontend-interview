import type { Meta, StoryObj } from "@storybook/react";
import { ActiveFiltersSidebar } from "./ActiveFiltersSidebar";

const options = [
  { value: "all", label: "All", checked: true },
  { value: "own", label: "Own bulls" },
  { value: "catalog", label: "Catalog" },
  { value: "favorites", label: "Favorites" },
];

const meta: Meta<typeof ActiveFiltersSidebar> = {
  title: "Organisms/ActiveFiltersSidebar",
  component: ActiveFiltersSidebar,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ActiveFiltersSidebar>;

export const Default: Story = {
  args: { options, onOptionChange: () => {} },
};
