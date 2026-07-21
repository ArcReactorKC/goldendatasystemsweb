import { AutomationCapability } from "@/types";

export const automationCapabilities: AutomationCapability[] = [
  {
    slug: "workflow-automation",
    name: "Workflow Automation",
    problem:
      "Your team spends hours a week moving data between systems by hand: copying fields from a form into a spreadsheet, then into an ERP, then into an email. It's slow, and every manual step is a chance for an error to slip in.",
    solution:
      "We map your actual process, then build automations that connect the systems you already use, triggering actions, syncing records, and routing approvals without anyone touching a keyboard.",
    outcome:
      "Hours of manual data entry return to your team every week, and the process runs the same way every single time.",
    icon: "automation",
  },
  {
    slug: "private-ai-assistants",
    name: "Private AI Assistants",
    problem:
      "Public AI tools are useful, but they don't know your business, and pasting internal data into a consumer chatbot is a real data-exposure risk your IT policy probably doesn't allow.",
    solution:
      "We build private, access-controlled AI assistants that run against your own documents, procedures, and data, deployed inside your environment or a dedicated private instance, never training a public model on your information.",
    outcome:
      "Your team gets instant, accurate answers grounded in your own operations, with full control over what data the assistant can see.",
    icon: "assistant",
  },
  {
    slug: "document-processing-systems",
    name: "Document Processing Systems",
    problem:
      "Invoices, work orders, inspection reports, and contracts arrive as PDFs, scans, and photos from the field, and someone still has to read them and key the data in by hand.",
    solution:
      "We build intelligent document pipelines that extract, classify, and route information automatically, validating it against your existing systems before it ever reaches a human reviewer.",
    outcome:
      "Document turnaround drops from days to minutes, and your team only touches the exceptions that actually need a human judgment call.",
    icon: "document",
  },
  {
    slug: "reporting-dashboards",
    name: "Reporting Dashboards",
    problem:
      "Leadership needs answers now, but the real numbers are scattered across five systems, and someone spends the first two days of every month building the same spreadsheet from scratch.",
    solution:
      "We build live dashboards that pull directly from your operational systems (field service software, accounting platforms, sensors, or CRMs) into a single view that updates itself.",
    outcome:
      "Decisions get made on current data instead of last month's spreadsheet, and the monthly reporting scramble disappears.",
    icon: "dashboard",
  },
  {
    slug: "knowledge-management-platforms",
    name: "Knowledge-Management Platforms",
    problem:
      "Institutional knowledge lives in the heads of your most tenured employees, buried in old email threads, or scattered across a dozen shared drives nobody can search effectively.",
    solution:
      "We build searchable, centralized knowledge platforms (often powered by the same private AI layer) so procedures, specs, and historical decisions are findable in seconds instead of tribal memory.",
    outcome:
      "New hires ramp faster, senior staff spend less time answering the same questions, and knowledge survives turnover.",
    icon: "knowledge",
  },
  {
    slug: "system-integrations",
    name: "System Integrations",
    problem:
      "Your accounting software, your field service platform, and your CRM don't talk to each other, so someone's job is quietly being the human API between all three.",
    solution:
      "We build and maintain reliable integrations between the platforms your business already depends on, using APIs, middleware, or custom connectors where no off-the-shelf option exists.",
    outcome:
      "Data flows automatically between systems, stays consistent everywhere, and your team stops reconciling three versions of the truth.",
    icon: "integration",
  },
  {
    slug: "custom-tools",
    name: "Custom Tools Built Around Your Operations",
    problem:
      "Off-the-shelf software gets you 80% of the way there, and the remaining 20% is exactly the part that makes your operation different, so your team builds workarounds in spreadsheets instead.",
    solution:
      "When the right tool doesn't exist, we build it: purpose-built internal applications, field-data collection tools, or scheduling systems designed around how your operation actually runs.",
    outcome:
      "You get software that fits your process instead of forcing your process to fit generic software.",
    icon: "tool",
  },
];
