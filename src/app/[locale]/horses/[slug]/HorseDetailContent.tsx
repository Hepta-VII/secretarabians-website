"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import type { Horse } from "@/types/horse";
import { PedigreeTree } from "@/components/horses/PedigreeTree";

interface HorseDetailContentProps {
  horse: Horse;
}

export function HorseDetailContent({ horse }: HorseDetailContentProps) {
  const t = useTranslations("horses");

  return (
    <div className="flex w-full flex-col items-start gap-16 px-6 py-8 md:px-10 lg:px-[160px]">
      {/* Header */}
      <div className="flex w-full flex-col items-center gap-6">
        <div className="flex w-full flex-col items-center gap-3">
          <h1 className="text-sa-dark font-display text-center text-3xl leading-[1.2] tracking-[1.92px] md:text-5xl lg:text-[64px]">
            {horse.name}
          </h1>
          <div className="flex items-center justify-center gap-3">
            <span className="text-sa-gold text-end text-base tracking-[5px] uppercase lg:text-xl">
              {t(`sex.${horse.sex}`)}
            </span>
            <span className="bg-sa-gold size-1 rounded-full" />
            <span className="text-sa-gold text-base tracking-[5px] lg:text-xl">
              {horse.birthYear}
            </span>
          </div>
        </div>
        <div className="bg-sa-brown mx-auto h-px w-[132px]" />
      </div>

      {/* Content: Image + Pedigree */}
      <div className="flex w-full flex-col items-center gap-16 lg:flex-row lg:justify-center">
        <div className="relative h-[350px] w-full shrink-0 overflow-hidden rounded-[9px] md:h-[500px] lg:h-[600px] lg:w-[414px]">
          <Image
            src={horse.image}
            alt={horse.name}
            fill
            className="rounded-[9px] object-cover"
            priority
          />
        </div>
        {horse.pedigree && <PedigreeTree pedigree={horse.pedigree} />}
      </div>
    </div>
  );
}
