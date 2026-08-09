const links = ["hello@getsmarttap.com", "Instagram", "Privacy", "Terms"];

export function SiteFooter() {
  return (
    <footer
      className="border-t"
      style={{ background: "#232120", color: "rgba(243,242,242,.62)", borderColor: "rgba(243,242,242,.14)" }}
    >
      <div className="mx-auto flex max-w-[1160px] flex-wrap items-center gap-6 px-[clamp(20px,5vw,40px)] pt-8 pb-10">
        <span className="mr-auto text-[17px]" style={{ fontFamily: "var(--font-heading)", fontWeight: 600, color: "#f3f2f2" }}>
          SmartTap
        </span>
        <div className="flex flex-wrap gap-[22px] text-[13px]">
          {links.map((l) => (
            <a key={l} href="#top" className="no-underline" style={{ color: "rgba(243,242,242,.62)" }}>
              {l}
            </a>
          ))}
        </div>
        <p className="m-0 w-full text-[12px]" style={{ color: "rgba(243,242,242,.4)" }}>
          Lagos, Nigeria · <span className="tabular-nums">2026</span> · Name and domain are placeholders pending sign-off.
        </p>
      </div>
    </footer>
  );
}
