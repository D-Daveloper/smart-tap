"use client";

import { useEffect, useRef } from "react";

/**
 * Scroll reveal, SSR-safe.
 *
 * Contract (learned the hard way): the server ships every section VISIBLE.
 * JS adds `.is-hidden` only once the IntersectionObserver actually holds the
 * node, and always removes it — so a failed hydration, a throttled frame, or
 * a browser with no IO leaves the page perfectly readable.
 *
 * The stagger is a setTimeout rather than an animation-delay for the same
 * reason: a delay that never elapses would hold the element mid-animation.
 */
export function useReveal<T extends HTMLElement>(delay = 0) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    let shown = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const show = () => {
      if (shown) return;
      shown = true;
      el.classList.remove("is-hidden");
      el.classList.add("is-in");
      timers.push(setTimeout(() => el.classList.remove("is-in"), 900));
    };

    el.classList.add("is-hidden");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          io.unobserve(e.target);
          if (delay > 0) timers.push(setTimeout(show, delay * 1000));
          else show();
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.15 }
    );
    io.observe(el);

    // Safety net — nothing may stay hidden longer than this.
    timers.push(setTimeout(show, 2500));

    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [delay]);

  return ref;
}
