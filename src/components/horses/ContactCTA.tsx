"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function ContactCTA() {
  const t = useTranslations("horses");

  return (
    <section className="bg-sa-rose flex w-full flex-col items-center gap-6 px-6 py-8 md:px-10 lg:px-[160px]">
      <h2 className="text-sa-dark text-center font-serif text-3xl tracking-[2.4px] lg:text-[48px]">
        {t("cta.title")}
      </h2>
      <p className="text-sa-dark max-w-[756px] text-center text-base leading-[1.6] md:text-lg lg:text-xl">
        {t("cta.body")}
      </p>
      <Link
        href="/contact"
        className="bg-sa-dark text-sa-sand inline-block rounded-[4px] px-3 py-2 font-serif text-xl transition-opacity hover:opacity-90 lg:text-[28px]"
      >
        {t("cta.button")}
      </Link>
    </section>
  );
}
