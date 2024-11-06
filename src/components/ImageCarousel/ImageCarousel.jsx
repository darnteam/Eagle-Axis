// ImageCarousel.js
import React, { useState, useEffect } from "react";
import TruckBackground from "../../assets/images/LandingPageKamionaUsa.jpg";
import { useInView } from "react-intersection-observer";

const ImageCarousel = ({ scrollToCardSection }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  const slides = [TruckBackground];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    });
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

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
            <div className="px-4 sm:px-6 md:px-12 lg:px-16 mt-20 text-white text-center lg:text-left">
              <h1
                style={{ fontFamily: "Comfortaa" }}
                className={`w-full md:w-2/3 lg:w-2/3 uppercase font-black text-opacity-90 text-2xl sm:text-3xl md:text-4xl lg:text-5xl transition-all duration-1000 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                }`}
              >
                Eagle Axis  
              </h1>

              <h1
                style={{ fontFamily: "Comfortaa" }}
                className={`w-full md:w-2/3 lg:w-[40%] my-4 md:my-6 lg:my-8 uppercase font-black text-opacity-100 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl transition-all duration-[1200ms] ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                }`}
              >
                Where Your Journey Begins
              </h1>

              <p
                style={{ fontFamily: "Comfortaa" }}
                className={`w-full md:w-2/3 lg:w-1/3 text-sm sm:text-base md:text-lg lg:text-xl font-light transition-all duration-[1300ms] ${
                  isVisible ? "translate-x-0 opacity-100" : "lg:-translate-x-10 opacity-0"
                }`}
              >
                Looking to start or revamp your driving career? Eagle Axis offers the support, training, and opportunities to put you on the path to success. Join us and let’s begin the journey together!
              </p>

              <div
                className={`w-full md:w-2/3 lg:w-1/3 mt-4 md:mt-6 lg:mt-8 transition-all duration-[1100ms] ${
                  isVisible ? "translate-x-0 opacity-100" : "lg:-translate-x-10 opacity-0"
                }`}
              >
                <p
                  style={{ fontFamily: "Comfortaa" }}
                  className="mt-4 sm:mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl"
                >
                  
                </p>
                <button
                  onClick={scrollToCardSection} // Use the scroll function here
                  style={{ fontFamily: "Comfortaa" }}
                  className="inline-block mt-4 px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-2 md:py-3 rounded-xl bg-primaryYellow text-lg sm:text-xl md:text-2xl font-semibold transform transition-all border border-transparent duration-300 ease-in-out hover:scale-105 hover:bg-transparent hover:border-primaryYellow hover:text-primaryYellow"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
