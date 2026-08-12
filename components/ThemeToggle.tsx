"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@/components/icons";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setTheme((document.documentElement.dataset.theme as "light" | "dark") ?? "light");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("smarttap:theme", next);
    setTheme(next);
  };

  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch colour mode"
      title="Switch colour mode"
      className="inline-flex cursor-pointer items-center gap-1.75 rounded-md border px-2.75 py-1.75 text-[12.5px] leading-none transition-colors hover:border-accent hover:text-accent-700 border-divider text-text font-body bg-transparent"
    >
      {isLight ? <MoonIcon /> : <SunIcon />}
      <span>{isLight ? "Dark" : "Light"}</span>
    </button>
  );
}
