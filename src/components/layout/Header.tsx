"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

export function Header() {
  const t = useTranslations("nav");

  return (
    <header className="bg-sa-warm-white/80 absolute start-0 top-0 z-50 flex h-[100px] w-full items-center justify-between px-6 py-4 backdrop-blur-sm md:px-10 lg:px-[160px]">
      <Link href="/" className="relative h-full w-[100px]">
        <Image
          src="/images/logo.png"
          alt="Secret Arabians"
          fill
          className="object-contain"
          priority
        />
      </Link>
      <nav className="flex items-center gap-10">
        <Link href="/" className="font-display text-sa-dark text-xl tracking-[0.2px]">
          {t("home")}
        </Link>
        <Link href="/about" className="font-display text-sa-dark text-xl">
          {t("about")}
        </Link>
        <Link href="/horses" className="font-display text-sa-dark text-xl">
          {t("horses")}
        </Link>
      </nav>
    </header>
  );
}
