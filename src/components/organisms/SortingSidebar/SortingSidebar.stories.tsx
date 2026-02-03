import type { Meta, StoryObj } from "@storybook/react";
import { SortingSidebar } from "./SortingSidebar";

const options = [
  { value: "score-desc", label: "Score best to worst" },
  { value: "score-asc", label: "Score worst to best" },
];

const meta: Meta<typeof SortingSidebar> = {
  title: "Organisms/SortingSidebar",
  component: SortingSidebar,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SortingSidebar>;

export const Default: Story = {
  args: { value: "score-desc", options, onChange: () => {} },
};
