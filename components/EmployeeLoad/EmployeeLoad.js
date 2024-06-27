import React from 'react'
import Section from '../Section/Section'
import Link from 'next/link';
import ProfileInfoForm from '../ProfileInfoForm/ProfileInfoForm';
import AnnPhoto from '../../public/images/Ann.png';
import JohnPhoto from '../../public/images/John.png';
import SarahPhoto from '../../public/images/Sarah.png';
import DavidPhoto from '../../public/images/David.png';
import JamesPhoto from '../../public/images/James.png';
import HenryPhoto from '../../public/images/Henry.png';
import CharlesPhoto from '../../public/images/Charles.png';
import JanePhoto from '../../public/images/Jane.png';
import SamPhoto from '../../public/images/Sam.png';
import Image from 'next/image';
import RightArrow from '@/components/svg/RightArrow';
import Team from '../Team/Team';

const EmployeeLoad = () => {
  return (
    <Section
      padding="pt-[30px] pl-[30px] pr-[30px] pb-[30px] semiMd:px-[14px]
    lg:col-span-2"
    >
      <div className="w-full grid small:gap-[32px] gap-[40px] text-[24px] font-normal">
        <div className="flex justify-between items-center self-start">
          <h3 className="text-[24px] semiMd:text-[16px]">
            Загрузка сотрудника
          </h3>
          <span className="text-[14px] text-danger font-semibold">100%</span>
        </div>

        {/* <ProfileInfoForm disabled={true} profileData={profileData} /> */}

        <div className="w-full h-full small:gap-y-[16px] gap-y-[40px] grid small:grid-cols-[1fr] grid-cols-[2fr_3fr] self-start content-between">
          <div className="grid gap-y-[8px]">
            <p className="label-gray">Название проекта</p>
            <p className="label-white">MedPoint 24</p>
          </div>

          <div className="grid gap-y-[8px]">
            <p className="label-gray">Тип проекта</p>
            <p className="label-white">Коммерческий</p>
          </div>

          <div className="grid  gap-y-[8px]">
            <p className="label-gray">Ответственный</p>
            <div className="flex gap-[8px] items-center">
              <div className="w-[48px] h-[48px]">
                <Image src={AnnPhoto} alt="Anna" />
              </div>
              <span className="label-white">Анна Кузнецова</span>
            </div>
          </div>

          <div className="grid gap-y-[8px]">
            <p className="label-gray">Команда</p>
            <Team />
          </div>

          <div className="grid small:col-span-1 col-span-2 gap-y-[8px]">
            <p className="label-gray">Сроки работы</p>
            <div className="label-white text-input-text flex gap-[8px]">
              <span>03 марта 2023</span>
              <RightArrow />
              <span>05 марта 2023</span>
            </div>
          </div>

          <div className="w-full small:col-span-1 col-span-2 gap-y-[8px]">
            <button
              type="submit"
              className="bg-btn-bg font-semibold semiSmall:text-[12px] text-[14px] text-text-white  
            w-full h-[40px] grid place-items-center rounded-[4px] uppercase tracking-wider p-[12px]"
            >
              Посмотреть всю загрузку
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default EmployeeLoad
