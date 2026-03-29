import { setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/home/HeroSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { DreamSection } from "@/components/home/DreamSection";
import { PillarsSection } from "@/components/home/PillarsSection";
import { CTASection } from "@/components/home/CTASection";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="bg-sa-sand">
      <HeroSection />
      <TestimonialSection />
      <DreamSection />
      <PillarsSection />
      <CTASection />
    </main>
  );
}
