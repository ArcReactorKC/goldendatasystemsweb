"use client";

import { useEffect, useRef, useState } from "react";
import { Stat } from "@/types";

function AnimatedNumber({ target, suffix }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setValue(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  useEffect(() => {
    if (!started) return;
    const duration = 1400;
    const start = performance.now();

    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, target]);

  const isDecimal = target % 1 !== 0;

  return (
    <span ref={ref}>
      {isDecimal ? value.toFixed(1) : Math.round(value)}
      {suffix}
    </span>
  );
}

export function StatCounter({ stat }: { stat: Stat }) {
  return (
    <div className="text-center">
      <p className="text-4xl font-bold text-gold-400 sm:text-5xl">
        {stat.numericTarget !== undefined ? (
          <AnimatedNumber target={stat.numericTarget} suffix={stat.suffix} />
        ) : (
          stat.value
        )}
      </p>
      <p className="mt-2 text-sm text-slate-300 sm:text-base">{stat.label}</p>
    </div>
  );
}
