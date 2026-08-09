"use client";

import { useState } from "react";
import { CheckCircleIcon, WhatsAppIcon } from "@/components/icons";
import { Reveal } from "@/components/motion/Reveal";

const PAPER = "#f3f2f2";

type Errors = { name?: boolean; shop?: boolean; phone?: boolean };

export function LeadCapture() {
  const [form, setForm] = useState({ name: "", shop: "", phone: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sentPhone, setSentPhone] = useState<string | null>(null);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = () => {
    const digits = form.phone.replace(/\D/g, "");
    const next: Errors = {
      name: !form.name.trim(),
      shop: !form.shop.trim(),
      phone: digits.length < 10 || digits.length > 14,
    };
    setErrors(next);
    if (next.name || next.shop || next.phone) return;
    setSentPhone(form.phone);
  };

  const reset = () => {
    setForm({ name: "", shop: "", phone: "" });
    setErrors({});
    setSentPhone(null);
  };

  return (
    <section id="get" style={{ background: "#232120", color: PAPER }}>
      <div className="mx-auto grid max-w-[1160px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-[clamp(32px,5vw,64px)] px-[clamp(20px,5vw,40px)] py-[clamp(44px,6vw,84px)]">
        <Reveal>
          <h2
            className="mb-4 text-[clamp(30px,3.8vw,48px)] leading-[1.06] tracking-[-0.025em] text-balance"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 400 }}
          >
            Get your card on the counter this week
          </h2>
          <p className="mb-[26px] max-w-[40ch] text-[15.5px] leading-[1.65] text-pretty" style={{ color: "rgba(243,242,242,.72)" }}>
            Leave your details and we&apos;ll send you a WhatsApp message with the next step. Or message us now — we reply
            within the hour.
          </p>
          <a
            href="#get"
            className="inline-flex items-center gap-2.5 rounded-[var(--radius-md)] px-5 py-[13px] text-[15px] no-underline transition-colors hover:bg-[rgba(243,242,242,.1)]"
            style={{ border: "1px solid rgba(243,242,242,.4)", color: PAPER, fontFamily: "var(--font-heading)", fontWeight: 600 }}
          >
            <WhatsAppIcon size={18} />
            Chat with us on WhatsApp
          </a>
          <p className="mt-3.5 mb-0 text-[12.5px] tabular-nums" style={{ color: "rgba(243,242,242,.5)" }}>
            +234 800 000 0000 · Mon–Sat, 9am–7pm
          </p>
        </Reveal>

        <Reveal
          delay={0.12}
          className="rounded-[var(--radius-lg)] p-[clamp(22px,3vw,32px)]"
          style={{ background: "rgba(243,242,242,.05)", border: "1px solid rgba(243,242,242,.16)" }}
        >
          {sentPhone === null ? (
            <div>
              <h3 className="mb-[18px] text-[21px]" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
                Request your SmartTap
              </h3>

              <div className="grid gap-3.5">
                <Field id="lead-name" label="Your name" placeholder="Tunde Adeyemi" value={form.name} onChange={set("name")}
                  error={errors.name ? "Please tell us your name." : null} />

                <Field id="lead-shop" label="Shop name" placeholder="Fade Republic" value={form.shop} onChange={set("shop")}
                  error={errors.shop ? "Please add your shop or salon name." : null} />

                <Field id="lead-phone" label="WhatsApp number" placeholder="0803 000 0000" inputMode="tel" tabular
                  value={form.phone} onChange={set("phone")}
                  error={errors.phone ? "That doesn't look like a Nigerian number — try 0803 000 0000." : null} />

                <button
                  type="button"
                  onClick={submit}
                  className="mt-1 flex min-h-12 w-full cursor-pointer items-center justify-center rounded-[var(--radius-md)] text-[16px] transition-colors"
                  style={{
                    background: "transparent",
                    color: "var(--color-accent-300)",
                    border: "1px solid var(--color-accent-300)",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 600,
                  }}
                >
                  Send my request
                </button>

                <p className="m-0 text-[12px] leading-[1.5]" style={{ color: "rgba(243,242,242,.5)" }}>
                  We&apos;ll only message you about your SmartTap. No group broadcasts.
                </p>
              </div>
            </div>
          ) : (
            <div className="pt-[18px] pb-2.5 text-center">
              <CheckCircleIcon style={{ margin: "0 auto 18px" }} />
              <h3 className="mb-2.5 text-[26px] tracking-[-0.02em]" style={{ fontFamily: "var(--font-heading)", fontWeight: 400 }}>
                Got it — check WhatsApp
              </h3>
              <p className="mb-[22px] text-[14.5px] leading-[1.6] text-pretty" style={{ color: "rgba(243,242,242,.72)" }}>
                We&apos;ve sent a message to <span className="tabular-nums">{sentPhone}</span>. If it hasn&apos;t arrived in ten
                minutes, message us and we&apos;ll sort it out.
              </p>
              <button
                type="button"
                onClick={reset}
                className="cursor-pointer rounded-[var(--radius-md)] px-[18px] py-[11px] text-[14px] transition-colors hover:bg-[rgba(243,242,242,.1)]"
                style={{ background: "transparent", border: "1px solid rgba(243,242,242,.4)", color: PAPER, fontFamily: "var(--font-heading)", fontWeight: 600 }}
              >
                Send another request
              </button>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  id, label, error, tabular, ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { id: string; label: string; error: string | null; tabular?: boolean }) {
  return (
    <div className="field">
      <label htmlFor={id} style={{ color: "rgba(243,242,242,.72)" }}>
        {label}
      </label>
      <input
        id={id}
        className={`input min-h-11 ${tabular ? "tabular-nums" : ""}`}
        style={{ color: PAPER, borderColor: "rgba(243,242,242,.28)" }}
        {...props}
      />
      {error && (
        <p className="mt-1.5 mb-0 text-[12px]" style={{ color: "var(--color-accent-300)" }}>
          {error}
        </p>
      )}
    </div>
  );
}
