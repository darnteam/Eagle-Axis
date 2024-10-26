import React, { useState } from "react";
import TeamCard from "./teamCard";
import Allteam from "./allteam";
import TeamMember from "../../assets/images/TeamMember.png";
import TeamMember1 from "../../assets/images/TeamMember1.png";
import TeamMember2 from "../../assets/images/TeamMember2.png";

const TeamCards = () => {
  const [activeTab, setActiveTab] = useState("team");

  return (
    <div className="flex flex-col justify-center items-center my-32  ">
      <h1
        style={{ fontFamily: "Comfortaa" }}
        className="text-4xl text-center font-bold"
      >
        INDUSTRY LEADING STAFF
      </h1>
      <div className="w-[2px] h-20 bg-white block my-5"></div>
      <div className="flex justify-between w-[15%]">
        <h4
          style={{ fontFamily: "Comfortaa" }}
          className={`text-md text-white pb-1 px-3 mb-3 cursor-pointer ${
            activeTab === "team" ? "border-b-2 border-white" : ""
          }`}
          onClick={() => setActiveTab("team")}
        >
          Team
        </h4>
        <h4
          style={{ fontFamily: "Comfortaa" }}
          className={`text-lg text-white pb-1 px-3 mb-3 cursor-pointer ${
            activeTab === "trainers" ? "border-b-2 border-white" : ""
          }`}
          onClick={() => setActiveTab("trainers")}
        >
          Trainers
        </h4>
      </div>
      <div
        className={`md:flex md:flex-row flex flex-col transition-opacity duration-500 ${
          activeTab === "trainers" ? "opacity-100" : "opacity-0"
        }`}
      >
        {activeTab === "trainers" && (
          <>
            <TeamCard
              image_path={TeamMember}
              name="John Doeeee"
              title="Personal trainer"
              age="26"
              speciality="Yoga"
              description="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsul lorem ipsum lorem ipsum lorem ipsum"
            />
            <TeamCard
              image_path={TeamMember1}
              name="John Doe"
              title="Personal Trainer"
            />
            <TeamCard
              image_path={TeamMember2}
              name="John Doo"
              title="Personal Trainer"
            />
          </>
        )}
      </div>
      <div
        className={`transition-opacity duration-500 ${
          activeTab === "team" ? "opacity-100" : "opacity-0"
        }`}
      >
        {activeTab === "team" && <Allteam />}
      </div>
    </div>
  );
};

export default TeamCards;



