import type { ReactNode } from "react";

/**
 * The matted photograph slot. Drop a next/image (or <img>) inside.
 * Keeps the Classical `.plate` mat + archival grade.
 */
export function Plate({
  children,
  ratio = "4/3",
  className = "",
  placeholder,
}: {
  children?: ReactNode;
  ratio?: string;
  className?: string;
  placeholder?: string;
}) {
  return (
    <div className={`plate rounded-[var(--radius-md)] ${className}`} style={{ aspectRatio: ratio }}>
      {children ?? (
        <div
          className="grid h-full w-full place-items-center p-4 text-center text-[11px] leading-snug"
          style={{ background: "var(--color-neutral-200)", color: "var(--color-neutral-600)" }}
        >
          {placeholder ?? "Photograph"}
        </div>
      )}
    </div>
  );
}
