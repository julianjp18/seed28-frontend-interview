import type { Meta, StoryObj } from "@storybook/react";
import { ButtonWithIcon } from "./ButtonWithIcon";

const meta: Meta<typeof ButtonWithIcon> = {
  title: "Molecules/ButtonWithIcon",
  component: ButtonWithIcon,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ButtonWithIcon>;

export const EditarCriterios: Story = {
  args: { children: "Editar criterios", onClick: () => {} },
};

export const Secondary: Story = {
  args: { children: "Volver", variant: "secondary", onClick: () => {} },
};
