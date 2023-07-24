import React from "react";
import CirleCoin from "../assets/images/svg/CircleCoin";
import SiteLogo from "../assets/images/svg/SiteLogo";
import Button from "./Button";
import Facebook from "../assets/images/svg/Facebook";
import Twitter from "../assets/images/svg/Twitter";
import Telegram from "../assets/images/svg/Telegram";
import Instagram from "../assets/images/svg/Instagram";
import Youtube from "../assets/images/svg/Youtube";

const socialMediaIcons = [
  {
    id: "facebook",
    icon: <Facebook className="group-hover:fill-white fill-[#0E0E0E]" />,
  },
  {
    id: "twitter",
    icon: <Twitter className="group-hover:fill-white fill-[#0E0E0E]" />,
  },
  {
    id: "Telegram",
    icon: <Telegram className="group-hover:fill-white fill-[#0E0E0E]" />,
  },
  {
    id: "Instagram",
    icon: <Instagram className="group-hover:fill-white fill-[#0E0E0E]" />,
  },
  {
    id: "Youtube",
    icon: <Youtube fillColor="#fff" className="group-hover:fill-[#565656] fill-[#0E0E0E] " />,
  },
];

const Paragraph =
  "Trading crypto assets has high opportunities and risks Make sure you use good judgment in making buying and selling decisions on your assets. NORDEK Swap does not force users to make buying and selling transactions and all buying and selling decisions of your digital money assets are your own decisions and are not influenced by any party.";
const Footer = () => {
  return (
    <footer className="py-[4rem] lg:pt-[5rem] lg:pb-[6rem]">
      <div className="container mx-auto px-[15px]">
        <span className="inline-block cursor-pointer">
          <SiteLogo />
        </span>
        <h4 className="mt-[2rem] mb-[1rem] text-[20px] fontKaint font-bold">
          Disclaimer:
        </h4>
        <p className="mb-[3rem] leading-[1.6] max-w-[93%]">{Paragraph}</p>
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center gap-[2rem]">
            <Button variant="dark" label="Buy NSWAP" />
            <CirleCoin />
          </div>
          <ul className="list-none flex items-center justify-between gap-[0.825rem]">
            {socialMediaIcons.map((socialMediaIcon) => (
              <li
                key={socialMediaIcon.id}
                className="w-[32px] h-[32px] bg-gradient-to-r from-white to-gray-300
            flex items-center justify-center rounded-full transition-colors
            hover:from-[#8a2ff34f] group hover:to-[#8a2ff34f] transition-all duration-300 cursor-pointer"
              >
                {socialMediaIcon.icon}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
