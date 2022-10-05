import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import styles from "./slider.module.css";

// import required modules
import { Pagination } from "swiper";

const { slider, slide, img, info } = styles;

export const Slider = ({ data }) => {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={30}
      /* centeredSlides={true} */
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className={slider}
      preloadImages={false}
      lazy={true}
      loop={true}
      preventClicks={true}
    >
      {data.map((el) => {
        console.log(el)

        return (
          <SwiperSlide key={el.id} className={slide}>
            <img src={el.image} alt="food" className={img + " swiper-lazy"} />
            <div className={info}>
              <p>{el.name}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
