import React from "react";
import TeamPicture from "../../assets/images/teampicture.jpg";

const allteam = () => {
  return (
    <div>
      <div className="flex flex-col max-w-[1280px] mx-auto">
        <div className="w-[80%] h-auto mx-auto">
          <img src={TeamPicture} className=" w-[80%] h-auto mx-auto" alt="" />
        </div>
        <h1
          style={{ fontFamily: "Comfortaa" }}
          className="text-2xl text-center mt-4"
        >
          HELLO FROM OUR TEAM
        </h1>
      </div>
    </div>
  );
};

export default allteam;
