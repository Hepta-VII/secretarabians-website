import { Cinzel, Cormorant_Garamond, Lato, Noto_Sans_Arabic, Noto_Sans_SC } from "next/font/google";

export const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
});

export const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sc",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

export const FONT_VARIABLES = [
  cinzel.variable,
  cormorantGaramond.variable,
  lato.variable,
  notoSansArabic.variable,
  notoSansSC.variable,
].join(" ");
