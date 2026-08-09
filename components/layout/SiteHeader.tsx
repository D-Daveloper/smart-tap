import { NfcIcon } from "@/components/icons";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#page", label: "What's on it" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-20 border-b backdrop-blur-[8px] transition-shadow duration-300"
      style={{
        background: "color-mix(in srgb, var(--color-bg) 92%, transparent)",
        borderColor: "var(--color-divider)",
      }}
    >
      <ScrollProgress />
      <nav className="mx-auto flex max-w-[1160px] items-center gap-7 px-[clamp(20px,5vw,40px)] py-[14px]">
        <a href="#top" className="mr-auto flex items-center gap-[9px] no-underline" style={{ color: "var(--color-text)" }}>
          <NfcIcon size={20} animated stroke="var(--color-accent)" />
          <span className="text-[20px] tracking-[-0.01em]" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
            SmartTap
          </span>
        </a>

        <div className="flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="navlink hidden text-[13.5px] no-underline sm:inline" style={{ color: "var(--color-text)" }}>
              {l.label}
            </a>
          ))}
          <ThemeToggle />
          <a href="#get" className="btn btn-primary px-4 py-[9px] text-[13.5px]">
            Get your SmartTap
          </a>
        </div>
      </nav>
    </header>
  );
}
