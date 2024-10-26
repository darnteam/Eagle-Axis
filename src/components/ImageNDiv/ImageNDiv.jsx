import React from "react";
import { Link } from "react-router-dom";

const ImageNDiv = (props) => {
  const iconCount = 5;
  return (
    <div className="md:flex md:flex-row flex flex-col md:bg-gradient-to-t from-black via-zinc-900 to-zinc-800  lg:mt-0  items-center mb-32 w-full h-auto">
      <img
        src={props.image_path}
        alt="im"
        className="md:w-1/2 md:h-auto md:rounded-tr-3xl md:rounded-none flex flex-col rounded-3xl my-8 w-[400px] overflow-hidden"
      ></img>
      <div className="flex flex-col justify-center mx-auto w-96 text-center">
        <h2
          style={{ fontFamily: "Comfortaa" }}
          className="text-5xl text-left text-primaryYellow font-normal mb-4"
        >
          {props.title}
        </h2>
        <p className="text-left font-extralight mb-5">{props.text}</p>
        {/* <Link
          style={{ fontFamily: "Comfortaa" }}
          to="/"
          className="inline-block hover:bg-white hover:text-zinc-800 font-bold  border-primaryYellow border-[1.5px] rounded-2xl p-4 mt-6 w-44 text-white hover:shadow-md  transition duration-300 text-center"
        >
          {props.button_txt}
        </Link> */}
      </div>
    </div>
  );
};
export default ImageNDiv;
