import React from 'react'
import Logo from '@/components/svg/Logo'
import Dropdown from '@/components/Dropdown/Dropdown';
import Burger from '@/components/svg/Burger';

const Header = () => {
  return (
    <div className="w-full lg:px-[16px] flex justify-between py-[24px]">
      <Logo />
      <div className="flex gap-[8px]">
        <Dropdown />
        <Burger />
      </div>
    </div>
  );
}

export default Header
