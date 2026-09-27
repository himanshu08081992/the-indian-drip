import { useLayoutEffect } from "react";
import {
  useLocation,
  useNavigationType,
} from "react-router-dom";

const STORAGE_KEY = "indian-drip-scroll-positions";

function getPositions() {
  try {
    return JSON.parse(
      sessionStorage.getItem(STORAGE_KEY) || "{}"
    );
  } catch {
    return {};
  }
}

function savePosition(key, y) {
  const positions = getPositions();
  positions[key] = y;

  sessionStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(positions)
  );
}

function ScrollManager() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    const key = location.key;
    let frameId;
    let observer;

    // Restore saved position when using browser Back/Forward
    if (navigationType === "POP") {
      const positions = getPositions();
      const savedY = positions[key] ?? 0;

      const restoreScroll = () => {
        const maxScroll =
          document.documentElement.scrollHeight -
          window.innerHeight;

        // Wait until the page is tall enough
        if (maxScroll >= savedY) {
          window.scrollTo(0, savedY);
          observer?.disconnect();
          return;
        }

        observer ??= new ResizeObserver(() => {
          restoreScroll();
        });

        observer.observe(document.documentElement);
      };

      frameId = requestAnimationFrame(restoreScroll);
    } else {
      // New page navigation starts at the top
      window.scrollTo(0, 0);
    }

    // Save the current history entry's scroll position
    const handleScroll = () => {
      savePosition(key, window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      savePosition(key, window.scrollY);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(frameId);
      observer?.disconnect();
    };
  }, [location.key, navigationType]);

  return null;
}

export default ScrollManager;