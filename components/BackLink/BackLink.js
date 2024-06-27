import LeftArrow from '@/components/svg/LeftArrow'
import Link from 'next/link';
import React from 'react'

const BackLink = ({ text, className }) => {
  return (
    <Link href={"/"} className="flex py-[8px] px-[16px] gap-[8px] items-center">
      <LeftArrow />
      <span className={`${className}`}>{text}</span>
    </Link>
  );
};

export default BackLink
