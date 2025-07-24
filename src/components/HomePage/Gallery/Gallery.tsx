"use client";
import Image from "next/image";
import { ImageCard } from "./ImageCard";

export const Gallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <ImageCard
        imgSrc={"/longsword.jpg"}
        title={"Treningi miecza długiego"}
        description={"Rodowita sztuka walki każdego Gdańszczanina"}
      />
      <ImageCard
        imgSrc={"/turniej.png"}
        title={"Treningi szabli historycznej"}
        description={"Lekcje władania bronią jednoręczną"}
      />
      <ImageCard
        imgSrc={"/lecture.jpg"}
        title={"Wykłady"}
        description={"Na temat historii i średniowiecznych tradycji Gdańska"}
      />
      <ImageCard
        imgSrc={"/show.jpg"}
        title={"Żywe lekcje historii"}
        description={"Pokazy sztuki fechtunku poprzedzone krótkim wykładem"}
      />
    </div>
  );
};
