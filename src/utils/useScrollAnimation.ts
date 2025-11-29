import { useEffect } from "react";

/**
 * useScrollAnimation Hook
 * Adds smooth scroll-triggered animations to elements with the `.animate-on-scroll` class.
 * Automatically unobserves elements after animation for better performance.
 *
 * 💡 Usage:
 *  - Add `className="animate-on-scroll opacity-0 translate-y-6"` to elements.
 *  - Define a `.show` class in CSS (for fade-up, slide-in, etc.).
 */
const useScrollAnimation = () => {
  useEffect(() => {
    // ✅ Prevent running during SSR
    if (typeof window === "undefined") return;

    const hiddenElements = document.querySelectorAll<HTMLElement>(".animate-on-scroll");
    if (!hiddenElements.length) return;

    // Create an Intersection Observer
    const observer = new IntersectionObserver(
      (entries, observerRef) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            // Add the animation trigger class
            el.classList.add("show");

            // Optional: smooth GPU acceleration for smoother transitions
            el.style.willChange = "transform, opacity";

            // Unobserve to avoid re-triggers
            observerRef.unobserve(el);
          }
        });
      },
      {
        threshold: 0.15, // Trigger slightly later for natural reveal
        rootMargin: "0px 0px -10% 0px", // reveal just before entering viewport
      }
    );

    // Observe all matching elements
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};

export default useScrollAnimation;
