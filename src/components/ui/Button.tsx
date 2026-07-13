import Link from "next/link";
import { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
}

export function Button({ href = "#", variant = "primary", size = "md", className, children, ...props }: ButtonProps) {
  const base =
    "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400";

  const variants = {
    primary: "bg-gold-500 text-navy-950 hover:bg-gold-400",
    secondary: "border border-white/25 text-white hover:bg-white/10",
    ghost: "text-navy-900 hover:text-gold-600",
  };

  const sizes = {
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </Link>
  );
}
