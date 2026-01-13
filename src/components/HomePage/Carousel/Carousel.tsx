"use client";

import { useEffect, useState } from "react";

const slidesMobile = ["/sword.jpg", "/hema_fighter.jpg", "/fencer.png"];

const slidesDesktop = [
  "/background-1.png",
  "/background-2.png",
  "/background-1.png",
  "/background-2.png",
];

export const Carousel = () => {
  const [currentSlideMobile, setCurrentSlideMobile] = useState(0);
  const [currentSlideDesktop, setCurrentSlideDesktop] = useState(0);

  // Auto-slide mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideMobile((prev) => (prev + 1) % slidesMobile.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Auto-slide desktop
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideDesktop((prev) => (prev + 1) % slidesDesktop.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  // Slide navigation handlers
  const prevSlide = (isMobile: boolean) => {
    if (isMobile) {
      setCurrentSlideMobile((prev) =>
        prev === 0 ? slidesMobile.length - 1 : prev - 1
      );
    } else {
      setCurrentSlideDesktop((prev) =>
        prev === 0 ? slidesDesktop.length - 1 : prev - 1
      );
    }
  };

  const nextSlide = (isMobile: boolean) => {
    if (isMobile) {
      setCurrentSlideMobile((prev) => (prev + 1) % slidesMobile.length);
    } else {
      setCurrentSlideDesktop((prev) => (prev + 1) % slidesDesktop.length);
    }
  };

  return (
    <>
      {/* ================= MOBILE CAROUSEL ================= */}
      <div className="relative w-full block md:hidden h-[calc(100vh-112px)] mt-28 overflow-hidden">
        {slidesMobile.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center duration-700 ease-in-out ${
              currentSlideMobile === index
                ? "opacity-100 z-10"
                : "opacity-0 z-0"
            }`}
            style={{ backgroundImage: `url(${src})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/30 to-transparent" />
          </div>
        ))}

        {/* Text overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none font-mono">
          <div className="bg-black/50 px-6 py-4 sm:px-10 sm:py-6 rounded-md shadow-lg w-full max-w-4xl">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-center">
              Tutaj przeszłość spotyka się z teraźniejszością
            </h1>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP CAROUSEL ================= */}
      <div className="relative w-full hidden md:block h-[calc(100vh-112px)] mt-28 overflow-hidden rounded-lg">
        {slidesDesktop.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center duration-700 ease-in-out ${
              currentSlideDesktop === index
                ? "opacity-100 z-10"
                : "opacity-0 z-0"
            }`}
            style={{ backgroundImage: `url(${src})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-black/20 to-transparent" />
          </div>
        ))}

        {/* Controls */}
        <button
          onClick={() => prevSlide(false)}
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4"
        >
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white/30">
            ‹
          </span>
        </button>
        <button
          onClick={() => nextSlide(false)}
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4"
        >
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white/30">
            ›
          </span>
        </button>
      </div>
    </>
  );
};
