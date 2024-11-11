"use client";
import Image from "next/image";
import { ImageCard } from "./ImageCard";

export const Gallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <ImageCard
        imgSrc={"/dzieci.jpg"}
        title={"Zajęcia dla dzieci"}
        description={"Aktywności rycerskie dla dzieci!"}
      />
      <ImageCard
        imgSrc={"/turniej.png"}
        title={"Pokazy"}
        description={"Propagowanie wiedzy i kultury średniowiecza"}
      />
      <ImageCard
        imgSrc={"/blos.jpg"}
        title={"Blosfechten"}
        description={"Mieszczańska sztuka walki bez zbroi"}
      />
      <ImageCard
        imgSrc={"/knights.webp"}
        title={"Karniszfechten"}
        description={"Sztuka opisująca walkę w pełnym opancerzeniu płytowym"}
      />
    </div>
  );
};
