import { type InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export function Input({ label, id, className = "", ...props }: InputProps) {
  const inputId = id ?? props.name;
  return (
    <label className="block text-sm">
      {label ? <span className="mb-1.5 block text-muted">{label}</span> : null}
      <input
        id={inputId}
        className={`w-full rounded-md border border-border bg-bg px-3 py-2 text-fg outline-none ring-brand focus:ring-2 ${className}`}
        {...props}
      />
    </label>
  );
}
