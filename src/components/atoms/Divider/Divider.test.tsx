import { render, screen } from "@testing-library/react";
import { Divider } from "./Divider";

describe("Divider", () => {
  it("renders horizontal by default", () => {
    render(<Divider />);
    const hr = screen.getByRole("separator");
    expect(hr).toHaveClass("border-t", "w-full");
  });

  it("renders vertical", () => {
    render(<Divider orientation="vertical" />);
    const hr = screen.getByRole("separator");
    expect(hr).toHaveClass("border-l", "h-full");
  });

  it("applies className", () => {
    render(<Divider className="my-4" />);
    expect(screen.getByRole("separator")).toHaveClass("my-4");
  });
});
