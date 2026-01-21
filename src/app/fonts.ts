import { Fira_Sans, Lato } from "next/font/google";

export const fira = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-fira",
});

export const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});
