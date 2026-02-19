import React from "react";

const HeroSlidrerMint = ({ slider }) => {
  return (
    <article className="border-peruvianViolet border rounded-xl hero-card px-2 py-2 md:py-3 max-w-[230px] xl:max-w-[300px] w-full z-20 absolute -bottom-3 sm:-bottom-7 lg:ml-[-120px] xl:-ml-[160px]">
      <h2 className="text-xl font-bold text-white font-saira">
        {slider.title}
      </h2>
      <p className="text-xs md:text-sm text-white font-inter pt-1 sm:pt-3">
        Mint Price:
      </p>
      <div className="flex justify-between items-center gap-5 pt-1">
        <h3 className="text-base sm:text-lg font-saira lg:text-xl xl:text-[24px] text-white font-bold">
          {slider.price}
        </h3>
        <button className="update-Secondary-btn tabs-gradient !w-full max-w-[101px] !h-[33px]">
          Mint
        </button>
      </div>
    </article>
  );
};

export default HeroSlidrerMint;
