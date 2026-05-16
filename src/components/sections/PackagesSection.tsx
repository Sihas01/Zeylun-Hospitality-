"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { packages } from "@/lib/content";

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
                className={`relative flex h-full flex-col border bg-surface-container-lowest p-7 transition duration-500 hover:-translate-y-1 hover:shadow-floating md:p-8 ${
                  item.featured
                    ? "border-secondary/45 shadow-tactile"
                    : "border-surface-container-highest"
                }`}
                whileHover={reduceMotion ? undefined : { y: -6 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                {item.featured ? (
                  <span className="absolute right-6 top-0 -translate-y-1/2 bg-secondary px-4 py-1 text-xs font-medium uppercase leading-[1.2] tracking-[0.05em] text-on-secondary">
                    Most Popular
                  </span>
                ) : null}
                <div className="border-b border-surface-container-highest pb-6">
                  <span
                    className={`inline-flex w-max items-center gap-2 px-3 py-1 text-xs font-medium uppercase leading-[1.2] tracking-[0.05em] ${
                      item.featured
                        ? "bg-secondary/10 text-secondary"
                        : "bg-surface-container-high text-on-surface-variant"
                    }`}
                  >
                    {item.featured ? <span className="h-1.5 w-1.5 rounded-full bg-secondary" /> : null}
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
                    Setup Fee
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
                  className={`inline-flex h-12 items-center justify-center border px-5 text-xs font-semibold uppercase tracking-[0.14em] transition duration-300 ${
                    item.featured
                      ? "border-primary-container bg-primary-container text-on-primary hover:opacity-90"
                      : "border-secondary text-secondary hover:bg-secondary/5"
                  }`}
                >
                  {item.cta}
                </a>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
