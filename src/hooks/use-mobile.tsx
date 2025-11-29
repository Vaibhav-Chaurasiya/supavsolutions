import * as React from "react";

// Define a reusable breakpoint constant
const MOBILE_BREAKPOINT = 768;

/**
 * useIsMobile Hook
 * Returns true if the viewport width is less than MOBILE_BREAKPOINT.
 * Automatically updates on window resize or media query change.
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    // ✅ Guard against SSR (window undefined)
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    // Function to update the mobile state
    const handleChange = (event?: MediaQueryListEvent) => {
      setIsMobile(event?.matches ?? mql.matches);
    };

    // Initial check
    handleChange();

    // ✅ Safari compatibility (older browsers)
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", handleChange);
    } else if (typeof mql.addListener === "function") {
      mql.addListener(handleChange);
    }

    // Cleanup
    return () => {
      if (typeof mql.removeEventListener === "function") {
        mql.removeEventListener("change", handleChange);
      } else if (typeof mql.removeListener === "function") {
        mql.removeListener(handleChange);
      }
    };
  }, []);

  return isMobile;
}
