"use client";

import { horses } from "@/data/horses";
import { HorseCard } from "./HorseCard";

export function HorseGrid() {
  return (
    <div className="grid w-full grid-cols-1 gap-8 px-6 py-8 md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:px-[160px]">
      {horses.map((horse) => (
        <HorseCard key={horse.id} horse={horse} />
      ))}
    </div>
  );
}
