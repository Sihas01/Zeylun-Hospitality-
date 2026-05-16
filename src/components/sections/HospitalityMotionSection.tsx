"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function HospitalityMotionSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-surface-container py-20 md:py-28">
      <div className="container-shell">
        <SectionIntro
          eyebrow="Hospitality in Motion"
          title="Designed Around Real Hospitality Workflows."
          body="Luxury service is a symphony of unseen coordination. Zeylun captures this unhurried rhythm, transforming real-time guest requests into silent, assigned actions."
          size="medium"
        />
        <Reveal delay={0.12} className="mx-auto mt-6 max-w-3xl text-center">
          <p className="body-copy">
            Every interaction is elegantly routed, ensuring your team moves with quiet
            confidence and your guests experience flawless anticipation. No technical
            dashboards, just the intuitive flow of excellence.
          </p>
        </Reveal>
        <Reveal delay={0.2} className="mx-auto mt-12 max-w-5xl">
          <motion.div
            className="overflow-hidden rounded-2xl border border-surface-container-highest shadow-[0_20px_60px_rgba(45,45,45,0.08)]"
            whileHover={reduceMotion ? undefined : { y: -4 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <Image
              src="/images/zeylun-hospitality-motion-reference.png"
              alt="Hospitality in Motion workflow cards"
              width={1600}
              height={900}
              sizes="(min-width: 1024px) 960px, 90vw"
              className="h-auto w-full object-cover"
            />
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
