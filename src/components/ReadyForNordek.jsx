import React from "react";
import ReadyFor from "../assets/images/svg/Readyfor";
import Button from "../components/Button";


const Paragraph = "Connect your crypto wallet to start using the app in seconds. No registration needed."

const ReadyForNordek = () => {
  return (
    <section className="readyForNordekBg lg:!py-[6rem] xl:!py-[8rem] 2xl:!py-[10rem] relative z-10 mt-[2rem]">
      <div className="container mx-auto px-[15px]">
        <div className="text-center">
          <h2 className="text-[84px] font-bold flex justify-center items-center gap-10 mb-[5rem]">
            <span className="inline-block">
              <ReadyFor />
            </span>{" "}
            NORDEK?
          </h2>
          <p className="fontKaint text-[30px] font-extrabold mb-[5rem]">{Paragraph}</p>
          <Button
            variant="dark"
            className="min-h-[60px]"
            label="Connect Wallet"
          />
        </div>
      </div>
    </section>
  );
};

export default ReadyForNordek;
