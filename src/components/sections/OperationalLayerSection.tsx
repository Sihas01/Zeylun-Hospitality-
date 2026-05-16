"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { images, workflowSteps } from "@/lib/content";

export function OperationalLayerSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="workflows" className="bg-background py-24 md:py-section-lg">
      <div className="container-shell">
        <SectionIntro
          eyebrow="The Workflow"
          title="The Operational Layer."
          body="A clean, structured workflow that turns chaos into choreography."
          bodyClassName="text-[20px]"
        />
        <Reveal delay={0.12} className="mx-auto mt-12 max-w-6xl">
          <motion.div
            className="premium-surface overflow-hidden rounded-2xl md:rounded-3xl"
            whileHover={reduceMotion ? undefined : { y: -4 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <Image
              src={images.workflow}
              alt="Operational workflow showing guest inquiry routed through Zeylun to staff"
              width={1600}
              height={900}
              sizes="(min-width: 1024px) 1120px, 90vw"
              className="h-auto w-full object-cover"
            />
          </motion.div>
        </Reveal>
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-5 md:grid-cols-4">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step}
              className="relative text-center"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.11 }}
            >
              {index < workflowSteps.length - 1 ? (
                <span className="absolute left-[calc(50%+2.25rem)] top-3 hidden h-px w-[calc(100%-4.5rem)] bg-surface-container-highest md:block" />
              ) : null}
              <span className="block text-xs font-medium uppercase leading-[1.2] tracking-[0.05em] text-secondary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-serif text-lg font-normal text-primary">{step}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
