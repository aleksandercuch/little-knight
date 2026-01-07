import { Fira_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

// Load Fira Sans globally with weights
const fira = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-fira",
});

export const metadata = {
  title: "Gdańska Szkoła Fechtunku",
  description:
    "Fundacja Gdańska Szkoła Fechtunku – tradycja, sport i edukacja dawnej sztuki walki",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={fira.variable}>
      <body className="font-fira bg-[url('/bg.jpg')] bg-cover bg-center min-h-screen">
        <div className="flex flex-col min-h-screen">
          <Navbar />

          <main className="flex-grow">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
