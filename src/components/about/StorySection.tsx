"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

interface StorySectionProps {
  titleKey: string;
  bodyKey: string;
  alignment: "start" | "end";
  background: "sand" | "rose";
  decoration?: React.ReactNode;
}

export function StorySection({
  titleKey,
  bodyKey,
  alignment,
  background,
  decoration,
}: StorySectionProps) {
  const t = useTranslations("about");

  return (
    <section
      className={cn(
        "relative flex w-full flex-col gap-6 px-6 pt-8 pb-20 md:px-10 lg:px-[160px]",
        alignment === "end" ? "items-center lg:items-end" : "items-center lg:items-start",
        background === "rose" ? "bg-sa-rose" : "bg-sa-sand",
      )}
    >
      {decoration}
      <h2 className="text-sa-dark relative z-10 max-w-[653px] font-serif text-3xl tracking-[2.4px] lg:text-[48px]">
        {t(titleKey)}
      </h2>
      <p className="text-sa-dark relative z-10 max-w-[653px] text-base leading-[1.6] md:text-lg lg:text-xl">
        {t(bodyKey)}
      </p>
    </section>
  );
}
