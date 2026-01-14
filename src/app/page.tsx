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
    <main className="flex flex-col items-center font-fira z-10">
      <Carousel />
      <div className="w-full bg-black text-white px-6 py-20">
        <p className="max-w-5xl mx-auto text-center text-lg md:text-xl leading-relaxed tracking-wide font-light font-mono">
          Gdańska Szkoła Fechtunku to miesce, gdzie pasja do walki bronią białą
          łączy się z realnym rozwojem sprawności, koncentracji i charakteru.
          Oferujemy zajęcia z technik historycznych tradycyjnie i bez uprzedzeń
          - niezależnie od wieku czy poziomu zaawansowania.
        </p>
      </div>
      <BulletSection />

      {/* <div className="bg-black/50 text-white px-6 py-16 leading-relaxed text-lg font-mono w-full">
        <About />
      </div> */}
    </main>
  );
}
