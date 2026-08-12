import React from "react";

interface BasicButtonProps {
  onClick: () => void;
  label?: string;
  icon?: React.ReactNode;
  pulse: boolean;
}

export const BasicButton = ({ onClick, label, icon, pulse}: BasicButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Switch colour mode"
      title="Switch colour mode"
      className={"inline-flex cursor-pointer items-center gap-1.75 rounded-md border px-2.75 py-1.75 text-[12.5px] leading-none transition-colors border-accent hover:text-accent-700 text-text font-body bg-transparent" + (pulse ? " pulse-button" : "")}
    >
      {icon && <span className="flex items-center justify-center">{icon}</span>}
      {label}
    </button>
  );
};
