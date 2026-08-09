"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts to `to` when scrolled into view. Renders the final value on the
 * server so the number is correct with JS off, and guarantees the final
 * value via a backstop timeout.
 */
export function CountUp({ to, duration = 1100 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let done = false;
    const finish = () => {
      done = true;
      cancelAnimationFrame(raf);
      setValue(to);
    };

    const run = () => {
      const t0 = Date.now();
      setValue(0);
      const step = () => {
        if (done) return;
        const p = Math.min(1, (Date.now() - t0) / duration);
        setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        run();
      },
      { threshold: 0.4 }
    );
    io.observe(el);

    const backstop = setTimeout(finish, duration + 2500);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      clearTimeout(backstop);
    };
  }, [to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
    </span>
  );
}
