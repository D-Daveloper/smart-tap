import { Plate } from "@/components/Plate";
import { StarIcon, WhatsAppIcon } from "@/components/icons";
import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-[1160px] grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center gap-[clamp(32px,5vw,64px)] px-[clamp(20px,5vw,40px)] pt-[clamp(44px,7vw,86px)] pb-[clamp(36px,5vw,60px)]"
    >
      <div>
        <Reveal as="p" className="mb-[18px] text-[11px] tracking-[0.14em] uppercase" style={{ color: "var(--color-accent-700)" }}>
          For barbershops &amp; salons in Lagos
        </Reveal>

        <Reveal
          as="h1"
          delay={0.07}
          className="mb-5 text-[clamp(40px,5.6vw,72px)] leading-[1.02] tracking-[-0.025em] text-balance"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 400 }}
        >
          Turn every customer into a five-star Google review.
        </Reveal>

        <Reveal
          as="p"
          delay={0.14}
          className="mb-7 max-w-[46ch] text-[16.5px] leading-[1.65] text-pretty"
          style={{ color: "color-mix(in srgb, var(--color-text) 78%, transparent)" }}
        >
          One small card sits on your counter. The customer taps their phone — or scans the code — and your shop&apos;s page
          opens: review us on Google, chat on WhatsApp, see prices, get directions. No app to download. Nothing to reprint
          when your prices change.
        </Reveal>

        <Reveal delay={0.21} className="mb-6 flex flex-wrap gap-3">
          <a href="#get" className="btn btn-primary px-[26px] py-[14px] text-[16px]">
            Get your SmartTap
          </a>
          <a href="#get" className="btn btn-secondary gap-2 px-[22px] py-[14px] text-[16px]">
            <WhatsAppIcon />
            Chat with us on WhatsApp
          </a>
        </Reveal>

        <Reveal delay={0.28} className="flex items-center gap-3 border-t pt-5" style={{ borderColor: "var(--color-divider)" }}>
          <div className="flex gap-[3px]">
            {[0.4, 0.48, 0.56, 0.64, 0.72].map((d) => (
              <StarIcon key={d} className="star" style={{ animationDelay: `${d}s` }} />
            ))}
          </div>
          <p className="m-0 text-[12.5px]" style={{ color: "color-mix(in srgb, var(--color-text) 58%, transparent)" }}>
            Trusted by <CountUp to={40} /> shops in Lekki, Yaba and Surulere{" "}
            <span className="opacity-60">— placeholder, edit me</span>
          </p>
        </Reveal>
      </div>

      <Reveal as="figure" delay={0.12} className="m-0">
        <Plate ratio="4/3" placeholder="Counter shot: SmartTap card on a barbershop counter, hand tapping a phone" />
        <figcaption className="mt-2 text-[13px]" style={{ color: "color-mix(in srgb, var(--color-text) 62%, transparent)" }}>
          Fade Republic, Lekki Phase 1 — the card lives beside the till.
        </figcaption>
      </Reveal>
    </section>
  );
}
