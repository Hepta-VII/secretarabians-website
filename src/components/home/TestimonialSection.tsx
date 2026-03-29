"use client";

import { useTranslations } from "next-intl";

export function TestimonialSection() {
  const t = useTranslations("home");

  return (
    <section className="bg-sa-sand px-6 pt-8 pb-20 md:px-10 lg:px-[160px] lg:pb-[150px]">
      <div className="mx-auto flex items-start justify-center gap-4">
        <span
          className="font-display text-sa-brown hidden text-[80px] leading-[1] tracking-[-2.56px] select-none md:block lg:text-[128px] lg:leading-[136px]"
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <blockquote className="max-w-[776px]">
          <p className="text-sa-dark font-serif text-xl leading-[1.2] italic lg:text-[28px]">
            {t("testimonial.quote")}
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
