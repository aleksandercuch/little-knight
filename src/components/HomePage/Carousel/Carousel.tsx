"use client";

export const Carousel = () => {
  return (
    <div
      id="controls-carousel"
      className="relative w-full"
      data-carousel="static"
    >
      <div className="relative h-[calc(100vh-112px)] mt-28 overflow-hidden rounded-lg">
        <div
          className="hidden duration-700 ease-in-out z-0"
          data-carousel-item="active"
        >
          <div className="absolute inset-0 bg-[url('/background-2.png')] bg-cover bg-center">
            <div
              className="absolute inset-0 pointer-events-none
        bg-gradient-to-b
        from-black/100
        via-black/20
        to-transparent
      "
            />
          </div>
        </div>
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
        to-transparent
      "
            />
          </div>
        </div>
        <div
          className="hidden duration-700 ease-in-out z-0"
          data-carousel-item="active"
        >
          <div className="absolute inset-0 bg-[url('/background-2.png')] bg-cover bg-center">
            <div
              className="absolute inset-0 pointer-events-none
        bg-gradient-to-b
        from-black/100
        via-black/20
        to-transparent
      "
            />
          </div>
        </div>
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
        to-transparent
      "
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
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
          ‹
        </span>
      </button>

      {/* NEXT BUTTON */}
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
          ›
        </span>
      </button>
    </div>
  );
};
