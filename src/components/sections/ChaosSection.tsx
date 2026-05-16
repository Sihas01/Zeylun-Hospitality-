"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { chaosItems } from "@/lib/content";

const floatingNotes = [
  {
    label: "WhatsApp - Front Desk Phone",
    text: '"Can we get extra towels in 304?"',
    className: "top-4 right-0 rotate-[-1.5deg] md:right-8"
  },
  {
    label: "Sticky Note - Concierge",
    text: "Mr. Smith - Airport transfer delayed. Tell driver.",
    className: "left-0 top-[38%] rotate-[1deg]"
  },
  {
    label: "Email - Reservations",
    text: "Dietary requirements for tonight's dinner...",
    className: "bottom-7 right-4 rotate-[2deg] md:right-14"
  }
];

const itemIcons = [
  <path
    key="fragmented"
    d="M5 6.5h9.5v6H8.25L5 15.25V6.5Zm3 10h8.5L19 18.75V10"
  />,
  <path
    key="missed"
    d="M12 6.5v5.25l3 2M12 21a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z"
  />,
  <path
    key="disconnected"
    d="M4 19c.7-2.4 2.8-3.8 5.7-3.8M15.4 15.2c2.5.2 4.1 1.6 4.6 3.8M8.5 7.5a3 3 0 0 0 4 4M14.5 8.5a3 3 0 0 0-3-3M3.5 4.5l17 17"
  />
];

export function ChaosSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-surface-container-low py-20 md:py-28">
      <div className="container-shell grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-5">
          <h2 className="font-serif text-[32px] font-normal leading-tight text-primary md:text-[40px]">
            The Chaos of Scattered Service.
          </h2>
          <p className="body-copy mt-6">
            In premium hospitality, service breakdown isn&apos;t visible in grand failures,
            but in subtle oversights. A fragmented approach relying on personal
            WhatsApps, paper notes, and disjointed software creates cognitive overload
            for staff and inconsistent experiences for guests.
          </p>
          <div className="mt-9 space-y-7">
            {chaosItems.map((item, index) => (
              <motion.div
                key={item.title}
                className="flex gap-4"
                initial={reduceMotion ? false : { opacity: 0, x: -18 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
              >
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-error-container/35 text-error">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {itemIcons[index]}
                  </svg>
                </span>
                <div>
                  <h3 className="text-sm font-semibold uppercase leading-[1.2] tracking-[0.05em] text-on-surface">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative h-[26rem] lg:col-span-7 md:h-[31rem]">
          <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(#747878_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
          {floatingNotes.map((note, index) => (
            <motion.div
              key={note.label}
              className={`absolute w-[86%] rounded-xl border border-surface-variant bg-surface-container-lowest p-5 shadow-tactile transition duration-500 hover:-translate-y-1 hover:shadow-floating sm:w-[74%] ${note.className}`}
              style={{ zIndex: 10 + index }}
              initial={reduceMotion ? false : { opacity: 0, y: 22, rotate: index === 0 ? -3 : index === 1 ? 2 : 4 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.18 + index * 0.12 }}
            >
              <p className="mb-3 flex items-center gap-2 text-xs font-medium uppercase leading-[1.2] tracking-[0.05em] text-on-surface-variant">
                {note.label}
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-error" />
              </p>
              <p className="text-sm text-on-surface md:text-base">{note.text}</p>
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
