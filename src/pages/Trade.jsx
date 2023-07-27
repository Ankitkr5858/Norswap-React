import { useState } from "react";
import LinkSvg from "../assets/images/svg/LinkIcon";
import Navbar from "../components/Navbar";
import SwapPage from "../components/SwapPage";

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
const Trade = () => {
  const [activeOption, setActiveOption] = useState("Swap");
  const handleOptionClick = (label) => {
    setActiveOption(label);
  };
  return (
    <>
      <Navbar />
      <div class="container mx-auto px-[15px] mt-[3rem]">
        <ul className="flex items-center justify-center gap-[30px]">
          {campaignFitOptions.map((option) => (
            <li
              id={option.label}
              key={option.label}
              className={`group fontKaint inline-flex cursor-pointer pb-[6px] gap-2  border-b-4 border-transparent hover:border-b-4 hover:border-blue-500 ${
                activeOption === option.label
                  ? "!border-b-4 !border-blue-500"
                  : ""
              }`}
              onClick={() => handleOptionClick(option.label)}
            >
              {option.label}
              {option.icon}
            </li>
          ))}
        </ul>
      </div>
      <SwapPage />
    </>
  );
};
export default Trade;
