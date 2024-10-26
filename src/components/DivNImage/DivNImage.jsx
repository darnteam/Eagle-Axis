import React from "react";
import { Link } from "react-router-dom";

const DivNImage = (props) => {
  return (
    <div className="md:flex md:flex-row flex flex-col md:bg-gradient-to-b from-black via-zinc-900 to-zinc-800 mt-20 items-center w-full h-1/4">
      <div className="flex flex-col justify-center mx-auto w-96 text-center">
        <h2
          style={{ fontFamily: "Comfortaa" }}
          className="text-5xl text-left font-normal mb-4 text-primaryYellow"
        >
          {props.title}
        </h2>
        <p className="text-left font-extralight mb-5">{props.text}</p>
        {/* <Link
          to="/"
          style={{ fontFamily: "Comfortaa" }}
          className="inline-block hover:bg-white hover:text-zinc-800 font-bold  border-primaryYellow border-[1.5px] rounded-2xl p-4 mt-6 w-44 text-white hover:shadow-md  transition duration-300 text-center"
        >
          {props.button_txt}
        </Link> */}
      </div>

      <img
        src={props.image_path}
        alt="im"
        className="md:w-1/2 md:h-auto w-[400px] md:rounded-bl-3xl md:rounded-none  rounded-3xl mt-8 overflow-hidden"
      ></img>
    </div>
  );
};
export default DivNImage;
