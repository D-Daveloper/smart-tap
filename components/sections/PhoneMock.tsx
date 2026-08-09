import { BookIcon, InstagramIcon, NfcIcon, PhoneIcon, PinIcon, StarIcon, WhatsAppIcon } from "@/components/icons";

const BRAND = "#b8502f";

const tiles = [
  { icon: <BookIcon stroke={BRAND} />, label: "View services" },
  { icon: <PinIcon stroke={BRAND} />, label: "Directions" },
  { icon: <InstagramIcon stroke={BRAND} />, label: "Instagram" },
  { icon: <PhoneIcon stroke={BRAND} />, label: "Call us" },
];

/**
 * The customer-facing page, shown inside a phone shell.
 * Brand colours here belong to the demo tenant (Fade Republic) and
 * deliberately do NOT follow the site's light/dark theme.
 */
export function PhoneMock() {
  return (
    <div className="floaty w-[310px] rounded-[36px] p-2" style={{ background: "#171615", boxShadow: "var(--shadow-lg)" }}>
      <div className="overflow-hidden rounded-[29px]" style={{ background: "var(--color-bg)" }}>
        <div className="h-24" style={{ background: BRAND }} />
        <div className="-mt-8 px-[18px] pb-[22px] text-center">
          <div
            className="mx-auto mb-[11px] grid h-16 w-16 place-items-center rounded-[9px] text-[23px]"
            style={{
              background: "#1c2b4a",
              border: "4px solid var(--color-bg)",
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              color: "#f3f2f2",
            }}
          >
            FR
          </div>

          <h3
            className="mb-1 text-[24px] leading-[1.1] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
          >
            Fade Republic
          </h3>
          <p className="mb-1.5 text-[12px]" style={{ color: "color-mix(in srgb, var(--color-text) 65%, transparent)" }}>
            Barbing &amp; grooming lounge · Lekki
          </p>
          <p className="mb-4 text-[11px]" style={{ color: "color-mix(in srgb, var(--color-text) 68%, transparent)" }}>
            <span style={{ color: BRAND }}>★</span> <span className="font-semibold tabular-nums">4.6</span> · Open now till 9pm
          </p>

          <div
            className="tap-pulse mb-[9px] flex h-12 items-center justify-center gap-2 rounded-[5px] text-[15px] text-white"
            style={{ background: BRAND, fontFamily: "var(--font-heading)", fontWeight: 600 }}
          >
            <StarIcon size={16} fill="currentColor" />
            Rate us on Google
          </div>

          <div
            className="mb-3.5 flex h-11 items-center justify-center gap-2 rounded-[5px] text-[14px]"
            style={{ border: `1.5px solid ${BRAND}`, color: "#8f3a1f", fontFamily: "var(--font-heading)", fontWeight: 600 }}
          >
            <WhatsAppIcon size={15} strokeWidth={1.8} />
            Chat on WhatsApp
          </div>

          <div className="grid grid-cols-2 gap-2">
            {tiles.map((t) => (
              <div
                key={t.label}
                className="flex min-h-[62px] flex-col items-center justify-center gap-1.5 rounded-[5px] text-[11.5px]"
                style={{
                  border: "1px solid rgba(32,31,29,.16)",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                }}
              >
                {t.icon}
                {t.label}
              </div>
            ))}
          </div>

          <p className="mt-3.5 mb-0 text-[10px] tracking-[0.04em]" style={{ color: "color-mix(in srgb, var(--color-text) 45%, transparent)" }}>
            powered by <span style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>SmartTap</span>
          </p>
        </div>
      </div>
    </div>
  );
}

/** The pulsing tap card that sits beside the phone on wide screens. */
export function TapDecoration() {
  return (
    <div aria-hidden className="relative hidden h-14 w-[88px] flex-none place-items-center xl:grid">
      <span className="tap-ring absolute h-[74px] w-[74px] rounded-full" style={{ border: "1px solid var(--color-accent)" }} />
      <span
        className="tap-ring absolute h-[74px] w-[74px] rounded-full"
        style={{ border: "1px solid var(--color-accent)", animationDelay: "1.4s" }}
      />
      <span
        className="relative grid h-14 w-[88px] place-items-center rounded-[var(--radius-md)]"
        style={{ border: "1px solid var(--color-accent)", background: "var(--color-bg)", boxShadow: "var(--shadow-sm)" }}
      >
        <NfcIcon size={22} strokeWidth={1.4} animated stroke="var(--color-accent)" />
      </span>
    </div>
  );
}
