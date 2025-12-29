"use client";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export const Contact = () => {
  return (
    <>
      <div className="relative flex justify-center -mt-64">
        <Image
          className="relative"
          src="/logo_white.png"
          alt="Logo"
          width={200}
          height={40}
          priority
        />
      </div>

      <div className="uppercase w-full flex justify-center mt-6">
        <div className="grid grid-cols-[auto,1fr] gap-x-6 gap-y-4 items-center text-center">
          <FontAwesomeIcon icon={faPhone} className="text-6xl" />
          <p className="text-6xl text-start">+48 505 495 626</p>

          <FontAwesomeIcon icon={faEnvelope} className="text-6xl" />
          <p className="text-2xl text-start">
            gdanska.szkola.fechtunku@gmail.com
          </p>

          <FontAwesomeIcon icon={faLocationDot} className="text-6xl" />
          <p className="text-2xl text-start">ul. Malarzy 86B, 80-864 Gdańsk</p>

          <FontAwesomeIcon icon={faFacebook} className="text-6xl" />
          <a
            href="https://www.facebook.com/profile.php?id=61576826655337"
            className="text-2xl cursor-pointer text-start"
          >
            FB: Gdanska Szkola Fechtunku
          </a>

          <FontAwesomeIcon icon={faInstagram} className="text-6xl" />
          <a
            href="https://www.instagram.com/gdanskaszkolafechtunku?igsh=MWU1NGk1azQydHdwMQ=="
            className="text-2xl cursor-pointer text-start"
          >
            IG: GdanskaSzkolaFechtunku
          </a>
        </div>
      </div>
    </>
  );
};
