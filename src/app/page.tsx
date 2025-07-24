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
      <div className="relative h-[46rem] w-full bg-[url('/background.jpg')] bg-cover">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Content */}
        <div className="relative z-10 text-white text-center h-[50rem] flex flex-col justify-center items-center">
          <div>
            <h1 className="text-5xl">Gdańska Szkoła Fechtunku</h1>
            <h2 className="text-4xl mt-3">im. Piotra z Gdańska</h2>
          </div>
          <div className="pt-10">
            <p className="text-2xl">Dołącz do nas już dziś!</p>
            <button className="mt-3 uppercase bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Zapisz się!
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-500 h-[15] w-full bg-repeat pt-16 pb-16 pl-96 pr-96">
        <h3 className="text-white text-center uppercase text-xl">
          Kimkolwiek jesteś, mężczyzną czy kobietą, osobą silną czy słabą,
          zdrową czy chorą... Wszystkie te rzeczy liczą się mniej niż to, co
          masz w sercu. Jeśli masz duszę wojownika, jesteś wojownikiem. Te inne
          rzeczy to szkło, które otacza lampę, a ty jesteś światłem w środku.
        </h3>
      </div>
      <div className="pt-24 pb-24 pl-96 pr-96">
        <div className="flex">
          <div>
            <h2 className="text-5xl pb-4">Kim jesteśmy? Czym się zajmujemy?</h2>
            <p className="text-2xl pb-8">
              Czyli kilkasłów o Gdańskiej Szkole Fechtunku.
            </p>
            <p>
              Jesteśmy szkołą Dawnych Europejskich Sztuk Walki i
              rekonstruktorami tradycji średniowiecznego Gdańska. Wprowadzimy
              Was w tajniki walki bronią białą, w tym głównie długiego miecza
              oraz szabli historycznej, choć znajdą się również miłośnicy
              rapiera oraz sztyletu. Nasza szkoła jest przyjaznym miejscem dla
              każdego, kto pragnie rozpocząć swoją przygodę z szermierką,
              poszerzyć wiedzę historyczną lub stać się częścią ciekawej
              społeczności. Tak więc jeśli wiesz, jak to jest chwycić za patyk i
              udawać, że to miecz, wpadnij na trening - może nosisz w sobie
              ducha fechtunku!
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
      <div className="bg-gray-500 h-[15] w-full bg-repeat pt-16 pb-16 pl-96 pr-96">
        <h3 className="text-white text-center text-xl uppercase">
          Nie możesz iść przez świat i udawać. Czasem musisz stać się
          wojownikiem. Ładuj i pal i broń swoich praw jako człowieka: w
          systemie, który jest zły, nawet jeśli ryzykujesz uwięzieniem, trzeba
          się szybko zjednoczyć. Rozumiesz? Na tym to polega.
        </h3>
      </div>
      <div className="pt-24 pb-24 pl-96 pr-96 w-full">
        <Contact />
      </div>
      <div className="pt-24 pb-24 pl-96 pr-96 w-full">Stopka</div>
    </main>
  );
}
