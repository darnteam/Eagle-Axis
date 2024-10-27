import React from "react";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import CardSection from "../../components/cards-section/card-section";
import IgShowcase from "../../components/ig-showcase/ig-showcase";
import Memberships from "../../components/membership-plans/memberships";
import InputFields from "../../components/inputFields/inputFields";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const [t, i18next] = useTranslation("global");
  return (
    <div>
      <ImageCarousel />
      <div className="w-full h-4 bg-primaryYellow"></div>
      <div className=" lg:mb-[0px]">
        <CardSection />
      </div>
      <div className="w-full h-4 bg-primaryYellow"></div>
      <Memberships />
      
      <IgShowcase />
      <div className="w-full h-4 bg-primaryYellow"></div>
    </div>
  );
};

export default HomePage;
