import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Zeylun",
  description:
    "How Zeylun handles information, communication data, cookies, analytics, and guest operations privacy."
};

const sections = [
  {
    title: "Information We Collect",
    body: [
      "Zeylun collects the information needed to plan, deliver, and support hospitality communication and operations systems. This may include names, business contact details, property information, project notes, inquiry details, and messages shared with us during consultations or implementation.",
      "When a property uses Zeylun-supported workflows, we may process operational information related to guest inquiries, staff assignments, request categories, and communication status. We aim to collect only what is useful for clear service delivery."
    ]
  },
  {
    title: "How Information Is Used",
    body: [
      "Information is used to respond to inquiries, prepare recommendations, deliver implementation work, configure hospitality workflows, improve communication systems, and provide ongoing support where requested.",
      "We may also use aggregated, non-identifying patterns to understand which workflows, pages, or service pathways are most useful to hospitality teams."
    ]
  },
  {
    title: "Communication Data",
    body: [
      "Hospitality communication often includes guest requests, service preferences, arrival details, booking questions, and internal staff coordination. Zeylun treats this information as operationally sensitive and uses it only for the purpose of delivering or supporting the agreed workflow.",
      "We do not sell guest communication data. Access is limited to the people and systems needed to support the service."
    ]
  },
  {
    title: "Cookies & Analytics",
    body: [
      "The Zeylun website may use essential cookies and light session preferences to remember consent choices, keep the site functioning smoothly, and understand general usage patterns.",
      "Analytics, when used, are intended to improve clarity, performance, and relevance. They are not used to create intrusive advertising profiles."
    ]
  },
  {
    title: "Third-Party Services",
    body: [
      "Zeylun may work with third-party services such as website hosting providers, analytics tools, payment processors, communication platforms, booking tools, and advertising platforms when they are part of a client-approved workflow.",
      "These services may process information according to their own privacy practices. We choose tools that are appropriate for professional hospitality operations and aim to keep integrations focused and minimal."
    ]
  },
  {
    title: "Data Protection",
    body: [
      "We use reasonable administrative, technical, and organizational safeguards to protect information from unauthorized access, misuse, loss, or disclosure.",
      "No digital system can be guaranteed perfectly secure, but Zeylun designs workflows with restraint, access awareness, and operational clarity in mind."
    ]
  },
  {
    title: "Contact Information",
    body: [
      "For privacy questions, data requests, or concerns about how information is handled, contact Zeylun at hello@zeylun.com.",
      "If a request relates to a hospitality property using Zeylun-supported systems, we may coordinate with that property to verify the request and respond appropriately."
    ]
  }
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="Privacy, handled with the same calm as the service."
      intro="This policy explains how Zeylun approaches information, communication data, and operational privacy across its website, hospitality workflows, and client support."
      sections={sections}
    />
  );
}
