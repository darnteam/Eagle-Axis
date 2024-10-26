import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import instagram from "../../assets/icons/instagram.png"
import facebook from "../../assets/icons/facebook.png"
import phone from "../../assets/icons/phone-2.png"


const HistoryCard = ({ imageSrc, title, date, paragraph, reverseOrder }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.7, // Trigger when 70% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`flex items-center   justify-center h-[650px]  rounded-xl  border-gray-800 ${
        reverseOrder ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse"
      }`}
    >
      {/* Image */}
      <div
        className={`flex w-[60%] h-[60%] m-0 md:m-0 md:w-[40%] md:h-[85%]  ${
          !reverseOrder ? "justify-start" : "justify-end"
        } duration-300 ${isVisible ? "opacity-100" : "opacity-0"} ${
          reverseOrder
            ? isVisible
              ? "md:translate-x-0"
              : "md:translate-x-20"
            : isVisible
            ? "md:translate-x-0"
            : "md:-translate-x-20"
        }`}
      >
        <img
          src={imageSrc}
          alt="Timeline Image"
          className="object-cover w-[600px] h-[350px] md:h-[550px] md:w-[600px] mr-0 rounded"
        />
      </div>

      {/* Vertical line with circle */}
      <div className="relative flex items-center justify-center h-0.5 w-96 md:w-0.5 md:h-96 bg-secondaryYellow m-12">
        <div
          className={` transition-colors duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
            isVisible ? `bg-primaryYellow ` : "bg-richBlack"
          } w-12 h-12 rounded-full border-4 border-primaryYellow`}
        ></div>
      </div>

      {/* Right side with title, date, and paragraph */}
      <div
        className={`flex-none w-[70%]  md:w-[40%] duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          reverseOrder
            ? isVisible
              ? "md:translate-x-0"
              : "md:-translate-x-20"
            : isVisible
            ? "md:translate-x-0"
            : "md:translate-x-20"
        }`}
      >
        <div className="flex flex-row justify-between mb-3">
          <div
            style={{ fontFamily: "Comfortaa" }}
            className="text-2xl md:text-4xl font-bold mb-2 text-primaryYellow"
          >
            {title}
          </div>
          <div
            style={{ fontFamily: "Comfortaa" }}
            className="text-sm md:text-md text-gray-500 mb-2 italic uppercase text-right"
          >
            {date}
          </div>
        </div>
        <p className=" text-sm md:text-base overflow-wrap break-word max-w-ful">
          {paragraph}
        </p>
        <div className=" absulote bottom-0 mt-4">
          <div className="flex flex-row items-center">
            <a href="">
              <img 
              src={instagram}
              className="opacity-40 hover:opacity-100 hover cursor-pointer w-8 h-8 m-2"
              ></img></a>
            <a href="">
              <img 
              src={facebook}
              className="opacity-40 hover:opacity-100 hover cursor-pointer w-8 h-8 m-2"
              ></img></a>
            <a href="tel:+389">
              <img 
              src={phone}
              className="opacity-40 hover:opacity-100 hover cursor-pointer w-8 h-8 m-2"
              ></img></a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
