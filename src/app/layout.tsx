import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { fira } from "./fonts";

// Load Fira Sans globally with weights

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
