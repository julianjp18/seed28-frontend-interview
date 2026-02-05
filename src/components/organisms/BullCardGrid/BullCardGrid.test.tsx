import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BullCardGrid } from "./BullCardGrid";

const defaultProps = {
  imageSrc: "/bull.jpg",
  imageAlt: "Bull 992",
  name: "Bull #992",
  subtitle: "Angus . 36 months",
  tags: [
    { label: "Own", variant: "default" as const },
    { label: "For heifer", variant: "success" as const },
  ],
  scoreValue: 0.9,
};

describe("BullCardGrid", () => {
  it("renders name, subtitle and tags", () => {
    render(<BullCardGrid {...defaultProps} />);
    expect(screen.getByText("Bull #992")).toBeInTheDocument();
    expect(screen.getByText("Angus . 36 months")).toBeInTheDocument();
    expect(screen.getByText("Own")).toBeInTheDocument();
    expect(screen.getByText("For heifer")).toBeInTheDocument();
  });

  it("renders rank when provided", () => {
    render(<BullCardGrid {...defaultProps} rank={1} />);
    expect(screen.getByText("#1")).toBeInTheDocument();
  });

  it("renders score and BULL SCORE label", () => {
    render(<BullCardGrid {...defaultProps} />);
    expect(screen.getByText("BULL SCORE")).toBeInTheDocument();
    expect(screen.getByText("0.9")).toBeInTheDocument();
  });

  it("calls onViewDetails when view clicked", async () => {
    const onViewDetails = jest.fn();
    render(<BullCardGrid {...defaultProps} onViewDetails={onViewDetails} />);
    await userEvent.click(screen.getByRole("button", { name: /ver detalles/i }));
    expect(onViewDetails).toHaveBeenCalled();
  });

  it("calls onToggleFavorite when heart clicked", async () => {
    const onToggleFavorite = jest.fn();
    render(<BullCardGrid {...defaultProps} onToggleFavorite={onToggleFavorite} />);
    await userEvent.click(screen.getByRole("button", { name: /añadir a favoritos/i }));
    expect(onToggleFavorite).toHaveBeenCalled();
  });

  it("shows favorite state", () => {
    render(<BullCardGrid {...defaultProps} onToggleFavorite={() => {}} isFavorite />);
    expect(screen.getByRole("button", { name: /quitar de favoritos/i })).toBeInTheDocument();
  });

  it("renders without checkbox when showCheckbox is false", () => {
    render(<BullCardGrid {...defaultProps} showCheckbox={false} />);
    expect(screen.queryByRole("checkbox", { name: /seleccionar/i })).not.toBeInTheDocument();
  });
});
