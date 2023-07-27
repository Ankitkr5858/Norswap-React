import React from "react";
import SquareDesignSvg from "../assets/images/svg/SquareDesign";
import SvgCircle from "./SvgCircle";
import BunnyImage from "../assets/images/bunny.png";
import LeftRightArrows from "../assets/images/svg/LeftRightArrows";
import ExpandArrow from "../assets/images/svg/ExpandArraow";
import { useState } from "react";
import Footer from "./Footer";
import RefreshSvg from "../assets/images/svg/Refresh";
import TimeRefreshSvg from "../assets/images/svg/TimeRefresh";
import SettingsSvg from "../assets/images/svg/Settings";
import TableCutSvg from "../assets/images/svg/TableCut";
import DropDownSvg from "../assets/images/svg/DropDown";
import DropDown2Svg from "../assets/images/svg/DropDown2";
import CopySvg from "../assets/images/svg/CopySvg";
import Button from "./Button";

const timeRangeOptions = ["24H", "1W", "1M", "1Y"];
const svgComponents = [
  <TableCutSvg key="table-cut-svg" />,
  <SettingsSvg key="settings-svg" />,
  <TimeRefreshSvg key="time-refresh-svg" />,
  <RefreshSvg key="refresh-svg" />,
];

const SwapPage = () => {
  const [activeItem, setActiveItem] = useState(timeRangeOptions[0]);
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <section className="relative py-[3rem]">
      <div className="container mx-auto px-[15px] mb-[4rem]">
        <div className="flex flex-wrap gap-[30px]">
          <div className="flex-[0_0_auto] w-[64.75%] px-[1.25rem] pt-[2rem] pb-[8rem]  customShadowBgAndRadius">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <SvgCircle
                  svg={<SquareDesignSvg className="w-[18px] h-[20px]" />}
                />
                <img src={BunnyImage} height="32" width="32" alt="bunnyImage" />
                <span className="inline-block leading-[1] fontKaint font-semibold text-[1rem]">
                  BNB/CAKE
                </span>
                <span className="inline-block ml-4">
                  <LeftRightArrows className="h-[30px] w-[18px]" />
                </span>
              </div>
              <div>
                <ExpandArrow className="h-[30px] w-[18px]" />
              </div>
            </div>
            <div className="flex items-center justify-between mb-[7rem]">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block fontKaint font-semibold text-[1.25rem]">
                    159.31
                  </span>
                  <span className="inline-block fontKaint font-semibold text-[1rem] leading-[1]">
                    BNB/CAKE
                  </span>
                  <span className="inline-block fontkaint text-[#1FC7D4] leading-[1]">
                    +1.343 (0.85%)
                  </span>
                </div>
                <span className="text-[#FF59B2] fontKaint text-[1rem]">
                  Jul 21, 2023, 01:41 PM
                </span>
              </div>
              <ul className="flex items-center border border-solid border-[#524B63] bg-[#353547] rounded-[16px]">
                {timeRangeOptions.map((item, index) => (
                  <li
                    key={index}
                    className={`flex font-semibold cursor-pointer text-${
                      activeItem === item ? "black" : "[#1FC7D4]"
                    } items-center justify-center py-[8px] min-w-[60px] px-[8px] fontKaint  text-[1rem] rounded-[1rem] bg-${
                      activeItem === item ? "[#1FC7D4]" : "transparent"
                    }`}
                    onMouseEnter={() => handleItemClick(item)}
                    onClick={() => handleItemClick(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div class="chartSection py-[10rem] bg-red-600">chart section</div>
          </div>
          <div className="flex-[0_0_auto] w-[32.33%] px-[1.5rem] pt-[1.5rem] pb-[2rem] customShadowBgAndRadius">
            <h2 className="fontKaint text-[1.25rem] font-bold text-[#F4EEFF] mb-2">
              Swap
            </h2>
            <span className="inline-block text-[#78CAE7] text-[0.925rem]">
              Trade tokens in an instant
            </span>
            <ul className="flex items-center justify-end gap-2 mt-[2rem] pb-[3rem]  border-b-[2px] border-[#383241]">
              {svgComponents.map((svgComponent) => (
                <li key={svgComponent.key}>{svgComponent}</li>
              ))}
            </ul>
            <div className="mt-[2rem]">
              <SvgCircle
                svg={<SquareDesignSvg className="w-[18px] h-[20px]" />}
                label="BNB"
                svg2={<DropDownSvg className="w-[10px] h-[14px]" />}
              />
              <form className="mt-[1rem]">
                <input
                  type="number"
                  placeholder="0.0"
                  class="fontKaint block w-full pt-2 pb-[3.5rem] text-right px-3 font-medium bg-black border
                   border-slate-300 rounded-md text-[1rem] shadow-sm placeholder-slate-400
                   focus:outline-none border-none 
                   disabled:shadow-none rounded-[20px]"
                />
                <div className="text-center mt-[1rem]">
                  <SvgCircle
                    className="shadowIcon"
                    svg={<DropDown2Svg className="w-[14px] h-[14px]" />}
                  />
                </div>
              </form>
            </div>
            <div className="mt-[2rem]">
              <div
                className="inline-flex items-center justify-between  items-center transition-all duration-300 justify-center gap-2 
      relative "
              >
                <img src={BunnyImage} height="32" width="32" alt="bunnyImage" />
                <span className="inline-block fontKaint text-[1rem] font-semibold leading-[1]">
                  CAKE
                </span>
                <DropDownSvg className="w-[10px] h-[14px]" />
                <CopySvg className="h-[20px] w-[20px]" />
              </div>
              <form className="mt-[1rem]">
                <input
                  type="number"
                  placeholder="0.0"
                  class="fontKaint block w-full pt-2 pb-[3.5rem] text-right px-3 font-medium bg-black border
                   border-slate-300 rounded-md text-[1rem] shadow-sm placeholder-slate-400
                   focus:outline-none border-none 
                   disabled:shadow-none rounded-[20px]"
                />
              </form>
            </div>
            <div className="mt-3">
              <Button
                className="rounded-[30px] border border-solid border-[#9F3FFF] after-none ml-auto py-[0.5rem] text-[14px]"
                label="Low Risk"
                svg={<SquareDesignSvg className="w-[18px] h-[20px]" />}
              />
            </div>
            <div className="flex items-center justify-center gap-3 mt-5">
              <span className="inline-block text-[#949494] font-normal">
                Slippage Tolerance{" "}
              </span>
              <div className="inline-block fontKaint underline">
                <span className="inline-block fontKaint underline cursor-pointer">
                  Edit
                </span>{" "}
                <span className="inline-block  fontKaint  text-[#1FC7D4]">
                  0.5%
                </span>
              </div>
            </div>
            <div className="mt-5 sticky">
              <Button label="Low Risk" className="w-full" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default SwapPage;
