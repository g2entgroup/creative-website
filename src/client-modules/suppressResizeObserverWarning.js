/**
 * Suppress harmless ResizeObserver warnings
 * These warnings occur during React rendering and don't affect functionality
 */

if (typeof window !== 'undefined') {
  const resizeObserverWarningRe = /ResizeObserver loop (limit exceeded|completed with undelivered notifications)/;

  const originalError = console.error;
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      resizeObserverWarningRe.test(args[0])
    ) {
      return; // Suppress the warning
    }
    originalError.apply(console, args);
  };

  // Also suppress in global error handler
  window.addEventListener('error', (event) => {
    if (
      event.message &&
      resizeObserverWarningRe.test(event.message)
    ) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
  }, true);

  // Suppress unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    if (
      event.reason &&
      typeof event.reason === 'object' &&
      event.reason.message &&
      resizeObserverWarningRe.test(event.reason.message)
    ) {
      event.preventDefault();
    }
  });
}
