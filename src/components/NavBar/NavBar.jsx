import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/EagleAxisLogoCut.png";
import Burger from "../../assets/images/navBurgerMenu.png";
import CloseMenu from "../../assets/images/closeMobileMenu.png";

const NavBar = () => {
  const paths = [
    { pathway: "ABOUT US", link: "/about" },
    { pathway: "APPLY NOW", link: "/contact" },
    { pathway: "EQUIPMENT", link: "/gallery" },
  ];

  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 200;
      setScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`mx-auto flex justify-between items-center border-solid h-30 w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-black bg-opacity-100" : "bg-transparent"
      }`}
    >
      <NavLink
        className="hidden lg:flex flex-row h-30 w-1/8 p-0 mx-2 justify-center items-center hover:cursor-pointer"
        to="/"
      >
        <img
          className="object-cover scale-75 h-30 w-40 m-0 p-0"
          src={Logo}
          alt="Eagle Axis Logo"
        />
      </NavLink>

      <ul className="hidden lg:flex flex-row justify-center items-center h-full w-fit p-0">
        {paths.map((e) => (
          <li
            style={{ fontFamily: "Comfortaa" }}
            className="transition-all duration-300 ease-in-out h-full text-white mx-6 px-2.5 pt-7 pb-1 text-xl group relative"
            key={e.pathway}
          >
            <NavLink
              to={e.link}
              className={({ isActive }) =>
                `${
                  isActive && scrolled
                    ? " border-primaryYellow"
                    : "border-transparent"
                } border-b-2 transition-all duration-300 ease-in-out pb-2 group-hover:border-primaryYellow`
              }
              onClick={() => setMobileMenu(false)}
            >
              {e.pathway}
              {/* Underline effect on hover */}
              {/* <span className="absolute left-0 bottom-0 h-1 w-full bg-primaryYellow scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span> */}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="lg:mr-4 flex flex-row items-center box-border">
        <a
          href="tel:+123457128378"
          className="inline-block px-6 py-2 text-white rounded-xl bg-primaryYellow text-lg font-semibold transform transition-all border-[1px] border-transparent duration-300 ease-in-out hover:scale-105 hover:bg-transparent hover:text-primaryYellow"
        >
          <span className="inline-block">+123 45 7128378</span>
        </a>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="lg:hidden z-40">
        <img
          src={Burger}
          alt="burger menu"
          className="w-8 h-8 cursor-pointer"
          onClick={() => setMobileMenu(!mobileMenu)}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 inset-0 bg-black z-40 flex flex-col items-center justify-center transform transition-transform duration-500 ease-in-out h-screen w-screen ${
          mobileMenu ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <img
          src={CloseMenu}
          className="absolute top-5 right-5 hover:cursor-pointer w-6 h-6 z-50"
          alt="Close menu"
          onClick={() => setMobileMenu(false)}
        />
        <div className="flex flex-col items-center">
          <NavLink
            className="flex flex-row h-40 w-1/8 p-0 mx-6 justify-center items-center hover:cursor-pointer"
            to="/"
            onClick={() => setMobileMenu(false)}
          >
            <img
              className="object-cover w-40 m-0 p-0 mb-8"
              src={Logo}
              alt="Eagle Axis Logo"
            />
          </NavLink>
          {paths.map((e) => (
            <NavLink
              key={e.pathway}
              to={e.link}
              className="text-white text-2xl py-2 active:text-primaryYellow"
              onClick={() => setMobileMenu(false)}
            >
              {e.pathway}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
