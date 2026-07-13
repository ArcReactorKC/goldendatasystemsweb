export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  slug: string;
  name: string;
  summary: string;
  description: string;
  included: string[];
  icon: IconName;
}

export interface AutomationCapability {
  slug: string;
  name: string;
  problem: string;
  solution: string;
  outcome: string;
  icon: IconName;
}

export interface Industry {
  slug: string;
  name: string;
  painPoint: string;
  description: string;
  bullets: string[];
  icon: IconName;
}

export interface EngagementModel {
  name: string;
  tagline: string;
  description: string;
  bestFor: string;
  icon: IconName;
}

export interface OnboardingStep {
  step: number;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  numericTarget?: number;
  suffix?: string;
  label: string;
}

export type IconName =
  | "server"
  | "cloud"
  | "shield"
  | "network"
  | "backup"
  | "vendor"
  | "strategy"
  | "workspace"
  | "automation"
  | "assistant"
  | "document"
  | "dashboard"
  | "knowledge"
  | "integration"
  | "tool"
  | "briefcase"
  | "hardhat"
  | "factory"
  | "bolt"
  | "leaf"
  | "truck"
  | "handshake"
  | "clock"
  | "check"
  | "chip"
  | "lock";
