import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeContent />;
}

function HomeContent() {
  const t = useTranslations("home");

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-display text-5xl tracking-wide text-sa-dark sm:text-6xl lg:text-7xl">
          {t("hero.title")}
        </h1>
        <p className="mt-6 max-w-xl text-lg font-light text-sa-text-light">
          {t("hero.subtitle")}
        </p>
      </div>
    </main>
  );
}
