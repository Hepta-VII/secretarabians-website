import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { AboutHeroSection } from "@/components/about/HeroSection";
import { StorySection } from "@/components/about/StorySection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { MomentsCarousel } from "@/components/about/MomentsCarousel";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="bg-sa-sand">
      <AboutHeroSection />
      <StorySection
        titleKey="paradise.title"
        bodyKey="paradise.body"
        alignment="end"
        background="sand"
      />
      <StorySection
        titleKey="meant.title"
        bodyKey="meant.body"
        alignment="start"
        background="rose"
      />
      <StorySection
        titleKey="dreaming.title"
        bodyKey="dreaming.body"
        alignment="end"
        background="sand"
        decoration={
          <div className="pointer-events-none absolute start-[157px] top-[43px] hidden lg:block">
            <Image
              src="/images/about-horse-vector.png"
              alt=""
              width={400}
              height={380}
              aria-hidden="true"
            />
          </div>
        }
      />
      <TestimonialSection
        namespace="about"
        quoteKey="testimonial.quote"
        className="bg-sa-rose py-12"
      />
      <MomentsCarousel />
    </main>
  );
}
