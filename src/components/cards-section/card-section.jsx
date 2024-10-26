import React, { useState, useEffect, Fragment } from "react";
import Card from "../cards-section/card";
import Handshake from "../../assets/icons/handshake.png";
import Bicycle from "../../assets/icons/bicycle.png";
import Gymnastics from "../../assets/icons/gymnastic-rings.png";
import BgBanner from "../../assets/images/california-2.jpeg";
import BgBanner1 from "../../assets/images/california-3.jpeg";
import BgBanner2 from "../../assets/images/california-4.jpeg";
import BgBanner3 from "../../assets/images/california-5.jpeg";
import NumberFlipper from "../NumberFlipper/numberFlipper";
import Years25Icon from "../../assets/icons/25-years.png";
import GuaranteeIcon from "../../assets/icons/protection-guarantee.png";
import Support247Icon from "../../assets/icons/24-hours-support.png";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const CardSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 70% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [inView]); // Run only when 'inView' changes

  const [t, i18next] = useTranslation("global");

  return (
    <div
      className="w-full h-auto lg:h-screen  relative bg-opacity-0 box-border"
      style={{
        // backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 10, .85) 50%, rgba(0, 0, 0, 1)), url(${BgBanner})`,
        backgroundColor: "rgba(0, 0, 0, 1)",
        backgroundPosition: "0 0, 50% 85%",
        backgroundRepeat: "repeat, no-repeat",
        backgroundSize: "auto, cover",
        backgroundAttachment: "scroll, fixed",
      }}
    >
      <div className="max-w-[1280px] mx-auto h-96 lg:h-44 pt-36 -pb-24">
        <div
          className={`flex items-center w-full  transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 lg:translate-y-full"
          }`}
        >
          <div className="flex-grow border-t border-primaryYellow"></div>
          <h1
            style={{ fontFamily: "Comfortaa" }}
            className="px-4 text-2xl font-semibold text-center text-white"
          >
            JOIN OUR TEAM
          </h1>
          <div className="flex-grow border-t border-primaryYellow"></div>
        </div>
        <p
          style={{ fontFamily: "Comfortaa" }}
          className={`text-center w-full mx-auto mt-10 py-2 text-5xl px-4 duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 lg:translate-y-full"
          }`}
        >
          PLEASE SELECT YOUR POSITION
        </p>
      </div>
      <div
        ref={ref}
        className="flex md:flex-row flex-col items-center justify-evenly h-full max-w-full mx-auto -mt-16"
      >
        <div
          className={`duration-[1500ms] ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 lg:-translate-x-10"
          }`}
        >
          <Link
            style={{ fontFamily: "Comfortaa" }}
            to={"#apply-now"}
            scrollbehavior="smooth"
            className={`inline-block w-full mt-5 px-12 py-3 text-white rounded-xl bg-primaryYellow text-xl font-semibold transform transition-all border-[1px] border-transparent duration-300 ease-in-out hover:scale-105 hover:bg-transparent hover:border-primaryYellow hover:text-primaryYellow`}
          >
            <span className="inline-block">COMPANY DRIVER</span>
          </Link>
        </div>
        <div
          className={`duration-[2000ms] ${
            isVisible
              ? "opacity-100 translate-x-0 delay-400"
              : "opacity-0 lg:-translate-x-10"
          }`}
        >
          <Link
            style={{ fontFamily: "Comfortaa" }}
            to={"#apply-now"}
            scrollbehavior="smooth"
            className={`inline-block w-full mt-5 px-12 py-3 text-white rounded-xl bg-primaryYellow text-xl font-semibold transform transition-all border-[1px] border-transparent duration-300 ease-in-out hover:scale-105 hover:bg-transparent hover:border-primaryYellow hover:text-primaryYellow`}
          >
            <span className="inline-block">OWNER OPERATOR</span>
          </Link>
        </div>
      </div>

      <div
        className={`-mt-80 max-w-3/5 mx-auto flex flex-row justify-evenly items-center text-center transition-all duration-[2000ms] ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col items-center">
          <img src={Years25Icon} alt="25 years" />
          <span
            style={{ fontFamily: "Comfortaa" }}
            className="mt-8 text-center"
          >
            25+ Years
          </span>
        </div>
        <div className="flex flex-col items-center">
          <img src={GuaranteeIcon} alt="Guarantee Protection" />
          <span
            style={{ fontFamily: "Comfortaa" }}
            className="mt-8 text-center"
          >
            Satisfaction Guaranteed
          </span>
        </div>
        <div className="flex flex-col items-center">
          <img src={Support247Icon} alt="24/7 Support" />
          <span
            style={{ fontFamily: "Comfortaa" }}
            className="mt-8 text-center"
          >
            24/7 Assistance
          </span>
        </div>
      </div>
    </div>
  );
};
export default CardSection;
