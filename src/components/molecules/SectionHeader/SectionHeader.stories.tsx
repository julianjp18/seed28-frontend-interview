import type { Meta, StoryObj } from "@storybook/react";
import { SectionHeader } from "./SectionHeader";

const meta: Meta<typeof SectionHeader> = {
  title: "Molecules/SectionHeader",
  component: SectionHeader,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SectionHeader>;

export const TitleOnly: Story = {
  args: { title: "Resultados de la clasificación" },
};

export const WithDescription: Story = {
  args: {
    title: "Resultados de la clasificación",
    description: "Los resultados están ordenados por Bulltrack Score que reflejan tus objetivos de producción.",
  },
};

export const WithInfoIcon: Story = {
  args: {
    title: "Resultados de la clasificación",
    description: "Ordenados por Bulltrack Score.",
    showInfoIcon: true,
    onInfoClick: () => {},
  },
};
