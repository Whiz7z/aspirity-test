import React from "react";
import Section from "../Section/Section";
import Image from "next/image";
import profileImage from "../../public/images/bigProfileImg.png";
import Tabs from "../Tabs/Tabs";

const GeneralInfo = ({selectedTab}) => {
  return (
    <div className="w-full col-span-2">
      <Section padding="pt-[40px] pl-[40px] pr-[40px] pb-[30px] semiMd:px-[14px] ">
        <div
          className="grid grid-cols-[auto_1fr] items-center gap-x-[48px] gap-y-[8px]
        semiMd:grid-cols-[1fr] semiMd:justify-items-center
        "
        >
          <div className="flex gap-[48px] ">
            <div className="w-[160px] h-[160px]">
              <Image src={profileImage} alt="profile"></Image>
            </div>
          </div>

          <h1
            className="semiMd:w-full w-[400px] font-bold text-text-white semiMd:text-[24px] text-[48px] semiMd:col-start-1 col-start-2
          semiMd:text-center"
          >
            Иванов
            <br /> Иван Иванович
          </h1>

          <div
            className="flex flex-col semiMd:col-start-1 semiMd:col-end-1 col-start-2 col-end-3 semiMd:row-start-3 
          row-start-2 gap-[16px] semiMd:text-center"
          >
            <p className="text-[16px] text-text-white font-normal ">
              UI/UX designer
            </p>
            <p className="text-[16px] text-text-white font-normal semiMd:hidden">
              Россия, Красноярск
            </p>
            <div className="mdSemi:block">
              <span className="text-[16px] text-text-white font-normal">
                Россия, Красноярск{" "}
                <span className="text-muted-gray"> • 14:03</span>
              </span>
            </div>
          </div>

          <div className="flex semiMd:row-start-4 row-start-3 semiMd:mt-[24px] mt-[50px] col-span-2 semiMd:col-span-1">
            <Tabs selectedTabDef={selectedTab} />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default GeneralInfo;
