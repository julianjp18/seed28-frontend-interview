import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { placeholder: "Placeholder" },
};

export const WithSearchIcon: Story = {
  args: {
    placeholder: "Busca por caravana, nombre o cabaña",
    iconLeft: "search",
  },
};

export const WithValue: Story = {
  args: { defaultValue: "992", placeholder: "Caravana" },
};

export const Error: Story = {
  args: { placeholder: "Campo con error", error: true },
};

export const Disabled: Story = {
  args: { placeholder: "Deshabilitado", disabled: true },
};
