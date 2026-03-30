"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

interface TestimonialSectionProps {
  namespace?: string;
  quoteKey?: string;
  className?: string;
}

export function TestimonialSection({
  namespace = "home",
  quoteKey = "testimonial.quote",
  className,
}: TestimonialSectionProps) {
  const t = useTranslations(namespace);

  return (
    <section
      className={cn(
        "px-6 pt-8 pb-20 md:px-10 lg:px-[160px] lg:pb-[150px]",
        className ?? "bg-sa-sand",
      )}
    >
      <div className="mx-auto flex items-start justify-center gap-4">
        <span
          className="font-display text-sa-brown hidden text-[80px] leading-[1] tracking-[-2.56px] select-none md:block lg:text-[128px] lg:leading-[136px]"
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <blockquote className="max-w-[776px]">
          <p className="text-sa-dark font-serif text-xl leading-[1.2] italic lg:text-[28px]">
            {t(quoteKey)}
          </p>
        </blockquote>
        <span
          className="font-display text-sa-brown hidden text-[80px] leading-[1] tracking-[-2.56px] select-none md:block lg:text-[128px] lg:leading-[136px]"
          aria-hidden="true"
        >
          &rdquo;
        </span>
      </div>
    </section>
  );
}
