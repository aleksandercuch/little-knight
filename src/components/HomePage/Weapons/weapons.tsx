"use client";
import Image from "next/image";

const WeaponCard = ({ title, description, image }: any) => {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border border-white/10
        bg-neutral-900
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        <div
          className="
          absolute inset-0
          bg-gradient-to-t
          from-black via-black/40 to-transparent
        "
        />
      </div>

      <div className="absolute bottom-0 left-0 p-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white/80">
          {title}
        </h2>

        <p className="text-white/80 text-sm md:text-base max-w-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export const Weapons = () => {
  return (
    <section className="w-full py-6 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-6
          md:gap-32
        "
        >
          <WeaponCard
            title="Miecz długi"
            image="/sword.jpg"
            description="Historyczna broń dwuręczna, oferująca ogromną różnorodność technik ofensywnych i defensywnych."
          />

          <WeaponCard
            title="Szabla bojowa"
            image="/szabla1.webp"
            description="Narzędzie walki łączące w sobie finezję, szybkość i elegancję... Oraz ten niepowtarzalny polski charakter."
          />
        </div>
      </div>
    </section>
  );
};
