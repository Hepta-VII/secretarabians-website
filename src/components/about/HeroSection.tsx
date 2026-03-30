"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export function AboutHeroSection() {
  const t = useTranslations("about");

  return (
    <section className="relative h-[60vh] w-full md:h-[70vh] lg:h-[904px]">
      <Image
        src="/images/about-hero.png"
        alt="Secret Arabians — our story"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
      <div className="absolute start-6 bottom-24 px-2 py-3 md:start-10 lg:start-[6px] lg:bottom-[213px] lg:px-8">
        <h1 className="text-sa-sand font-serif text-4xl leading-[1.2] tracking-[1.92px] uppercase lg:text-[64px]">
          {t("hero.title")}
        </h1>
        <p className="text-sa-gold mt-2 font-sans text-xs tracking-[3.5px] uppercase lg:text-sm">
          {t("hero.tagline")}
        </p>
      </div>
    </section>
  );
}
