import React from "react";
import HistorySection from "../../components/History/historySection";
import SecondBanner from "../../components/SecondBanner/secondbanner";
import PurchaseBanner from "../../assets/images/california-10.jpeg";
import Footer from "../../components/Footer/Footer";
import { useTranslation } from "react-i18next";
import BackToTopBtn from "../../components/BackToTopBtn/BackToTopBtn";
import NumberFlipper from "../../components/NumberFlipper/numberFlipper";
import StatsSection from "../../components/NumberFlipper/statsSection";

const AboutPage = () => {
  const [t] = useTranslation("global");
  return (
    <div>
      <div className="text-center">
        <SecondBanner
          image={PurchaseBanner}
          page={t("HistorySection.banner.title")}
          pagedesc={t("HistorySection.banner.text")}
        />
      </div>

      <div className="max-w-[1280px] mx-auto mb-12">
        <HistorySection />
      </div>
    </div>
  );
};

export default AboutPage;
