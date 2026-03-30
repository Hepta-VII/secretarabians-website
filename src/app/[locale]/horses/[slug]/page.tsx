import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { horses, getHorseBySlug } from "@/data/horses";
import { HorseDetailContent } from "./HorseDetailContent";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return horses.map((horse) => ({ slug: horse.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const horse = getHorseBySlug(slug);
  if (!horse) return {};

  return {
    title: `${horse.name} — Secret Arabians`,
    description: `${horse.name}, ${horse.sex}, ${horse.birthYear}`,
  };
}

export default async function HorseDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const horse = getHorseBySlug(slug);
  if (!horse) notFound();

  return (
    <main className="bg-sa-sand">
      <HorseDetailContent horse={horse} />
    </main>
  );
}
