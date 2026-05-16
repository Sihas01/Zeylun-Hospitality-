import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export function PaperPlaneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="paper-plane-icon h-[1.15rem] shrink-0"
      fill="currentColor"
    >
      <path d="M21.75 2.9 3.1 10.55c-.74.31-.7 1.37.06 1.62l7.08 2.36 2.36 7.08c.25.76 1.31.8 1.62.06L21.87 3.02c.22-.55-.57-1.09-.12-.12ZM10.9 13.2l-4.82-1.6 11.28-4.63-6.46 6.23Zm1.9 1.9 6.23-6.46-4.63 11.28-1.6-4.82Z" />
    </svg>
  );
}

export function Button({
  children,
  href,
  variant = "primary",
  className = ""
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "kite-button bg-primary-container text-on-primary shadow-tactile hover:-translate-y-0.5 hover:shadow-floating"
      : "border border-secondary text-secondary hover:-translate-y-0.5 hover:bg-secondary/5";

  return (
    <Link
      href={href}
      className={`inline-flex h-12 items-center justify-center rounded-lg px-7 text-sm font-semibold uppercase tracking-[0.08em] transition duration-300 ${styles} ${className}`}
    >
      <span>{children}</span>
      {variant === "primary" ? <PaperPlaneIcon /> : null}
    </Link>
  );
}
