import { render, screen } from "@testing-library/react";
import { Icon } from "./Icon";

describe("Icon", () => {
  it("renders icon by name", () => {
    render(<Icon name="search" />);
    const svg = document.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("applies className", () => {
    render(<Icon name="heart" className="w-6 h-6" />);
    const svg = document.querySelector("svg");
    expect(svg).toHaveClass("w-6", "h-6");
  });

  it("supports aria-label", () => {
    render(<Icon name="download" aria-label="Exportar" />);
    expect(screen.getByRole("img", { name: "Exportar" })).toBeInTheDocument();
  });
});
