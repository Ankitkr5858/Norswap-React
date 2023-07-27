import React from "react";
import SquareDesignSvg from "../assets/images/svg/SquareDesign";
import SvgCircle from "./SvgCircle";
import BunnyImage from "../assets/images/bunny.png";
import LeftRightArrows from "../assets/images/svg/LeftRightArrows";
import ExpandArrow from "../assets/images/svg/ExpandArraow";



const SwapPage = () => {
  return (
    <section className="relative py-[3rem] 2xl:py-[4.5rem]">
      <div className="container mx-auto px-[15px]">
        <div className="flex flex-wrap gap-[30px]">
          <div className="flex-[0_0_auto] w-[64.75%] px-[15px] pt-[20px] pb-[3rem]  customShadowBgAndRadius">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <SvgCircle
                  svg={<SquareDesignSvg className="w-[18px] h-[20px]" />}
                />
                <img src={BunnyImage} height="32" width="32" alt="bunnyImage" />
                <span className="inline-block leading-[1] fontKaint font-semibold text-[1rem]">BNB/CAKE</span>
                <span className="inline-block ml-4"><LeftRightArrows className="h-[30px] w-[18px]"/></span>
              </div>
              <div>
                <ExpandArrow className="h-[30px] w-[18px]"/>
              </div>
            </div>
          </div>
          <div className="flex-[0_0_auto] w-[32.33%] customShadowBgAndRadius"></div>
        </div>
      </div>
    </section>
  );
};

export default SwapPage;
