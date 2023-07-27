import { useState } from "react";
import LinkSvg from "../assets/images/svg/LinkIcon";
import Button from "./Button";
import { Link } from "react-router-dom";

const campaignFitOptions = [
  {
    label: "Swap",
    href: "/trade",
  },
  {
    label: "Liquidity",
  },
  {
    label: "Perpetual",
    icon: <LinkSvg  className="fill-white group-hover:fill-blue-500" key="table-cut-svg" />,
  },
  {
    label: "Bridge",
    icon: <LinkSvg className="fill-white group-hover:fill-blue-500" key="table-cut-svg" />,
  },
  {
    label: "Limit (V2)",
    icon: <LinkSvg className="fill-white group-hover:fill-blue-500" key="table-cut-svg" />,
  },
  {
    label: "Buy Crypto",
    label2: "New",
  },
];

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const handleDropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="navbar">
      <div className="relative bg-black-300  h-[86px] container flex items-center justify-between">
        <div className="w-40 h-7 flex flex-row items-center justify-start gap-[4px]">
          <img
            className="relative w-[31.02px] h-7"
            alt=""
            src="/images/svg/group.svg"
          />
          <div className="relative inline-block w-[124.53px] h-[20.98px] shrink-0">
            NORSWAP
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[17px] text-xl font-satoshi">
          <div className="flex flex-row py-2 px-3 items-center justify-start">
            <div
              onClick={handleDropdownToggle}
              className="relative leading-[24px] font-medium cursor-pointer"
            >
              TRADE
            </div>
            {dropdownVisible && (
              <ul className="absolute top-[60px]  z-[99] bg-[#141414]  rounded-[4px] py-2 mt-2 w-[240px]">
                {campaignFitOptions.map((option, index) => (
                  <Link key={index} to={option?.href || "/"}>
                    <li className=" group flex items-center gap-2 hover:text-blue-500 cursor-pointer text-white px-[2rem] py-[0.5rem] fontKaint">
                      {option.label}
                      {option.icon}
                     {option.label2 && (<span className="flex items-center justify-center w-[40px] leading-[1.4] rounded-[16px] inline-block border-2 border-solid border-[#1FC7D4] text-[12px]">{option.label2}</span>)} 
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </div>
          <div className="flex flex-row py-2 pr-[12.010009765625px] pl-3 items-center justify-start opacity-[0.65]">
            <div className="relative leading-[24px] font-medium">EARN</div>
          </div>
        </div>
        <div className="flex gap-[10px] flex-row p-0.5 items-center justify-center text-s font-source-code-pro">
          <span>
            <img
              className=" w-[30px] h-[30px] overflow-hidden"
              alt=""
              src="/images/svg/layer-1.svg"
            />
          </span>

          <Button
            variant="dark"
            className="min-h-[50px] min-w-[200px]"
            label="Connect Wallet"
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
