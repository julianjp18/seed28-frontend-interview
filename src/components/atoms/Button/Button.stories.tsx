import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "filterSelected", "iconToggle"],
    },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { children: "Exportar", variant: "primary", iconRight: "download" },
};

export const Secondary: Story = {
  args: { children: "Editar criterios", variant: "secondary" },
};

export const Outline: Story = {
  args: { children: "Editar criterios", variant: "outline", iconLeft: "arrowLeft" },
};

export const FilterSelected: Story = {
  args: { children: "Todos", variant: "filterSelected", iconRight: "checkmark" },
};

export const IconToggleList: Story = {
  args: { variant: "iconToggle", iconLeft: "list", active: true, "aria-label": "Vista lista" },
};

export const IconToggleGrid: Story = {
  args: { variant: "iconToggle", iconLeft: "grid", active: false, "aria-label": "Vista cuadrícula" },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};
