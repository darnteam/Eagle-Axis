import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import TruckImage from "../../assets/images/truck_image_second.jpeg";

const EquipmentPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  return (
    <div>
      <div className="lg:mb-0">
        <div
          className="w-full h-auto lg:h-screen relative bg-black bg-opacity-90 box-border"
          style={{
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="max-w-[1280px] mx-auto h-auto md:h-80 lg:h-96 pt-24 md:pt-36 lg:pt-44">
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
                Our Equipment
              </h1>
              <div className="flex-grow border-t border-primaryYellow"></div>
            </div>
            <p
              style={{ fontFamily: "Comfortaa" }}
              className={`text-center uppercase w-full mx-auto mt-10 md:mt-16 lg:mt-20 py-2 text-3xl md:text-4xl lg:text-5xl px-4 duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 lg:translate-y-full"
              }`}
            >
              Trucks that we provide
            </p>
          </div>

          <div ref={ref} className="flex flex-col h-auto max-w-full mx-auto px-4">
            <div
              className={`duration-[1500ms] flex flex-col items-center ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 lg:-translate-x-10"
              }`}
            >
              <p
                style={{ fontFamily: "Comfortaa" }}
                className="w-full md:w-3/4 lg:w-1/2 text-center text-sm md:text-lg lg:text-xl text-white mx-auto"
              >
                Our fleet is small but well-maintained, equipped with all the essentials to support our drivers in their daily tasks.
              </p>
            </div>

            <div className="w-container mx-auto mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 items-center">
              <div className="flex justify-center lg:justify-start">
                {/* Image Container */}
                <div className="rounded-lg shadow-lg overflow-hidden max-w-xs sm:max-w-sm lg:max-w-md">
                  <img
                    src={TruckImage}
                    alt="Truck"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <div
                style={{ fontFamily: "Comfortaa" }}
                className="flex flex-col items-center lg:items-start justify-center"
              >
                <h2 className="text-xl md:text-2xl lg:text-3xl w-full uppercase text-center lg:text-left mb-6 lg:mb-10">
                  Our Trucks Come With:
                </h2>
                <div className="flex flex-col md:flex-row text-sm md:text-lg space-y-4 md:space-y-0 md:space-x-10 lg:space-x-16">
                  <ul className="list-none space-y-3">
                    <li className="flex items-center">
                      <span className="text-primaryYellow mr-2">•</span> Inverter
                    </li>
                    <li className="flex items-center">
                      <span className="text-primaryYellow mr-2">•</span> Fridge
                    </li>
                    <li className="flex items-center">
                      <span className="text-primaryYellow mr-2">•</span> Microwave
                    </li>
                    <li className="flex items-center">
                      <span className="text-primaryYellow mr-2">•</span> High Roof
                    </li>
                  </ul>
                  <ul className="list-none space-y-3">
                    <li className="flex items-center">
                      <span className="text-primaryYellow mr-2">•</span> Combo Sleeper
                    </li>
                    <li className="flex items-center">
                      <span className="text-primaryYellow mr-2">•</span> Governed at 70 mph
                    </li>
                    <li className="flex items-center">
                      <span className="text-primaryYellow mr-2">•</span> Removable Driver's Seat
                    </li>
                    <li className="flex items-center">
                      <span className="text-primaryYellow mr-2">•</span> Pet Friendly
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-4 bg-primaryYellow mt-16 md:mt-24 lg:mt-36"></div>
    </div>
  );
};

export default EquipmentPage;
