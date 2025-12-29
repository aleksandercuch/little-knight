"use client";
import Image from "next/image";

export const About = () => {
  return (
    <div className="flex">
      <div>
        <h2 className="text-5xl pb-4">Kim jesteśmy? Czym się zajmujemy?</h2>
        <p className="text-2xl pb-8">
          Czyli kilkasłów o Gdańskiej Szkole Fechtunku.
        </p>
        <p>
          Jesteśmy szkołą Dawnych Europejskich Sztuk Walki i rekonstruktorami
          tradycji średniowiecznego Gdańska. Wprowadzimy Was w tajniki walki
          bronią białą, w tym głównie długiego miecza oraz szabli historycznej,
          choć znajdą się również miłośnicy rapiera oraz sztyletu. Nasza szkoła
          jest przyjaznym miejscem dla każdego, kto pragnie rozpocząć swoją
          przygodę z szermierką, poszerzyć wiedzę historyczną lub stać się
          częścią ciekawej społeczności. Tak więc jeśli wiesz, jak to jest
          chwycić za patyk i udawać, że to miecz, wpadnij na trening - może
          nosisz w sobie ducha fechtunku!
        </p>
      </div>
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/logo_white.png"
        alt="Next.js Logo"
        width={350}
        height={40}
        priority
      />
    </div>
  );
};
