import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/EagleAxisLogo3DNoBg.png";
import Burger from "../../assets/images/navBurgerMenu.png";
import CloseMenu from "../../assets/images/closeMobileMenu.png";

const NavBar = () => {
  const navigate = useNavigate();
  const paths = [
    { pathway: "ABOUT US", link: "/", state: { scrollToAbout: true } },
    { pathway: "APPLY NOW", link: "/", state: { scrollToCards: true } },
    { pathway: "EQUIPMENT", link: "/", state: { scrollToEquipment: true } },
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav
      className={`mx-auto flex justify-between items-center border-solid h-24 w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-black bg-opacity-100 h-20" 
          : "bg-gradient-to-b from-black to-transparent h-28"
      }`}
    >
      <NavLink
        className="flex flex-row h-full p-2 justify-center items-center hover:cursor-pointer transition-all duration-300 lg:mx-4 mx-2"
        to="/"
        onClick={scrollToTop}
      >
        <img
          className={`object-contain transition-all lg:ml-0 -ml-8 duration-300 ${
            scrolled 
              ? "lg:h-14 lg:w-44 h-12 w-36" 
              : "lg:h-24 lg:w-64 h-16 w-48"
          }`}
          src={Logo}
          alt="Eagle Axis Logo"
        />
      </NavLink>

      <ul className="hidden lg:flex flex-row justify-center items-center h-full space-x-8 flex-grow">
        {paths.map((e) => (
          <li
            style={{ fontFamily: "Comfortaa" }}
            className="transition-all duration-300 ease-in-out text-white px-3 py-1 text-lg group relative"
            key={e.pathway}
          >
            {e.state ? (
              <button
                onClick={() => navigate(e.link, { state: e.state })}
                className={`border-b-2 border-transparent transition-all duration-300 ease-in-out pb-1 group-hover:border-primaryYellow`}
              >
                {e.pathway}
              </button>
            ) : (
              <NavLink
                to={e.link}
                className={({ isActive }) =>
                  `${
                    isActive && scrolled
                      ? "border-primaryYellow"
                      : "border-transparent"
                  } border-b-2 transition-all duration-300 ease-in-out pb-1 group-hover:border-primaryYellow`
                }
                onClick={() => setMobileMenu(false)}
              >
                {e.pathway}
              </NavLink>
            )}
          </li>
        ))}
      </ul>

      <div className="hidden lg:flex lg:mr-8 items-center">
        <a
          href="tel:+1 (630)-242-2451"
          className="inline-block px-4 py-2 md:px-5 md:py-2 lg:px-6 lg:py-2 text-white rounded-lg bg-primaryYellow text-sm md:text-base lg:text-lg font-semibold transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-transparent hover:text-primaryYellow border border-transparent hover:border-primaryYellow"
        >
          +1 (630)-242-2451
        </a>
      </div>

      <div className="lg:hidden z-40 p-4 mr-2">
        <img
          src={Burger}
          alt="burger menu"
          className="w-8 h-8 cursor-pointer"
          onClick={() => setMobileMenu(!mobileMenu)}
        />
      </div>

      <div
        className={`fixed top-0 inset-0 bg-black z-40 flex flex-col items-center justify-center transform transition-transform duration-500 ease-in-out h-screen w-screen ${
          mobileMenu ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <img
          src={CloseMenu}
          className="absolute top-6 right-6 w-7 h-7 cursor-pointer z-50"
          alt="Close menu"
          onClick={() => setMobileMenu(false)}
        />
        <div className="flex flex-col items-center space-y-6">
          {paths.map((e) => (
            e.state ? (
              <button
                key={e.pathway}
                onClick={() => {
                  navigate(e.link, { state: e.state });
                  setMobileMenu(false);
                }}
                className="text-white text-2xl py-2 hover:text-primaryYellow transition-all duration-300"
              >
                {e.pathway}
              </button>
            ) : (
              <NavLink
                key={e.pathway}
                to={e.link}
                className="text-white text-2xl py-2 hover:text-primaryYellow transition-all duration-300"
                onClick={() => setMobileMenu(false)}
              >
                {e.pathway}
              </NavLink>
            )
          ))}
          <a
            href="tel:+1 (630)-242-6020"
            className="mt-6 px-6 py-3 text-white rounded-lg bg-primaryYellow text-xl font-semibold transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-transparent hover:text-primaryYellow border border-transparent hover:border-primaryYellow"
          >
            +1 (630)-242-6020
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
