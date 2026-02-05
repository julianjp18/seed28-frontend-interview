import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ErrorBoundary } from "./ErrorBoundary";

function Thrower() {
  throw new Error("Test error");
}

describe("ErrorBoundary", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    (console.error as jest.Mock).mockRestore();
  });

  it("renders children when there is no error", () => {
    render(
      <ErrorBoundary>
        <span>Child content</span>
      </ErrorBoundary>
    );
    expect(screen.getByText("Child content")).toBeInTheDocument();
  });

  it("renders default fallback when a child throws", () => {
    render(
      <ErrorBoundary>
        <Thrower />
      </ErrorBoundary>
    );
    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByText("Algo salió mal")).toBeInTheDocument();
    expect(screen.getByText("Test error")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /reintentar/i })).toBeInTheDocument();
  });

  it("renders custom fallback node when provided", () => {
    render(
      <ErrorBoundary fallback={<div>Custom fallback</div>}>
        <Thrower />
      </ErrorBoundary>
    );
    expect(screen.getByText("Custom fallback")).toBeInTheDocument();
    expect(screen.queryByText("Algo salió mal")).not.toBeInTheDocument();
  });

  it("renders custom fallback function result when provided", () => {
    render(
      <ErrorBoundary
        fallback={(error) => <div>Error: {error.message}</div>}
      >
        <Thrower />
      </ErrorBoundary>
    );
    expect(screen.getByText("Error: Test error")).toBeInTheDocument();
  });

  it("calls onReset when Reintentar is clicked", async () => {
    const onReset = jest.fn();
    render(
      <ErrorBoundary onReset={onReset}>
        <Thrower />
      </ErrorBoundary>
    );
    await userEvent.click(screen.getByRole("button", { name: /reintentar/i }));
    expect(onReset).toHaveBeenCalled();
  });

  it("re-renders children after reset when Reintentar is clicked and children are safe", async () => {
    const { rerender } = render(
      <ErrorBoundary>
        <Thrower />
      </ErrorBoundary>
    );
    expect(screen.getByText("Algo salió mal")).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: /reintentar/i }));
    rerender(
      <ErrorBoundary>
        <span>Recovered content</span>
      </ErrorBoundary>
    );
    expect(screen.getByText("Recovered content")).toBeInTheDocument();
  });
});
