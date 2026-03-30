import type { Horse } from "@/types/horse";

export const horses: Horse[] = [
  {
    id: "rectors-calista",
    name: "Rector's Calista",
    slug: "rectors-calista",
    sex: "mare",
    birthYear: 2009,
    image: "/images/horses/rectors-calista.png",
    pedigree: {
      name: "Rector's Calista",
      sire: {
        name: "QR Marc",
        sire: {
          name: "Marwan Al Shaqab",
          sire: { name: "Gazal Al Shaqab" },
          dam: { name: "Little Liza Fame" },
        },
        dam: {
          name: "Swete Dreams",
          sire: { name: "Magic Dream Cahr" },
          dam: { name: "Kouream De Ment" },
        },
      },
      dam: {
        name: "Chrystal Elygance",
        sire: {
          name: "Psytadel",
          sire: { name: "Padrons Psyche" },
          dam: { name: "Bint Bey Shah" },
        },
        dam: { name: "RA Cool Elygance", sire: { name: "Jocool" }, dam: { name: "Elysia" } },
      },
    },
  },
  {
    id: "jaywan-al-bidayer",
    name: "Jaywan Al Bidayer",
    slug: "jaywan-al-bidayer",
    sex: "mare",
    birthYear: 2018,
    image: "/images/horses/jaywan-al-bidayer.png",
  },
  {
    id: "valiente-r",
    name: "Valiente R",
    slug: "valiente-r",
    sex: "gelding",
    birthYear: 2019,
    image: "/images/horses/valiente-r.png",
  },
  {
    id: "zaeemah-al-baydaa",
    name: "Zaeemah Al Baydaa",
    slug: "zaeemah-al-baydaa",
    sex: "mare",
    birthYear: 2024,
    image: "/images/horses/zaeemah-al-baydaa.png",
  },
  {
    id: "zahiya-al-baydaa",
    name: "Zahiya Al Baydaa",
    slug: "zahiya-al-baydaa",
    sex: "mare",
    birthYear: 2024,
    image: "/images/horses/zahiya-al-baydaa.png",
  },
  {
    id: "secrets-naasir",
    name: "Secret's Naasir",
    slug: "secrets-naasir",
    sex: "gelding",
    birthYear: 2024,
    image: "/images/horses/secrets-naasir.png",
  },
  {
    id: "secrets-jyella",
    name: "Secret's Jyella",
    slug: "secrets-jyella",
    sex: "mare",
    birthYear: 2025,
    image: "/images/horses/secrets-jyella.png",
  },
  {
    id: "secrets-adwina",
    name: "Secret's Adwina",
    slug: "secrets-adwina",
    sex: "mare",
    birthYear: 2025,
    image: "/images/horses/secrets-adwina.png",
  },
];

export function getHorseBySlug(slug: string): Horse | undefined {
  return horses.find((h) => h.slug === slug);
}
