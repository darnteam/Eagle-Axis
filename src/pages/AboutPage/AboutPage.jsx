import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from 'react-router-dom';

import IgShowcase from "../../components/ig-showcase/ig-showcase";
import KamioniMalet from "../../assets/images/KamioniDheMalet.jpg";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  const handleApplyClick = () => {
    navigate('/', { state: { scrollToCards: true } });
  };

  return (
    <div>
      <div className="lg:mb-0">
        <div
          className="w-full h-auto lg:h-screen relative bg-opacity-0 box-border"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 10, .7) 50%, rgba(0, 0, 0, .6)), url(${KamioniMalet})`,
            backgroundPosition: "0 0, 50% 85%",
            backgroundRepeat: "repeat, no-repeat",
            backgroundSize: "auto, cover",
            backgroundAttachment: "scroll, fixed",
          }}
        >
          <div className="max-w-[1280px] mx-auto h-64 md:h-80 lg:h-96 pt-24 md:pt-36 lg:pt-44">
            <div
              className={`flex items-center w-full transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 lg:translate-y-full"
              }`}
            >
              <div className="flex-grow border-t border-primaryYellow"></div>
              <h1
                style={{ fontFamily: "Comfortaa" }}
                className="px-4 text-xl md:text-2xl lg:text-3xl font-semibold uppercase text-center text-white"
              >
                A trusted name in trucking
              </h1>
              <div className="flex-grow border-t border-primaryYellow"></div>
            </div>
            <p
              style={{ fontFamily: "Comfortaa" }}
              className={`text-center uppercase w-full mx-auto mt-10 md:mt-16 lg:mt-20 py-2 text-3xl md:text-4xl lg:text-5xl px-4 duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 lg:translate-y-full"
              }`}
            >
              About Eagle Axis
            </p>
          </div>
          <div
            ref={ref}
            className="flex flex-col items-center  h-full max-w-full mx-auto px-4 -mt-12 lg:-mt-16"
          >
            <div
              className={`duration-[1500ms] flex flex-col items-center justify-center ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 lg:-translate-x-10"
              }`}
            >
              <p
                style={{ fontFamily: "Comfortaa" }}
                className="mt-12 md:mt-20 lg:mt-24 w-full md:w-3/4 lg:w-1/2 text-center text-sm md:text-lg lg:text-xl text-white mx-auto"
              >
                Eagle Axis is a growing trucking company, with a 50-strong fleet
                of company-owned trucks and owner-operated trucks, serving all
                48 states with a focus on the Midwest, South, and East Coast.
                Our name reflects our mission: to guard and protect our valued
                drivers, the heart and soul of our brand. We know that our
                success relies on recruiting and retaining the best drivers on
                the road. We give them what they need to succeed, including
                well-managed dispatching, expert safety training, round-the-clock
                support, and — most importantly — fair and transparent
                compensation. Join our team and become part of a movement to
                transform the trucking industry.
              </p>
              <button
                onClick={handleApplyClick}
                style={{ fontFamily: "Comfortaa" }}
                className="btn inline-block w-fit uppercase mt-8 mb-6 md:mt-10 px-8 md:px-10 lg:px-12 py-2 md:py-3 text-white rounded-xl bg-primaryYellow text-lg md:text-xl font-semibold transform transition-all border-[1px] border-transparent duration-300 ease-in-out hover:scale-105 hover:bg-transparent hover:border-primaryYellow hover:text-primaryYellow"
              >
                Apply for a job
              </button>
            </div>
          </div>
        </div>
      </div>
      <IgShowcase />
      <div className="w-full h-4 bg-primaryYellow"></div>
    </div>
  );
};

export default AboutPage;
