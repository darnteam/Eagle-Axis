import React from "react";

const MembershipCards = (props) => {
  return (
    <div className="flex flex-col items-center align-middle bg-zinc-800 py-2 px-6 w-96 rounded-xl border-t-[3px] border-solid border-1 border-primaryYellow">
      <h1
        style={{ fontFamily: "Comfortaa" }}
        className="w-full text-center p-4 text-white text-2xl"
      >
        {props.title}
      </h1>
      <div className="w-full">
      {props.offer1 !== undefined ? (
        <div className="w-[70%] mx-auto text-white border-b-[0.1px]  border-primaryYellow px-6 py-5 text-sm font-normal leading-6 block  text-center">
          {props.offer1}
        </div>
      ) : (
        <div className="w-[70%] mx-auto text-white border-b border-transparent px-6 py-5 text-sm font-normal leading-6 block  text-center"></div>
      )}
      {props.offer2 !== undefined ? (
        <div className="w-[70%] mx-auto text-white border-b-[0.1px]  border-primaryYellow px-6 py-5 text-sm font-normal leading-6 block  text-center">
          {props.offer2}
        </div>
      ) : (
        <div className="w-[70%] mx-auto text-white border-b border-transparent px-6 py-5 text-sm font-normal leading-6 block  text-center"></div>
      )}
      {props.offer3 !== undefined ? (
        <div className="w-[70%] mx-auto text-white border-b-[0.1px]  border-primaryYellow px-6 py-5 text-sm font-normal leading-6 block  text-center">
          {props.offer3}
        </div>
      ) : (
        <div className="w-[70%] h-1/6 mx-auto text-gray-600 border-b border-transparent px-6 py-5 text-sm font-normal leading-6 block  text-center"></div>
      )}
      {props.offer4 !== undefined ? (
        <div className="w-[70%] mx-auto text-white border-b-[0.1px]  border-primaryYellow px-6 py-5 text-sm font-normal leading-6 block  text-center">
          {props.offer4}
        </div>
      ) : (
        <div className="w-[70%] h-1/6 mx-auto text-white border-b border-transparent px-6 py-5 text-sm font-normal leading-6 block  text-center"></div>
      )}
      {props.offer5 !== undefined ? (
        <div className="w-[70%] mx-auto text-white border-b-[0.1px]  border-primaryYellow px-6 py-5 text-sm font-normal leading-6 block  text-center">
          {props.offer5}
        </div>
      ) : (
        <div className="w-[70%] h-1/6 mx-auto text-white border-b border-transparent px-6 py-5 text-sm font-normal leading-6 block  text-center "></div>
      )}
      </div>
      <a
        style={{ fontFamily: "Comfortaa" }}
        href="/"
        className="inline-block px-4 py-2 border border-white text-white rounded-md text-center 
                        transition duration-300 transform hover:bg-white hover:text-black hover:shadow-md hover:scale-105 mt-12 mb-6"
      >
        {props.button_txt}
      </a>
    </div>
  );
};

export default MembershipCards;
