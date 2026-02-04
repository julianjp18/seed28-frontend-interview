import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Exportar</Button>);
    expect(screen.getByRole("button", { name: /exportar/i })).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click</Button>);
    await userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is true", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("applies primary variant by default", () => {
    render(<Button>Primary</Button>);
    const btn = screen.getByRole("button");
    expect(btn).toHaveClass("bg-[#1C2620]", "text-white");
  });

  it("applies secondary variant", () => {
    render(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-[#E6E6E6]", "text-[#1C2620]");
  });

  it("applies highlight variant", () => {
    render(<Button variant="highlight">Highlight</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-[#36E27B]/10");
  });

  it("applies iconToggle active state", () => {
    render(<Button variant="iconToggle" active>Toggle</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-[#1C2620]", "text-white");
  });
});
