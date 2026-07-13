import { Industry } from "@/types";

export const industries: Industry[] = [
  {
    slug: "professional-services",
    name: "Professional Services",
    painPoint: "Client trust depends on data security and uptime you can't explain away.",
    description:
      "Law firms, accounting practices, and consultancies run on confidentiality and availability. A single outage or breach doesn't just cost time — it costs client trust. We build infrastructure and security postures that hold up to client due diligence and compliance requirements.",
    bullets: [
      "Document security and confidentiality controls",
      "Compliance support (e.g., data handling, retention policies)",
      "Reliable remote access for hybrid and multi-office teams",
      "Fast support response during business-critical hours",
    ],
    icon: "briefcase",
  },
  {
    slug: "contractors",
    name: "Contractors",
    painPoint: "Your office runs the business, but your job sites run the work — and they rarely have the same connectivity.",
    description:
      "General and specialty contractors need systems that work as well from a job trailer as from the front office. We connect field crews, project management software, and back-office accounting so paperwork and payroll keep moving no matter where the crew is standing.",
    bullets: [
      "Mobile-friendly access to project and scheduling systems",
      "Reliable connectivity solutions for job sites and trailers",
      "Integration between field data capture and back-office systems",
      "Device management for tablets and rugged field hardware",
    ],
    icon: "hardhat",
  },
  {
    slug: "manufacturers",
    name: "Manufacturers",
    painPoint: "Downtime on the plant floor is measured in dollars per minute, and IT and OT rarely speak the same language.",
    description:
      "We bring real operational technology (OT) experience to the table — not just corporate IT applied to a factory. From production floor networks to the ERP that ties it all together, we understand where uptime is non-negotiable.",
    bullets: [
      "OT/IT network segmentation and security",
      "Integration between production systems and business software (ERP/MES)",
      "Legacy equipment connectivity and support",
      "Planned-downtime coordination that respects production schedules",
    ],
    icon: "factory",
  },
  {
    slug: "energy",
    name: "Energy Companies",
    painPoint: "Remote assets, strict regulatory requirements, and critical infrastructure security expectations, all at once.",
    description:
      "Energy operations — from field production to distribution — combine remote monitoring, industrial control systems, and increasingly strict security and compliance expectations. We support the infrastructure connecting field assets to central operations securely.",
    bullets: [
      "Secure remote monitoring and SCADA-adjacent network support",
      "Critical infrastructure security best practices",
      "Redundant connectivity for remote and unmanned sites",
      "Regulatory and audit-readiness documentation support",
    ],
    icon: "bolt",
  },
  {
    slug: "agriculture",
    name: "Agricultural Operations",
    painPoint: "Connectivity gaps between the office, the field, and the equipment cost time during the seasons that matter most.",
    description:
      "Modern agricultural operations run on data — from yield monitors to inventory systems to compliance records — often across locations with limited connectivity. We build resilient, practical technology that works where the operation actually happens.",
    bullets: [
      "Rural and remote-site connectivity solutions",
      "Equipment and sensor data integration",
      "Seasonal scaling for staff device and access needs",
      "Backup systems built for infrequent-but-critical access windows",
    ],
    icon: "leaf",
  },
  {
    slug: "field-service",
    name: "Field-Service & Distributed Operations",
    painPoint: "Your team, equipment, and customers are never all in one place, and your technology needs to keep up.",
    description:
      "Whether you run a fleet of technicians, multiple regional offices, or both, distributed operations need systems that are consistent everywhere and dependent on no single location. We design infrastructure and support models built around mobility.",
    bullets: [
      "Centralized management across multiple locations and mobile crews",
      "Mobile device and app management for field technicians",
      "Cloud-first infrastructure with no single point of failure",
      "Consistent security policy enforcement across every site",
    ],
    icon: "truck",
  },
];
