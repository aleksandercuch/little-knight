"use client";

export const Carousel = () => {
  return (
    <>
      {/* ================= MOBILE VIEW ================= */}
      <div className="block md:hidden relative w-full h-[calc(100vh-112px)] mt-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/knight.jpg')] bg-cover bg-center">
          <div
            className="absolute inset-0 pointer-events-none
            bg-gradient-to-b
            from-black/90
            via-black/30
            to-transparent"
          />
        </div>
      </div>

      {/* ================= DESKTOP VIEW ================= */}
      <div
        id="controls-carousel"
        className="relative w-full hidden md:block"
        data-carousel="static"
      >
        <div className="relative h-[calc(100vh-112px)] mt-28 overflow-hidden rounded-lg">
          {/* SLIDE 1 */}
          <div
            className="hidden duration-700 ease-in-out z-0"
            data-carousel-item="active"
          >
            <div className="absolute inset-0 bg-[url('/background-1.png')] bg-cover bg-center">
              <div
                className="absolute inset-0 pointer-events-none
                bg-gradient-to-b
                from-black/100
                via-black/20
                to-transparent"
              />
            </div>
          </div>

          {/* SLIDE 2 */}
          <div
            className="hidden duration-700 ease-in-out z-0"
            data-carousel-item
          >
            <div className="absolute inset-0 bg-[url('/background-2.png')] bg-cover bg-center">
              <div
                className="absolute inset-0 pointer-events-none
                bg-gradient-to-b
                from-black/100
                via-black/20
                to-transparent"
              />
            </div>
          </div>

          {/* SLIDE 3 */}
          <div
            className="hidden duration-700 ease-in-out z-0"
            data-carousel-item
          >
            <div className="absolute inset-0 bg-[url('/background-1.png')] bg-cover bg-center">
              <div
                className="absolute inset-0 pointer-events-none
                bg-gradient-to-b
                from-black/100
                via-black/20
                to-transparent"
              />
            </div>
          </div>

          {/* SLIDE 4 */}
          <div
            className="hidden duration-700 ease-in-out z-0"
            data-carousel-item
          >
            <div className="absolute inset-0 bg-[url('/background-2.png')] bg-cover bg-center">
              <div
                className="absolute inset-0 pointer-events-none
                bg-gradient-to-b
                from-black/100
                via-black/20
                to-transparent"
              />
            </div>
          </div>
        </div>

        {/* PREVIOUS BUTTON */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
            ‹
          </span>
        </button>

        {/* NEXT BUTTON */}
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
            ›
          </span>
        </button>
      </div>
    </>
  );
};
