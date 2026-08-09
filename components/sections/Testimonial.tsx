import { Plate } from "@/components/Plate";
import { QuoteIcon } from "@/components/icons";
import { Reveal } from "@/components/motion/Reveal";

export function Testimonial() {
  return (
    <section className="mx-auto max-w-[1160px] px-[clamp(20px,5vw,40px)] py-[clamp(44px,6vw,80px)]">
      <Reveal as="figure" className="mx-auto m-0 max-w-[30ch] text-center">
        <QuoteIcon style={{ margin: "0 auto 20px", opacity: 0.5 }} />
        <blockquote
          className="m-0 mb-[22px] text-[clamp(24px,3vw,36px)] leading-[1.24] tracking-[-0.02em] text-pretty"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 400 }}
        >
          We went from eleven reviews to sixty-three in two months. Now people walk in saying they saw us on Google.
        </blockquote>
        <figcaption className="text-[13.5px]" style={{ color: "color-mix(in srgb, var(--color-text) 62%, transparent)" }}>
          Tunde A., Fade Republic — Lekki Phase 1 <span className="opacity-70">(placeholder testimonial)</span>
        </figcaption>
      </Reveal>

      <div
        className="mt-[clamp(34px,5vw,52px)] flex flex-wrap justify-center gap-[18px] border-t pt-[clamp(28px,4vw,40px)]"
        style={{ borderColor: "var(--color-divider)" }}
      >
        {[1, 2, 3, 4, 5].map((n, i) => (
          <Reveal key={n} delay={i * 0.06}>
            <Plate ratio="132/92" className="w-[132px]" placeholder={`Shop ${n}`} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
