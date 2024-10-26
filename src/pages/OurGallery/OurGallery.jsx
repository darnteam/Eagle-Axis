import React from "react";
import Gallery from "../../components/gallery/gallery";
import OurGalleryBanner from "../../assets/images/membership-background.jpeg";
// import slide_image_1 from "../../assets/images/image1.png";
// import slide_image_2 from "../../assets/images/image2.png";
// import slide_image_3 from "../../assets/images/image3.png";
// import slide_image_4 from "../../assets/images/image4.png";
// import slide_image_5 from "../../assets/images/image5.png";
// import slide_image_6 from "../../assets/images/image6.png";
// import slide_image_7 from "../../assets/images/image3.png";
import Lightboxgallery from "../../components/gallery/lightboxgallery.tsx";
import Secondbanner from "../../components/SecondBanner/secondbanner";
import Footer from "../../components/Footer/Footer";
import { useTranslation } from "react-i18next";

const OurGallery = () => {
  const [t] = useTranslation("global")
  return (
    <div>
      <Secondbanner
        image={OurGalleryBanner}
        page={t("Gallery.title")}
        pagedesc={t("Gallery.text")}
      />

      <div className="max-w-[1280px] mx-auto flex-col overflow-hidden ">
        {/* <div>
      <Gallery
      title="Locker room"
      image1={slide_image_1}
      image2={slide_image_2}
      image3={slide_image_3}
      image4={slide_image_4}
      image5={slide_image_5}
      image6={slide_image_6}
      image7={slide_image_7}
      />
      </div>
      <div>
      <Gallery
      title="Our sauna"
      image1={slide_image_1}
      image2={slide_image_2}
      image3={slide_image_3}
      image4={slide_image_4}
      image5={slide_image_5}
      image6={slide_image_6}
      image7={slide_image_7}
      />
      </div>
      <div>
      <Gallery
      title="Our gym"
      image1={slide_image_1}
      image2={slide_image_2}
      image3={slide_image_3}
      image4={slide_image_4}
      image5={slide_image_5}
      image6={slide_image_6}
      image7={slide_image_7}
      />
      </div> */}
        <Lightboxgallery />
      </div>
    </div>
  );
};

export default OurGallery;
