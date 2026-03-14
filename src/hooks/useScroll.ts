import { useEffect } from "react";

interface ScrollCoords {
  scrollX: number;
  scrollY: number;
}

export type ScrollCallback = (coords: ScrollCoords) => void;

/**
 * Hook used to subscribe to scroll events
 * of the window.
 *
 * The passed callback receives scroll X,Y
 * values as arguments.
 */
export function useScroll(callback: ScrollCallback): void {
  useEffect(() => {
    const handleScroll = () => {
      const { scrollY, scrollX } = window;
      callback({ scrollY, scrollX });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [callback]);
}
