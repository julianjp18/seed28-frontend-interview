import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Atoms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    shape: { control: "select", options: ["square", "circle"] },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Unchecked: Story = {
  args: { label: "Toros propios" },
};

export const Checked: Story = {
  args: { label: "Todos", checked: true },
};

export const Square: Story = {
  args: { label: "Catálogo", shape: "square" },
};

export const Circle: Story = {
  args: { label: "Seleccionar toro", shape: "circle", checked: false },
};

export const CircleChecked: Story = {
  args: { shape: "circle", checked: true },
};
