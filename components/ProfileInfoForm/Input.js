import React from 'react'

const Input = ({label,  name, register, disabled}) => {
  return (
    <div className="bg-transparent relative">
      <label
        htmlFor="name"
        className="text-input-text text-[12px] px-[4px] bg-bg-gray absolute left-[8px] top-[-8px] z-10
        font-normal"
      >
        {label}
      </label>
      <input
        disabled={disabled}
        readOnly={disabled}
        name={name}
        type="text"
        style={{ backgroundColor: "transparent" }}
        {...register(name)}
        className="h-[40px] w-full bg-transparent rounded-[8px] border border-border-gray outline-none text-input-text text-[14px] py-[8px] px-[14px]
        font-medium"
      />
    </div>
  );
}

export default Input
