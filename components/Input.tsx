"use client";

import React, { InputHTMLAttributes } from "react";

type InputProps = {
  id?: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  label?: string;
  text?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  id,
  type = "text",
  placeholder = "",
  label,
  text,
  ...props
}: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={id} className="block text-sm text-white/80 font-bold">
          {label}
        </label>
      )}

      <input
        {...props}
        id={id}
        type={type}
        placeholder={placeholder}
        className="h-11 w-full rounded-md bg-[#0A1230] px-4 text-sm text-white outline-none ring-1 ring-white/10 placeholder:text-white/40 focus:ring-2 focus:ring-[#0B84D9]/70"
      />
      {text && <p className="text-gray-400 text-xs my-1">{text}</p>}
    </div>
  );
}
