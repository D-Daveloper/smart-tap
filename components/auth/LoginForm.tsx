"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Errors = { email?: string; password?: string; form?: string };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (!EMAIL.test(email.trim())) next.email = "Enter the email your page was set up with.";
    if (password.length < 6) next.password = "Your password is at least six characters.";
    setErrors(next);
    if (next.email || next.password) return;

    setBusy(true);
    // Stand-in for the real sign-in call.
    await new Promise((r) => setTimeout(r, 900));
    router.push("/dashboard");
  };

  return (
    <form onSubmit={submit} noValidate>
      <h1
        className="mb-2 text-[clamp(30px,3.4vw,38px)] leading-[1.05] tracking-[-0.02em]"
        style={{ fontFamily: "var(--font-heading)", fontWeight: 400 }}
      >
        Log in to your shop
      </h1>
      <p
        className="mb-7 text-[14.5px] leading-[1.6]"
        style={{ color: "color-mix(in srgb, var(--color-text) 62%, transparent)" }}
      >
        Use the email we set your page up with.
      </p>

      <div className="grid gap-4">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="input min-h-11"
            type="email"
            autoComplete="email"
            placeholder="tunde@faderepublic.ng"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={!!errors.email}
            style={errors.email ? { borderColor: "var(--color-accent-700)" } : undefined}
          />
          {errors.email && <FieldError>{errors.email}</FieldError>}
        </div>

        <div className="field">
          <div className="flex items-baseline justify-between">
            <label
              htmlFor="password"
              className="mb-[5px] block text-[12px]"
              style={{ color: "color-mix(in srgb, var(--color-text) 70%, transparent)" }}
            >
              Password
            </label>
            <button
              type="button"
              onClick={() => setShow((s) => !s)}
              className="cursor-pointer border-0 bg-transparent p-0 text-[12px] transition-colors hover:text-[var(--color-accent-700)]"
              style={{ color: "color-mix(in srgb, var(--color-text) 55%, transparent)", font: "inherit", fontSize: 12 }}
            >
              {show ? "Hide" : "Show"}
            </button>
          </div>
          <input
            id="password"
            className="input min-h-11"
            type={show ? "text" : "password"}
            autoComplete="current-password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-invalid={!!errors.password}
            style={errors.password ? { borderColor: "var(--color-accent-700)" } : undefined}
          />
          {errors.password && <FieldError>{errors.password}</FieldError>}
        </div>

        <button type="submit" className="btn btn-primary btn-block min-h-[46px] text-[15px]" disabled={busy}>
          {busy ? (
            <>
              <Spinner />
              Signing you in
            </>
          ) : (
            "Log in"
          )}
        </button>

        <Link
          href="/reset"
          className="text-center text-[13px] no-underline"
          style={{ color: "var(--color-accent-700)" }}
        >
          Forgot your password?
        </Link>
      </div>

      <p
        className="mt-8 mb-0 border-t pt-5 text-[13px]"
        style={{ borderColor: "var(--color-divider)", color: "color-mix(in srgb, var(--color-text) 60%, transparent)" }}
      >
        Just got your card?{" "}
        <Link href="/setup" className="no-underline" style={{ color: "var(--color-accent-700)" }}>
          Set up your page
        </Link>
        .
      </p>
    </form>
  );
}

function FieldError({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-1.5 mb-0 text-[12px]" style={{ color: "var(--color-accent-700)" }} role="alert">
      {children}
    </p>
  );
}

function Spinner() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="animate-spin" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" opacity=".25" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
