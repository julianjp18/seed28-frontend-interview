import { render, screen } from "@testing-library/react";
import { BullDetailView } from "./BullDetailView";
import type { Bull } from "@/types/bull";

const mockBull: Bull = {
  id: 1,
  earTag: "992",
  name: "Toro Black Emerald",
  useType: "vaquillona",
  origin: "propio",
  coat: "negro",
  breed: "Angus",
  ageMonths: 36,
  standoutFeature: "Top 1% calving ease",
  bullScore: 80.5,
  stats: {
    growth: 85,
    calvingEase: 98,
    reproduction: 75,
    moderation: 60,
    carcass: 82,
  },
};

describe("BullDetailView", () => {
  it("renders bull name", () => {
    render(<BullDetailView bull={mockBull} imageSrc="/bull.jpg" />);
    expect(screen.getByText("Toro Black Emerald")).toBeInTheDocument();
  });

  it("renders ear tag, breed and age", () => {
    render(<BullDetailView bull={mockBull} imageSrc="/bull.jpg" />);
    expect(screen.getByText(/Etiqueta: 992 · Angus · 36 meses/)).toBeInTheDocument();
  });

  it("renders origin, use and coat labels", () => {
    render(<BullDetailView bull={mockBull} imageSrc="/bull.jpg" />);
    expect(screen.getByText(/Origen: Propio/)).toBeInTheDocument();
    expect(screen.getByText(/Uso: Para vaquillona/)).toBeInTheDocument();
    expect(screen.getByText(/Pelaje: Negro/)).toBeInTheDocument();
  });

  it("renders BULL SCORE and score value", () => {
    render(<BullDetailView bull={mockBull} imageSrc="/bull.jpg" />);
    expect(screen.getByText("BULL SCORE")).toBeInTheDocument();
    expect(screen.getByText("80.5")).toBeInTheDocument();
  });

  it("renders standout feature when present", () => {
    render(<BullDetailView bull={mockBull} imageSrc="/bull.jpg" />);
    expect(screen.getByText(/Destacado:/)).toBeInTheDocument();
    expect(screen.getByText("Top 1% calving ease")).toBeInTheDocument();
  });

  it("renders evaluation criteria heading", () => {
    render(<BullDetailView bull={mockBull} imageSrc="/bull.jpg" />);
    expect(screen.getByText("Criterios de evaluación")).toBeInTheDocument();
  });

  it("renders stats labels", () => {
    render(<BullDetailView bull={mockBull} imageSrc="/bull.jpg" />);
    expect(screen.getByText(/Crecimiento: 85/)).toBeInTheDocument();
    expect(screen.getByText(/Fac. parto: 98/)).toBeInTheDocument();
    expect(screen.getByText(/Reproducción: 75/)).toBeInTheDocument();
    expect(screen.getByText(/Moderación: 60/)).toBeInTheDocument();
    expect(screen.getByText(/Canal: 82/)).toBeInTheDocument();
  });

  it("does not render standout section when standoutFeature is null", () => {
    render(
      <BullDetailView bull={{ ...mockBull, standoutFeature: null }} imageSrc="/bull.jpg" />
    );
    expect(screen.queryByText(/Destacado:/)).not.toBeInTheDocument();
  });
});
