import Link from "next/link";
import React from "react";

function TagCard({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Link
        href={href}
        className={[
          "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition",
          "border-white/10 bg-secondary text-white/80",
          "hover:border-main/30 hover:bg-tertiary",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main/30",
        ].join(" ")}
      >
        {children}
      </Link>
    </div>
  );
}

export default TagCard;
