import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | Zeylun",
  description:
    "Terms for Zeylun hospitality operations, guest communication systems, implementation work, and support."
};

const sections = [
  {
    title: "Services Overview",
    body: [
      "Zeylun provides hospitality-focused digital systems, guest communication workflows, operational coordination tools, campaign support, and implementation services for hotels, villas, lodges, and hospitality brands.",
      "Services may include website experiences, WhatsApp inquiry flows, booking pathways, staff coordination workflows, operational dashboards, campaign assets, and ongoing advisory or support."
    ]
  },
  {
    title: "Project Scope",
    body: [
      "Each project is guided by an agreed scope, proposal, statement of work, or written confirmation. That scope defines the deliverables, timelines, responsibilities, and implementation priorities.",
      "Additional requests, integrations, campaigns, or operational workflows outside the agreed scope may require a separate estimate or revised timeline."
    ]
  },
  {
    title: "Client Responsibilities",
    body: [
      "Clients are responsible for providing accurate property information, brand materials, access to required platforms, timely feedback, and approvals needed to move implementation forward.",
      "Where guest communication or staff workflows are involved, clients are responsible for ensuring their internal teams use the systems appropriately and comply with applicable hospitality, privacy, and communication requirements."
    ]
  },
  {
    title: "Payments & Invoicing",
    body: [
      "Fees, payment schedules, and billing terms are confirmed before work begins. Project work may require an upfront deposit, milestone payments, or monthly engagement depending on the service.",
      "Delayed payments may pause delivery, support, or access to non-essential services until the account is brought current."
    ]
  },
  {
    title: "Intellectual Property",
    body: [
      "Client-provided brand assets, property imagery, content, and existing materials remain the property of the client or their licensors.",
      "Upon full payment, final approved deliverables prepared specifically for the client may be used by the client for their hospitality operations. Zeylun may retain rights to underlying methods, reusable workflow patterns, frameworks, non-client-specific templates, and internal know-how."
    ]
  },
  {
    title: "Support & Maintenance",
    body: [
      "Support, maintenance, campaign management, analytics review, and workflow refinement are provided only when included in the agreed scope or active monthly engagement.",
      "Support does not include unlimited redesign, unmanaged third-party platform issues, or changes outside the agreed operational workflow unless separately approved."
    ]
  },
  {
    title: "Limitation of Liability",
    body: [
      "Zeylun aims to deliver reliable, thoughtful systems, but hospitality operations depend on many factors outside our control, including third-party platforms, staff adoption, internet connectivity, booking tools, and client-side processes.",
      "To the fullest extent permitted by law, Zeylun is not liable for indirect, incidental, or consequential losses arising from use of the services."
    ]
  },
  {
    title: "Service Changes",
    body: [
      "Zeylun may refine its services, workflows, tools, and implementation approach over time to improve quality, reliability, and operational fit.",
      "Material changes that affect active client work will be communicated with reasonable care and handled in alignment with the agreed scope."
    ]
  },
  {
    title: "Contact Information",
    body: [
      "For questions about these terms, project scope, support responsibilities, or service expectations, contact Zeylun at hello@zeylun.com.",
      "Clear communication helps keep implementation calm, aligned, and useful for the hospitality teams we support."
    ]
  }
];

export default function TermsOfServicePage() {
  return (
    <LegalPage
      eyebrow="Terms of Service"
      title="Clear terms for calm hospitality implementation."
      intro="These terms outline how Zeylun works with hospitality brands to plan, build, refine, and support guest communication and operational systems."
      sections={sections}
    />
  );
}
