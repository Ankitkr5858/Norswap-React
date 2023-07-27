import React from "react";
import ReadyFor from "../assets/images/svg/Readyfor";
import Button from "../components/Button";
import Video from "./Video";

const Paragraph =
  "Connect your crypto wallet to start using the app in seconds. No registration needed.";

const ReadyForNordek = () => {
  return (
    <>
    <section className="readyForNordekBg realative overflow-hidden lg:!py-[6rem] xl:!py-[8rem] 2xl:!py-[10rem] relative z-10 mt-[2rem]">
    <Video />
      <div className="container mx-auto px-[15px]">
        <div className="text-center">
          <h2 className="text-[84px] font-bold flex justify-center items-center gap-10 mb-[5rem]">
            <span className="inline-block">
              <ReadyFor />
            </span>{" "}
            NORDEK?
          </h2>
          <p className="fontKaint text-[30px] font-extrabold mb-[5rem]">
            {Paragraph}
          </p>
          <div className="flex items-center justify-center">
          <Button
            variant="dark"
            className="min-h-[60px]"
            label="Connect Wallet"
          />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ReadyForNordek;
