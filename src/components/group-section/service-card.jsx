import React from "react";

const ServiceCard = (props) => {
  return (
    <div className="flex flex-col h-72 lg:h-auto align-middle space-y-1 px-6 py-4 border-primaryYellow border-2 rounded-lg shadow-lg shadow-transparent transition-all duration-200 hover:scale-[1.05] hover:shadow-lg hover:shadow-primaryYellow">
      <img
        src={props.icon}
        alt="icon"
        className="self-start  w-16 h-16 rounded-lg  p-2"
      />

      <h3
        style={{ fontFamily: "Comfortaa" }}
        className="text-xl font-bold mb-4 text-white"
      >
        {props.title}
      </h3>
      <p className="text-base mb-8 text-white">{props.text}</p>
    </div>
  );
};

export default ServiceCard;
