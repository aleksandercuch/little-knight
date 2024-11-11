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
    <div>
      <h2 className="text-5xl pb-4">Kontakt</h2>
      <p className="text-2xl pb-8">Napisz do nas!</p>
      <div className="flex">
        <div>
          <p className="pb-3.5">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />{" "}
            <span>+48 195 067 343</span>
          </p>
          <p className="pb-3.5">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />{" "}
            <span>ciubaryk.prime@gmail.com</span>
          </p>
          <p className="pb-3.5">
            <FontAwesomeIcon icon={faLocationDot} className="mr-2" />{" "}
            <span>ul. Ciubarna 32, 80-120 Gdańsk</span>
          </p>
          <p className="pb-3.5">Odwiedź nasze social media:</p>
          <p>
            <FontAwesomeIcon icon={faFacebook} size="2x" className="mr-2" />{" "}
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </p>
        </div>
        formularz do pisania maila
      </div>
    </div>
  );
};
