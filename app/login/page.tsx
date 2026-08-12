import Link from "next/link";
import { NfcIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Reveal } from "@/components/motion/Reveal";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata = {
  title: "Log in — SmartTap",
  description: "Log in to your SmartTap dashboard to edit your scan page and see your numbers.",
};

const PAPER = "#f3f2f2";

export default function LoginPage() {
  return (
    <main
      className="grid min-h-screen grid-cols-1 lg:grid-cols-[1fr_0.85fr]"
      style={{ background: "var(--color-bg)", color: "var(--color-text)", fontFamily: "var(--font-body)" }}
    >
      {/* Form side */}
      <div className="flex flex-col px-[clamp(20px,6vw,64px)] py-[clamp(24px,4vh,40px)]">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="mr-auto flex items-center gap-[9px] no-underline"
            style={{ color: "var(--color-text)" }}
          >
            <NfcIcon size={20} animated stroke="var(--color-accent)" />
            <span className="text-[19px]" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
              SmartTap
            </span>
          </Link>
          <ThemeToggle />
        </div>

        <div className="flex flex-1 items-center justify-center py-[clamp(36px,8vh,80px)]">
          <div className="w-full max-w-[400px]">
            <LoginForm />
          </div>
        </div>

        <p className="m-0 text-[12.5px]" style={{ color: "color-mix(in srgb, var(--color-text) 50%, transparent)" }}>
          Trouble getting in? WhatsApp us on <span className="tabular-nums">+234 800 000 0000</span>.
        </p>
      </div>

      {/* Colophon side */}
      <aside
        className="relative hidden flex-col justify-between overflow-hidden p-[clamp(32px,4vw,56px)] lg:flex"
        style={{ background: "#232120", color: PAPER }}
      >
        <span
          className="text-[11px] uppercase tabular-nums"
          style={{ letterSpacing: ".14em", color: "rgba(243,242,242,.45)" }}
        >
          Owner access
        </span>

        <Reveal className="max-w-[24ch]">
          <NfcIcon size={40} animated strokeWidth={1.2} stroke="var(--color-accent-700)" style={{ marginBottom: 28 }} />
          <p
            className="m-0 text-[clamp(26px,2.6vw,36px)] leading-[1.14] tracking-[-0.02em] text-pretty"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 400 }}
          >
            Every tap is a review you didn&apos;t have to ask for.
          </p>
          <div className="mt-8 mb-6 h-px w-16" style={{ background: "var(--color-accent-700)" }} />
          <p className="m-0 text-[14px] leading-[1.65]" style={{ color: "rgba(243,242,242,.62)" }}>
            Change your page, check your numbers, and see what customers tapped this week.
          </p>
        </Reveal>

        <span className="text-[11.5px]" style={{ color: "rgba(243,242,242,.4)" }}>
          Lagos · Est. 2025
        </span>
      </aside>
    </main>
  );
}
