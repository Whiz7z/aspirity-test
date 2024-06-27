import React from 'react'

const Section = ({padding, children}) => {
  return (
    <div
      className={`w-full grid ${
        padding ?? "p-[30px]"
      } bg-bg-gray rounded-[12px]`}
    >
      {children}
    </div>
  );
}

export default Section
