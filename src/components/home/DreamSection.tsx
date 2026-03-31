"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export function DreamSection() {
  const t = useTranslations("home");

  return (
    <section className="bg-sa-rose relative min-h-[400px] overflow-x-clip px-6 py-12 md:px-10 lg:h-[500px] lg:px-[160px] lg:py-8">
      <div className="relative z-10 flex h-full flex-col items-start justify-center gap-6 lg:gap-[35px]">
        <h2 className="text-sa-dark max-w-[458px] font-serif text-3xl leading-[1.2] lg:text-5xl">
          {t("dream.title")}
        </h2>
        <p className="text-sa-dark max-w-[560px] text-lg leading-[1.6] lg:text-xl">
          {t("dream.body")}
        </p>
      </div>
      <div className="pointer-events-none absolute hidden skew-x-[-3.15deg] lg:start-[737px] lg:top-[-73px] lg:block">
        <Image
          src="/images/dream-horse.png"
          alt=""
          width={608}
          height={648}
          className="object-cover"
        />
      </div>
    </section>
  );
}
