import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import styles from "./slider.module.css";

// import required modules

import { Link } from "react-router-dom";
import Clock from "../../assets/Outline.png";

const {
  slider,
  slide,
  img,
  info,
  home_navigate,
  infoCards,
  info_dietType,
  time_card,
} = styles;

export const Slider = ({ data }) => {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={30}
      /* centeredSlides={true} */
      pagination={{
        clickable: true,
      }}
      className={slider}
      preloadImages={false}
      lazy={true}
      loop={true}
      preventClicks={true}
    >
      {data.map(
        ({
          RecipeTitle,
          DietType,
          PreparationTime,
          RecipeId,
          RecipePicturePath,
        }) => {
          return (
            <SwiperSlide key={RecipeId} className={slide}>
              <Link to={"/detail"} state={RecipeId} className={home_navigate}>
                <img
                  src={RecipePicturePath}
                  alt="food"
                  className={img + " swiper-lazy"}
                />
                <div className={info}>
                  <p>{RecipeTitle}</p>
                  <div className={infoCards}>
                    <div>
                      {DietType.map((el, i) => {
                        if (i < 2) {
                          return (
                            <p className={info_dietType} key={el}>
                              {el}
                            </p>
                          );
                        }
                      })}
                    </div>
                    <div className={time_card}>
                      {" "}
                      <img src={Clock} alt="clock" />
                      {PreparationTime}
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        }
      )}
    </Swiper>
  );
};
