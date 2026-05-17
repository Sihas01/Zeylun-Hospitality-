import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { images, whatsAppHref } from "@/lib/content";

export const metadata: Metadata = {
  title: "Guest Acquisition System",
  description:
    "A connected guest acquisition system for hospitality websites, launch campaigns, direct inquiries, WhatsApp communication, and lightweight inquiry management.",
  alternates: {
    canonical: "/packages/guest-acquisition-system"
  },
  openGraph: {
    title: "Guest Acquisition System — Zeylun Hospitality Systems",
    description:
      "A connected guest acquisition system for hospitality websites, launch campaigns, direct inquiries, WhatsApp communication, and lightweight inquiry management.",
    url: "/packages/guest-acquisition-system",
    images: [
      {
        url: "/images/zeylun-guest-acquisition-detail-hero.png",
        width: 1600,
        height: 900,
        alt: "Guest Acquisition System for premium hospitality brands"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Guest Acquisition System — Zeylun Hospitality Systems",
    description:
      "A connected guest acquisition system for hospitality websites, launch campaigns, direct inquiries, WhatsApp communication, and lightweight inquiry management.",
    images: ["/images/zeylun-guest-acquisition-detail-hero.png"]
  }
};

const journeySteps = [
  {
    title: "Discovery",
    label: "Instagram & Ads"
  },
  {
    title: "Engagement",
    label: "Luxury Website"
  },
  {
    title: "Inquiry",
    label: "Digital Concierge"
  },
  {
    title: "Conversation",
    label: "WhatsApp Sync"
  },
  {
    title: "Booking",
    label: "Direct Reservation"
  }
];

const problemItems = [
  {
    title: "Fragmented Inquiries",
    body: "Leads scattered across emails, DMs, and contact forms without a central pulse.",
    icon: "fragmented"
  },
  {
    title: "Response Latency",
    body: "The golden hour for guest conversion is lost to manual handling and operational silos.",
    icon: "latency"
  }
] as const;

const includedFeatures = [
  {
    title: "Mobile-First Booking",
    body: "A reservation experience designed for the thumb, making mobile bookings effortless."
  },
  {
    title: "Automated Workflows",
    body: "Standardize your response process with smart inquiry routing and follow-up sequences."
  },
  {
    title: "Conversion Landings",
    body: "Specialized pages for seasonal campaigns and social media promotions."
  }
];

const campaignItems = [
  "Initial awareness campaign creatives",
  "Hospitality-focused social media assets",
  "Campaign launch guidance",
  "Seasonal promotional visuals",
  "Brand-consistent campaign design"
];

const benefits = [
  {
    value: "42%",
    label: "Inquiry Flow",
    body: "Increase in direct inquiries by removing friction from the mobile discovery journey."
  },
  {
    value: "3.5x",
    label: "Response Time",
    body: "Faster guest communication through direct WhatsApp and CRM routing integrations."
  },
  {
    value: "100%",
    label: "Guest Control",
    body: "Own every guest interaction from the first click to the final stay, bypassing OTAs."
  }
];

function DetailEyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="eyebrow mb-6 bg-surface-container-lowest/80">
      <span className="h-2 w-2 rounded-full bg-secondary" />
      {children}
    </span>
  );
}

function ProblemIcon({ type }: { type: "fragmented" | "latency" }) {
  if (type === "fragmented") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 text-secondary">
        <path
          d="M7 5h11M7 9h8M7 13h11M7 17h8M5 7 2.75 9.25 5 11.5M3 9.25h4.5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 text-secondary">
      <path
        d="M8.5 4.5a7.5 7.5 0 0 1 9.9 9.9M15.5 19.5a7.5 7.5 0 0 1-9.9-9.9M12 8v4l2.5 2.5M4 4l16 16M18 3l2 2M6 3 4 5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export default function GuestAcquisitionSystemPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative flex min-h-[82vh] items-center overflow-hidden px-5 py-20 md:px-10 md:py-28">
          <Image
            src={images.acquisitionDetailHero}
            alt="Guest acquisition system across website, phone, and inquiry cards"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/58 to-background/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/20" />
          <div className="container-shell relative z-10">
            <Reveal y={18} amount={0.1} className="max-w-3xl md:translate-x-6 md:translate-y-6 lg:translate-x-10">
              <DetailEyebrow>Guest Acquisition System</DetailEyebrow>
              <h1 className="max-w-3xl font-serif text-[40px] font-normal leading-tight text-primary md:text-[56px] md:leading-[1.12]">
                Turn discovery into direct guest conversations.
              </h1>
              <p className="mt-6 max-w-2xl text-[18px] font-normal leading-[1.6] text-on-surface-variant">
                The Guest Acquisition System helps hospitality brands create modern
                inquiry experiences through connected campaigns, websites, and guest
                communication workflows.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button href={whatsAppHref} className="h-12 px-8">
                  Discuss Your Workflow
                </Button>
                <Link
                  href="#methodology"
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-secondary bg-transparent px-8 text-sm font-semibold uppercase tracking-[0.08em] text-secondary transition-colors hover:bg-secondary/5"
                >
                  View Methodology
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="methodology" className="bg-surface py-20 md:py-28">
          <div className="container-shell">
            <Reveal className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-[32px] font-normal leading-tight text-primary md:text-[40px]">
                The Connected Journey
              </h2>
              <div className="mx-auto mt-5 h-px w-20 bg-secondary" />
            </Reveal>
            <div className="relative mt-14 grid gap-6 md:grid-cols-5">
              <div className="absolute left-0 right-0 top-12 hidden h-px bg-surface-container-highest md:block" />
              {journeySteps.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.08} y={18} className="relative">
                  <article className="flex flex-col items-center text-center">
                    <div
                      className={`flex h-24 w-24 items-center justify-center rounded-full border text-sm font-semibold ${
                        index === journeySteps.length - 1
                          ? "border-primary bg-primary-container text-on-primary"
                          : "border-surface-container-highest bg-surface-container-lowest text-secondary shadow-tactile"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-6 font-serif text-[24px] font-normal leading-[1.35] text-primary">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-on-surface-variant">
                      {step.label}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-background py-20 md:py-28">
          <div className="container-shell grid gap-14 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <h2 className="font-serif text-[40px] font-normal leading-tight text-primary md:text-[56px]">
                Most hospitality websites fail long before booking.
              </h2>
              <p className="mt-7 text-[18px] font-normal leading-[1.6] text-on-surface-variant">
                Disjointed communication and slow response times act as invisible
                friction. When a potential guest&apos;s inquiry lands in a generic
                inbox, the cinematic experience ends, and the relationship stalls.
              </p>
              <div className="mt-10 space-y-6">
                {problemItems.map((item) => (
                  <article key={item.title} className="flex gap-5 border-l border-secondary/45 pl-6">
                    <ProblemIcon type={item.icon} />
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-on-surface-variant">{item.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.12} className="relative min-h-[420px]">
              <div className="absolute right-0 top-0 h-72 w-64 rotate-3 border border-surface-container-highest bg-surface-container p-6 shadow-tactile">
                <div className="h-3 w-2/3 bg-surface-container-highest" />
                <div className="mt-5 h-28 bg-surface-container-high" />
                <div className="mt-5 h-3 w-full bg-surface-container-highest" />
              </div>
              <div className="absolute bottom-8 left-6 z-10 h-64 w-72 -rotate-3 border border-surface-container-highest bg-surface-container-lowest p-6 shadow-ambient">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-secondary-container" />
                  <div className="h-3 w-28 bg-surface-container-highest" />
                </div>
                <div className="mt-8 space-y-4">
                  <div className="h-px w-full bg-surface-container-highest" />
                  <div className="h-px w-4/5 bg-surface-container-highest" />
                  <div className="h-px w-full bg-surface-container-highest" />
                </div>
              </div>
              <div className="absolute left-0 top-24 h-44 w-48 rotate-6 border border-surface-container-highest bg-surface-container-high p-6 opacity-80 shadow-tactile" />
            </Reveal>
          </div>
        </section>

        <section className="bg-surface-container-low py-20 md:py-28">
          <div className="container-shell">
            <Reveal className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-[40px] font-normal leading-tight text-primary md:text-[56px]">
                A Connected Ecosystem.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-[18px] font-normal leading-[1.6] text-on-surface-variant">
                We bridge the gap between initial desire and final confirmation,
                creating a seamless technical layer that feels like high-touch
                service.
              </p>
            </Reveal>
            <Reveal delay={0.12} className="mt-14 overflow-hidden rounded-2xl border border-surface-container-highest shadow-ambient">
              <Image
                src={images.acquisition}
                alt="System showcase for connected hospitality acquisition"
                width={1600}
                height={900}
                sizes="(min-width: 1024px) 1120px, 90vw"
                className="h-auto w-full object-cover"
              />
            </Reveal>
          </div>
        </section>

        <section className="bg-background py-20 md:py-28">
          <div className="container-shell">
            <div className="grid gap-6 md:grid-cols-12">
              <Reveal className="md:col-span-7">
                <article className="h-full border border-surface-container-highest bg-surface-container-lowest p-8 shadow-[0_14px_40px_rgba(45,45,45,0.05)] md:p-10">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
                    Website
                  </span>
                  <h3 className="mt-8 font-serif text-[32px] font-normal leading-tight text-primary md:text-[40px]">
                    Editorial Hospitality Website
                  </h3>
                  <p className="mt-5 max-w-md text-sm leading-6 text-on-surface-variant">
                    Performance-engineered sites that load instantly and tell your story
                    with cinematic beauty, optimized for direct inquiry conversion.
                  </p>
                  <div className="mt-10 flex flex-wrap gap-2">
                    <span className="bg-surface-container px-4 py-2 text-xs font-medium uppercase tracking-[0.08em] text-on-surface-variant">
                      High-Speed SSR
                    </span>
                    <span className="bg-surface-container px-4 py-2 text-xs font-medium uppercase tracking-[0.08em] text-on-surface-variant">
                      SEO Optimized
                    </span>
                  </div>
                </article>
              </Reveal>
              <Reveal delay={0.08} className="md:col-span-5">
                <article className="h-full border border-primary-container bg-primary-container p-8 text-on-primary shadow-tactile md:p-10">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                    Messaging
                  </span>
                  <h3 className="mt-8 font-serif text-[28px] font-normal leading-tight">
                    WhatsApp Inquiry Integration
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-white/70">
                    Instantly route high-intent guest inquiries to your concierge team
                    via the world&apos;s most popular messaging platform.
                  </p>
                  <p className="mt-5 border-l border-white/15 pl-4 text-xs leading-5 text-white/52">
                    Includes a lightweight inquiry dashboard for managing guest
                    conversations and automated responses.
                  </p>
                  <div className="mt-12 border-t border-white/15 pt-6 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                    Instant Connection
                  </div>
                </article>
              </Reveal>
              {includedFeatures.map((feature) => (
                <Reveal
                  key={feature.title}
                  delay={0.08}
                  className="md:col-span-4"
                >
                  <article className="h-full border border-surface-container-highest bg-surface-container p-8">
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
                      Included
                    </span>
                    <h3 className="mt-6 font-serif text-[24px] font-normal leading-[1.35] text-primary">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-on-surface-variant">{feature.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary/5 py-20 md:py-28">
          <div className="container-shell grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal className="overflow-hidden rounded-2xl border border-surface-container-highest shadow-ambient">
              <Image
                src={images.campaignLaunchSupport}
                alt="Hospitality campaign launch creative workspace"
                width={960}
                height={720}
                sizes="(min-width: 1024px) 560px, 90vw"
                className="h-auto w-full object-cover"
              />
            </Reveal>
            <Reveal delay={0.12} className="lg:pl-10">
              <h2 className="font-serif text-[32px] font-normal leading-tight text-primary md:text-[40px]">
                Initial Campaign Launch Support
              </h2>
              <p className="mt-6 text-sm leading-6 text-on-surface-variant md:text-base md:leading-7">
                To support initial guest acquisition, Zeylun provides
                hospitality-focused launch creatives and awareness campaign assets
                designed to help properties begin attracting direct guest inquiries.
              </p>
              <ul className="mt-8 space-y-4">
                {campaignItems.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-on-surface">
                    <span className="mt-3 h-px w-5 shrink-0 bg-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="bg-surface py-20 md:py-28">
          <div className="container-shell border-t border-surface-container-highest pt-16">
            <div className="grid gap-10 md:grid-cols-3">
              {benefits.map((benefit, index) => (
                <Reveal
                  key={benefit.label}
                  delay={index * 0.08}
                  className={`text-center ${index === 1 ? "md:border-x md:border-surface-container-highest md:px-10" : ""}`}
                >
                  <article>
                    <h3 className="font-serif text-[40px] font-normal leading-tight text-primary md:text-[56px]">
                      {benefit.value}
                    </h3>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-on-surface-variant">
                      {benefit.label}
                    </p>
                    <p className="mx-auto mt-5 max-w-xs text-sm leading-6 text-on-surface-variant">
                      {benefit.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-surface-container py-20 md:py-28">
          <div className="container-shell text-center">
            <Reveal className="mx-auto max-w-3xl">
              <h2 className="font-serif text-[32px] font-normal leading-tight text-primary md:text-[48px]">
                Build a more connected guest acquisition experience.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-[18px] font-normal leading-[1.6] text-on-surface-variant">
                Ready to transition from fragmented lists to a cinematic, direct
                guest acquisition system?
              </p>
              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <Button href={whatsAppHref} className="h-14 px-9">
                  Schedule a Consultation
                </Button>
                <Link
                  href={whatsAppHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center rounded-lg border border-secondary px-8 text-sm font-semibold uppercase tracking-[0.08em] text-secondary transition-colors hover:bg-secondary/5"
                >
                  Request System Overview
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
