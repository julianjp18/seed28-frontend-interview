import { render, screen } from "@testing-library/react";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  it("renders fallback icon when no src", () => {
    const { container } = render(<Avatar />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("renders image when src provided", () => {
    render(<Avatar src="/test-avatar.jpg" alt="User" />);
    const img = screen.getByRole("img", { name: "User" });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", expect.stringContaining("test-avatar"));
  });

  it("shows status indicator when showStatus", () => {
    const { container } = render(<Avatar showStatus />);
    const status = container.querySelector(".bg-green-500");
    expect(status).toBeInTheDocument();
  });

  it("applies className", () => {
    const { container } = render(<Avatar className="size-10" />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass("size-10");
  });
});
