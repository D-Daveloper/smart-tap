"use client";

import { useEffect, useState } from "react";

/**
 * Colophon-style loading screen: the paper ground, the NFC mark drawing its
 * arcs outward, the wordmark, and a hairline rule that fills left to right.
 *
 * Rules it follows:
 *  - First visit only (sessionStorage) — never punishes a repeat visitor.
 *  - Shows for MIN_MS so it reads as intentional, not a flash.
 *  - Hard ceiling of MAX_MS — it can never trap the page behind itself.
 *  - Reduced motion: static mark, no arc animation, shorter dwell.
 *  - `aria-hidden` + inert once dismissed; page content is in the DOM
 *    underneath the whole time, so SEO and no-JS readers are unaffected.
 */
const MIN_MS = 900;
const MAX_MS = 2600;
const KEY = "smarttap:seen-splash";

export function LoadingScreen() {
  const [state, setState] = useState<"hidden" | "showing" | "leaving">("hidden");

  useEffect(() => {
    if (sessionStorage.getItem(KEY)) return;
    sessionStorage.setItem(KEY, "1");
    setState("showing");

    const t0 = Date.now();
    const timers: ReturnType<typeof setTimeout>[] = [];

    const leave = () => {
      const waited = Date.now() - t0;
      timers.push(
        setTimeout(() => {
          setState("leaving");
          timers.push(setTimeout(() => setState("hidden"), 520));
        }, Math.max(0, MIN_MS - waited))
      );
    };

    if (document.readyState === "complete") leave();
    else window.addEventListener("load", leave, { once: true });

    timers.push(setTimeout(() => setState("hidden"), MAX_MS));

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("load", leave);
    };
  }, []);

  if (state === "hidden") return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-50 grid place-items-center transition-opacity duration-500"
      style={{
        background: "var(--color-bg)",
        opacity: state === "leaving" ? 0 : 1,
        pointerEvents: state === "leaving" ? "none" : "auto",
      }}
    >
      <div className="flex flex-col items-center gap-5">
        <svg
          width="46"
          height="46"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1.3"
          strokeLinecap="round"
          className="splash-mark"
        >
          <path className="arc" style={{ animationDelay: "0.5s" }} d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
          <path className="arc" style={{ animationDelay: "0.25s" }} d="M7.8 16.2a5.9 5.9 0 0 1 0-8.4" />
          <circle cx="12" cy="12" r="2" />
          <path className="arc" style={{ animationDelay: "0.25s" }} d="M16.2 7.8a5.9 5.9 0 0 1 0 8.4" />
          <path className="arc" style={{ animationDelay: "0.5s" }} d="M19.1 4.9C23 8.8 23 15.2 19.1 19.1" />
        </svg>

        <span
          className="text-[22px] tracking-[-0.01em]"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
        >
          SmartTap
        </span>

        <div className="h-px w-34 overflow-hidden" style={{ background: "var(--color-divider)" }}>
          <div className="splash-rule h-full w-full origin-left" style={{ background: "var(--color-accent)" }} />
        </div>
      </div>

      <style jsx>{`
        .splash-rule {
          animation: draw-rule 1.1s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
        }
        @media (prefers-reduced-motion: no-preference) {
          .splash-mark .arc {
            animation: wave-glow 1.6s ease-in-out infinite;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .splash-rule {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
