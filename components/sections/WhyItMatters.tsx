import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

const cards: { kicker: string; title: string; body: ReactNode }[] = [
  {
    kicker: "More walk-ins",
    title: "Higher on Google Maps",
    body: 'More reviews lift where you appear when someone searches "barber near me" — and that search is how most new customers arrive.',
  },
  {
    kicker: "No reprinting",
    title: "Change prices, not cards",
    body: (
      <>
        Raised your fade to <span style={{ fontFamily: "var(--font-heading)" }} className="tabular-nums">₦5,000</span>?
        Update it online. The card on the counter never changes.
      </>
    ),
  },
  {
    kicker: "Looks serious",
    title: "A shop that looks organised",
    body: "A clean page with your logo and colour tells a first-time customer you run a proper business.",
  },
  {
    kicker: "You can see it working",
    title: "Know how many tapped",
    body: "Taps this week, review clicks, WhatsApp messages. Four numbers, nothing to learn.",
  },
];

export function WhyItMatters() {
  return (
    <section className="mx-auto max-w-[1160px] px-[clamp(20px,5vw,40px)] py-[clamp(44px,6vw,80px)]">
      <h2
        className="mb-1.5 text-[clamp(28px,3.4vw,42px)] tracking-[-0.02em]"
        style={{ fontFamily: "var(--font-heading)", fontWeight: 400 }}
      >
        Why it matters for your shop
      </h2>
      <p
        className="mb-[clamp(28px,4vw,40px)] text-[14.5px]"
        style={{ color: "color-mix(in srgb, var(--color-text) 62%, transparent)" }}
      >
        Reviews are how new customers in Lagos find a barber they can trust.
      </p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[clamp(20px,3vw,30px)]">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08} className="card">
            <p className="card-kicker">{c.kicker}</p>
            <h3 className="card-title">{c.title}</h3>
            <p className="card-body">{c.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
