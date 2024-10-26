import React from "react";
import HistoryCard from "./historyCard";
import IsmailShefketi from "../../assets/images/IsmailShefketi.jpg";
import EleonoraKiprijanovsk from "../../assets/images/EleonoraKiprijanovska.jpg";
import EndritAziri from "../../assets/images/EndritAziri.jpg";
import TeaJovancevska from "../../assets/images/teajovancevska.jpeg";
import { useTranslation } from "react-i18next";

const HistorySection = () => {
  const { t } = useTranslation("global");

  return (
    <div className="flex flex-col justify-center items-center snap-y snap-mandatory h-auto  mx-auto">
      <h1
        style={{ fontFamily: "Comfortaa" }}
        className="text-5xl md:text-6xl text-center items-center font-bold my-20 text-primaryYellow"
      >
        {t("HistorySection.title")}
      </h1>
      <div className="w-full">
        <HistoryCard
          imageSrc={IsmailShefketi}
          title={t("HistorySection.trainers.ismailShefketi.title")}
          date={t("HistorySection.trainers.ismailShefketi.date")}
          paragraph={t("HistorySection.trainers.ismailShefketi.paragraph")}
          reverseOrder={false}
        />
      </div>
      <div className="w-full">
        <HistoryCard
          imageSrc={EleonoraKiprijanovsk}
          title={t("HistorySection.trainers.eleonoraKiprijanovska.title")}
          date={t("HistorySection.trainers.eleonoraKiprijanovska.date")}
          paragraph={t(
            "HistorySection.trainers.eleonoraKiprijanovska.paragraph"
          )}
          reverseOrder={true}
        />
      </div>
      <div className="w-full">
        <HistoryCard
          imageSrc={EndritAziri}
          title={t("HistorySection.trainers.endritAziri.title")}
          date={t("HistorySection.trainers.endritAziri.date")}
          paragraph={t("HistorySection.trainers.endritAziri.paragraph")}
          reverseOrder={false}
        />
      </div>
      <div className="w-full">
        <HistoryCard
          imageSrc={TeaJovancevska}
          title={t("HistorySection.trainers.teaJovancevska.title")}
          date={t("HistorySection.trainers.teaJovancevska.date")}
          paragraph={t("HistorySection.trainers.teaJovancevska.paragraph")}
          reverseOrder={true}
        />
      </div>
    </div>
  );
};

export default HistorySection;
