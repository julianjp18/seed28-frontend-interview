import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Atoms/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "secondary", "outline"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: { children: "Propio" },
};

export const Success: Story = {
  args: { children: "Para vaquillona", variant: "success" },
};

export const Secondary: Story = {
  args: { children: "Catálogo", variant: "secondary" },
};

export const Outline: Story = {
  args: { children: "Para vaca", variant: "outline" },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Propio</Badge>
      <Badge variant="success">Para vaquillona</Badge>
      <Badge variant="secondary">Catálogo</Badge>
      <Badge variant="outline">Para vaca</Badge>
    </div>
  ),
};
