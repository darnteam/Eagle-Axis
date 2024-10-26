import React, { useState, useEffect } from "react";
import AminitiesCard from "./AmenitiesCard";
import Image1 from "../../assets/images/california-3.jpeg";
import Image2 from "../../assets/images/california-11.jpeg";
import Image3 from "../../assets/images/california-5.jpeg";
import Image4 from "../../assets/images/california-7.jpeg";
import Image5 from "../../assets/images/califronia-12.jpeg";
import Image6 from "../../assets/images/california-2.jpeg";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

const AminitiesSection = () => {
  const[t,i18next] = useTranslation("global")
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 70% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [inView]); // Run only when 'inView' changes

  return (
    <div
      ref={ref}
      className="flex flex-col items-center space-y-6 h-1/2 my-20 "
    >
      <h1
        style={{ fontFamily: "Comfortaa" }}
        className="font-bold text-4xl duration-1000 text-center"
      >
        {t("AmenitiesSection.title")}
      </h1>
      <p
        style={{ fontFamily: "Comfortaa" }}
        className="lg:text-xl  text-center md:w-[600px] w-[250px]"
      >
        {t("AmenitiesSection.description")}
      </p>
      <div className="w-[2px] h-20 bg-white block"></div>
      {/* Desktop */}
      <div
        className={`lg:flex flex-row  duration-[2000ms] hidden  ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${isVisible ? "translate-x-0" : "translate-x-20"}`}
      >
        <AminitiesCard image_path={Image1} buttonLabel="Fitness" />
        <AminitiesCard image_path={Image2} buttonLabel="Cardio" />
        <AminitiesCard image_path={Image3} buttonLabel="MMA" />
      </div>
      <div
        className={`lg:flex flex-row duration-[2500ms] hidden ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${isVisible ? "translate-x-0" : "-translate-x-60"}`}
      >
        <AminitiesCard image_path={Image4} buttonLabel="Cross Fit" />
        <AminitiesCard image_path={Image5} buttonLabel="Boxing" />
        <AminitiesCard image_path={Image6} buttonLabel="Stretching" />
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex  justify-between w-full">
      <div className="w-[50%]"><AminitiesCard image_path={Image1} buttonLabel="Fitness" /></div>
      <div className="w-[50%]"><AminitiesCard image_path={Image2} buttonLabel="Cardio" /></div>
      </div>
      <div className="lg:hidden flex  justify-between w-full">
      <div className="w-[50%]"><AminitiesCard image_path={Image3} buttonLabel="MMA" /></div>
      <div className="w-[50%]"><AminitiesCard image_path={Image4} buttonLabel="Cross Fit" /></div>
      </div>
      <div className="lg:hidden flex  justify-between w-full">
      <div className="w-[50%]"><AminitiesCard image_path={Image5} buttonLabel="Boxing" /></div>
      <div className="w-[50%]"><AminitiesCard image_path={Image6} buttonLabel="Streching" /></div>
      </div>
    </div>
  );
};

export default AminitiesSection;
