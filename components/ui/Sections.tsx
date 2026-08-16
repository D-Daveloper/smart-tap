"use client";

import { useState } from "react";
export function Section({
  id,
  title,
  meta,
  icon,
  children,
  metaAccent,
  iconFilled,
  last,
}: {
  id: string;
  title: string;
  meta: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  metaAccent?: boolean;
  iconFilled?: boolean;
  last?: boolean;
}) {
  const DIM = "color-mix(in srgb, var(--color-text) 50%, transparent)";
  //   const open = shop.openSection === id;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
    className={"border-t border-t-divider rounded-2xl" + (last ? " border-b border-b-divider" : "") }
     style={isOpen?{background: "color-mix(in srgb, var(--color-accent) 5%, transparent)"} : {}}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="sec-head flex w-full cursor-pointer items-center gap-3 px-3 py-4.25 text-left bg-transparent text-text font-body "
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={iconFilled ? "var(--color-accent)" : "none"}
          stroke={iconFilled ? "none" : "var(--color-accent)"}
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {icon}
        </svg>
        <span
          className="mr-auto text-[17px] font-heading"
        >
          {title}
        </span>
        <span
          className="text-[12px] tabular-nums"
          style={{ color: metaAccent ? "var(--color-accent-700)" : DIM }}
        >
          {meta}
        </span>
        <span
          className="inline-flex transition-transform duration-200"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.6}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="grid gap-4 px-5 pt-1 pb-6.5">{children}</div>
      )}
    </div>
  );
}
