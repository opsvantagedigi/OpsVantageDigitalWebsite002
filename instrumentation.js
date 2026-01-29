// Optional, safe instrumentation entrypoint — no-op by default.
export function register() {
  // Intentionally empty. Import and register instrumentation only when
  // explicitly needed to avoid any runtime side-effects during hydration.
}

// Export a placeholder for potential error hooks. Keep as no-op to avoid
// introducing runtime dependencies.
export const onRequestError = undefined;
