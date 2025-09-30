import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsCardImage } from "react-icons/bs";
import { TbVideoFilled } from "react-icons/tb";
import { FaPaintBrush } from "react-icons/fa";
import { ImMagicWand } from "react-icons/im";
import { LuMicVocal } from "react-icons/lu";
import { IoIosBody } from "react-icons/io";
import { RiDoorLockBoxFill } from "react-icons/ri";
import { BsFillCreditCardFill } from "react-icons/bs";
import { LiaDraftingCompassSolid } from "react-icons/lia";

export default function Features() {
  return (
    <>
      <div className="flex justify-between items-center px-[2rem]">
        <h3 className=" mt-[1rem] pb-[1rem] font-bold">GENERATE</h3>
        <div className="flex items-end">
          <MdOutlineKeyboardArrowDown className="text-blue-900 text-[1.3rem]" />
          <p className="text-blue-800 pl-[0.2rem]">Show all</p>
        </div>
      </div>
      <footer className="px-[2rem]">
        {/* item1 */}
        <div className="flex items-center gap-[0.4rem]">
          <div className="item-1 flex justify-center items-center w-[2.8rem] h-[3rem]  rounded-[10px] ">
            <BsCardImage className="text-white text-[1.2rem]" />
          </div>
          <div>
            <h5>
              Image{" "}
              <span className="bg-blue-900 px-[0.5rem] text-white text-[0.9rem] font-bold rounded-2xl">
                New
              </span>
            </h5>
            <p className="text-[0.8rem] text-[#808080b4]">
              Generate images with custom <br />
              styles in flux and ideogram.
            </p>
          </div>
          <button className="bg-[#80808031] p-[0.4rem] px-[1.5rem] text-[0.8rem] border-none rounded-[15px] cursor-pointer">
            Open
          </button>
        </div>
        {/* item2 */}
        <div className="flex items-center gap-[0.4rem]">
          <div className="flex justify-center items-center w-[2.8rem] h-[3rem] bg-yellow-500 rounded-[10px] ">
            <TbVideoFilled className="text-white text-[1.2rem]" />
          </div>
          <div>
            <h5>Video </h5>
            <p className="text-[0.8rem] text-[#808080b4]">
              Generate images with custom <br />
              styles in flux and ideogram.
            </p>
          </div>
          <button className="bg-[#80808031] px-[1rem] text-[0.8rem] border-none rounded-[15px] cursor-pointer">
            Open
          </button>
        </div>
        {/* item3 */}
        <div className="flex items-center gap-[0.4rem]">
          <div className="item-3 flex justify-center items-center w-[2.8rem] h-[3rem] rounded-[10px] ">
            <FaPaintBrush className="text-white text-[1.2rem]" />
          </div>
          <div>
            <h5>Realtime </h5>
            <p className="text-[0.8rem] text-[#808080b4]">
              Generate images with custom <br />
              styles in flux and ideogram.
            </p>
          </div>
          <button className="bg-[#80808031] p-[0.4rem] px-[1.5rem] text-[0.8rem] border-none rounded-[15px] cursor-pointer">
            Open
          </button>
        </div>
        {/* item4 */}
        <div className="flex items-center gap-[0.4rem]">
          <div className=" item-4 flex justify-center items-center w-[2.8rem] h-[3rem] rounded-[10px] ">
            <ImMagicWand className="text-white text-[1.2rem]" />
          </div>
          <div>
            <h5>
              Enhancer{" "}
              <span className="bg-blue-900 px-[0.5rem] text-white text-[0.9rem] font-bold rounded-2xl">
                New
              </span>
            </h5>
            <p className="text-[0.8rem] text-[#808080b4]">
              Generate images with custom <br />
              styles in flux and ideogram.
            </p>
          </div>
          <button className="bg-[#80808031] p-[0.4rem] px-[1.5rem] text-[0.8rem] border-none rounded-[15px] cursor-pointer">
            Open
          </button>
        </div>
        {/* item5 */}
        <div className="flex items-center gap-[0.4rem]">
          <div className="item-5 flex justify-center items-center w-[2.8rem] h-[3rem]  rounded-[10px] ">
            <LiaDraftingCompassSolid className="text-white text-[1.2rem]" />
          </div>
          <div>
            <h5>
              Edit{" "}
              <span className="bg-blue-900 px-[0.5rem] text-white text-[0.9rem] font-bold rounded-2xl">
                New
              </span>
            </h5>
            <p className="text-[0.8rem] text-[#808080b4]">
              Generate images with custom <br />
              styles in flux and ideogram.
            </p>
          </div>
          <button className="bg-[#80808031] p-[0.4rem] px-[1.5rem] text-[0.8rem] border-none rounded-[15px] cursor-pointer">
            Open
          </button>
        </div>
        {/* item6 */}
        <div className="flex items-center gap-[0.4rem]">
          <div className="item-6 flex justify-center items-center w-[2.8rem] h-[3rem] rounded-[10px] ">
            <LuMicVocal className="text-white text-[1.2rem]" />
          </div>
          <div>
            <h5>
              Video Lipsync{" "}
              <span className="bg-blue-900 px-[0.5rem] text-white text-[0.9rem] font-bold rounded-2xl">
                New
              </span>
            </h5>
            <p className="text-[0.8rem] text-[#808080b4]">
              Generate images with custom <br />
              styles in flux and ideogram.
            </p>
          </div>
          <button className="bg-[#80808031] p-[0.4rem] px-[1.5rem] text-[0.8rem] border-none rounded-[15px] cursor-pointer">
            Open
          </button>
        </div>
        {/* item7 */}
        <div className="flex items-center gap-[0.4rem]">
          <div className="flex justify-center items-center w-[2.8rem] h-[3rem] bg-black rounded-[10px] ">
            <IoIosBody className="text-white text-[1.2rem]" />
          </div>
          <div>
            <h5>
              Motion Transfer{" "}
              <span className="bg-black px-[0.5rem] text-white text-[0.9rem] font-bold rounded-2xl">
                New
              </span>
            </h5>
            <p className="text-[0.8rem] text-[#808080b4]">
              Generate images with custom <br />
              styles in flux and ideogram.
            </p>
          </div>
          <button className="bg-[#80808031] p-[0.4rem] px-[1.5rem] text-[0.8rem] border-none rounded-[15px] cursor-pointer">
            Open
          </button>
        </div>
        {/* item8 */}
        <div className="flex items-center gap-[0.4rem]">
          <div className="flex justify-center items-center w-[2.8rem] h-[3rem] bg-purple-500 rounded-[10px] cursor-pointer">
            <BsCardImage className="text-white text-[1.2rem]" />
          </div>
          <div>
            <h5>Train </h5>
            <p className="text-[0.8rem] text-[#808080b4]">
              Generate images with custom <br />
              styles in flux and ideogram.
            </p>
          </div>
          <button className="bg-[#80808031] p-[0.4rem] px-[1.5rem] text-[0.8rem] border-none rounded-[15px] cursor-pointer">
            Open
          </button>
        </div>
      </footer>
      <section className="flex justify-between items-center px-[2rem] mt-[3rem]">
        <h3>Gallery</h3>
        <div className="flex justify-evenly gap-[0.6rem] items-center">
          <section className="flex items-center gap-[0.5rem] rounded-2xl bg-[#c2c1c134] p-[0.5rem] cursor-pointer">
            <RiDoorLockBoxFill />
            <p className="text-[0.8rem]">legal</p>
          </section>
          <section className="flex items-center gap-[0.5rem] rounded-2xl bg-[#c2c1c134] p-[0.5rem] cursor-pointer">
            <BsFillCreditCardFill />
            <p className="text-[0.8rem]">Pricing</p>
          </section>
        </div>
      </section>
    </>
  );
}
