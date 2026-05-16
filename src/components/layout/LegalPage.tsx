import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

type LegalSection = {
  title: string;
  body: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalPage({ eyebrow, title, intro, sections }: LegalPageProps) {
  return (
    <>
      <Header />
      <main className="bg-background pt-20">
        <section className="px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto grid max-w-[1040px] gap-10 md:grid-cols-[1fr_0.34fr] md:items-end">
            <div>
              <span className="eyebrow mb-7 bg-surface-container">{eyebrow}</span>
              <h1 className="max-w-3xl font-serif text-[42px] font-normal leading-tight text-primary md:text-[64px]">
                {title}
              </h1>
              <p className="mt-6 max-w-2xl text-[18px] leading-[1.6] text-on-surface-variant">
                {intro}
              </p>
            </div>
            <aside className="border-l border-surface-container-highest pl-6">
              <p className="text-xs font-medium uppercase leading-[1.2] tracking-[0.14em] text-secondary">
                Document Note
              </p>
              <p className="mt-4 text-sm leading-6 text-on-surface-variant">
                Written for clear hospitality operations, calm communication, and
                considered implementation.
              </p>
              <p className="mt-6 text-xs font-medium uppercase leading-[1.2] tracking-[0.14em] text-on-surface-variant">
                Last updated May 17, 2026
              </p>
            </aside>
          </div>
        </section>

        <section className="px-5 pb-24 md:px-10 md:pb-32">
          <article className="mx-auto max-w-[920px]">
            <div className="space-y-10">
              {sections.map((section, index) => (
                <section
                  key={section.title}
                  className="border-t border-surface-container-highest/75 pt-9"
                >
                  <div className="grid gap-5 md:grid-cols-[0.28fr_1fr] md:gap-10">
                    <p className="text-xs font-medium uppercase leading-[1.2] tracking-[0.14em] text-secondary">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <div>
                      <h2 className="font-serif text-[28px] font-normal leading-[1.3] text-primary">
                        {section.title}
                      </h2>
                      <div className="mt-4 space-y-4">
                        {section.body.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="text-base leading-8 text-on-surface-variant"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
