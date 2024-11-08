import React from "react";
import FooterBanner from "../../assets/images/LandingPageKamionaUsa.jpg";
import Location from "../../assets/icons/location.png";
import Phone from "../../assets/icons/phone.png";
import Mail from "../../assets/icons/mail.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";



const Footer = () => {

  return (
    <div className="flex h-auto justify-center items-center flex-col">
      <div
        className="w-full h-auto  relative bg-opacity-0"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 10, .90), rgba(10, 10, 10, .90)), url(${FooterBanner})`,
          backgroundRepeat: "repeat, no-repeat",
          backgroundSize: "auto, cover",
        }}
      >
        <div className="lg:max-w-[1280px] md:max-w-[800px] max-w-[300px] mx-auto flex flex-col lg:flex-row justify-between border-b-[2px] border-white mb-2 ">
          <div className="mt-24 mb-12  lg:w-[40%]">
            <h1
              style={{ fontFamily: "Comfortaa" }}
              className="text-3xl text-center lg:text-start text-white hover:text-primaryYellow"
            >
              Eagle Axis
            </h1>

            <div className="flex justify-between w-[80%] mx-auto lg:mx-0 lg:w-[30%] mt-20">
              <a href="https://www.instagram.com/eagleaxis_trucking?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-white text-xl  border-white rounded-full border-2 p-2 transition-all duration-300  ease-in-out hover:bg-white hover:text-black hover:border-white hover:scale-105 hover:cursor-pointer shadow-lg shadow-zinc-500"
                />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61553252032353&mibextid=LQQJ4d">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-white text-xl border-white rounded-full border-2 p-2 px-3 transition-all duration-300  ease-in-out hover:bg-white hover:border-white hover:text-black hover:scale-105 shadow-lg shadow-zinc-500"
                />
              </a>
            </div>

            <div className="flex flex-col mt-16">
              <p
                style={{ fontFamily: "Comfortaa" }}
                className="text-l text-center lg:text-start text-white font-semibold"
              >
                Hours of operation
              </p>
              <p className="text-l text-center lg:text-start text-white font-thin">
                We are available 24 hours for contact.
              </p>
            </div>
          </div>

          <div className="mt-16 mb-12 lg:w-[25%] w-full flex flex-col h-44 justify-between">
            <p
              style={{ fontFamily: "Comfortaa" }}
              className="text-l text-center lg:text-start text-white font-bold mb-4"
            >
              CONTACT US
            </p>
            <div className="flex lg:w-[85%] w-full items-center justify-center lg:justify-start ">
              <img src={Location} alt="" className="w-6 h-6" />
              <a
                href="https://maps.google.com/?q=4712+main+st+Lisle+IL+60532"
                target="blank"
                className="text-l text-center lg:text-start px-3 text-white font-thin underline underline-offset-2 transition-all duration-300  hover:underline-offset-4 hover:scale-[1.1] "
              >
                4712 main st Lisle IL 60532
              </a>
            </div>
            <div className="flex lg:w-[85%] w-full items-center justify-center lg:justify-start">
              <img src={Phone} alt="" className="w-6 h-6" />
              <a
                href="tel: +1 (630)274-5622"
                className="text-l text-center lg:text-start px-3 text-white font-thin underline underline-offset-2 transition-all duration-300 hover:underline-offset-4 hover:scale-[1.1] -mt-1"
              >
                +1 (630)274-5622
              </a>
            </div>
            <div className="flex lg:w-[85%] w-full items-center justify-center lg:justify-start">
              <img src={Mail} alt="" className="w-6 h-6" />
              <a
                href="mailto: dispatch@eagleaxis.com"
                className="text-l text-center lg:text-start px-3 text-white font-thin underline underline-offset-2 transition-all duration-300  hover:underline-offset-4 hover:scale-[1.1] -mt-1"
              >
                dispatch@eagleaxis.com
              </a>
            </div>
          </div>
        </div>
        <div className="lg:max-w-[1280px] md:max-w-[800px] max-w-[300px] mx-auto">
          <p
            style={{ fontFamily: "Comfortaa" }}
            className="text-l text-center lg:text-start mb-2 text-white font-semibold transition-all duration-300 hover:underline hover:underline-offset-4"
          >
            <span className="font-light">&copy;</span>
            <a target="_blank" href="https://darn.dev/">
              Darn Development
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
