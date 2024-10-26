import React, { useState, useEffect } from "react";
import Dumbell from "../../assets/icons/weightlifting.png";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Adjust the threshold based on your design
      if (scrollY > 1000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-4 right-4 ring-slate-300 bg-primaryYellow text-black px-4 py-4 rounded-full shadow-md  focus:outline-none focus:ring focus:border-black animate-bounce outline-black"
          onClick={scrollToTop}
        >
          <img src={Dumbell} alt="" className="w-8 h-8" />
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
