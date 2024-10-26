import React from "react";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import CardSection from "../../components/cards-section/card-section";
import DivNImage from "../../components/DivNImage/DivNImage";
import ImageNDiv from "../../components/ImageNDiv/ImageNDiv";
import IgShowcase from "../../components/ig-showcase/ig-showcase";
import GroupSection from "../../components/group-section/group-section";
import Image1 from "../../assets/images/purchase-banner.jpeg";
import BoylWorkingOut from "../../assets/images/california-2.jpeg";
import Memberships from "../../components/membership-plans/memberships";
import AminitiesSection from "../../components/Amenities/AminitiesSection";
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
    </div>
  );
};

export default HomePage;
