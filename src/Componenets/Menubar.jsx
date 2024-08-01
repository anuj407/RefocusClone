/* eslint-disable react/prop-types */
// import React from 'react'

import Button from "./Button";

function Menubar({handleMenu}) {
   
  return (
    <div className={`fixed  top-[10%] pt-[5%] bg-black w-[103%] z-20  ${handleMenu === true ? `duration-[1s] translate-x-[-44.05%]`:`duration-[1s] -translate-x-[150%]` } px-5 h-[90vh]  gap-10 flex flex-col `}>
      {["Home", "Work", "About", "News", "Careers"].map((elem, index) => (
        <a
          className="border-b-[1px] border-[#686769] text-[2rem] tablet:text-sm font-regular font-[satoshi] pl-5 text-white flex items-start flex-col gap-1  "
          key={index}
          href="#"
        >
          {elem}
        </a>
      ))}
      <div className=" w-fit mx-auto"> <Button title="Start a Project"/></div> 
    </div>
  );
}
export default Menubar;
