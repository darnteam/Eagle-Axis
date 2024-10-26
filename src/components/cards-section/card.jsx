import React from "react";

import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="transition-all 
    duration-300 md:hover:scale-[1.1] 
    md:hover:mx-10 md:hover:shadow-lg 
    bg-primaryYellow md:hover:shadow-secondaryYellow relative 
    border rounded-2xl border-primaryYellow 
    my-6 w-80 h-56 flex flex-col justify-center items-center
    "
    
    >
      
      <div className="pt-6 pb-8 py-8 w-full h-full rounded-2xl"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 10, .85) 50%, rgba(0, 0, 0, 1)), url(${props.backgroundImage})`,
        backgroundPosition: "0 0, 50% 85%",
        backgroundRepeat: "repeat, no-repeat",
        backgroundSize: "auto, cover",
        backgroundAttachment: "scroll, fixed",}}>
          {/* <img
        src={props.icon}
        alt="icon"
        className="self-start mx-auto -mt-16  w-16 h-16 border border-zinc-500 rounded-lg bg-black p-2"
      /> */}

          <div className="text-center">
          <h1
            
            className="inline-block font-black  rounded-2xl   w-50 text-primaryYellow text-6xl hover:shadow-md transition duration-300 text-center"
          >
            {props.title}
          </h1>
        </div>
        <div className="text-center">
          <h1
            style={{ fontFamily: "Comfortaa" }}
            to="/"
            className="inline-block font-bold uppercase rounded-2xl   w-50 text-white hover:shadow-md transition duration-300 text-center"
          >
            {props.button_txt}
          </h1>
        </div>
        </div>

        
      </div>
  );
};

export default Card;
