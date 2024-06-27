"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Tabs = ({ selectedTabDef }) => {
  const [selectedTab, setSelectedTab] = useState(selectedTabDef);
  const router = useRouter();
  const selectTabHandler = (tab) => {
    // change url param
    // redirect(`/profile/${tab}`)
    router.push(`/profile?tab=${tab}`);
    setSelectedTab(tab);
  };
  return (
    <>
      <span
        className="py-[10px] px-[16px]  semiMd:text-[12px] text-[14px] text-text-white font-semibold uppercase cursor-pointer"
        style={{
          color: selectedTab === "mainInfo" ? "#E1E3E6" : "#B0B1B6",
          borderBottom:
            selectedTab === "mainInfo"
              ? "2px solid #0047BB"
              : "1px solid #363738",
        }}
        onClick={() => selectTabHandler("mainInfo")}
      >
        Основная информация
      </span>
      <span
        className="py-[10px] px-[16px] semiMd:text-[12px] text-[14px] text-text-white font-semibold uppercase cursor-pointer"
        style={{
          color: selectedTab === "vacation" ? "#E1E3E6" : "#B0B1B6",
          borderBottom:
            selectedTab === "vacation"
              ? "2px solid #0047BB"
              : "1px solid #363738",
        }}
        onClick={() => selectTabHandler("vacation")}
      >
        Отпуск
      </span>
    </>
  );
};

export default Tabs;
