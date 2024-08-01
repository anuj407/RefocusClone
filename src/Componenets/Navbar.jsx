import Button from "./Button";
import { useState } from "react";
import { TfiAlignJustify } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import Menubar from "./Menubar";
function Navbar() {
  const [use,set]= useState(false)
   const handleMenu =()=>{
     set(!use)
   }
  return (
    <div className=" w-full fixed bg-black z-30">
    <div className="px-6 py-6  tablet:pt-6 w-[90%] mx-auto flex items-center justify-between border-b-[1px] border-[#686769] tablet:pb-4 ">
      <div className=" flex items-center">
        <img className="w-[33vw] tablet:w-[7vw]"
          src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
       {screen.width<=720 && <div className=""> <Menubar handleMenu={use} /></div>}
        <div className=" flex flex-row gap-16 ml-16">
          {screen.width>720 && ["Home", "Work", "About", "News", "", "Careers"].map(
                (elem, index) => (
                  <a
                    className=" text-[2rem] tablet:text-[1.1vw] font-regular font-[satoshi] text-white flex items-center gap-1  "
                    key={elem}
                    href="#"
                  >
                    {elem.length === 0 && (
                      <span className="w-[0.10rem] h-[1.1rem] bg-zinc-400"></span>
                    )}{" "}
                    {index === 1 && (
                      <span
                        style={{ boxShadow: "0 0 0.25em #00FF19" }}
                        className="inline-block  bg-[#00FF19]  rounded-full w-[0.32rem] h-[0.32rem]"
                      ></span>
                    )}
                    {elem}
                  </a>
                )
              )}
              
        </div>
      </div>
      <div className="hidden  tablet:block">
        <Button />
      </div>
      { screen.width <=720 && <div className="text-2xl w-[8%] h-[5vh] relative">
        <TfiAlignJustify onClick={()=>handleMenu()} className={`${use === true ?`hidden`:`block`} absolute top-[50%] translate-y-[-50%] `}/>
          <IoClose onClick={()=>handleMenu()} className={`${use === true ? `block` :`hidden`} absolute text-[2.5rem] left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]`}/>
      </div>
      }
    </div>
    </div>
  );
}
export default Navbar;