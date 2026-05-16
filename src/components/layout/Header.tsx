"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/content";
import { PaperPlaneIcon } from "@/components/ui/Button";

export function Header() {
  const [activeSection, setActiveSection] = useState(navItems[0].href);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.12, 0.25, 0.5]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-surface-container-highest bg-background/80 backdrop-blur-md">
      <nav
        className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-10"
        aria-label="Main navigation"
      >
        <Link href="#" className="font-serif text-[24px] font-semibold leading-[1.3] tracking-[-0.01em] text-primary md:text-[32px]">
          Zeylun
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setActiveSection(item.href)}
              className={`text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                activeSection === item.href || (index === 0 && activeSection === "")
                  ? "border-b-2 border-secondary pb-1 text-secondary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="#contact"
          className="kite-button hidden h-12 items-center justify-center rounded-lg bg-primary-container px-6 text-sm font-semibold text-on-primary transition-opacity hover:opacity-90 md:inline-flex"
        >
          <span>Schedule a Call</span>
          <PaperPlaneIcon />
        </Link>
        <Link
          href="#contact"
          className="kite-button inline-flex h-10 items-center justify-center rounded-lg bg-primary-container px-4 text-xs font-semibold text-on-primary transition-opacity hover:opacity-90 md:hidden"
        >
          <span>Schedule a Call</span>
          <PaperPlaneIcon />
        </Link>
      </nav>
    </header>
  );
}
