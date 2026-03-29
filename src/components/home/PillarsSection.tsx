"use client";

import { useTranslations } from "next-intl";

export function PillarsSection() {
  const t = useTranslations("home");

  const pillars = ["excellence", "care", "learning"] as const;

  return (
    <section className="bg-sa-sand px-6 py-20 md:px-10 lg:px-[160px] lg:py-[150px]">
      <div className="mx-auto flex flex-col items-center gap-12 md:flex-row md:items-start md:justify-between md:gap-8">
        {pillars.map((pillar) => (
          <div key={pillar} className="flex max-w-[325px] flex-col items-center gap-3">
            <h2 className="text-sa-brown text-center font-serif text-3xl font-medium lg:text-4xl">
              {t(`pillars.${pillar}.title`)}
            </h2>
            <div className="bg-sa-brown h-px w-[132px]" />
            <p className="text-sa-dark text-center text-xl font-light lg:text-2xl">
              {t(`pillars.${pillar}.body`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
