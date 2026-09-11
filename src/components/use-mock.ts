import { useEffect, useRef, useState } from "react";

/**
 * Shared behaviour for the HTML product mocks: keeps --s equal to
 * container width / layout width, and reports `armed` once the mock has
 * actually scrolled into view, so its animations start when the visitor is
 * looking at it rather than on page load.
 */
export function useMock(width: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ro = new ResizeObserver(([e]) => el.style.setProperty("--s", String(e.contentRect.width / width)));
    ro.observe(el);

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setArmed(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);

    return () => {
      ro.disconnect();
      io.disconnect();
    };
  }, [width]);

  return { ref, armed };
}
