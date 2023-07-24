import React from "react";
import Button from "../components/Button";
import Logo from "../assets/images/Logo.png";
import Stats from "./Stats";
const paragraph =
  "NORDEK Swap is governed by its community members who can create & vote on important proposals";

const NordekCommunityVote = () => {
  return (
    <section className="nordekCommunityVoteBg lg:!py-[6rem] xl:!py-[8rem] 2xl:!py-[10rem]">
      <div className="container mx-auto px-[15px]">
        <div className="row pb-[6rem]">
          <h2 className="relative pl-[60px] codecPro text-[54px] text-white mb-3">
            <img
              src={Logo}
              className="absolute top-[50%] translate-y-[-50%] left-0"
              height="51"
              width="51"
              alt="logo"
            />
            NORDEK
          </h2>
          <span className="block notableRegular text-white text-[40px] mb-10">
            COMMUNITY VOTE
          </span>
          <p className="mb-8">{paragraph}</p>
          <Button
            variant="dark"
            className="min-w-[140px]"
            label="Buy NSWAP"
          />
        </div>
        <Stats />
      </div>
    </section>
  );
};

export default NordekCommunityVote;
