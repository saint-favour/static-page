import Image from "next/image"
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";


export default function Main(){

    return (
      <>
        <main className="w-full flex flex-1 justify-evenly items-center mt-[3rem] pt-[2rem] gap-[2.5rem] pl-[2rem]">
          <div className="background-container flex flex-col justify-between rounded-2xl text-white w-[60rem] h-[23rem]">
            <p className="pl-[2rem] mt-[2rem]">NEW INAGE MODEL</p>
            <h1 className="text-[5rem] self-center">WAN 2.2</h1>
            <div className="flex justify-between  px-[2rem] mb-[1rem]">
              <div className="">
                <h2 className="text-[1.2rem] font-bold">
                  WAN 2.2 Image generation
                </h2>
                <p className="text-[0.7]">
                  Generate complex image with the brand new and powerful <br />
                  WAN 2.2 model. Exceptional prompt adherence and ultra- <br />
                  realistic textures.
                </p>
              </div>
              <button className="bg-white self-end w-[6.5rem] h-[2rem] text-center text-[0.8rem] rounded-[20px] text-black cursor-pointer">
                Try WAN 2.2
              </button>
            </div>
          </div>
          {/* second */}
          <div className="background-image-2 flex flex-col justify-between rounded-tl-2xl rounded-bl-2xl text-white w-[55rem] h-[23rem]">
            <p className="pl-[2rem] mt-[2rem] ">OPEN SOURCE MODEL</p>
            <h1
              className="text-[5rem] text-right 
             overflow-hidden"
            >
              Open Sour
            </h1>
            <div className="pl-[2rem] mb-[1rem]">
              <h2 className="text-[1.2rem] font-bold">FLUX.1Krea</h2>
              <p className="text-[0.7]">
                We're making the weights to our FLUX.1Krea model open-source.
                <br />
                Download and run our model weights, read the technical report,
                or <br />
                generate with it in Krea image.
              </p>
            </div>
          </div>
        </main>
        <section className=" flex justify-end gap-[36rem] mb-[2rem] pb-[2rem]">
          <div className="flex items-center gap-[0.6rem] m-[1rem] cursor-pointer">
            <div className="w-[0.4rem] h-[0.4rem] bg-black rounded-[50%]"></div>
            <div className="w-[0.4rem] h-[0.4rem] bg-[gray] rounded-[50%]"></div>
            <div className="w-[0.4rem] h-[0.4rem] bg-[gray] rounded-[50%]"></div>
            <div className="w-[0.4rem] h-[0.4rem] bg-[gray] rounded-[50%]"></div>
            <div className="w-[0.4rem] h-[0.4rem] bg-[gray] rounded-[50%]"></div>
            <div className="w-[0.4rem] h-[0.4rem] bg-[gray] rounded-[50%]"></div>
            <div className="w-[0.4rem] h-[0.4rem] bg-[gray] rounded-[50%]"></div>
            <div className="w-[0.4rem] h-[0.4rem] bg-[gray] rounded-[50%]"></div>
            <div className="w-[0.4rem] h-[0.4rem] bg-[gray] rounded-[50%]"></div>
          </div>
          {/* prev and next */}
          <div className=" flex  items-center gap-[0.6rem] pr-[3rem]">
            <div className="flex justify-center items-center w-[1.4rem] h-[1.4rem] rounded-[50%] bg-[#80808049] cursor-pointer">
              <MdOutlineArrowBackIos className="w-[0.7rem]" />
            </div>
            <div className="flex justify-center items-center w-[1.4rem] h-[1.4rem] rounded-[50%] bg-[#80808049] cursor-pointer">
              <MdOutlineArrowForwardIos className="w-[0.7rem]" />
            </div>
          </div>
        </section>
      </>
    );
}