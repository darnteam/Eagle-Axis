// HomePage.js
import React, { useRef } from "react";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import CardSection from "../../components/cards-section/card-section";
import IgShowcase from "../../components/ig-showcase/ig-showcase";
import Memberships from "../../components/membership-plans/memberships";

const HomePage = () => {
  const cardSectionRef = useRef(null); // Create a ref for CardSection

  const scrollToCardSection = () => {
    if (cardSectionRef.current) {
      // Determine offset based on screen width
      let offset = 0;
      if (window.innerWidth >= 1024) {
        // Large screens (lg and up)
        offset = 300;
      } else if (window.innerWidth >= 768) {
        // Medium screens (md)
        offset = 290;
      } else {
        // Small screens (sm and below)
        offset = 100;
      }

      // Calculate the target position with the determined offset
      const topPosition = cardSectionRef.current.getBoundingClientRect().top + window.scrollY - offset;

      // Smooth scroll to the target position
      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      
      <ImageCarousel scrollToCardSection={scrollToCardSection} />
      <div className="w-full h-4 bg-primaryYellow"></div>
      <div ref={cardSectionRef} className="lg:mb-[0px]">
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
