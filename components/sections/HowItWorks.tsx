import type { ReactNode } from "react";
import { NfcIcon, PhoneScreenIcon, StarOutlineIcon } from "@/components/icons";
import { Reveal } from "@/components/motion/Reveal";

type Step = { n: string; icon: ReactNode; title: string; body: string };

const steps: Step[] = [
  {
    n: "01",
    icon: <NfcIcon size={26} strokeWidth={1.3} animated stroke="var(--color-text)" style={{ marginBottom: 14 }} />,
    title: "Tap or scan",
    body: "They hold their phone to the card. No NFC on their phone? The printed QR code does the same job.",
  },
  {
    n: "02",
    icon: <PhoneScreenIcon style={{ marginBottom: 14 }} />,
    title: "Your page opens",
    body: "Your logo, your colour, your name — up in under two seconds, even on a weak network.",
  },
  {
    n: "03",
    icon: <StarOutlineIcon style={{ marginBottom: 14 }} />,
    title: "They review or message",
    body: "One tap goes straight to your Google review box. Or WhatsApp, prices, directions, Instagram.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-[1160px] px-[clamp(20px,5vw,40px)] py-[clamp(44px,6vw,76px)]">
      <h2
        className="mb-1.5 text-[clamp(28px,3.4vw,42px)] tracking-[-0.02em]"
        style={{ fontFamily: "var(--font-heading)", fontWeight: 400 }}
      >
        How it works
      </h2>
      <p
        className="mb-[clamp(28px,4vw,44px)] text-[14.5px]"
        style={{ color: "color-mix(in srgb, var(--color-text) 62%, transparent)" }}
      >
        Three seconds, start to finish. Nothing for the customer to install.
      </p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
        {steps.map((s, i) => (
          <Reveal
            key={s.n}
            delay={i * 0.1}
            className={
              i === 0
                ? "pr-[clamp(16px,3vw,34px)]"
                : "border-l px-[clamp(16px,3vw,34px)] last:pr-0"
            }
            style={i === 0 ? undefined : { borderColor: "var(--color-divider)" }}
          >
            <p
              className="mb-3.5 text-[13px] tracking-[0.1em] tabular-nums"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-accent-700)" }}
            >
              {s.n}
            </p>
            {s.icon}
            <h3 className="mb-2 text-[21px]" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
              {s.title}
            </h3>
            <p
              className="m-0 text-[14px] leading-[1.6] text-pretty"
              style={{ color: "color-mix(in srgb, var(--color-text) 72%, transparent)" }}
            >
              {s.body}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
