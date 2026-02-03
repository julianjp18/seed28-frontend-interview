import { render, screen } from "@testing-library/react";
import { HeaderBar } from "./HeaderBar";

describe("HeaderBar", () => {
  it("renders default title Bulltrack", () => {
    render(<HeaderBar />);
    expect(screen.getByText("Bulltrack")).toBeInTheDocument();
  });

  it("renders custom title", () => {
    render(<HeaderBar title="Mi App" />);
    expect(screen.getByText("Mi App")).toBeInTheDocument();
  });

  it("renders logo", () => {
    const { container } = render(<HeaderBar />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });
});
