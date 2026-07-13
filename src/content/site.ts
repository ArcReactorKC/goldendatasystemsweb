import { NavLink, Stat } from "@/types";

export const site = {
  name: "Golden Data Systems",
  shortName: "GDS",
  tagline: "Managed technology and intelligent infrastructure for growing businesses",
  description:
    "Golden Data Systems is a managed technology partner combining traditional IT support, industrial and OT experience, and practical AI automation for small and midsized businesses.",
  url: "https://www.goldendatasystems.com",
  phone: "[PHONE]",
  email: "[EMAIL]",
  address: "[ADDRESS]",
  calendlyUrl: "[CALENDLY_URL]",
  social: {
    linkedin: "[LINKEDIN_URL]",
  },
};

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "AI & Automation", href: "/ai-automation" },
  { label: "Industries", href: "/industries" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "About", href: "/about" },
  { label: "Ask Our AI", href: "/ask-ai" },
  { label: "Contact", href: "/contact" },
];

export const footerServiceLinks: NavLink[] = [
  { label: "Managed IT Support", href: "/services#managed-it-support" },
  { label: "Cybersecurity Monitoring", href: "/services#cybersecurity-monitoring" },
  { label: "Cloud Infrastructure", href: "/services#cloud-infrastructure" },
  { label: "AI & Automation", href: "/ai-automation" },
  { label: "Strategic Consulting", href: "/services#strategic-technology-consulting" },
];

export const trustStats: Stat[] = [
  { value: "25+", numericTarget: 25, suffix: "+", label: "Years combined critical-infrastructure experience" },
  { value: "99.9%", numericTarget: 99.9, suffix: "%", label: "Average managed-network uptime" },
  { value: "<15 min", label: "Average priority ticket response time" },
  { value: "6", numericTarget: 6, label: "Industries served across distributed operations" },
];

export const credibilityNote =
  "[PLACEHOLDER] Client logos, partner certifications, and case study stats go here as they're finalized.";
