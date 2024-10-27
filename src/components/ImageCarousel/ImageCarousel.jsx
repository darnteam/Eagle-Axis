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
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    });

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  const [t] = useTranslation("global");

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
            alt="Background"
          />
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
            <div className="px-4 md:px-8 lg:ml-48 text-white text-center lg:text-left">
              <h1
                style={{ fontFamily: "Comfortaa" }}
                className={`w-full lg:w-1/3 uppercase font-black text-opacity-90 text-2xl md:text-3xl lg:text-4xl transition-all duration-1000 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                }`}
              >
                WELCOME TO EAGLE AXIS
              </h1>

              <h1
                style={{ fontFamily: "Comfortaa" }}
                className={`w-full lg:w-1/3 my-4 lg:my-7 uppercase font-black text-opacity-100 text-4xl md:text-5xl lg:text-7xl transition-all duration-[1200ms] ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                }`}
              >
                TRUSTED NAME IN TRUCKING
              </h1>

              <p
                style={{ fontFamily: "Comfortaa" }}
                className={`w-full lg:w-1/3 text-sm md:text-lg lg:text-xl font-light transition-all duration-[1300ms] ${
                  isVisible ? "translate-x-0 opacity-100" : "lg:-translate-x-10 opacity-0"
                }`}
              >
                Eagle Axis is a growing trucking company with a fleet of company-owned trucks
                and owner-operated trucks, serving all 48 states with a focus on the Midwest,
                South, and East Coast.
              </p>

              <div
                className={`w-full lg:w-1/3 mt-6 transition-all duration-[1100ms] ${
                  isVisible ? "translate-x-0 opacity-100" : "lg:-translate-x-10 opacity-0"
                }`}
              >
                <p
                  style={{ fontFamily: "Comfortaa" }}
                  className="mt-8 text-lg md:text-2xl"
                >
                  Are you a truck driver looking for work?
                </p>
                <Link
                  style={{ fontFamily: "Comfortaa" }}
                  to={"#apply-now"}
                  scrollbehavior="smooth"
                  className="inline-block mt-4 px-8 py-2 md:px-12 md:py-3 rounded-xl bg-primaryYellow text-lg md:text-xl font-semibold transform transition-all border border-transparent duration-300 ease-in-out hover:scale-105 hover:bg-transparent hover:border-primaryYellow hover:text-primaryYellow"
                >
                  Apply Now
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
