import Link from "next/link";
import { navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-[#1c1c1a] py-16 text-[#f3f0ec] md:py-20">
      <div className="container-shell grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <Link href="/" className="font-serif text-3xl font-semibold">
            Zeylun
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/62">
            Elevating hospitality operations through intelligent, centralized workflows
            for high-end properties.
          </p>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.16em] text-white/38">
            Copyright 2026 Zeylun Hospitality Systems.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 md:col-span-5">
          <div className="flex flex-col gap-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
              Company
            </h2>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-white/72 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
              Legal
            </h2>
            <Link href="/privacy-policy" className="text-sm text-white/72 transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-white/72 transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
