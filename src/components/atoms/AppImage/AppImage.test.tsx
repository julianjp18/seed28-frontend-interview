import { render, screen } from "@testing-library/react";
import { AppImage } from "./AppImage";

describe("AppImage", () => {
  it("renders with src and alt", () => {
    render(<AppImage src="/bull.jpg" alt="Toro 992" />);
    const img = screen.getByRole("img", { name: "Toro 992" });
    expect(img).toHaveAttribute("src", "/bull.jpg");
  });

  it("applies rounded variant", () => {
    render(<AppImage src="/x" alt="Test" rounded="lg" />);
    expect(screen.getByRole("img")).toHaveClass("rounded-lg");
  });

  it("applies className", () => {
    render(<AppImage src="/x" alt="Test" className="w-24 h-24" />);
    expect(screen.getByRole("img")).toHaveClass("w-24", "h-24");
  });
});
