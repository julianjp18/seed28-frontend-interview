import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Atoms/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["heading1", "heading2", "heading4", "label", "body", "caption", "button"],
    },
    color: { control: "select", options: ["default", "muted", "inverse", "primary"] },
    as: { control: "select", options: ["span", "p", "h1", "h2", "h3", "h4", "label", "div"] },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: { children: "Texto de ejemplo" },
};

export const Heading1: Story = {
  args: { children: "Resultados de la clasificación", variant: "heading1", as: "h1" },
};

export const Heading4: Story = {
  args: { children: "FILTROS ACTIVOS", variant: "heading4", uppercase: true },
};

export const Label: Story = {
  args: { children: "Origen", variant: "label" },
};

export const Caption: Story = {
  args: { children: "Datos actualizados hace 2 min", variant: "caption", color: "muted" },
};

export const Body: Story = {
  args: {
    children: "Los resultados están ordenados por Bulltrack Score que reflejan tus objetivos de producción",
    variant: "body",
  },
};
