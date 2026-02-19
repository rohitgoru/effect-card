"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

export default function HeroSlider({ onSlideChange }) {
  return (
    <div className="relative w-full">
      <Swiper
        effect="cards"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        onSlideChange={(swiper) => onSlideChange(swiper.realIndex)}
        className=" !w-[250px] !h-[350px] sm:!w-[300px] sm:!h-[400px] xl:!w-[332px] xl:!h-[500px]"
      >
        <SwiperSlide>
          {({ isActive }) => (
            <div
              className={`${
                isActive ? "hero-slider-shadow" : ""
              } relative w-full h-full one xl:ml-[-150px] lg:ml-[-80px]`}
            >
              <img
                src="/images/webp/hero-slider.webp"
                alt="Art 1"
                className="w-full h-full  rounded-xl"
              />
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div
              className={`relative w-full h-full two xl:ml-[-86px] lg:ml-[-30px] ${
                isActive ? "hero-slider-shadow" : ""
              } `}
            >
              <img
                src="/images/webp/hero-slider.webp"
                alt="Art 2"
                className="w-full h-full  rounded-xl"
              />
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div
              className={`relative w-full h-full three ${
                isActive ? "hero-slider-shadow" : ""
              }`}
            >
              <img
                src="/images/webp/hero-slider2.webp"
                alt="Art 3"
                className="w-full h-full  rounded-xl"
              />
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div
              className={`${
                isActive ? "hero-slider-shadow" : ""
              } relative w-full h-full`}
            >
              <img
                src="/images/webp/hero-slider.webp"
                alt="Art 4"
                className="w-full h-full  rounded-xl"
              />
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div
              className={`relative w-full h-full ${
                isActive ? "hero-slider-shadow" : ""
              }`}
            >
              <img
                src="/images/webp/hero-slider2.webp"
                alt="Art 4"
                className="w-full h-full  rounded-xl"
              />
            </div>
          )}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
