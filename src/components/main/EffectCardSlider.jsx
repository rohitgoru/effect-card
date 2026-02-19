"use client";
import React, { useState } from "react";
import HeroSlider from "./HeroSlider";
import HeroSlidrerMint from "./HeroSlidrerMint";
import { PassportIcon, TradingIcon } from "../common/Icons";

const EffectCardSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (newSlideIndex) => {
    setCurrentSlide(newSlideIndex);
  };
  const SliderContent = [
    { title: "Cosmic Serenity III", price: "25 Matic" },
    { title: "Galactic Voyager", price: "30 Matic" },
    { title: "Stellar Dreams", price: "20 Matic" },
    { title: "Nebula Odyssey", price: "35 Matic" },
    { title: "Galactic Voyager", price: "30 Matic" },
  ];
  return (
    <section className="relative pt-[130px] sm:pt-[180px] pb-14">
      <img
        className="absolute left-0 top-0 w-full h-full z-[-10]"
        src="/images/webp/hero-bg.webp"
        alt="hero bg"
      />
      <div className="section-layout">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="sm:max-w-[564px] w-full">
            <h1 className="heading text-wrap">
              Responsive Header and
              <span className="gradient-text pl-2"> Effect card</span>
            </h1>
            <p className="sub-heading pt-3">
              Learn how to build a fully responsive header and create modern
              effect cards using Tailwind CSS for clean, interactive, and
              professional UI designs.
            </p>
            <div className="sm:max-w-[380px] w-full flex flex-row justify-center sm:justify-start items-center gap-3 sm:gap-5 pt-8">
              <button className="update-Primary-btn tabs-gradient text-white! !w-full max-w-[140px]">
                Trade
                <TradingIcon />
              </button>
              <button className="update-Primary-btn !w-full max-w-[140px]">
                Passport
                <PassportIcon />
              </button>
            </div>
          </div>
          <div className="relative">
            {" "}
            {SliderContent.map(
              (slider, index) =>
                index === currentSlide && (
                  <HeroSlidrerMint key={index} slider={slider} />
                ),
            )}
            <HeroSlider onSlideChange={handleSlideChange} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EffectCardSlider;
