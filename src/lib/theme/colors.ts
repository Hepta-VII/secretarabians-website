/**
 * Secret Arabians brand colors for use in JS/SVG contexts
 * where Tailwind classes are not available.
 *
 * For Tailwind usage, use `sa-*` classes (e.g., `bg-sa-warm-white`, `text-sa-dark`).
 */
export const SA_COLORS = {
  warmWhite: "#FAF9F7",
  sand: "#E8E3D9",
  sandLight: "#F0ECE5",
  rose: "#C6A692",
  roseLight: "#D9C4B5",
  roseSoft: "#F0E5DE",
  gold: "#B9A87F",
  goldLight: "#CFC0A0",
  goldSoft: "#EDE7D9",
  warmBrown: "#9A7B5B",
  brown: "#5C4A32",
  brownLight: "#7A6548",
  dark: "#3D2F1E",
  text: "#3D2F1E",
  textLight: "#7A6548",
} as const;

export type SAColorKey = keyof typeof SA_COLORS;
