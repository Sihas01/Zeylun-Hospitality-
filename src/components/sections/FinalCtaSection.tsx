"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { whatsAppHref } from "@/lib/content";

export function FinalCtaSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" className="bg-surface-container py-20 md:py-28">
      <div className="container-shell">
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <motion.span
            className="eyebrow mb-7 bg-surface-container-lowest"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="h-2 w-2 rounded-full bg-secondary" />
            System Ready
          </motion.span>
          <motion.h2
            className="font-serif text-[32px] font-normal leading-tight text-primary md:text-[48px]"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            Let&apos;s simplify your hospitality workflows.
          </motion.h2>
          <motion.p
            className="body-copy mx-auto mt-6 max-w-2xl"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          >
            Bring calm to your operations and deliver an exceptional, unhurried
            experience to every guest.
          </motion.p>
          <motion.div
            className="mt-9"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.26 }}
          >
            <Button href={whatsAppHref} className="h-14 px-9">
              Schedule a Consultation
            </Button>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
