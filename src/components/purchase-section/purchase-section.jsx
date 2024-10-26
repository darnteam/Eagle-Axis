import React from "react";
import PurchaseBanner from "../../assets/images/purchase-banner.jpg";

const PurchaseSection = () => {
  return (
    <div className="flex h-96 justify-center items-center flex-col mb-32">
      <div
        className="w-full h-screen  relative bg-opacity-0"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 10, .85), rgba(10, 10, 10, .85)), url(${PurchaseBanner})`,
          backgroundPosition: "0 0, 50% 85%",
          backgroundRepeat: "repeat, no-repeat",
          backgroundSize: "auto, cover",
          backgroundAttachment: "scroll, fixed",
        }}
      >
        <div className="w-full h-full  flex flex-col justify-center space-y-6 items-center backdrop-brightness-50">
          <div className="w-[2px] h-20 bg-white block mt-20"></div>
          <h1
            style={{ fontFamily: "Comfortaa" }}
            className="text-4xl text-white font-bold"
          >
            MEMBERSHIP OPTIONS
          </h1>
          <p
            style={{ fontFamily: "Comfortaa" }}
            className="text-md text-white text-center"
          >
            Individualized Programs. Dedicated Trainers. Zero Pretense.
          </p>
          <div className="pb-16 pt-2">
            <a
              style={{ fontFamily: "Comfortaa" }}
              href="/"
              className="inline-block bg-transparent border-white border-[2px] hover:text-black  rounded-2xl px-4 py-2 mt-6 w-auto text-white hover:shadow-md hover:bg-white transition duration-300 text-center"
            >
              REQUEST INFO&PRICING
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseSection;
