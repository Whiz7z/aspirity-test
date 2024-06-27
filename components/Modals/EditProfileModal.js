import React from "react";
import Section from "../Section/Section";
import ProfileInfoForm from "../ProfileInfoForm/ProfileInfoForm";
import Link from "next/link";
import Cross from "@/components/svg/Cross";

const getProfileData = async () => {
  const response = await fetch(
    `${process.env.PUBLIC_URL}/api/get-profile-data`, { next: { tags: ['profile'] } }
  );
  const result = await response.json();
  return result;
};

const EditProfileModal = async () => {

  
  const profileData = await getProfileData();
  return (
    <div className=" md:overflow-y-hidden fixed w-full h-full grid place-items-center z-20 bg-modal-bg">
      <div className="md:w-full w-[824px]">
        <Section padding={"p-[32px]"}>
          <div className="w-full grid gap-[40px] text-[24px] font-normal">
            <div className="flex justify-between">
              <h3 className="text-[34px] leading-[36px] semiMd:text-[14px]">
                Персональная информация
              </h3>
              <Link href="/profile?tab=mainInfo&edit=false&team=false">
                <Cross />
              </Link>
            </div>

            <ProfileInfoForm disabled={false} profileData={profileData} />
          </div>
        </Section>
      </div>
    </div>
  );
};

export default EditProfileModal;
