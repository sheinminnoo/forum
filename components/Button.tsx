import React from "react";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "primary" | "outline";
};

export default function Button({
  type = "button",
  children,
  icon,
  variant = "outline",
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const base =
    "flex h-11 w-full items-center justify-center gap-2 rounded-md text-sm font-medium transition";

  const variants = {
    primary: "bg-main text-white hover:bg-main/90 active:bg-main/80",
    outline:
      "bg-transparent text-white/90 ring-1 ring-main/60 hover:bg-white/5",
  };

  return (
    <button {...props} type={type} className={`${base} ${variants[variant]}`}>
      {icon}
      {children}
    </button>
  );
}
