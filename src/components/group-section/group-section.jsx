import React, { useState, useEffect } from "react";
import YogaPic from "../../assets/images/membership-background.jpeg";
import Biceps from "../../assets/icons/biceps.png";
import CheckList from "../../assets/icons/check-list.png";
import Meditation from "../../assets/icons/meditation.png";
import Schedule from "../../assets/icons/schedule.png";
import ServiceCard from "./service-card";
import CaliforniaVideo from "../../assets/videos/CaliforniaVideo.mp4"
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

const GroupSection = () => {
  const [t] = useTranslation("global");
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the component is visible
  });
  const handleVideoClick = (e) => {
    const videoElement = e.target;
    if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
    } else if (videoElement.mozRequestFullScreen) { /* Firefox */
      videoElement.mozRequestFullScreen();
    } else if (videoElement.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      videoElement.webkitRequestFullscreen();
    } else if (videoElement.msRequestFullscreen) { /* IE/Edge */
      videoElement.msRequestFullscreen();
    }
  };

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
      className="container-full flex flex-col bg-transparent max-w-[1280px] mx-auto h-auto lg:h-screen mb-12"
    >
      <div className="flex flex-col items-center space-y-6 h-1/2 mt-12">
        <h1
          style={{ fontFamily: "Comfortaa" }}
          className={`text-4xl duration-1000 font-bold ${
            isVisible ? "opacity-100" : "opacity-0"
          } ${isVisible ? "translate-y-0" : "-translate-y-20"}`}
        >
          {t("GroupSection.title")}
        </h1>
        <p
          style={{ fontFamily: "Comfortaa" }}
          className={`text-xl text-center duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {t("GroupSection.description")}
        </p>
        <div
          className={`w-[2px] h-20 bg-white block duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </div>
      <div className="flex flex-col lg:flex-row flex-wrap justify-between items-start w-full h-1/2 lg:-mt-28">
        <div
          className={`flex flex-col lg:flex-row flex-wrap justify-between w-full lg:w-1/2 h-full transition-all duration-[2000ms] ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 lg:translate-x-40"
          }`}
        >
          <div className="w-full lg:w-1/2 flex flex-row lg:flex-col">
            <div className="w-1/2 lg:w-full p-2">
              <ServiceCard
                icon={Biceps}
                title={t("GroupSection.Card1.title")}
                text={t("GroupSection.Card1.description")}
              />
            </div>
            <div className="w-1/2 lg:w-full p-2">
              <ServiceCard
                icon={CheckList}
                title={t("GroupSection.Card2.title")}
                text={t("GroupSection.Card2.description")}
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-row lg:flex-col mt-4 lg:mt-0">
            <div className="w-1/2 lg:w-full p-2">
              <ServiceCard
                icon={Meditation}
                title={t("GroupSection.Card3.title")}
                text={t("GroupSection.Card3.description")}
              />
            </div>
            <div className="w-1/2 lg:w-full p-2">
              <ServiceCard
                icon={Schedule}
                title={t("GroupSection.Card4.title")}
                text={t("GroupSection.Card4.description")}
              />
            </div>
          </div>
        </div>

        <div
          className={`flex flex-col items-center lg:w-1/2 mt-8 lg:mt-8 transition-all duration-[2000ms] ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 lg:-translate-x-40"
          }`}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            onClick={handleVideoClick}
            className=" lg:w-11/12 h-auto rounded-lg border-primaryYellow border-2 shadow-lg shadow-primaryYellow"
          >
            <source src={CaliforniaVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default GroupSection;
