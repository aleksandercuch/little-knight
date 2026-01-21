"use client";

import { useEffect } from "react";

// COMPONENTS
import { Carousel } from "@/components/HomePage/Carousel/Carousel";
import { BulletSection } from "@/components/HomePage/BulletSection/BulletSection";

export default function Page() {
  useEffect(() => {
    import("flowbite");
  }, []);

  return (
    <main className="flex flex-col items-center z-10">
      <Carousel />
      <div className="w-full bg-black text-white px-6 py-20 ">
        <p className="max-w-5xl mx-auto text-center md:text-xl leading-relaxed tracking-widest font-light text-sm font-lato">
          Gdańska Szkoła Fechtunku to miejsce, gdzie pasja do szermierki
          historycznej łączy się z realnym rozwojem sprawności, koncentracji i
          charakteru. Oferujemy zajęcia z technik historycznych niezależnie od
          poziomu zaawansowania. Przyjdź i sprawdź jak zapomniane techniki
          dawnych mistrzów łączą się z współczesną metodyką sportową. Dołącz do
          nas i odkryj historię na nowo!
        </p>
      </div>
      <BulletSection />

      {/* <div className="bg-black/50 text-white px-6 py-16 leading-relaxed text-lg font-mono w-full">
        <About />
      </div> */}
    </main>
  );
}
