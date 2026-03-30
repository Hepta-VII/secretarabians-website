"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const IMAGES = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

export function MomentsCarousel() {
  const t = useTranslations("about");

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-center pt-[50px] pb-8">
        <h2 className="text-sa-dark text-center font-serif text-2xl tracking-[18px] lg:text-4xl">
          {t("moments.title")}
        </h2>
      </div>
      <div className="relative w-full overflow-hidden pb-[50px]">
        {/* Ellipse top */}
        <div className="pointer-events-none absolute -top-[70px] left-1/2 z-10 h-[100px] w-[1548px] -translate-x-1/2">
          <Image src="/images/carousel-ellipse-top.svg" alt="" fill className="object-cover" />
        </div>
        {/* Scrolling strip */}
        <div className="animate-carousel flex gap-5">
          {[...IMAGES, ...IMAGES].map((num, i) => (
            <div key={i} className="relative h-[450px] w-[400px] shrink-0">
              <Image src={`/images/moments/${num}.png`} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
        {/* Ellipse bottom */}
        <div className="pointer-events-none absolute top-[416px] left-1/2 z-10 h-[100px] w-[1548px] -translate-x-1/2">
          <Image src="/images/carousel-ellipse-bottom.svg" alt="" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}
