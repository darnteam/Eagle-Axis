// HomePage.js
import React, { useRef, useEffect } from "react";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import CardSection from "../../components/cards-section/card-section";
import IgShowcase from "../../components/ig-showcase/ig-showcase";
import Memberships from "../../components/membership-plans/memberships";
import FAQSection from "../../components/FAQ/FAQ-section";
import { scrollToSection } from "../../utils/scrollUtils";
import { useLocation } from 'react-router-dom';
import AboutPage from "../AboutPage/AboutPage";
import EquipmentPage from "../EquipmentPage/EquipmentPage";

const HomePage = () => {
  const cardSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const equipmentSectionRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToCards) {
      scrollToSection(cardSectionRef, 'default');
    } else if (location.state?.scrollToAbout) {
      scrollToSection(aboutSectionRef, 'about');
    } else if (location.state?.scrollToEquipment) {
      scrollToSection(equipmentSectionRef, 'equipment');
    }
  }, [location]);

  const scrollToCardSection = () => {
    scrollToSection(cardSectionRef, 'default');
  };

  return (
    <div>
      <ImageCarousel scrollToCardSection={scrollToCardSection} />
      <div className="w-full h-4 bg-primaryYellow"></div>
      <div ref={cardSectionRef} className="lg:mb-[0px]">
        <CardSection />
      </div>
      <div className="w-full h-4 bg-primaryYellow"></div>
      <div ref={aboutSectionRef}>
        <AboutPage />
      </div>
      <div ref={equipmentSectionRef}>
        <EquipmentPage />
      </div>
      <Memberships />
      <IgShowcase />
      <div className="w-full h-4 bg-primaryYellow"></div>
      <div>
        <FAQSection />
      </div>
    </div>
  );
};

export default HomePage;
