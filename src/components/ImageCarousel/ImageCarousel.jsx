import React, { useState, useEffect } from "react";
import CaliforniAd from "../../assets/videos/californiaadd.mp4";
// import TruckBackground from "../../assets/images/Kamioni.jpg";
import TruckBackground from "../../assets/images/LandingPageKamionaUsa.jpg";

import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.7,
  });
  const slides = [CaliforniAd];

  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next image
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    });

    return () => clearInterval(interval); // Clean up the interval
  }, [slides.length]);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [inView]); // Run only when 'inView' changes

  const [t] = useTranslation("global"); //Translation usage

  return (
    <div ref={ref} className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute top-0 left-0 w-full h-full"
          style={{
            opacity: index === currentIndex ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        >
          <img
            src={TruckBackground}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
            <div className=" ml-48 text-white">
              <h1
                style={{ fontFamily: "Comfortaa" }}
                className={`w-1/3 text-left uppercase space-x-0 font-black  text-opacity-90 text-2xl transition-all duration-1000 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
              >
                WELCOME TO EAGLE AXIS
              </h1>

              <h1
                style={{ fontFamily: "Comfortaa" }}
                className={` w-1/3 my-7 text-left uppercase space-x-0 font-black text-opacity-100 text-7xl transition-all duration-[1200ms] ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
              >
                TRUSTED NAME IN TRUCKING
              </h1>

              <p
                style={{ fontFamily: "Comfortaa" }}
                className={`w-1/3 text-lg text-white text-left font-light transition-all duration-[1300ms] ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "lg:-translate-x-10 opacity-0"
                }`}
              >
                Eagle Axis is a growing trucking company, with a 50-strong fleet
                of company-owned trucks and owner-operated trucks, serving all
                48 states with focusing mostly on the Midwest, South and East
                coast.
              </p>
              <div
                className={`w-1/3 transition-all duration-[1100ms] ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "lg:-translate-x-10 opacity-0"
                }`}
              >
                <p
                  style={{ fontFamily: "Comfortaa" }}
                  className={`mt-20 w-full text-2xl text-white text-left `}
                >
                  Are you a truck driver looking for work?
                </p>
                <Link
                  style={{ fontFamily: "Comfortaa" }}
                  to={"#apply-now"}
                  scrollbehavior="smooth"
                  className={`inline-block mt-5 px-12 py-3 text-white rounded-xl bg-primaryYellow text-xl font-semibold transform transition-all border-[1px] border-transparent duration-300 ease-in-out hover:scale-105 hover:bg-transparent hover:border-primaryYellow hover:text-primaryYellow`}
                >
                  <span className="inline-block">Appy Now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
