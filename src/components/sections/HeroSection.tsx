"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { images, whatsAppHref } from "@/lib/content";
import { PaperPlaneIcon } from "@/components/ui/Button";

const MotionLink = motion.create(Link);
const contentTransition = { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const };

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const entrance = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        transition: contentTransition
      };

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-5 pt-20 md:px-10">
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? false : { opacity: 0, scale: 1.035 }}
        animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={images.hero}
          alt="A serene luxury hospitality lounge"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-90"
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={reduceMotion ? undefined : { opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeOut", delay: 0.1 }}
      />

      <div className="relative z-10 mx-auto mt-28 flex max-w-4xl flex-col items-center text-center">
          <motion.span
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-surface-container-highest bg-surface-container/80 px-4 py-2 backdrop-blur-sm"
            {...entrance}
            transition={{ ...contentTransition, delay: 0.18 }}
          >
            <span className="h-2 w-2 rounded-full bg-secondary" />
            <span className="text-xs font-medium uppercase leading-[1.2] tracking-[0.14em] text-on-surface-variant">
            The Operational Layer
            </span>
          </motion.span>
          <motion.h1
            className="mb-6 max-w-3xl font-serif text-[40px] font-normal leading-tight text-primary md:text-[64px] md:leading-[1.1]"
            {...entrance}
            transition={{ ...contentTransition, delay: 0.3 }}
          >
            Modern hospitality operations, centralized.
          </motion.h1>
          <motion.p
            className="mb-10 mx-auto max-w-2xl text-[18px] font-normal leading-[1.6] text-on-surface-variant"
            {...entrance}
            transition={{ ...contentTransition, delay: 0.42 }}
          >
            Replace fragmented WhatsApp threads and scattered requests with a calm,
            cohesive system. Zeylun centralizes communication and workflows for
            high-end lodges, ensuring quiet luxury for your guests and serene
            operations for your team.
          </motion.p>
          <motion.div
            className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row"
            {...entrance}
            transition={{ ...contentTransition, delay: 0.54 }}
          >
            <MotionLink
              href={whatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              className="kite-button inline-flex h-12 items-center justify-center rounded-lg bg-primary-container px-8 text-sm font-semibold text-on-primary shadow-tactile transition-opacity hover:opacity-90"
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { y: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <span>Schedule a Call</span>
              <PaperPlaneIcon />
            </MotionLink>
            <MotionLink
              href="#workflows"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-secondary bg-transparent px-8 text-sm font-semibold text-secondary transition-colors hover:bg-secondary/5"
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { y: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              View Workflows
            </MotionLink>
          </motion.div>
      </div>
    </section>
  );
}
