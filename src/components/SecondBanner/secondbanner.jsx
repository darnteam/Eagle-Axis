import React from "react";
import PurchaseBanner from "../../assets/images/purchase-banner.jpg";

const secondbanner = (props) => {
  return (
    <div className="flex h-screen justify-center items-center flex-col mb-32 mt-0 pt-0">
      <div
        className="w-full h-screen  relative bg-opacity-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 10, .85) 50%, rgba(0, 0, 0, 1)), url(${props.image})`,
          backgroundPosition: "0 0, 50% 85%",
          backgroundRepeat: "repeat, no-repeat",
          backgroundSize: "auto, cover",
          backgroundAttachment: "scroll, fixed",
        }}
      >
        <div className="w-full h-full  flex flex-col justify-center space-y-6 items-center backdrop-brightness-50">
          <h1
            style={{ fontFamily: "Comfortaa" }}
            className="text-4xl text-white"
          >
            {props.page}
          </h1>
          <p className="text-2xl text-white text-center w-[60%] italic font-light">
            {props.pagedesc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default secondbanner;
