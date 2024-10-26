import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./gallery.css";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const gallery = (props) => {
  return (
    <div className="container">
      <h1 style={{ fontFamily: "Comfortaa" }} className="heading">
        {props.title}
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={props.image1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.image2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.image3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.image4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.image5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.image6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.image7} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline">
              <FaAngleLeft />
            </ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline">
              <FaAngleRight />
            </ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default gallery;
