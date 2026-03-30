"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  subtitleKey: string;
  titleKey: string;
  titleFont?: "display" | "serif";
  titleSize?: "lg" | "sm";
}

export function PageHeader({
  subtitleKey,
  titleKey,
  titleFont = "display",
  titleSize = "lg",
}: PageHeaderProps) {
  const t = useTranslations("horses");

  return (
    <div className="flex w-full flex-col items-center gap-6 px-6 py-8 md:px-10 lg:px-[160px]">
      <p className="text-sa-gold text-center text-base tracking-[5px] uppercase lg:text-xl">
        {t(subtitleKey)}
      </p>
      <h2
        className={cn(
          "text-sa-dark text-center leading-[1.2] uppercase",
          titleFont === "display" ? "font-display" : "font-serif",
          titleSize === "lg"
            ? "text-3xl tracking-[1.92px] md:text-5xl lg:text-[64px]"
            : "text-2xl tracking-[1.2px] md:text-3xl lg:text-[40px]",
        )}
      >
        {t(titleKey)}
      </h2>
      <div className="bg-sa-brown mx-auto h-px w-[132px]" />
    </div>
  );
}
