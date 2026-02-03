import { render, screen } from "@testing-library/react";
import { BullTags } from "./BullTags";

describe("BullTags", () => {
  it("renders tag labels", () => {
    render(
      <BullTags
        tags={[
          { label: "Propio" },
          { label: "Para vaquillona", variant: "success" },
        ]}
      />
    );
    expect(screen.getByText("Propio")).toBeInTheDocument();
    expect(screen.getByText("Para vaquillona")).toBeInTheDocument();
  });

  it("applies variant to badge", () => {
    render(<BullTags tags={[{ label: "Catálogo", variant: "secondary" }]} />);
    const badge = screen.getByText("Catálogo");
    expect(badge).toHaveClass("bg-muted");
  });
});
