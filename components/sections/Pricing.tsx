import { CheckIcon } from "@/components/icons";
import { Reveal } from "@/components/motion/Reveal";

const includes = [
  "Your NFC card, printed with your logo and QR code",
  "We set the page up with you — 15 minutes on WhatsApp",
  "Edit your page and prices as often as you like",
  "Weekly tap and review numbers",
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="border-t border-b"
      style={{ background: "var(--color-surface)", borderColor: "var(--color-divider)" }}
    >
      <div className="mx-auto grid max-w-[1160px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-[clamp(30px,5vw,60px)] px-[clamp(20px,5vw,40px)] py-[clamp(44px,6vw,80px)]">
        <div>
          <h2
            className="mb-3.5 text-[clamp(28px,3.4vw,42px)] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 400 }}
          >
            Simple pricing
          </h2>
          <p
            className="mb-5 max-w-[40ch] text-[15px] leading-[1.65] text-pretty"
            style={{ color: "color-mix(in srgb, var(--color-text) 74%, transparent)" }}
          >
            You pay once for the card and the setup, then a small monthly fee to keep your page live and editable.
          </p>
          <p className="m-0 text-[13px] leading-[1.6]" style={{ color: "color-mix(in srgb, var(--color-text) 58%, transparent)" }}>
            Figures below are placeholders — confirm them before this page goes live.
          </p>
        </div>

        <Reveal delay={0.1} className="card elev-sm gap-0 p-[clamp(22px,3vw,34px)]" style={{ background: "var(--color-bg)" }}>
          <p className="card-kicker mb-3.5">One plan, one card</p>

          <div className="mb-1 flex items-baseline gap-2.5">
            <span
              className="text-[clamp(38px,5vw,54px)] leading-none tracking-[-0.03em] tabular-nums"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 400 }}
            >
              ₦15,000
            </span>
            <span className="text-[14px]" style={{ color: "color-mix(in srgb, var(--color-text) 60%, transparent)" }}>
              once — card &amp; setup
            </span>
          </div>

          <p className="mb-5 text-[14.5px]" style={{ color: "color-mix(in srgb, var(--color-text) 74%, transparent)" }}>
            then{" "}
            <span
              className="text-[19px] tabular-nums"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600, color: "var(--color-text)" }}
            >
              ₦2,500
            </span>{" "}
            / month
          </p>

          <hr className="hr mt-0 mb-[18px]" />

          <div className="mb-[22px] grid gap-2.5">
            {includes.map((line) => (
              <div key={line} className="flex gap-2.5 text-[14px] leading-[1.45]">
                <CheckIcon style={{ flex: "none", marginTop: 4 }} />
                <span>{line}</span>
              </div>
            ))}
          </div>

          <a href="#get" className="btn btn-primary btn-block m-0 px-5 py-[13px] text-[15px]">
            Get your SmartTap
          </a>

          <p className="mt-3.5 mb-0 text-center text-[12.5px]" style={{ color: "color-mix(in srgb, var(--color-text) 58%, transparent)" }}>
            Pay for a year up front —{" "}
            <span className="tabular-nums" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
              ₦25,000
            </span>
            , two months free.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
