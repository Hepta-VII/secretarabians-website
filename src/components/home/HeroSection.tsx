"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export function HeroSection() {
  const t = useTranslations("home");

  return (
    <section className="relative h-[600px] w-full lg:h-[904px]">
      <Image
        src="/images/hero-homepage.png"
        alt="Secret Arabians — couple with Arabian horse"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
      {/* Decorative oval arc at bottom */}
      <div className="absolute bottom-0 left-0 z-10 w-full">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="block h-[60px] w-full md:h-[80px] lg:h-[120px]"
        >
          <ellipse cx="720" cy="120" rx="900" ry="120" className="fill-sa-sand" />
        </svg>
      </div>
      <div className="absolute start-6 bottom-24 max-w-[752px] px-2 py-3 md:start-10 lg:start-[29px] lg:bottom-[213px]">
        <p className="text-sa-sand font-serif text-4xl leading-[1.2] lg:text-[64px]">
          {t("hero.welcome")}
        </p>
        <h1 className="font-display text-sa-sand text-4xl leading-[1.2] tracking-[1.92px] lg:text-[64px]">
          {t("hero.title")}
        </h1>
        <p className="text-sa-gold mt-4 font-sans text-xs tracking-[3.5px] uppercase lg:text-sm">
          {t("hero.tagline")}
        </p>
      </div>
    </section>
  );
}
