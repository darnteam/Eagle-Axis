import React from "react";
import NumberFlipper from "./numberFlipper";

const StatsSection = () => {
  return (
    <div className="flex flex-col justify-center items-center my-20">
      <h1 style={{ fontFamily: "Comfortaa" }} className="text-6xl font-bold">
        Our Statistics
      </h1>
      <div className="flex flex-row justify-center ">
        <NumberFlipper n={50} title="Working Staff" />
        <NumberFlipper n={532} title="Active Users" />
        <NumberFlipper n={103} title="Equipment" />
      </div>
    </div>
  );
};
export default StatsSection;
