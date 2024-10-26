import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import dummyVideo from "../../assets/videos/dummyVideo.mp4";
import playButton from "../../assets/images/playButton.png";
import pauseButton from "../../assets/images/pauseButton.png";
import seekForward from "../../assets/images/seekForward.png";
import seekBackwards from "../../assets/images/seekBackwards.png";
import { useTranslation } from "react-i18next";

const LocationSection = () => {
  const [t] = useTranslation("global")
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const videoRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  const seekVideoBackwards = () => {
    videoRef.current.currentTime -= 10;
  };

  const seekVideoForward = () => {
    videoRef.current.currentTime += 10;
  };

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  useEffect(() => {
    const videoElement = videoRef.current;
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    videoElement.addEventListener("play", handlePlay);
    videoElement.addEventListener("pause", handlePause);

    return () => {
      videoElement.removeEventListener("play", handlePlay);
      videoElement.removeEventListener("pause", handlePause);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="container-full flex flex-col bg-transparent max-w-[1200px] mx-auto mb-20 h-screen"
    >
      <div className="flex flex-col items-center space-y-6 h-1/2 mt-12">
        <h1
          style={{ fontFamily: "Comfortaa" }}
          className={`text-4xl duration-1000 font-bold ${
            isVisible ? "opacity-100" : "opacity-0"
          } ${isVisible ? "translate-y-0" : "-translate-y-20"}`}
        >
          {t("LocationSection.title")}
        </h1>
        <p
          style={{ fontFamily: "Comfortaa" }}
          className={`text-xl text-center duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {t("LocationSection.description")}
          <br />
        </p>
        <div
          className={`w-[2px] h-20 bg-white block duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </div>
      <div className="flex items-start h-2/3 justify-between -mt-28">
        <div
          className={`flex flex-col items-center justify-between w-1/2 h-full transition-all duration-1000 mx-5 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-40"
          }`}
        >
          <iframe
            className="border-0 w-full h-full rounded-2xl outline-0 mx-5"
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2677.561843032807!2d21.710561375573892!3d42.13311859940979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13544fcd305121a7%3A0x1ab9dcd1d0cb283c!2sPazar%2C%20Hristijan%20Todorovski%20Karposh%2C%20Kumanovo%2C%20North%20Macedonia!5e1!3m2!1sen!2s!4v1715014299341!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div
          className={`flex flex-col items-center justify-between w-1/2 h-full transition-all duration-1000 mx-5 overflow-hidden ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-40"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <video
            className="border-0 w-full h-full object-cover rounded-2xl"
            src={dummyVideo}
            autoPlay={false}
            controls={false}
            muted={true}
            ref={videoRef}
            onClick={togglePlay}
          ></video>

          <div
            className={` z-10 px-4 py-2 w-full h-full absolute flex flex-row items-center justify-center transition-all duration-300 bg-zinc-900 opacity-70 ease-in-out rounded-2xl ${
              isHovered ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={togglePlay}
          >
            <img
              src={seekBackwards}
              onClick={(e) => {
                seekVideoBackwards();
                e.stopPropagation(); // Prevent default click behavior
              }}
              className="z-20 scale-50 hover:cursor-pointer"
            />
            <img
              src={playButton}
              className={`w-20 h-20 hover:cursor-pointer ${
                isPlaying ? "hidden" : ""
              }`}
            />
            <img
              src={pauseButton}
              className={`w-20 h-20 hover:cursor-pointer ${
                isPlaying ? "" : "hidden"
              }`}
            />
            <img
              src={seekForward}
              onClick={(e) => {
                seekVideoForward();
                e.stopPropagation(); // Prevent default click behavior
              }}
              className="z-20 scale-50 hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
