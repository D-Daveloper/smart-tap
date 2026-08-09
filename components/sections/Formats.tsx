import { Plate } from "@/components/Plate";
import { Reveal } from "@/components/motion/Reveal";

const formats = [
  {
    id: "card",
    title: "Counter card",
    body: "Credit-card size, printed both sides. Sits by the till or the mirror shelf.",
    placeholder: "Counter card photo",
  },
  {
    id: "stand",
    title: "Acrylic stand",
    body: "Stands upright at eye level while the customer pays. Hardest to miss.",
    placeholder: "Acrylic stand photo",
  },
  {
    id: "sticker",
    title: "Mirror sticker",
    body: "Goes on the mirror in front of the chair, where they already look.",
    placeholder: "Mirror sticker photo",
  },
];

export function Formats() {
  return (
    <section className="border-t" style={{ borderColor: "var(--color-divider)" }}>
      <div className="mx-auto max-w-[1160px] px-[clamp(20px,5vw,40px)] py-[clamp(44px,6vw,80px)]">
        <h2
          className="mb-1.5 text-[clamp(28px,3.4vw,42px)] tracking-[-0.02em]"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 400 }}
        >
          Pick where it sits
        </h2>
        <p
          className="mb-[clamp(28px,4vw,40px)] text-[14.5px]"
          style={{ color: "color-mix(in srgb, var(--color-text) 62%, transparent)" }}
        >
          Every format carries both the tap chip and the printed code, so no customer is left out.
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[clamp(22px,3vw,34px)]">
          {formats.map((f, i) => (
            <Reveal key={f.id} as="figure" delay={i * 0.08} className="m-0">
              <Plate ratio="1/1" placeholder={f.placeholder} />
              <h3 className="mt-3.5 mb-[5px] text-[19px]" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
                {f.title}
              </h3>
              <p
                className="m-0 text-[13.5px] leading-[1.55]"
                style={{ color: "color-mix(in srgb, var(--color-text) 70%, transparent)" }}
              >
                {f.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
