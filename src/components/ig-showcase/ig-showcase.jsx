import React from "react";
import TruckBg from "../../assets/images/247Section.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const IgShowcase = () => {
  const [t] = useTranslation("global");
  return (
    <div className="flex h-96 justify-center items-center flex-col mt-20 mb-20 lg:mt-12 lg:mb-12">
      <div
        className="w-full h-screen  relative bg-opacity-0"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 10, .45), rgba(10, 10, 10, .85))`,
          backgroundPosition: "0 0, 50% 85%",
          backgroundRepeat: "repeat, no-repeat",
          backgroundSize: "auto, cover",
          backgroundAttachment: "scroll, fixed",
        }}
      >
        <div className="w-full h-full  flex flex-col justify-center space-y-6 items-center backdrop-brightness-50">
          <span style={{ fontFamily: "Comfortaa" }} className="text-white text-7xl w-1/2 text-center">
            WE ARE READY <br />{" "}
            <span style={{ fontFamily: "Comfortaa" }} className="text-primaryYellow text-7xl text-center">
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
