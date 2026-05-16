"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { images } from "@/lib/content";

const storyTransition = { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const };

export function GuestAcquisitionSection() {
  const reduceMotion = useReducedMotion();
  const storyItem = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.35 },
          transition: { ...storyTransition, delay }
        };

  return (
    <section id="solution" className="bg-background px-5 py-32 md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center text-center">
          <motion.span
            className="eyebrow mb-6"
            {...storyItem(0)}
          >
            Guest Acquisition System
          </motion.span>
          <motion.h2
            className="max-w-4xl font-serif text-[40px] font-normal leading-tight text-primary md:text-[56px]"
            {...storyItem(0.12)}
          >
            Turning discovery into direct guest conversations.
          </motion.h2>
          <motion.p
            className="mx-auto mt-6 max-w-3xl text-[18px] font-normal leading-[1.6] text-on-surface-variant"
            {...storyItem(0.24)}
          >
            Modern hospitality begins long before check-in. Zeylun helps hospitality
            brands transform campaigns, websites, and guest inquiries into structured
            communication flows.
          </motion.p>
          <motion.div
            className="mt-12 w-full max-w-5xl"
            {...storyItem(0.38)}
          >
            <motion.div
              className="overflow-hidden rounded-2xl border border-surface-container-highest shadow-[0_20px_60px_rgba(45,45,45,0.08)]"
              whileHover={reduceMotion ? undefined : { y: -4 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <Image
                src={images.acquisition}
                alt="Guest acquisition system across website, phone, and inquiry cards"
                width={1600}
                height={900}
                sizes="(min-width: 1024px) 960px, 90vw"
                className="h-auto w-full object-cover"
                priority={false}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
