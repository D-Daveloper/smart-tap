import { Reveal } from "@/components/motion/Reveal";

const faqs = [
  {
    q: "Does my customer need an app?",
    a: "No. Nothing to download. They tap or scan and the page opens in the browser they already have.",
  },
  {
    q: "Does it work on every phone?",
    a: "Tapping needs a phone with NFC — most phones from the last few years. Every phone with a camera can scan the QR code printed on the same card, so nobody is left out.",
  },
  {
    q: "What if my prices change?",
    a: "Log in from your phone and change them. The card stays the same — it only points at your page. No reprinting, ever.",
  },
  {
    q: "How do I actually get more reviews?",
    a: "Ask while they're still in the chair, happy with the cut, and point at the card. The review button is the first thing on the page and goes straight to your Google review box — so there's no form to fill and nothing to search for.",
  },
  {
    q: "How long does setup take?",
    a: "About fifteen minutes. We do it with you on WhatsApp: your name, logo, colour, Google link and WhatsApp number. Your card is delivered ready to use.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-t" style={{ borderColor: "var(--color-divider)" }}>
      <div className="mx-auto max-w-[800px] px-[clamp(20px,5vw,40px)] py-[clamp(44px,6vw,80px)]">
        <h2
          className="mb-[clamp(24px,4vw,36px)] text-[clamp(28px,3.4vw,42px)] tracking-[-0.02em]"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 400 }}
        >
          Questions shop owners ask
        </h2>

        {faqs.map((f, i) => (
          <Reveal
            key={f.q}
            as="details"
            delay={i * 0.06}
            className={`border-t ${i === faqs.length - 1 ? "border-b" : ""}`}
            style={{ borderColor: "var(--color-divider)" }}
            {...(i === 0 ? { open: true } : {})}
          >
            <summary
              className="flex cursor-pointer items-center justify-between gap-4 py-[18px] text-[18px]"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
            >
              {f.q}
              <span className="faq-plus flex-none text-[20px]" style={{ color: "var(--color-accent)" }}>
                +
              </span>
            </summary>
            <p
              className="faq-answer m-0 mb-5 max-w-[60ch] text-[14.5px] leading-[1.65]"
              style={{ color: "color-mix(in srgb, var(--color-text) 76%, transparent)" }}
            >
              {f.a}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
