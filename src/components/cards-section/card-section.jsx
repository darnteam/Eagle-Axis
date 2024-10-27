import React, { useState, useEffect } from "react";

import Years25Icon from "../../assets/icons/25-years.png";
import GuaranteeIcon from "../../assets/icons/protection-guarantee.png";
import Support247Icon from "../../assets/icons/24-hours-support.png";
import { useInView } from "react-intersection-observer";
import { ApplicationModal } from "../ApplicationModal/ApplicationModal";

const CardSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  return (
    <div
      id="apply-now" 
      className="container mx-auto h-auto relative bg-opacity-0 box-border mb-16"
      style={{
        backgroundColor: "rgba(0, 0, 0, 1)",
        backgroundPosition: "0 0, 50% 85%",
        backgroundRepeat: "repeat, no-repeat",
        backgroundSize: "auto, cover",
        backgroundAttachment: "scroll, fixed",
      }}
    >
      <div>
        <div
          className={`flex items-center w-full transition-all duration-1000 mt-32 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
          className={`text-center w-full mx-auto mt-10 py-2 text-3xl md:text-5xl px-4 duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          PLEASE SELECT YOUR POSITION
        </p>
      </div>
      <div
        ref={ref}
        className="flex flex-col md:flex-row items-center justify-evenly h-full max-w-full mx-auto mt-16"
      >
        <div
          className={`duration-[1500ms] ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <ApplicationModal
            position="Company Driver"
            id="companydriver_modal"
          />
        </div>
        <div
          className={`duration-[2000ms] ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <ApplicationModal
            position="Owner Operator"
            id="owneroperator_modal"
          />
        </div>
      </div>

      <div
        className={`mt-20 max-w-3xl mx-auto flex flex-col md:flex-row justify-evenly items-center text-center transition-all duration-[2000ms] ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col items-center">
          <img src={Years25Icon} alt="25 years" className="w-16 h-16" />
          <span
            style={{ fontFamily: "Comfortaa" }}
            className="mt-4 md:mt-8 text-white"
          >
            25+ Years
          </span>
        </div>
        <div className="flex flex-col items-center mt-10 md:mt-0">
          <img src={GuaranteeIcon} alt="Guarantee Protection" className="w-16 h-16" />
          <span
            style={{ fontFamily: "Comfortaa" }}
            className="mt-4 md:mt-8 text-white"
          >
            Satisfaction Guaranteed
          </span>
        </div>
        <div className="flex flex-col items-center mt-10 md:mt-0">
          <img src={Support247Icon} alt="24/7 Support" className="w-16 h-16" />
          <span
            style={{ fontFamily: "Comfortaa" }}
            className="mt-4 md:mt-8 text-white"
          >
            24/7 Assistance
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
