"use client";
import React, { useState, useEffect } from "react";
import "./Dropdown.css"; // Assume you have created a CSS file
import smallProfileImg from "../../public/images/smallProfileImg.png";
import Image from "next/image";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [animationState, setAnimationState] = useState("closed");

  useEffect(() => {
    if (open) {
      setAnimationState("entering");
      setTimeout(() => setAnimationState("entered"), 100);
    } else {
      setAnimationState("leaving");
      setTimeout(() => setAnimationState("closed"), 75);
    }
  }, [open]);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex items-center w-full justify-center gap-x-1.5 
          rounded-[18px] bg-transparent px-[16px] py-[6px] 
          text-[20px] font-semibold  shadow-sm  border border-border-gray hover:bg-gray-50"
          id="menu-button"
          aria-expanded={open}
          aria-haspopup="true"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="w-[24px] h-[24px]">
            <Image src={smallProfileImg} alt="profile" />
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
              fill="#E1E3E6"
            />
          </svg>
        </button>
      </div>

      {animationState !== "closed" && (
        <div
          className={`absolute bg-bg-gray text-[12px] right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg border border-border-gray focus:outline-none transition-transform ${animationState}`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
          onClick={() => setOpen(false)}
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2  text-gray-700 transition-all hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              Account settings
            </a>
            <a
              href="#"
              className="block px-4 py-2  text-gray-700 transition-all hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-1"
            >
              Support
            </a>
            <a
              href="#"
              className="block px-4 py-2  text-gray-700 transition-all hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-2"
            >
              License
            </a>
            <form method="POST" action="#" role="none">
              <button
                type="submit"
                className="block w-full px-4 py-2 text-left  text-gray-700 transition-all hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-3"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
