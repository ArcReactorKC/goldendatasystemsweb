import { SVGProps } from "react";
import { IconName } from "@/types";

const paths: Record<IconName, string> = {
  server:
    "M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v3A1.5 1.5 0 0 1 18.5 10h-13A1.5 1.5 0 0 1 4 8.5v-3ZM4 15.5A1.5 1.5 0 0 1 5.5 14h13a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-3ZM7 7h.01M7 17h.01",
  cloud:
    "M7 18a4.5 4.5 0 0 1-.4-8.98A5.5 5.5 0 0 1 17 8.05 4 4 0 0 1 17.5 16h-1.5M12 12v7m0 0-2.5-2.5M12 19l2.5-2.5",
  shield:
    "M12 3.5 5 6v5.5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-2.5ZM9.5 12l1.8 1.8L15 10",
  network:
    "M12 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM19 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 5v6m0 0-7 8m7-8 7 8",
  backup:
    "M4 7c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3ZM4 7v10c0 1.7 3.6 3 8 3s8-1.3 8-3V7M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
  vendor:
    "M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 11h.01M15 11h.01M9 15h.01M15 15h.01",
  strategy:
    "M9 11H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4m0-10V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9m0-10h6m-6 4h6",
  workspace:
    "M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 15.5v-9ZM8 21h8M12 17v4",
  automation:
    "M12 4v2m0 12v2M4 12h2m12 0h2M6.3 6.3l1.4 1.4m8.6 8.6 1.4 1.4M6.3 17.7l1.4-1.4m8.6-8.6 1.4-1.4M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z",
  assistant:
    "M12 3a7 7 0 0 0-7 7c0 2.4 1.1 4.4 2.9 5.7L7 21l3.8-1.9c.4 0 .8.1 1.2.1a7 7 0 0 0 0-14ZM9 10h.01M12 10h.01M15 10h.01",
  document:
    "M8 3h5l5 5v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2ZM13 3v5h5M9 13h6M9 17h6M9 9h1",
  dashboard:
    "M4 19h16M6 19V9m5 10V4m5 15v-7",
  knowledge:
    "M4 19.5V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v13.5M4 19.5h10M12 6h6a2 2 0 0 1 2 2v11.5h-8M7 7h3M7 11h3",
  integration:
    "M9 3H5a2 2 0 0 0-2 2v4m6 10H5a2 2 0 0 1-2-2v-4m16-8v4a2 2 0 0 1-2 2h-4m6 2v4a2 2 0 0 1-2 2h-4M9 9h6v6H9V9Z",
  tool:
    "M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2 2.6-2.6Z",
  briefcase:
    "M3 8.5A1.5 1.5 0 0 1 4.5 7h15A1.5 1.5 0 0 1 21 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-9ZM8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7M3 12h18",
  hardhat:
    "M4 15a8 8 0 0 1 16 0v1H4v-1ZM2 16h20M12 7V4m-3 3 1-3m5 3-1-3",
  factory:
    "M3 21V11l5 3v-3l5 3V8l6 4v9H3ZM7 17h.01M11 17h.01M15 17h.01",
  bolt: "M13 3 4 14h6l-1 7 9-11h-6l1-7Z",
  leaf: "M5 21c9 0 14-5 14-14V5h-2C8 5 5 10 5 19v2ZM5 21c0-4 2-7 6-10",
  truck:
    "M3 7h11v9H3V7ZM14 11h4l3 3v2h-7v-5ZM7 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM18 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
  handshake:
    "m2 12 5-4 4 2 2-2 4 1 5 4M6 14l3 3a2 2 0 0 0 3 0l.5-.5M9.5 12.5 13 16a2 2 0 0 0 3 0",
  clock: "M12 7v5l3.5 2M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z",
  check: "m5 13 4 4L19 7",
  chip: "M9 3v3m6-3v3M9 18v3m6-3v3M3 9h3M3 15h3m15-6h-3m3 6h-3M7 7h10v10H7V7Z",
  lock: "M6 11V8a6 6 0 1 1 12 0v3m-13 0h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z",
};

export function Icon({
  name,
  className,
  ...props
}: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d={paths[name]} />
    </svg>
  );
}
