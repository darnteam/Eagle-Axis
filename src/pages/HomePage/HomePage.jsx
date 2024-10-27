import React from "react";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import CardSection from "../../components/cards-section/card-section";
import IgShowcase from "../../components/ig-showcase/ig-showcase";
import Memberships from "../../components/membership-plans/memberships";



const HomePage = () => {

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
