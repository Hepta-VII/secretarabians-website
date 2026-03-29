import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Secret Arabians",
  description:
    "Breeding extraordinary Arabians that inspire the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
