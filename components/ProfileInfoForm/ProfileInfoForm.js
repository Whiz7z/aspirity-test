"use client";
import { useForm } from "react-hook-form";
import Input from "./Input";
import React from "react";
import { useRouter } from "next/navigation";
import { editProfileAction } from "@/app/actions/revalidate";

const ProfileInfoForm = ({ disabled, profileData }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: profileData,
  });

  async function  onSubmit(e) {
    e.preventDefault()
    const data = watch();
    await editProfileAction(data);


  };
  return (
    <>
      <form onSubmit={onSubmit} className="w-full grid grid-cols-1 gap-[24px]">
        <div className="grid semiMd:grid-cols-1 grid-cols-2 gap-[24px]">
          <Input
            name="first_name"
            label="Имя"
            register={register}
            disabled={disabled}
          />
          <Input
            name="second_name"
            label="Фамилия"
            register={register}
            disabled={disabled}
          />
        </div>
        <div className="">
          <Input
            name="surname"
            label="Отчество"
            register={register}
            disabled={disabled}
          />
        </div>
        <div className="grid semiMd:grid-cols-1  grid-cols-2 gap-[24px]">
          <Input
            name="birthday"
            label="Дата рождения"
            register={register}
            disabled={disabled}
          />
          <Input
            name="employment_date"
            label="Дата трудоустройства"
            register={register}
            disabled={disabled}
          />
        </div>
        <div className="grid semiMd:grid-cols-1  grid-cols-2 gap-[24px]">
          <Input
            name="country"
            label="Страна"
            register={register}
            disabled={disabled}
          />
          <Input
            name="city"
            label="Город"
            register={register}
            disabled={disabled}
          />
        </div>
        <div className="grid  semiMd:grid-cols-1 grid-cols-2 gap-[24px]">
          <Input
            name="position"
            label="Должность"
            register={register}
            disabled={disabled}
          />
          <Input
            name="email"
            label="Электронная почта"
            register={register}
            disabled={disabled}
          />
        </div>

        {disabled ? null : (
          <div className="w-full">
            <button
              type="submit"
              className="bg-btn-bg font-semibold text-[14px] text-text-white  
            w-full h-[40px] grid place-items-center rounded-[4px] uppercase
             tracking-wider p-[11px]"
            >
              Сохранить
            </button>
          </div>
        )}
      </form>
    </>
  );
};

export default ProfileInfoForm;
