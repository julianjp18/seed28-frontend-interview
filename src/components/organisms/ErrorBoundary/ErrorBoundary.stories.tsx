import type { Meta, StoryObj } from "@storybook/react";
import type { ReactElement } from "react";
import { ErrorBoundary } from "./ErrorBoundary";

/** Throws on render for error-boundary demos */
function Thrower(): ReactElement | null {
  throw new Error("Error de ejemplo para Storybook");
}

const meta: Meta<typeof ErrorBoundary> = {
  title: "Organisms/ErrorBoundary",
  component: ErrorBoundary,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ErrorBoundary>;

export const Default: Story = {
  args: {
    children: <p className="font-inter text-sm text-muted-foreground">Contenido normal (sin error).</p>,
  },
};

export const WithError: Story = {
  render: () => (
    <ErrorBoundary>
      <Thrower />
    </ErrorBoundary>
  ),
};

export const CustomFallback: Story = {
  args: {
    children: <Thrower />,
    fallback: (error, reset) => (
      <div className="rounded-lg border border-amber-500/50 bg-amber-50 p-4 text-center">
        <p className="font-inter text-sm font-medium text-amber-800">Error custom: {error.message}</p>
        <button
          type="button"
          onClick={reset}
          className="mt-2 rounded bg-amber-600 px-3 py-1 text-sm text-white hover:bg-amber-700"
        >
          Reintentar
        </button>
      </div>
    ),
  },
};

export const CustomFallbackNode: Story = {
  args: {
    children: <Thrower />,
    fallback: (
      <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-center">
        <p className="font-inter text-sm text-destructive">Algo falló. Recarga la página.</p>
      </div>
    ),
  },
};
