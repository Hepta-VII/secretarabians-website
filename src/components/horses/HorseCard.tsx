"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Horse } from "@/types/horse";

interface HorseCardProps {
  horse: Horse;
}

export function HorseCard({ horse }: HorseCardProps) {
  const t = useTranslations("horses");

  return (
    <Link
      href={`/horses/${horse.slug}`}
      className="group relative flex h-[190px] w-full flex-col items-start justify-end overflow-hidden rounded-[18px] p-4"
    >
      <Image
        src={horse.image}
        alt={horse.name}
        fill
        className="rounded-[18px] object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 rounded-[18px] bg-linear-to-b from-transparent from-[63%] to-black/60" />
      <div className="text-sa-sand relative z-10 w-full">
        <p className="font-display text-[17px] leading-[22px]">{horse.name}</p>
        <p className="text-[13px] leading-[18px]">
          {t(`sex.${horse.sex}`)}, {horse.birthYear}
        </p>
      </div>
    </Link>
  );
}
