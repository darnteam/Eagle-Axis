import React, { useState, useEffect } from "react";
import PricingBanner from "../../assets/images/KamioniDheMalet.jpg";
import SimplePricingCard from "./simplepricingcard";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const Memberships = () => {

  const [activeTab, setActiveTab] = useState("owner-operator");
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the component is visible
  });

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  return (
    <div ref={ref} className="flex justify-center items-center mb-32">
      <div
        className="w-full h-auto relative bg-opacity-0"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 10, .80), rgba(10, 10, 10, .90)), url(${PricingBanner})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="flex flex-col items-center space-y-6 mt-10 md:mt-20">
            <h1
              style={{ fontFamily: "Comfortaa" }}
              className="text-2xl md:text-4xl uppercase text-white font-bold text-center"
            >
              How much can you earn?
            </h1>
            <p
              style={{ fontFamily: "Comfortaa" }}
              className="text-base md:text-xl text-white text-center px-4"
            >
              Transparency is a key aspect of our company. See how much you can
              earn by reviewing the paychecks received by our drivers this month.
            </p>
            <div className="w-[2px] h-12 md:h-20 bg-white"></div>
          </div>

          <div className="flex justify-center space-x-4 md:space-x-8 my-8">
            <h4
              style={{ fontFamily: "Comfortaa" }}
              className={`text-base md:text-lg text-white pb-1 cursor-pointer transition-all ease-in duration-100 border-b-2 ${
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
              className={`text-base md:text-lg text-white pb-1 cursor-pointer transition-all ease-in duration-100 border-b-2 ${
                activeTab === "company-driver"
                  ? "border-white"
                  : "border-transparent"
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
                  name="Cooper Scott"
                  miles="11,050"
                  total="35,360.50"
                />
                <SimplePricingCard
                  name="Denise Mckinney"
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
          className={` flex flex-col justify-center items-center w-full h-fit`}
        >
          <h1
            className={`text-2xl md:text-4xl text-center uppercase transition-all duration-[1800ms]`}
          >
            Does that sound like a plan?
          </h1>
          <span
            className={`mt-6 md:mt-10 text-lg md:text-xl transition-all duration-[2000ms]`}
          >
            If yes, click APPLY NOW and join Eagle Axis!
          </span>
          <div
            className={`transition-all duration-[2500ms]`}
          >
            <Link
              style={{ fontFamily: "Comfortaa" }}
              to={"/apply-now"}
              className="inline-block mt-8 mb-10 px-8 md:px-12 py-2 md:py-3 text-white rounded-xl uppercase bg-primaryYellow text-lg md:text-xl font-semibold transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-transparent hover:border-primaryYellow hover:text-primaryYellow border border-transparent"
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
