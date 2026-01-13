"use client";

import { useEffect } from "react";

// COMPONENTS
import { Carousel } from "@/components/HomePage/Carousel/Carousel";
import { About } from "@/components/HomePage/About/About";

export default function Page() {
  useEffect(() => {
    import("flowbite");
  }, []);
  return (
    <main className="flex flex-col items-center font-fira z-10">
      <Carousel />
      <div className="bg-black/50 text-white px-6 py-16 leading-relaxed text-lg font-mono w-full">
        <About />
      </div>
    </main>
  );
}
