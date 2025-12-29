"use client";
import Image from "next/image";

// COMPONENTS
import { FAQ } from "@/components/HomePage/Faq/Faq";
import { Gallery } from "@/components/HomePage/Gallery/Gallery";
import { Contact } from "@/components/HomePage/Contact/Contact";
import { Timetable } from "@/components/HomePage/Timetable/Timetable";
import "flowbite";
import { useEffect } from "react";
import { Prices } from "@/components/HomePage/Prices/Prices";
import { About } from "@/components/HomePage/About/About";
import { Carousel } from "@/components/HomePage/Carousel/Carousel";

export default function Page() {
  useEffect(() => {
    import("flowbite");
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center  z-10">
      <Carousel />

      <div className="bg-front-bg bg-cover bg-center min-h-screen w-full">
        <div
          id="about"
          className="pt-24 pb-24 pl-96 pr-96 bg-black bg-opacity-35 text-white"
        >
          <About />
        </div>

        {/* <div className="w-full">
        <Gallery />
      </div> */}
        <div
          id="timetable"
          className="pt-24 pb-24 pl-96 pr-96 w-ful text-white"
        >
          <Timetable />
        </div>
        <div className="pt-24 pb-24 pl-96 pr-96 w-full text-white bg-black bg-opacity-35">
          <Prices />
        </div>
        {/* <div className="bg-gray-500 h-[15] w-full bg-repeat pt-16 pb-16 pl-96 pr-96">
        <h3 className="text-white text-center text-xl uppercase">
          Nie możesz iść przez świat i udawać. Czasem musisz stać się
          wojownikiem. Ładuj i pal i broń swoich praw jako człowieka: w
          systemie, który jest zły, nawet jeśli ryzykujesz uwięzieniem, trzeba
          się szybko zjednoczyć. Rozumiesz? Na tym to polega.
        </h3>
      </div> */}
        {/* <div className="pt-24 pb-24 pl-96 pr-96 w-full">
        <FAQ />
      </div> */}
        <div id="contact" className="pt-24 pb-24  text-white">
          <Contact />
        </div>
        <footer className="pt-10 pb-10 pl-96 pr-96 w-full text-center text-white bg-black bg-opacity-35">
          <p>&copy; 2025 Gdańska Szkoła Fechtunku. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
