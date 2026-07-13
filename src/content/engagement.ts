import { EngagementModel, OnboardingStep } from "@/types";

export const engagementModels: EngagementModel[] = [
  {
    name: "Recurring Managed Plans",
    tagline: "Predictable coverage, one flat monthly rate.",
    description:
      "Ongoing management of your IT environment — help desk, monitoring, security, and vendor coordination — billed as a predictable monthly cost per user or device instead of an hourly surprise.",
    bestFor: "Businesses that want day-to-day technology handled end-to-end by a single accountable partner.",
    icon: "handshake",
  },
  {
    name: "Fixed-Price Implementation Projects",
    tagline: "A defined scope, a defined price, a defined finish line.",
    description:
      "Migrations, network overhauls, security hardening initiatives, or new-site buildouts scoped up front with clear deliverables and a fixed price — no open-ended time-and-materials billing.",
    bestFor: "One-time initiatives with a clear start and finish, like a cloud migration or office buildout.",
    icon: "briefcase",
  },
  {
    name: "Consulting Engagements",
    tagline: "Senior technology guidance, without a full-time hire.",
    description:
      "Fractional CTO / technology-advisor support for strategic planning, vendor selection, architecture review, or compliance readiness — brought in for as long as the engagement requires.",
    bestFor: "Leadership teams that need experienced technology judgment on a specific decision or initiative.",
    icon: "strategy",
  },
  {
    name: "Managed Cloud & Software Solutions",
    tagline: "The AI, automation, and custom tools we build — kept running.",
    description:
      "Ongoing hosting, monitoring, and iteration for the automations, dashboards, and custom applications we build for you, so the tools that save you time keep working as your business changes.",
    bestFor: "Businesses running custom automations or AI tools who want them maintained and improved over time.",
    icon: "automation",
  },
];

export const onboardingSteps: OnboardingStep[] = [
  {
    step: 1,
    title: "Discovery Call",
    description:
      "We learn your business, your pain points, and what \"good\" looks like — no technical jargon required on your end.",
  },
  {
    step: 2,
    title: "Environment Assessment",
    description:
      "Our team audits your current infrastructure, security posture, and vendor landscape to establish a clear baseline.",
  },
  {
    step: 3,
    title: "Proposal & Roadmap",
    description:
      "You receive a straightforward plan and pricing — what we'll fix first, what can wait, and what it costs.",
  },
  {
    step: 4,
    title: "Onboarding & Migration",
    description:
      "We deploy monitoring, document your environment, and migrate any agreed-upon systems with minimal disruption.",
  },
  {
    step: 5,
    title: "Ongoing Partnership",
    description:
      "Regular technology business reviews keep the relationship proactive — not just a help desk you call when something breaks.",
  },
];
