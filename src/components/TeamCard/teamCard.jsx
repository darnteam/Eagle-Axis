import { React, useState, useEffect } from "react";
import IgIcon from "../../assets/images/instagram-2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

const TeamCard = (props) => {
  var backgroundImage = `url("${props.image_path}")`;
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="flex flex-col w-96 h-[30rem] m-2 relative">
      <div className="relative group mb-3">
        <div
          style={{ backgroundImage }}
          alt="Team Member"
          className="bg-cover rounded-lg border-none border-box h-96 w-auto"
        />
        <div
          onClick={() => openModal()}
          className="absolute inset-0 bg-zinc-900 opacity-0 group-hover:opacity-50 transition duration-300 rounded-lg"
        >
          <a
            href="https://www.instagram.com/your_instagram_username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={IgIcon} // replace with the path to your Instagram icon image
              alt="Instagram"
              className="absolute bottom-3 left-3 w-8 h-8"
            />
          </a>
        </div>
      </div>
      <h3 style={{ fontFamily: "Comfortaa" }} className="text-lg underline">
        {props.name}
      </h3>
      <h4 style={{ fontFamily: "Comfortaa" }} className="text-md text-zinc-500">
        {props.title}
      </h4>
      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-85">
          <div className="flex flex-col items-center mx-auto w-full">
            <div className="bg-zinc-700 p-8 rounded-lg relative w-1/2 h-auto">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 bg-transparent border-white border-[2px] hover:text-black rounded-full hover:bg-white px-3 py-1 text-white hover:shadow-md transition duration-300"
              >
                X
              </button>
              <h1
                style={{ fontFamily: "Comfortaa" }}
                className="text-2xl text-white text-center"
              >
                Hello from {props.name}
              </h1>
              <div className="flex justify-between w-full my-4">
                <div
                  className="w-1/2 bg-cover rounded-lg border-none border-box h-96"
                  style={{ backgroundImage }}
                ></div>
                <div className="w-[45%] space-y-9">
                  <h4 className="text-xl text-white">
                    <span
                      style={{ fontFamily: "Comfortaa" }}
                      className="font-bold"
                    >
                      Name:
                    </span>{" "}
                    {props.name}
                  </h4>
                  <h4 className="text-xl text-white">
                    <span
                      style={{ fontFamily: "Comfortaa" }}
                      className="font-bold"
                    >
                      Age:
                    </span>{" "}
                    {props.age}
                  </h4>
                  <h4 className="text-xl text-white">
                    <span
                      style={{ fontFamily: "Comfortaa" }}
                      className="font-bold"
                    >
                      Speciality:
                    </span>{" "}
                    {props.speciality}
                  </h4>
                  <h4 className="text-xl text-white">
                    <span
                      style={{ fontFamily: "Comfortaa" }}
                      className="font-bold"
                    >
                      Description:
                    </span>{" "}
                    {props.description}
                  </h4>
                  <div className="flex justify-between w-[65%] mt-20">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="text-white text-xl border-white rounded-full border-2 p-2 hover:bg-white hover:text-black hover:border-white hover:animate-bounce hover:cursor-pointer shadow-lg shadow-zinc-500"
                    />
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className="text-white text-xl border-white rounded-full border-2 p-2 px-3 hover:bg-white hover:border-white hover:text-black hover:animate-bounce shadow-lg shadow-zinc-500"
                    />
                    <FontAwesomeIcon
                      icon={faXTwitter}
                      className="text-white text-xl border-white rounded-full border-2 p-2 hover:bg-white hover:text-black hover:border-white hover:animate-bounce shadow-lg shadow-zinc-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default TeamCard;
