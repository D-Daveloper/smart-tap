"use client";

import { useEffect, useRef } from "react";

/** Gold hairline across the bottom of the sticky header. */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.classList.toggle("scrolled", y > 6);
      if (ref.current) {
        ref.current.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="absolute inset-x-0 -bottom-px h-0.5 origin-left scale-x-0 will-change-transform"
      style={{ background: "var(--color-accent)" }}
    />
  );
}
