import { type ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  href?: string;
};

export function Card({ children, className = "", href }: CardProps) {
  const classes = `rounded-xl border border-border bg-surface p-5 ${className}`;

  if (href) {
    return (
      <a href={href} className={`${classes} block transition hover:border-brand/50`}>
        {children}
      </a>
    );
  }

  return <div className={classes}>{children}</div>;
}
