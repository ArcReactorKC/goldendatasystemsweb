import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  tone?: "default" | "dark" | "darker";
}

export function Section({ className, tone = "default", ...props }: SectionProps) {
  const toneClass =
    tone === "dark"
      ? "bg-navy-900 text-white"
      : tone === "darker"
        ? "bg-navy-950 text-white"
        : "bg-white text-navy-900";

  return <section className={cn("py-16 sm:py-20 lg:py-28", toneClass, className)} {...props} />;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-gold-500">{eyebrow}</p>
      )}
      <h2
        className={cn(
          "mt-3 text-3xl font-bold tracking-tight sm:text-4xl",
          light ? "text-white" : "text-navy-900",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-lg leading-relaxed", light ? "text-slate-300" : "text-slate-600")}>
          {description}
        </p>
      )}
    </div>
  );
}
