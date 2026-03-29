/**
 * Secret Arabians typography tokens.
 *
 * - Cinzel: Titles, branding, logo text (timeless grandeur)
 * - Cormorant Garamond: Headings, quotes (elegance, romance)
 * - Lato: Body text, labels, UI elements (clean readability)
 * - Noto Sans Arabic: Arabic locale
 * - Noto Sans SC: Chinese (Simplified) locale
 */
export const typography = {
  h1: { size: "2.25rem", lineHeight: "2.75rem", weight: "600", font: "serif" },
  h2: { size: "1.875rem", lineHeight: "2.25rem", weight: "600", font: "serif" },
  h3: { size: "1.5rem", lineHeight: "2rem", weight: "600", font: "serif" },
  body: { size: "1rem", lineHeight: "1.625rem", weight: "300", font: "sans" },
  small: { size: "0.75rem", lineHeight: "1.25rem", weight: "300", font: "sans" },
  display: { size: "3rem", lineHeight: "3.5rem", weight: "400", font: "display" },
} as const;
