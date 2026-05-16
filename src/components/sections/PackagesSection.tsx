"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { packages } from "@/lib/content";

const campaignFeatures = [
  "Meta/Facebook campaign management",
  "Instagram campaign support",
  "Campaign creatives",
  "Landing page optimization",
  "WhatsApp inquiry optimization",
  "Seasonal campaign support",
  "Performance reviews & reporting"
];

export function PackagesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="packages" className="bg-surface-container-low py-20 md:py-28">
      <div className="container-shell">
        <SectionIntro
          title="A Connected Hospitality Ecosystem."
          body="Tailored solutions designed to elevate your digital presence and streamline your daily operations."
          size="medium"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08}>
              <motion.article
                className="relative flex h-full flex-col border border-surface-container-highest bg-surface-container-lowest p-7 transition duration-500 hover:-translate-y-1 hover:shadow-floating md:p-8"
                whileHover={reduceMotion ? undefined : { y: -6 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <div className="relative pb-6 after:absolute after:bottom-0 after:left-0 after:h-px after:w-11/12 after:bg-surface-container-highest/70 after:content-['']">
                  <span className="inline-flex w-max items-center gap-2 bg-surface-container-high px-3 py-1 text-xs font-medium uppercase leading-[1.2] tracking-[0.05em] text-on-surface-variant">
                    {item.eyebrow}
                  </span>
                  <h3 className="mt-5 font-serif text-[24px] font-normal leading-[1.4] text-primary">
                    {item.name}
                  </h3>
                  <p className="mt-3 min-h-12 text-sm leading-6 text-on-surface-variant">
                    {item.body}
                  </p>
                </div>
                <div className="py-6">
                  <p className="font-serif text-[24px] font-normal leading-[1.4] text-primary">{item.price}</p>
                  <p className="mt-1 text-xs font-medium uppercase leading-[1.2] tracking-[0.05em] text-on-surface-variant">
                    Project Investment
                  </p>
                </div>
                <ul className="flex flex-1 flex-col gap-4 pb-8">
                  {item.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      className="flex gap-3 text-sm leading-6 text-on-surface"
                      initial={reduceMotion ? false : { opacity: 0, x: -10 }}
                      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.7 }}
                      transition={{
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.12 + featureIndex * 0.04
                      }}
                    >
                      <span className="mt-2 h-px w-4 shrink-0 bg-secondary" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center border border-secondary px-5 text-xs font-semibold uppercase tracking-[0.14em] text-secondary transition duration-300 hover:bg-secondary/5"
                >
                  {item.cta}
                </a>
              </motion.article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.16} className="mt-10 md:mt-12">
          <div className="grid gap-6 lg:grid-cols-3">
            <motion.article
              className="relative overflow-hidden border border-surface-container-highest bg-surface-container-lowest/70 p-7 shadow-[0_14px_40px_rgba(45,45,45,0.05)] md:p-8 lg:col-span-2"
              whileHover={reduceMotion ? undefined : { y: -4 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <span className="inline-flex w-max bg-secondary/10 px-3 py-1 text-xs font-medium uppercase leading-[1.2] tracking-[0.05em] text-secondary">
                Optional Add-On
              </span>
              <div className="mt-5 grid gap-8 md:grid-cols-[1fr_1.1fr] md:items-start">
                <div>
                  <h3 className="font-serif text-[26px] font-normal leading-[1.3] text-primary">
                    Hospitality Campaign Management
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-on-surface-variant">
                    Support ongoing direct guest acquisition through campaign
                    optimization, inquiry-focused marketing workflows, and
                    hospitality-focused promotional systems.
                  </p>
                  <p className="mt-6 max-w-sm border-t border-surface-container-highest/70 pt-5 text-sm leading-6 text-on-surface-variant">
                    Optional monthly engagement starting from{" "}
                    <span className="font-semibold text-primary">$300/month</span>.
                  </p>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2 md:gap-4">
                  {campaignFeatures.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      className="flex gap-3 text-sm leading-6 text-on-surface"
                      initial={reduceMotion ? false : { opacity: 0, x: -10 }}
                      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.7 }}
                      transition={{
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.08 + featureIndex * 0.035
                      }}
                    >
                      <span className="mt-2 h-px w-4 shrink-0 bg-secondary/80" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.article>

            <motion.aside
              className="border border-surface-container-highest/80 bg-surface-container p-7 md:p-8"
              whileHover={reduceMotion ? undefined : { y: -3 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <span className="inline-flex w-max bg-surface-container-high px-3 py-1 text-xs font-medium uppercase leading-[1.2] tracking-[0.05em] text-on-surface-variant">
                Continued Support
              </span>
              <h3 className="mt-5 font-serif text-[24px] font-normal leading-[1.35] text-primary">
                Ongoing Growth & Operational Support
              </h3>
              <p className="mt-4 text-sm leading-6 text-on-surface-variant">
                After implementation, Zeylun can continue supporting workflow
                refinements, operational improvements, campaign optimization, and
                guest communication systems as your property evolves.
              </p>
            </motion.aside>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
