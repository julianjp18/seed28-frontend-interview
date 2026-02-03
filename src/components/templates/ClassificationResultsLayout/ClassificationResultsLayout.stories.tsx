import type { Meta, StoryObj } from "@storybook/react";
import { ClassificationResultsLayout } from "./ClassificationResultsLayout";
import { HeaderBar, LocationUserSelector } from "@/components/molecules";

const meta: Meta<typeof ClassificationResultsLayout> = {
  title: "Templates/ClassificationResultsLayout",
  component: ClassificationResultsLayout,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ClassificationResultsLayout>;

export const Empty: Story = {
  args: {},
};

export const WithPlaceholders: Story = {
  args: {
    topBarLeft: <span className="font-semibold">[HeaderBar]</span>,
    topBarRight: <span className="text-sm text-muted-foreground">[LocationUserSelector]</span>,
    sidebar: (
      <div className="space-y-4 text-sm text-muted-foreground">
        <p>[Active filters]</p>
        <p>[Productive filters]</p>
        <p>[Sorting]</p>
        <p>[Current objective]</p>
      </div>
    ),
    mainHeader: <h2 className="text-lg font-semibold">[MainContentHeader]</h2>,
    children: (
      <div className="rounded border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
        [List of BullCards]
      </div>
    ),
  },
};

export const WithMolecules: Story = {
  args: {
    topBarLeft: <HeaderBar />,
    topBarRight: <LocationUserSelector locationLabel="La soledad" onClick={() => {}} />,
    sidebar: (
      <div className="space-y-6">
        <p className="text-sm text-muted-foreground">Sidebar organisms go here.</p>
      </div>
    ),
    mainHeader: <h2 className="text-xl font-semibold">Classification results</h2>,
    children: (
      <div className="space-y-3">
        <div className="h-24 rounded-lg border border-border bg-muted/30" />
        <div className="h-24 rounded-lg border border-border bg-muted/30" />
      </div>
    ),
  },
};
