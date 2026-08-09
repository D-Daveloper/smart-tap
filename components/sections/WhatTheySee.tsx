import { Reveal } from "@/components/motion/Reveal";
import { PhoneMock, TapDecoration } from "@/components/sections/PhoneMock";

const rows = [
  { n: "01", strong: "Rate us on Google", rest: " — the big one, straight to your review box." },
  { n: "02", strong: "Chat on WhatsApp", rest: " — bookings and enquiries land in your inbox." },
  { n: "03", strong: "Services & prices", rest: " — a list you update online, never reprint." },
  { n: "04", strong: "Directions, Instagram, Call", rest: " — on or off, your choice." },
  { n: "05", strong: "A code to share", rest: " — so customers can send your page on." },
];

export function WhatTheySee() {
  return (
    <section
      id="page"
      className="border-t border-b"
      style={{ background: "var(--color-surface)", borderColor: "var(--color-divider)" }}
    >
      <div className="mx-auto grid max-w-[1160px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-[clamp(32px,5vw,70px)] px-[clamp(20px,5vw,40px)] py-[clamp(44px,6vw,80px)]">
        <Reveal>
          <h2
            className="mb-3.5 text-[clamp(28px,3.4vw,42px)] tracking-[-0.02em] text-balance"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 400 }}
          >
            This is what your customer sees
          </h2>
          <p
            className="mb-[26px] max-w-[42ch] text-[15px] leading-[1.65] text-pretty"
            style={{ color: "color-mix(in srgb, var(--color-text) 74%, transparent)" }}
          >
            One screen, your branding, and the review button first. You choose which of the others appear — and you can
            change any of it from your phone, any time.
          </p>

          <div className="grid">
            {rows.map((r, i) => (
              <div
                key={r.n}
                className={`flex gap-3.5 border-t py-[13px] ${i === rows.length - 1 ? "border-b" : ""}`}
                style={{ borderColor: "var(--color-divider)" }}
              >
                <span
                  className="flex-none pt-[3px] text-[12px] tabular-nums"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-accent-700)" }}
                >
                  {r.n}
                </span>
                <p className="m-0 text-[14px] leading-[1.5]">
                  <strong className="font-semibold">{r.strong}</strong>
                  {r.rest}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12} className="flex items-center justify-center gap-[26px]">
          <TapDecoration />
          <PhoneMock />
        </Reveal>
      </div>
    </section>
  );
}
