import React from "react";
import SiteLogo from "../assets/images/svg/SiteLogo";
import Button from "./Button";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="bg-black-300 w-[1360px] flex flex-col items-center justify-center">
                <div className="relative w-[1280px] h-[86px]">
                    <div className="absolute top-[29px] left-[0px] w-40 h-7 flex flex-row items-center justify-start gap-[4px]">
                        <img className="relative w-[31.02px] h-7" alt="" src="../../public/images/svg/group.svg" />
                        <div className="relative inline-block w-[124.53px] h-[20.98px] shrink-0">
                            NORSWAP
                        </div>
                    </div>
                    <div className="absolute top-[23px] left-[calc(50%_-_91px)] flex flex-row items-center justify-start gap-[17px] text-xl font-satoshi">
                        <div className="flex flex-row py-2 px-3 items-center justify-start opacity-[0.65]">
                            <div className="relative leading-[24px] font-medium">TRADE</div>
                        </div>
                        <div className="flex flex-row py-2 pr-[12.010009765625px] pl-3 items-center justify-start opacity-[0.65]">
                            <div className="relative leading-[24px] font-medium">EARN</div>
                        </div>
                    </div>
                    <div className="absolute top-[10px] left-[1149px] flex flex-row p-0.5 items-center justify-center text-s font-source-code-pro">
                        <Button
                            variant="dark"
                            className="min-h-[60px]"
                            label="Connect Wallet"
                        />
                    </div>
                    <button>
                        <img
                            className="absolute top-[28px] left-[1088px] w-[30px] h-[30px] overflow-hidden"
                            alt=""
                            src="../../public/images/svg/layer-1.svg"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Navbar;