import React from "react";


const IgShowcase = () => {

  return (
    <div className="flex flex-col justify-center items-center mt-12 mb-12 lg:mt-20 lg:mb-20">
      <div className="w-full h-72 md:h-96  relative flex justify-center items-center bg-black bg-opacity-80">
        <div className="w-full h-full flex flex-col justify-center items-center space-y-4 md:space-y-6 px-4">
          <span
            style={{ fontFamily: "Comfortaa" }}
            className="text-white text-3xl md:text-5xl lg:text-7xl text-center w-full md:w-3/4 lg:w-1/2"
          >
            WE ARE READY <br />
            <span
              style={{ fontFamily: "Comfortaa" }}
              className="text-primaryYellow text-3xl md:text-5xl lg:text-7xl"
            >
              24 HOURS
            </span>{" "}
            TO HELP YOU.
          </span>
        </div>
      </div>
    </div>
  );
};

export default IgShowcase;
