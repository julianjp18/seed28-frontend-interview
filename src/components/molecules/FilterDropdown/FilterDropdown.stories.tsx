import type { Meta, StoryObj } from "@storybook/react";
import { FilterDropdown } from "./FilterDropdown";

const pelajeOptions = [
  { value: "all", label: "Todos" },
  { value: "negro", label: "Negro" },
  { value: "colorado", label: "Colorado" },
];

const sortOptions = [
  { value: "score-desc", label: "Score mejor a peor" },
  { value: "score-asc", label: "Score peor a mejor" },
];

const meta: Meta<typeof FilterDropdown> = {
  title: "Molecules/FilterDropdown",
  component: FilterDropdown,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FilterDropdown>;

export const Pelaje: Story = {
  args: { label: "Pelaje", value: "all", options: pelajeOptions },
};

export const Ordenamiento: Story = {
  args: { label: "Ordenamiento", value: "score-desc", options: sortOptions },
};
