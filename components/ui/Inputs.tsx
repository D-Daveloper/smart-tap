import React from "react";

export const BasicInput = ({
  id,
  label,
  tabular,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  tabular?: boolean;
}) => {
  return (
    <div className="field min-w-full">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className={`input min-h-11 ${tabular ? "tabular-nums" : ""}`}
        {...props}
      />
    </div>
  );
};

export const BasicTextArea = ({
  id,
  label,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  id: string;
  label: string;
}) => {
  return (
    <div className="field min-w-full">
      <label htmlFor={id}>{label}</label>
      <textarea id={id} className="input min-h-24" {...props} />
    </div>
  );
};