import React, { useState, useEffect } from "react";
import PricingBanner from "../../assets/images/247Section.png";
import SimplePricingCard from "./simplepricingcard";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Memberships = () => {
  const [t] = useTranslation("global");
  const [activeTab, setActiveTab] = useState("owner-operator");
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [inView]); // Run only when 'inView' changes

  return (
    <div ref={ref} className="flex flex-row justify-center items-center mb-32 ">
      <div
        className="w-full h-auto relative bg-opacity-0 items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 10, .80), rgba(10, 10, 10, .90)), url(${PricingBanner})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-[1280px] mx-auto p-6">
          <div className="flex flex-col items-center space-y-6 mt-20">
            <h1
              style={{ fontFamily: "Comfortaa" }}
              className="text-4xl uppercase text-white font-bold text-center"
            >
              How much can you earn?
            </h1>
            <p
              style={{ fontFamily: "Comfortaa" }}
              className="text-xl text-white text-center"
            >
              Transparency is key aspect of our company. See how much can you
              earn by taking a look at the paychecks that some of our drivers
              received this month by selecting a position you’d apply for.
            </p>
            <div className="w-[2px] h-20 bg-white"></div>
          </div>
          <div className="flex justify-center space-x-8 my-8">
            <h4
              style={{ fontFamily: "Comfortaa" }}
              className={`text-lg text-white pb-1 cursor-pointer  transition-all ease-in duration-100 border-b-2 ${
                activeTab === "owner-operator"
                  ? "border-white"
                  : "border-transparent"
              }`}
              onClick={() => setActiveTab("owner-operator")}
            >
              Owner Operator
            </h4>
            <h4
              style={{ fontFamily: "Comfortaa" }}
              className={`text-lg text-white pb-1 cursor-pointer transition-all ease-in duration-100 border-b-2 ${
                activeTab === "company-driver"
                  ? " border-white"
                  : " border-transparent"
              }`}
              onClick={() => setActiveTab("company-driver")}
            >
              Company Driver
            </h4>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {activeTab === "owner-operator" && (
              <>
                <SimplePricingCard
                  name={"Cooper Scott"}
                  miles="11,050"
                  total="35,360.50"
                />
                <SimplePricingCard
                  name={"Denise Mckinney"}
                  miles="10,498"
                  total="33,908.54"
                />
              </>
            )}
            {activeTab === "company-driver" && (
              <>
                <SimplePricingCard
                  name="Dean Grahams"
                  miles="1500"
                  ratePerMile="0.7"
                  emBonus="700.9"
                  total="7,767.4"
                />
                <SimplePricingCard
                  name="Peter Matthews"
                  miles="4000"
                  ratePerMile="0.7"
                  referalBonus="500"
                  total="7,487.4"
                />
              </>
            )}
          </div>
        </div>

        <div
          style={{ fontFamily: "Comfortaa" }}
          className={`mt-40 flex flex-col justify-center items-center w-full h-fit`}
        >
          <h1
            className={`text-4xl uppercase transition-all duration-[1800ms] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 lg:translate-y-10"
            }`}
          >
            Does that sound like a plan?
          </h1>
          <span
            className={`mt-10 text-xl transition-all duration-[2000ms] ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 lg:translate-x-10"
            }`}
          >
            If yes, push the APPLY NOW button and become a part of Eagle Axis!
          </span>
          <div
            className={`transition-all duration-[2500ms] ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 lg:-translate-x-10"
            }`}
          >
            <Link
              style={{ fontFamily: "Comfortaa" }}
              to={"#apply-now"}
              scrollbehavior="smooth"
              className={`inline-block mt-10 mb-10 px-12 py-3 text-white rounded-xl uppercase bg-primaryYellow text-xl font-semibold transform transition-all border-[1px] border-transparent duration-300 ease-in-out hover:scale-105 hover:bg-transparent hover:border-primaryYellow hover:text-primaryYellow`}
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Memberships;
