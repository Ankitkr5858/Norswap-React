import React from "react";
import Button from "./Button";
import swapIcon from "../../public/images/svg/convert-icon.svg";
import Nswap from "../../public/images/svg/frame-650.svg";
import arrowDown from '../../public/images/svg/down-arrow-icon.svg'
const HeroSection = () => {
  return (
    <div className="heroSection">
      <div className="relative leading-[62.5px] text-center text-57xl">
        <p className="heroHeaderSwap m-0">SWAP CRYPTO</p>
        <p className="m-0 text-21xl font-nunito-sans">
          <span>
            <span className="heroHeaderWith font-nunito-sans">{`with `}</span>
            <span className="heroHeaderNor font-black">Norswap's</span>
            <b className="font-nunito-sans">{` `}</b>
            <span className="heroHeaderWith font-nunito-sans">ease</span>
          </span>
        </p>
      </div>
      <div className="w-[814px]  h-[90px] 2xl:h-[148px] flex flex-row items-center justify-start font-nunito">
        <div className="relative w-[398px] h-[148px]">
          <div className="heroFrom relative rounded-tl-md rounded-tr-45xl rounded-br-45xl rounded-bl-md [background:linear-gradient(180deg,_#2f2f2f,_#191919)] shadow-[-1.1058107241237905e-15px_-18.05925941467285px_18.06px_#151515_inset,_1.1058107241237905e-15px_18.05925941467285px_18.06px_#323232_inset,_2.163542587612006e-15px_35.33333206176758px_70.67px_rgba(7,_7,_7,_0.56)] w-[398px] h-[148px] ml-[-7px]" />
          <div className="absolute top-[28px] left-[calc(50%_-_130px)] leading-[24px] uppercase font-medium text-gray-200">
            From
          </div>
          <div className="heroFromDropdown absolute top-[53px] left-[43px] rounded-111xl-6 bg-gray-400 w-[170px] h-14 overflow-hidden flex flex-col py-[14.511627197265625px] px-[16.930233001708984px] box-border items-center justify-center text-[24.19px] font-nunito-sans">
            <div className="flex flex-row items-center justify-start">
              <div className="w-[99.16px] flex flex-row items-center justify-start gap-[7.26px]">
                <img
                  className="relative w-[29.02px] h-[29.02px]"
                  alt=""
                  src={Nswap}
                />
                <div className="relative leading-[25.4px] uppercase">NRK</div>
              </div>
              <img
                className="relative w-[19.35px] h-[19.35px]"
                alt=""
                src={arrowDown}
              />
            </div>
          </div>
          <div className="heroFromDrop absolute top-[57px] left-[236.37px] w-[126px] h-12 flex flex-col items-center justify-end text-right text-5xl font-montserrat">
            <div className="rounded-81xl bg-gray-400 overflow-hidden z-[0]" />
            <div className="heroFromNo absolute my-0 mx-[!important] top-[17px] left-[43px] leading-[21px] uppercase font-semibold [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1]">
              100
            </div>
          </div>
        </div>
        <img
          className="heroConIcon relative w-[33px] h-[33px] ml-[-7px]"
          alt=""
          src={swapIcon}
        />
        <div className="heroTo relative rounded-tl-md rounded-tr-45xl rounded-br-45xl rounded-bl-md [background:linear-gradient(180deg,_#2f2f2f,_#191919)] shadow-[-1.1058107241237905e-15px_-18.05925941467285px_18.06px_#151515_inset,_1.1058107241237905e-15px_18.05925941467285px_18.06px_#323232_inset,_2.163542587612006e-15px_35.33333206176758px_70.67px_rgba(7,_7,_7,_0.56)] w-[398px] h-[148px] ml-[-7px]">
          <div className="absolute top-[28px] left-[calc(50%_+_124px)] leading-[24px] font-medium text-gray-200">
            TO
          </div>
          <div className="heroToDropdown absolute top-[53.19px] left-[24.44px] rounded-111xl-6 bg-gray-400 h-[55.63px] overflow-hidden flex flex-col py-[14.511627197265625px] px-[16.930233001708984px] box-border items-center justify-center text-[24.19px] font-nunito-sans">
            <div className="flex flex-row items-center justify-start gap-[36.28px]">
              <div className="w-[99.16px] flex flex-row items-center justify-start gap-[7.26px]">
                <img
                  className="relative w-[29.02px] h-[29.02px]"
                  alt=""
                  src="../../public/images/svg/frame-650.svg"
                />
                <div className="relative leading-[25.4px] uppercase">NSWAP</div>
              </div>
              <img
                className="relative w-[19.35px] h-[19.35px]"
                alt=""
                src="../../public/images/svg/down-arrow-icon.svg"
              />
            </div>
          </div>
          <div className="heroToDrop absolute top-[57px] left-[239.09px] w-[126px] h-12 flex flex-col items-center justify-end text-right text-5xl font-montserrat">
            <div className="rounded-81xl bg-gray-400 overflow-hidden z-[0]" />
            <div className="heroToNo absolute my-0 mx-[!important] top-[17px] left-[42px] leading-[21px] uppercase font-semibold z-[1]">
              100
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[13.31px] text-gray-100 font-montserrat">
        <div className="heroEditText relative leading-[24px]">{`Slippage Tolerance `}</div>
        <div className="heroEdit relative [text-decoration:underline] leading-[24px] text-white">
          Edit
        </div>
      </div>
      <Button variant="dark" className="min-h-[60px]" label="Connect Wallet" />
    </div>
  );
};

export default HeroSection;
