import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import IgShowcase from "../../components/ig-showcase/ig-showcase";
import { ApplicationModal } from "../../components/ApplicationModal/ApplicationModal";
import KamioniMalet from "../../assets/images/KamioniDheMalet.jpg";
import { Link } from "react-router-dom";

const AboutPage = () => {
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
            backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 10, .7) 50%, rgba(0, 0, 0, .6)), url(${KamioniMalet})`,
            // backgroundColor: "rgba(0, 0, 0, 1)",
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
                A trusted name in trucking
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
              About Eagle Axis
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
                className="mt-24 w-1/2 text-center text-xl mx-auto"
              >
                Eagle Axis is a growing trucking company, with a 50-strong fleet
                of company-owned trucks and owner-operated trucks, serving all
                48 states with focusing mostly on the Midwest, South and East
                coast. Our name is a reflection of our mission: to guard and
                protect the valued drivers who are the heart and soul of the
                Guardian brand and the trucking industry at large. We know that
                our success as a company relies on recruiting and retaining the
                very best drivers on the road. So we give them what they need to
                succeed, including well-managed dispatching, expert safety
                training, round-the-clock support and — most importantly — fair
                and transparent compensation. As an evolving company, we’re
                driven by excellence and a commitment to continual improvement,
                in everything from recruitment and marketing to logistics and
                data analysis. Join our team and become part of a movement to
                transform the trucking industry.{" "}
              </p>
              <Link
                to={"/"}
                style={{ fontFamily: "Comfortaa" }}
                className={`btn inline-block w-fit uppercase mt-10 px-12 py-3 text-white rounded-xl bg-primaryYellow text-xl font-semibold transform transition-all border-[1px] border-transparent duration-300 ease-in-out hover:scale-105 hover:bg-transparent hover:border-primaryYellow hover:text-primaryYellow`}
              >
                Apply for a job
              </Link>
            </div>
          </div>
        </div>
      </div>
      <IgShowcase />
      <div className="w-full h-4 bg-primaryYellow"></div>

      {/* <InputFields /> */}
    </div>
  );
};

export default AboutPage;
