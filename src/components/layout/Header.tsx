"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();

  // Pages with a hero image need the header overlaying it
  const isOverlay = pathname === "/" || pathname === "/about";

  return (
    <header
      className={cn(
        "bg-sa-warm-white/80 z-50 flex h-[100px] w-full items-center justify-between px-6 py-4 backdrop-blur-sm md:px-10 lg:px-[160px]",
        isOverlay && "absolute start-0 top-0",
      )}
    >
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
