# ErrorBoundary

Organism: React error boundary that catches JavaScript errors in the child tree and renders a fallback UI instead of crashing. Default fallback shows "Algo salió mal", the error message and a "Reintentar" button. Can receive a custom `fallback` (node or function receiving `error` and `reset`).

## Props

| Prop     | Type                                                                 | Description                                                                 |
|----------|----------------------------------------------------------------------|-----------------------------------------------------------------------------|
| children | ReactNode                                                            | Child tree to wrap                                                         |
| fallback | ReactNode \| ((error: Error, reset: () => void) => ReactNode)        | Optional. Custom UI when an error is caught; function receives error and reset. |
| onReset  | () => void                                                           | Optional. Called when user clicks "Reintentar" (after state reset).        |

## Usage

- **Layout / app:** Wrap the app or a route with `<ErrorBoundary>` so uncaught errors in that subtree show the fallback (e.g. `ErrorBoundaryWrapper` in `app/layout.tsx`).
- **Custom fallback:** Pass `fallback={(error, reset) => <YourUI error={error} onRetry={reset} />}` or `fallback={<YourUI />}`.
- **HOC:** Use `withErrorBoundary(MyComponent, fallback?)` to wrap a component with an ErrorBoundary.

## Accessibility

- Default fallback container has `role="alert"`.
