import { setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/horses/PageHeader";
import { HorseGrid } from "@/components/horses/HorseGrid";
import { ContactCTA } from "@/components/horses/ContactCTA";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HorsesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="bg-sa-sand">
      <PageHeader subtitleKey="header.subtitle" titleKey="header.title" />
      <HorseGrid />
      <ContactCTA />
      <PageHeader
        subtitleKey="success.subtitle"
        titleKey="success.title"
        titleFont="serif"
        titleSize="sm"
      />
    </main>
  );
}
