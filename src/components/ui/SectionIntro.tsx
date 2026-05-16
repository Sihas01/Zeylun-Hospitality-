import { Reveal } from "@/components/motion/Reveal";

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  className?: string;
  size?: "large" | "medium";
  bodyClassName?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  body,
  className = "",
  size = "large",
  bodyClassName = ""
}: SectionIntroProps) {
  const titleClassName =
    size === "large"
      ? "font-serif text-[40px] font-normal leading-tight text-primary md:text-[56px]"
      : "font-serif text-[32px] font-normal leading-tight text-primary md:text-[40px]";

  return (
    <Reveal className={`mx-auto max-w-3xl text-center ${className}`}>
      {eyebrow ? <span className="eyebrow mb-6">{eyebrow}</span> : null}
      <h2 className={titleClassName}>{title}</h2>
      {body ? (
        <p className={`body-copy mx-auto mt-6 max-w-2xl ${bodyClassName}`}>{body}</p>
      ) : null}
    </Reveal>
  );
}
