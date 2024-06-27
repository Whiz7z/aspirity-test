import BackLink from "@/components/BackLink/BackLink";
import Dropdown from "@/components/Dropdown/Dropdown";
import EmployeeLoad from "@/components/EmployeeLoad/EmployeeLoad";
import GeneralInfo from "@/components/GeneralInfo/GeneralInfo";
import Header from "@/components/Header/Header";
import EditProfileModal from "@/components/Modals/EditProfileModal";
import TeamModal from "@/components/Modals/TeamModal";
import ProfileInfo from "@/components/ProfileInfoForm/ProfileInfo";
import Burger from "@/components/svg/Burger";
import { redirect } from "next/navigation";
import React from "react";

const page = async ({ searchParams }) => {
  if (!searchParams.tab && !searchParams.edit) {
    redirect("/profile?tab=mainInfo&edit=false");
  }

  console.log(searchParams);

  return (
    <div className="w-full grid">
      <div className=" flex flex-col lg:w-[100%] w-[1494px]  bg-slate-500 justify-self-center gap-[8px]">
        <Header />

        <BackLink
          text={"Вернуться к сотрудникам"}
          className={"text-[14px] text-muted-gray font-semibold uppercase"}
        />

        <div className="w-full grid semiMd:gap-x-[0px] gap-[16px] md:grid-cols-[1fr] grid-cols-[820px_1fr] items-start">
          <GeneralInfo selectedTab={searchParams.tab} />
          <ProfileInfo />
          <EmployeeLoad />
        </div>
      </div>

      {searchParams.edit === "true" && <EditProfileModal />}
      {searchParams.team === "true" && <TeamModal />}
    </div>
  );
};

export default page;
