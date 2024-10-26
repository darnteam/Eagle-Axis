import React from "react";
import { useState } from "react";

const AminitiesCard = (props) => {
  return (
    <div className="relative group overflow-hidden rounded-lg mx-2">
      <img
        src={props.image_path}
        alt="Hovered Image"
        className=" h-96 w-96  transition-transform duration-300 object-cover transform  group-hover:grayscale-0"
      />

      <a
        style={{ fontFamily: "Comfortaa" }}
        href="/ourgallery"
        className="absolute inset-0 flex items-center justify-center bg-zinc-900 text-black px-4 py-2  transition-transform duration-300 transform opacity-70  group-hover:translate-x-0 translate-x-full"
      >
        <span className="text-white text-3xl">{props.buttonLabel}</span>
      </a>
    </div>
  );
};

export default AminitiesCard;
