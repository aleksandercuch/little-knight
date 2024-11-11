"use client";
import Image from "next/image";

// COMPONENTS
import Navbar from "../components/Navbar";
import { FAQ } from "@/components/HomePage/Faq/Faq";
import { Gallery } from "@/components/HomePage/Gallery/Gallery";
import { Contact } from "@/components/HomePage/Contact/Contact";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="bg-[url('/bg.png')] h-[46rem] w-full bg-cover">
        <Navbar />
        <div className="text-white text-center h-[50rem] content-center">
          <div>
            <h1 className="text-5xl ">Młodzieżowa Szkoła Szermierki Dawnej</h1>
            <h2 className="text-4xl mt-3">Marek Maślany i Aleksander Cuch</h2>
          </div>
          <div className="pt-10">
            <p className="text-2xl">Dołącz do nas już dziś!</p>
            <button className="mt-3 uppercase bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Zapisz się!
            </button>
          </div>
        </div>
      </div>
      <div className="bg-blue-600 h-[15] w-full bg-repeat pt-16 pb-16 pl-96 pr-96">
        <h3 className="text-white text-center text-xl">
          WOJOWNIK TO NIE CZŁOWIEK, KTÓRY MOCNO UDERZA ,LUB MOCNO KOPIE - TO
          POTRAFI NIEMAL KAŻDY, LEPIEJ LUB GORZEJ. PRAWDZIWY WOJOWNIK TO KTOŚ
          KTO NIE USTAJE W WALCE NAD SAMYM SOBĄ . . .
        </h3>
      </div>
      <div className="pt-24 pb-24 pl-96 pr-96">
        <div className="flex">
          <div>
            <h2 className="text-5xl pb-4">Kim jesteśmy? Czym się zajmujemy?</h2>
            <p className="text-2xl pb-8">
              Czyli kilkasłów o klubie Mały Rycerz.
            </p>
            <p>
              Jesteśmy klubem sportów walki, a na naszej macie odbywają się
              treningi brazylijskiego jiu-jitsu oraz kickboxingu. Trenerami są
              znakomici zawodnicy, odnoszący sukcesy zarówno w kraju jak i na
              scenie międzynarodowej. Nasz klub jest przyjaznym miejscem dla
              każdego, kto chce zacząć swoją przygodę ze sportami walki oraz dla
              doświadczonych zawodników z wieloletnim stażem treningowym. Jeżeli
              chcesz dołączyć do naszego klubu, to nie ma nic prostszego -
              wpadaj na trening.
            </p>
          </div>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/logo.png"
            alt="Next.js Logo"
            width={350}
            height={40}
            priority
          />
        </div>
      </div>

      <div className="w-full">
        <Gallery />
      </div>
      <div className="pt-24 pb-24 pl-96 pr-96 w-full">
        <FAQ />
      </div>
      <div className="bg-blue-600 h-[15] w-full bg-repeat pt-16 pb-16 pl-96 pr-96">
        <h3 className="text-white text-center text-xl">
          W GDAŃSKIEJ SZKOLE JAPOŃSKICH SZTUK WALKI ZMEPO MOGĄ PAŃSTWO
          SKORZYSTAĆ Z SZEROKIEJ OFERTY TRENINGOWEJ DLA WSZYSTKICH GRUP
          WIEKOWYCH. PROWADZIMY ZAJĘCIA W SEKCJACH ORAZ DLA GRUP ZORGANIZOWANYCH
          WALKI WRĘCZ TAKICH JAK : AIKIDO, JUJITSU, NINJUTSU I SAMOOBRONY ORAZ Z
          BRONIĄ KENJUTSU, KYUJUTSU / KYUDO, KALAKI ESKRIMA I JOJUTSU
        </h3>
      </div>
      <div className="pt-24 pb-24 pl-96 pr-96 w-full">
        <Contact />
      </div>
      <div className="pt-24 pb-24 pl-96 pr-96 w-full">Stopka</div>
    </main>
  );
}
