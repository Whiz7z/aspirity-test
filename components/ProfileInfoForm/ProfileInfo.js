import React from "react";
import Section from "../Section/Section";
import Link from "next/link";
import ProfileInfoForm from "./ProfileInfoForm";

const getProfileData = async () => {
  try {
    const url = `${process.env.PUBLIC_URL}/api/get-profile-data`;
    console.log("get profile data url -- ", url);

    const response = await fetch(url, { next: { tags: ["profile"] } });

    if (!response.ok) {
      console.error("Failed to fetch profile data:", response.statusText);
      return { success: false, message: "Failed to fetch profile data" };
    }

    const result = await response.json();
    console.log("result -- ", result);

    return result;
  } catch (error) {
    console.error("Error fetching profile data:", error);
    return {
      success: false,
      message: "Error fetching profile data",
      error: error.message,
    };
  }
};

const ProfileInfo = async () => {
  const profileData = await getProfileData();

  return (
    <Section
      padding="pt-[30px] pl-[30px] pr-[30px] pb-[30px] semiMd:px-[14px]
    lg:col-span-2"
    >
      <div className="w-full grid gap-[32px] text-[24px] font-normal">
        <div className="flex justify-between items-center">
          <h3 className="semiMd:text-[14px] text-[24px]">
            Персональная информация
          </h3>
          <Link
            href="/profile?tab=mainInfo&edit=true"
            className="text-muted-gray semiMd:text-[12px] text-[14px] font-medium"
          >
            Изменить
          </Link>
        </div>

        <ProfileInfoForm disabled={true} profileData={profileData} />
      </div>
    </Section>
  );
};

export default ProfileInfo;
