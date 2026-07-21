import { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "managed-it-support",
    name: "Managed IT Support",
    summary: "A responsive, senior-level help desk that actually knows your environment.",
    description:
      "Your team gets a direct line to technicians who already understand your network, your vendors, and your history, not a ticket queue that starts from zero every time. We handle the day-to-day so small issues stay small.",
    included: [
      "Unlimited remote and on-site support for covered users and devices",
      "Proactive monitoring and alerting, not just reactive break/fix",
      "Documented environment with a real runbook, not tribal knowledge",
      "Defined response-time SLAs by priority level",
      "Monthly reporting on tickets, trends, and recurring issues",
    ],
    icon: "server",
  },
  {
    slug: "microsoft-365-google-workspace-administration",
    name: "Microsoft 365 & Google Workspace Administration",
    summary: "Full lifecycle management of the productivity suite your team lives in.",
    description:
      "From licensing and mailbox configuration to security policies and shared drive structure, we own the administration of your collaboration platform so it stays fast, secure, and cost-efficient as you grow.",
    included: [
      "Tenant configuration, licensing optimization, and cost review",
      "Mailbox, calendar, and shared mailbox administration",
      "Conditional access, MFA, and data-loss-prevention policy setup",
      "SharePoint / Drive structure and permissions governance",
      "Teams / Google Chat and collaboration tool rollout support",
    ],
    icon: "workspace",
  },
  {
    slug: "device-and-user-management",
    name: "Device & User Management",
    summary: "Every laptop, phone, and login accounted for, from onboarding to offboarding.",
    description:
      "We manage the full device and identity lifecycle: provisioning new hires in hours, enforcing consistent security baselines across every endpoint, and making sure access disappears the moment someone leaves.",
    included: [
      "Automated device provisioning and configuration (MDM/RMM)",
      "Standardized security baselines across Windows, macOS, iOS, and Android",
      "Identity and access management, including role-based permissions",
      "Same-day onboarding and offboarding workflows",
      "Asset inventory and lifecycle / refresh planning",
    ],
    icon: "network",
  },
  {
    slug: "cloud-infrastructure",
    name: "Cloud Infrastructure",
    summary: "Right-sized cloud environments built for reliability, not just uptime badges.",
    description:
      "Whether you're running workloads in Azure, AWS, or a hybrid environment, we design, migrate, and manage infrastructure that matches your actual usage patterns, with cost control and performance both on the table.",
    included: [
      "Cloud architecture design and migration planning",
      "Infrastructure-as-code deployment for repeatable environments",
      "Cost monitoring and right-sizing reviews",
      "Performance monitoring and capacity planning",
      "Hybrid and multi-cloud connectivity management",
    ],
    icon: "cloud",
  },
  {
    slug: "data-backup-and-disaster-recovery",
    name: "Data Backup & Disaster Recovery",
    summary: "Recovery plans that are tested, not just documented.",
    description:
      "Backups are only useful if they actually restore. We design layered backup strategies and disaster recovery plans for your specific risk profile, then test them on a schedule, so a bad day never becomes a bad quarter.",
    included: [
      "Automated, encrypted backups across on-site and cloud targets",
      "Defined recovery time and recovery point objectives (RTO/RPO)",
      "Scheduled recovery testing with documented results",
      "Ransomware-aware immutable backup configurations",
      "Business continuity planning for critical systems",
    ],
    icon: "backup",
  },
  {
    slug: "cybersecurity-monitoring",
    name: "Cybersecurity Monitoring",
    summary: "Continuous watch over your environment, not a once-a-year audit.",
    description:
      "Threats don't run on a quarterly schedule, so neither do we. Our monitoring stack watches endpoints, networks, and cloud accounts around the clock, with a clear escalation path when something needs a human.",
    included: [
      "24/7 endpoint detection and response (EDR) monitoring",
      "Network and cloud account anomaly detection",
      "Patch management and vulnerability scanning",
      "Phishing simulation and security awareness training",
      "Incident response planning and tabletop exercises",
    ],
    icon: "shield",
  },
  {
    slug: "network-management",
    name: "Network Management",
    summary: "Wired, wireless, and remote connectivity that stays out of your way.",
    description:
      "From a single office to a dozen distributed sites, we design and maintain networks that are fast, segmented for security, and monitored so you find out about problems before your team does.",
    included: [
      "Network design, segmentation, and firewall management",
      "Wireless site surveys and coverage optimization",
      "Site-to-site and remote-access VPN configuration",
      "Bandwidth and performance monitoring across locations",
      "ISP and circuit coordination for multi-site operations",
    ],
    icon: "network",
  },
  {
    slug: "vendor-coordination",
    name: "Vendor Coordination",
    summary: "One point of contact for every technology vendor you deal with.",
    description:
      "Line-of-business software support, ISP outages, hardware warranties: we sit between you and your vendors so your team stops losing hours to hold music and finger-pointing.",
    included: [
      "Single point of contact for ISPs, software vendors, and hardware OEMs",
      "Warranty and support-contract tracking",
      "Escalation management on your behalf",
      "Vendor contract and renewal review",
      "New vendor and software evaluation support",
    ],
    icon: "vendor",
  },
  {
    slug: "strategic-technology-consulting",
    name: "Strategic Technology Consulting",
    summary: "A technology roadmap tied to your business goals, not just your ticket history.",
    description:
      "We act as a fractional technology leadership function, reviewing your environment against where the business is headed, and building a realistic, budgeted plan to close the gaps.",
    included: [
      "Quarterly technology business reviews (TBRs)",
      "Multi-year IT roadmap and capital planning",
      "Risk assessments and compliance gap analysis",
      "M&A / growth technology due diligence support",
      "Budget forecasting aligned to business priorities",
    ],
    icon: "strategy",
  },
];
