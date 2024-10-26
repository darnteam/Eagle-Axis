import React from "react";

const simplepricingcard = (props) => {
  return (
    <div className="flex flex-col items-center align-middle bg-zinc-900 py-2 px-6 w-96 rounded-xl border-t-[3px] border-solid border-1 border-primaryYellow">
      <h1
        style={{ fontFamily: "Comfortaa" }}
        className="w-full text-center p-4 text-white text-3xl"
      >
        {props.name}
      </h1>
      <div
        style={{ fontFamily: "Comfortaa" }}
        className="w-full flex flex-row justify-center"
      >
        <div className=" mx-auto py-3 text-center text-white w-[80%] m-0 text-xl font-normal block border-b-2 border-[#4b4a4a]">
          <span className={`text-xl text-left`}>Miles:</span> {props.miles}
        </div>
      </div>

      {props.ratePerMile && (
        <div
          style={{ fontFamily: "Comfortaa" }}
          className=" mx-auto py-3 text-center text-white w-[80%] m-0 text-xl font-normal block"
        >
          <span className={`text-xl text-left`}>Rate per Mile: $</span>
          {props.ratePerMile}
        </div>
      )}

      {props.emBonus && (
        <div
          style={{ fontFamily: "Comfortaa" }}
          className=" mx-auto py-3 text-center text-white w-[80%] m-0 text-xl font-normal block"
        >
          <span className={`text-xl text-left`}>EM Bonus: $</span>
          {props.emBonus}
        </div>
      )}

      {props.referalBonus && (
        <div
          style={{ fontFamily: "Comfortaa" }}
          className=" mx-auto py-3 text-center text-white w-[80%] m-0 text-xl font-normal block"
        >
          <span className={`text-xl text-left`}>Referal Bonus: $</span>
          {props.referalBonus}
        </div>
      )}

      {props.total && (
        <div
          style={{ fontFamily: "Comfortaa" }}
          className="inline-block w-4/5 mx-auto px-4 py-2 border border-white text-xl text-center 
                        transition duration-300 transform bg-white text-black mt-6 mb-6"
        >
          <span className={`text-xl text-left`}>Total: $</span>
          {props.total}
        </div>
      )}
    </div>
  );
};

export default simplepricingcard;

/**
 *  miles: "1000 Miles",
 *  -------------------
 *  Rate per mile: "$0.7",
 *
 *  EM Bonus: "$700.9",
 *
 *  Total: "$7767.4",
 * */
