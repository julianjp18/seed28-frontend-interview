"use client";

import React, { type ComponentType, type ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode | ((error: Error, reset: () => void) => ReactNode);
  onReset?: () => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    this.props.onReset?.();
  };

  render() {
    if (this.state.hasError && this.state.error) {
      if (this.props.fallback) {
        return typeof this.props.fallback === "function"
          ? (this.props.fallback as (error: Error, reset: () => void) => ReactNode)(
              this.state.error,
              this.handleReset
            )
          : this.props.fallback;
      }
      return (
        <div
          className="flex min-h-[280px] flex-col items-center justify-center gap-4 rounded-lg border border-destructive/30 bg-destructive/5 p-6 text-center"
          role="alert"
        >
          <h2 className="font-inter text-lg font-semibold text-foreground">
            Algo salió mal
          </h2>
          <p className="max-w-md font-inter text-sm text-muted-foreground">
            {this.state.error.message}
          </p>
          <button
            type="button"
            onClick={this.handleReset}
            className="rounded-lg border border-[#1C2620] bg-white px-4 py-2 font-inter text-sm font-medium text-[#1C2620] hover:bg-[#1C2620]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Reintentar
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

/** Wrapper client component to use ErrorBoundary in App Router (layout/page). */
export function withErrorBoundary<P extends object>(
  WrappedComponent: ComponentType<P>,
  fallback?: ReactNode | ((error: Error, reset: () => void) => ReactNode)
) {
  return function WithErrorBoundary(props: P) {
    return (
      <ErrorBoundary fallback={fallback}>
        <WrappedComponent {...props} />
      </ErrorBoundary>
    );
  };
}
