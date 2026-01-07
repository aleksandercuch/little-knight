"use client";

import { useEffect } from "react";

// COMPONENTS
import { Carousel } from "@/components/HomePage/Carousel/Carousel";

export default function Page() {
  useEffect(() => {
    import("flowbite");
  }, []);
  return (
    <main className="flex flex-col items-center font-fira z-10 h-screen">
      <Carousel />
    </main>
  );
}
