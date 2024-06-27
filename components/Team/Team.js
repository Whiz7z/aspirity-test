import Image from 'next/image';
import React from 'react'
import AnnPhoto from "../../public/images/Ann.png";
import JohnPhoto from "../../public/images/John.png";
import SarahPhoto from "../../public/images/Sarah.png";
import DavidPhoto from "../../public/images/David.png";
import JamesPhoto from "../../public/images/James.png";
import HenryPhoto from "../../public/images/Henry.png";
import CharlesPhoto from "../../public/images/Charles.png";
import JanePhoto from "../../public/images/Jane.png";
import SamPhoto from "../../public/images/Sam.png";
import Link from 'next/link';

const Team = () => {

  
  return (
    <Link href="/profile?tab=mainInfo&edit=false&team=true">
      <div className="flex gap-[32px] w-full items-center">
        <div className="grid grid-cols-7 gap-[8px] w-[244px]">
          <div className="w-[48px] h-[48px] border-2 border-bg-gray rounded-[50%] box-content">
            <Image src={JohnPhoto} alt="John" />
          </div>
          <div className="w-[48px] h-[48px] border-2 border-bg-gray rounded-[50%] box-content">
            <Image src={SarahPhoto} alt="Sarah" />
          </div>
          <div className="w-[48px] h-[48px] border-2 border-bg-gray rounded-[50%] box-content">
            <Image src={DavidPhoto} alt="David" />
          </div>
          <div className="w-[48px] h-[48px] border-2 border-bg-gray rounded-[50%] box-content">
            <Image src={AnnPhoto} alt="Ann" />
          </div>
          <div className="w-[48px] h-[48px] border-2 border-bg-gray rounded-[50%] box-content">
            <Image src={JamesPhoto} alt="James" />
          </div>
          <div className="w-[48px] h-[48px] border-2 border-bg-gray rounded-[50%] box-content">
            <Image src={HenryPhoto} alt="Henry" />
          </div>
          <div className="w-[48px] h-[48px] border-2 border-bg-gray rounded-[50%] box-content">
            <Image src={CharlesPhoto} alt="Charles" />
          </div>
        </div>
        <span className="label-white">+2</span>
      </div>
    </Link>
  );
}

export default Team
