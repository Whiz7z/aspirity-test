import React from "react";
import Section from "../Section/Section";
import Link from "next/link";
import Cross from "@/components/svg/Cross";

import AnnPhoto from "../../public/images/Ann.png";
import JohnPhoto from "../../public/images/John.png";
import SarahPhoto from "../../public/images/Sarah.png";
import DavidPhoto from "../../public/images/David.png";
import JamesPhoto from "../../public/images/James.png";
import HenryPhoto from "../../public/images/Henry.png";
import CharlesPhoto from "../../public/images/Charles.png";
import JanePhoto from "../../public/images/Jane.png";
import SamPhoto from "../../public/images/Sam.png";
import TeamMember from "../TeamMember/TeamMember";

const TEAM = [
  {
    name: "John Smith",
    photo: JohnPhoto,
    position: "Junior UI/UX designer",
  },
  {
    name: "Sarah Brown",
    photo: SarahPhoto,
    position: "Middle Product Design TeamLead",
  },
  {
    name: "David Taylor",
    photo: DavidPhoto,
    position: "Middle Android Developer",
  },
  {
    name: "Ann Williams",
    photo: AnnPhoto,
    position: "Middle Head of Service",
  },
  {
    name: "James Miller",
    photo: JamesPhoto,
    position: "CEO",
  },
  {
    name: "Henry Jones",
    photo: HenryPhoto,
    position: "Middle QA",
  },
  {
    name: "Charles Williams",
    photo: CharlesPhoto,
    position: "Junior Employee Support Manager",
  },
  {
    name: "Jane Miller",
    photo: JanePhoto,
    position: "Middle Sales Manager",
  },
  {
    name: "Sam Clark",
    photo: SamPhoto,
    position: "QA Lead",
  },
];

const TeamModal = () => {
  return (
    <div className="md:overflow-y-hidden fixed w-full h-full grid place-items-center z-20 bg-modal-bg">
      <div className="md:w-full w-[650px]">
        <Section padding={"p-[32px]"}>
          <div className="w-full grid gap-[40px] text-[24px] font-normal">
            <div className="flex justify-between items-center">
              <h3 className="text-[34px] leading-[36px]">Команда</h3>
              <Link href="/profile?tab=mainInfo&edit=false&team=false">
                <Cross />
              </Link>
            </div>

            <div className="grid gap-[16px]">
              {TEAM.map((item, index) => (
                <TeamMember
                  key={index}
                  full_name={item.name}
                  photo={item.photo}
                  position={item.position}
                />
              ))}
            </div>
            {/* <ProfileInfoForm disabled={false} profileData={profileData} /> */}
          </div>
        </Section>
      </div>
    </div>
  );
};

export default TeamModal;
