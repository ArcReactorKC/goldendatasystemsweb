import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl border border-navy-800/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy-900/5",
        className,
      )}
      {...props}
    />
  );
}

export function DarkCard({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/10 bg-navy-850/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/30",
        className,
      )}
      {...props}
    />
  );
}
