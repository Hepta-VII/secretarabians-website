"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

export function CTASection() {
  const t = useTranslations("home");

  return (
    <section className="bg-sa-rose relative min-h-[300px] overflow-hidden px-6 py-12 md:px-10 lg:h-[350px] lg:px-[160px] lg:py-8">
      <div className="pointer-events-none absolute start-[137px] top-[-130px] hidden -scale-y-100 rotate-180 lg:block">
        <Image
          src="/images/cta-horse.png"
          alt=""
          width={432}
          height={407}
          className="object-contain"
        />
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 lg:items-end">
        <div className="flex max-w-[560px] flex-col items-center gap-6 text-center">
          <h2 className="text-sa-dark font-serif text-3xl tracking-[2.4px] lg:text-5xl">
            {t("cta.title")}
          </h2>
          <p className="text-sa-dark text-lg leading-[1.6] lg:text-xl">{t("cta.body")}</p>
          <Link
            href="/horses"
            className="bg-sa-dark text-sa-sand inline-block rounded-[4px] px-3 py-2 font-serif text-xl transition-opacity hover:opacity-90 lg:text-[28px]"
          >
            {t("cta.button")}
          </Link>
        </div>
      </div>
    </section>
  );
}
