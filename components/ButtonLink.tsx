import Link from "next/link";
import React from "react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export default function ButtonLink({
  href,
  children,
  icon,
  variant = "outline",
  className = "",
  ...props
}: ButtonLinkProps) {
  const base =
    "inline-flex h-10 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main/40";

  const variants = {
    primary: "bg-main text-white hover:bg-main/90 active:bg-main/80",
    outline:
      "bg-transparent text-white/90 ring-1 ring-main/60 hover:bg-white/5",
  };

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </Link>
  );
}
