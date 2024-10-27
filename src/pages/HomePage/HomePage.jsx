// HomePage.js
import React, { useRef, useEffect } from "react";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import CardSection from "../../components/cards-section/card-section";
import IgShowcase from "../../components/ig-showcase/ig-showcase";
import Memberships from "../../components/membership-plans/memberships";
import { scrollToSection } from "../../utils/scrollUtils";
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const cardSectionRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToCards) {
      scrollToSection(cardSectionRef);
      // Clear the state
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const scrollToCardSection = () => {
    scrollToSection(cardSectionRef);
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
