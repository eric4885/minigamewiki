import { type ReactNode } from "react";

type TableProps = {
  headers: string[];
  children: ReactNode;
  caption?: string;
};

export function Table({ headers, children, caption }: TableProps) {
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-border">
      <table className="min-w-full text-left text-sm">
        {caption ? (
          <caption className="border-b border-border bg-surface px-4 py-3 text-left text-muted">
            {caption}
          </caption>
        ) : null}
        <thead className="bg-surface">
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className="whitespace-nowrap px-4 py-3 font-semibold text-fg"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">{children}</tbody>
      </table>
    </div>
  );
}

type TdProps = {
  children: ReactNode;
  mono?: boolean;
  className?: string;
};

export function Td({ children, mono = false, className = "" }: TdProps) {
  return (
    <td
      className={`whitespace-nowrap px-4 py-3 text-muted ${mono ? "font-mono tabular-nums" : ""} ${className}`}
    >
      {children}
    </td>
  );
}
