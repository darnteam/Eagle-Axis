import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";


const EquipmentPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 70% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [inView]); // Run only when 'inView' changes

  return (
    <div>
      <div className=" lg:mb-[0px]">
        <div
          className="w-full h-auto lg:h-screen  relative bg-opacity-0 box-border"
          style={{
            // backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 10, .7) 50%, rgba(0, 0, 0, .6)), url(${KamioniMalet})`,
            backgroundColor: "rgba(0, 0, 0, 1)",
            backgroundPosition: "0 0, 50% 85%",
            backgroundRepeat: "repeat, no-repeat",
            backgroundSize: "auto, cover",
            backgroundAttachment: "scroll, fixed",
          }}
        >
          <div className="max-w-[1280px] mx-auto h-96 lg:h-44 pt-36 -pb-24">
            <div
              className={`flex items-center w-full  transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 lg:translate-y-full"
              }`}
            >
              <div className="flex-grow border-t border-primaryYellow"></div>
              <h1
                style={{ fontFamily: "Comfortaa" }}
                className="px-4 text-2xl font-semibold uppercase text-center text-white"
              >
                Our equipment
              </h1>
              <div className="flex-grow border-t border-primaryYellow"></div>
            </div>
            <p
              style={{ fontFamily: "Comfortaa" }}
              className={`text-center uppercase w-full mx-auto mt-20 py-2 text-5xl px-4 duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 lg:translate-y-full"
              }`}
            >
              Trucks that we provide
            </p>
          </div>
          <div
            ref={ref}
            className="flex md:flex-col flex-col items-center justify-evenly h-full max-w-full mx-auto -mt-16"
          >
            <div
              className={`duration-[1500ms] flex flex-col items-center justify-center  ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 lg:-translate-x-10"
              }`}
            >
              <p
                style={{ fontFamily: "Comfortaa" }}
                className="mt-36 w-1/2 text-center text-xl mx-auto"
              >
                We have a small fleet but, are well maintained and equipped with
                all the necessary things that will help the driver do his job on
                a regular daily basis with ease.
              </p>
            </div>

            <div className="w-4/5 mx-auto flex md:flex-row flex-col items-center justify-center">
              <div className="item-1 w-1/3">
                {/* Carousel start */}
                <div className="carousel rounded-box w-64">
                  <div className="carousel-item w-full">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                      className="w-full"
                      alt="Tailwind CSS Carousel component"
                    />
                  </div>
                  <div className="carousel-item w-full">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                      className="w-full"
                      alt="Tailwind CSS Carousel component"
                    />
                  </div>
                  <div className="carousel-item w-full">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                      className="w-full"
                      alt="Tailwind CSS Carousel component"
                    />
                  </div>
                  <div className="carousel-item w-full">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                      className="w-full"
                      alt="Tailwind CSS Carousel component"
                    />
                  </div>
                  <div className="carousel-item w-full">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                      className="w-full"
                      alt="Tailwind CSS Carousel component"
                    />
                  </div>
                  <div className="carousel-item w-full">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                      className="w-full"
                      alt="Tailwind CSS Carousel component"
                    />
                  </div>
                  <div className="carousel-item w-full">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                      className="w-full"
                      alt="Tailwind CSS Carousel component"
                    />
                  </div>
                </div>
                {/* Carousel finish */}
              </div>

              <div
                style={{ fontFamily: "Comfortaa" }}
                className="item-2 flex flex-col items-center justify-center w-1/3"
              >
                <h2 className=" text-2xl w-full uppercase text-left">
                  All ouf our trucks come with:
                </h2>
                <div className="flex text-lg flex-row w-full uppercase items-center justify-between">
                  <ul className="list-none mt-10">
                    <li className="flex items-center mt-5">
                      <span style={{ color: "#C39351", marginRight: "8px" }}>
                        •
                      </span>{" "}
                      Inverter
                    </li>
                    <li className="flex items-center mt-5">
                      <span style={{ color: "#C39351", marginRight: "8px" }}>
                        •
                      </span>{" "}
                      Fridge
                    </li>
                    <li className="flex items-center mt-5">
                      <span style={{ color: "#C39351", marginRight: "8px" }}>
                        •
                      </span>{" "}
                      Microwave
                    </li>
                    <li className="flex items-center mt-5">
                      <span style={{ color: "#C39351", marginRight: "8px" }}>
                        •
                      </span>{" "}
                      High roof
                    </li>
                  </ul>
                  <ul className="list-none mt-10">
                    <li className="flex items-center mt-5">
                      <span style={{ color: "#C39351", marginRight: "8px" }}>
                        •
                      </span>{" "}
                      Combo sleeper
                    </li>
                    <li className="flex items-center mt-5">
                      <span style={{ color: "#C39351", marginRight: "8px" }}>
                        •
                      </span>{" "}
                      Governed at 70 mph
                    </li>
                    <li className="flex items-center mt-5">
                      <span style={{ color: "#C39351", marginRight: "8px" }}>
                        •
                      </span>{" "}
                      Removable driver's seat
                    </li>
                    <li className="flex items-center mt-5">
                      <span style={{ color: "#C39351", marginRight: "8px" }}>
                        •
                      </span>{" "}
                      Pets friendly
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-4 bg-primaryYellow mt-36"></div>

      {/* <InputFields /> */}
    </div>
  );
};

export default EquipmentPage;
