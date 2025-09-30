"use client";
import Features from "@/component/features";
import Main from "@/component/main";

// fonts
import { Questrial } from "next/font/google";

// image
import Image from "next/image";
import brand from "../public/brand.jpeg";

// hooks

// icons
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdHomeFilled } from "react-icons/md";
import { BsCardImage } from "react-icons/bs";
import { TbVideoFilled } from "react-icons/tb";
import { ImMagicWand } from "react-icons/im";
import { FaPaintBrush } from "react-icons/fa";
import { LiaDraftingCompassSolid } from "react-icons/lia";
import { FaFolder } from "react-icons/fa";
import { LiaImage } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { PiSunDimFill } from "react-icons/pi";
import { FiMoon } from "react-icons/fi";

// hooks
import { useState } from "react";

export default function Home() {
  const [mode, setMode] = useState(<PiSunDimFill />);
  const [bgColor, setbgColor] = useState("light-mode");

  const changeModeIcon = () => {
    setMode(bgColor === "light-mode" ? <FiMoon /> : <PiSunDimFill />);
    setbgColor(bgColor === "light-mode" ? "dark-mode" : "light-mode");
  };

  return (
    <body className={bgColor}>
      <header className="pt-[1rem]">
        <nav className="flex justify-between items-center flex-1 mx-[2rem]">
          {/* logo relative link  */}
          <div className="flex items-center gap-[1rem]">
            <Image src={brand} alt="logo" className="w-[1rem] h-[1.2rem]" />
            <div className="flex justify-evenly items-center">
              <div className="bg-gradient-to-tr from-pink-300 via-purple-500 to-blue-300 to-90% w-[1rem] h-[1rem] rounded-full "></div>
              <p className="px-[0.5rem]">bentovoientnimbilo</p>
              <MdOutlineKeyboardArrowDown />
            </div>
          </div>

          <ul className="flex items-center gap-[1rem] bg-[#c2c1c134] border-none rounded-[10px] h-[2.5rem] px-[5px]">
            <li className="hover:bg-white hover:rounded-[5px] hover:border-none p-[0.5rem]">
              <a href="#">
                <MdHomeFilled />
              </a>
            </li>
            <li className="hover:bg-white hover:rounded-[5px] hover:border-none p-[0.5rem]">
              <a href="#">
                <BsCardImage />
              </a>
            </li>
            <li className="hover:bg-white hover:rounded-[5px] hover:border-none p-[0.5rem]">
              <a href="">
                <TbVideoFilled />
              </a>
            </li>
            <li className="hover:bg-white hover:rounded-[5px] hover:border-none p-[0.5rem]">
              <a href="">
                <ImMagicWand />
              </a>
            </li>
            <li className="hover:bg-white hover:rounded-[5px] hover:border-none p-[0.5rem]">
              <a href="">
                <FaPaintBrush />
              </a>
            </li>
            <li className="hover:bg-white hover:rounded-[5px] hover:border-none p-[0.5rem]">
              <a href="">
                <LiaDraftingCompassSolid />
              </a>
            </li>
            <li className="hover:bg-white hover:rounded-[5px] hover:border-none p-[0.5rem]">
              <a href="">
                <FaFolder />
              </a>
            </li>
          </ul>
          <div className="flex  items-center gap-[1rem]">
            <section className="flex items-center gap-[0.5rem] rounded-[9px] bg-[#c2c1c134] p-[0.5rem] cursor-pointer">
              <LiaImage />
              <p className="text-[0.8rem]">Gallery</p>
            </section>
            <section className="flex items-center gap-[0.5rem] rounded-[9px] bg-[#c2c1c134] p-[0.5rem] cursor-pointer">
              <BiSupport />
              <p className="text-[0.8rem]">Support</p>
            </section>
            <section className="rounded-[9px] bg-[#c2c1c134] p-[0.5rem] cursor-pointer">
              <IoIosNotifications />
            </section>
            <button
              onClick={changeModeIcon}
              className="rounded-[9px] bg-[#c2c1c134] p-[0.5rem] cursor-pointer"
            >
              {mode}
            </button>
            <div className="bg-gradient-to-tr from-pink-300 via-purple-500 to-blue-300 to-90% w-[1rem] h-[1rem] rounded-full cursor-pointer"></div>
          </div>
        </nav>
      </header>
      <Main />
      <Features />
    </body>
  );
}
